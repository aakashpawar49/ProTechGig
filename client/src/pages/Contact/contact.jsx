import React, { useState } from "react";
import "./Contact.scss";
import { useNavigate } from "react-router-dom";

function Contact() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  };
  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Contact us</h1>
          <label htmlFor="">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email address"
            onChange={handleChange}
          />
          <label htmlFor="">Subject</label>
          <input
            name="subject"
            type="text"
            placeholder="Short description"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </div>
        <div className="right">
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+91 9898787975"
            onChange={handleChange}
          />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="Drop your suggestions/ queries here.."
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
export default Contact;