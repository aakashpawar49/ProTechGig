import React, { useState } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Spinner from "../../components/Spinner";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = await upload(file).catch((err)=>{
      enqueueSnackbar('An error occured. Please try again later!', { variant: 'error' });
      setLoading(false)
    });

    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      setLoading(false);
      enqueueSnackbar('Please verify your account through the email sent to you', { variant: 'info' });
      // Account created successfully
      navigate("/")
    } catch (err) {
      console.log(err);
      setLoading(false);
      // enqueueSnackbar('Please fill all the details correctly', { variant: 'error' });
      enqueueSnackbar(err.response.data, { variant: 'error' });
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Username"
            required
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            required
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" required onChange={handleChange} />
          <label htmlFor="">Profile Picture</label>
          <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">Country</label>
          <input
            name="country"
            type="text"
            placeholder="India"
            required
            onChange={handleChange}
          />
          <button type="submit">{loading ? <Spinner /> : 'Register'}</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;
