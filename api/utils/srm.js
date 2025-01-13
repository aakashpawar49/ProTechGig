import nodemailer from 'nodemailer'

const srm = (username, email, id) => {
    try{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "protechgig@gmail.com",
            pass: "jeufxarynybuvdco",
        },
    });

    const info = transporter.sendMail({
        from: 'protechgig@gmail.com',
        to: email,
        subject: "For Password Reset",
        html: '<p>Hello ' + username + ', Welcome to ProTechGig.</p><br><br>Please click here to <a href="http://localhost:5173/reset?id='+id+'"> Reset </a> your password. </p>',
    });

    console.log("email send successfully");

    // res.end("email send successfully");
    }catch(err){
        console.log(err)
        next(createError(400, "An error occured while sending email. Please try later!"))
    }
};


export default srm;