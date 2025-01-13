import User from "../models/user.model.js";
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendMail from "../utils/sendMail.js";
import srm from "../utils/srm.js";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();

    sendMail(req.body.username, req.body.email, newUser._id)
    res.status(201).send("User has been created.");
  } catch (err) {
      next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    let user = await User.findOne({ username: req.body.username });
    if(!user) user = await User.findOne({email: req.body.username});

    if(!user.isVerified) return next(createError(404, "Please verify your email"));

    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        domain: "localhost",
      })
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
  }
};

export const verifyEmail = async (req, res, next) => {
  try{
    const {id} = req.body;
    await User.updateOne({_id:id}, { $set: { isVerified: true }});
    res.status(201).send("Email verified");
  }catch(err){
    console.log(err);
    next(err);
  }
}

export const srmail = async (req, res, next) => {
  try{
    let user = await User.findOne({ username: req.body.username });
    if(!user) user = await User.findOne({email: req.body.username});
    if(!user) return next(createError(404, "User does not exist"))

    await srm(user.username, user.email, user._id)
    res.status(201).send("Email sent");
    
  }catch(err){
    console.log(err);
    next(err);
  }
}

export const reset = async (req, res, next) => {
  try{
    const {id, pass} = req.body;
    const hash = bcrypt.hashSync(pass, 5);
    await User.updateOne({_id:id}, { $set: { password: hash }});
    res.status(201).send("Password reset");
  }catch(err){
    console.log(err);
    next(err);
  }
}

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};
