import React, { useState, useContext } from "react";
import "../App.css";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      // Backend returns { _id, name, email, token }
      const userData = { _id: data._id, name: data.name, email: data.email };
      const token = data.token;

      login(userData, token);
      alert("Registration successful");
      navigate("/");
    } catch (err) {
      console.error("Register error:", err);
      alert("Network error. Check backend.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Enter Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Enter Email" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Create Password" onChange={handleChange} required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
