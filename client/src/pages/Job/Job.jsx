import React, { useState } from "react";
import "./Job.scss";
import { useNavigate } from "react-router-dom";

function Job() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    domain: "",
    subject: "",
    Special: "",
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
    <div className="job">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Post A Job</h1>
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
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
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
        <label htmlFor="">Domain</label>
          <input
            name="domain"
            type="text"
            placeholder="Enter the domain"
            onChange={handleChange}
          />
          <label htmlFor="">Special Requirements</label>
          <input
            name="special"
            type="text"
            placeholder="(if any)"
            onChange={handleChange}
          />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="Provide a brief description.."
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
export default Job;