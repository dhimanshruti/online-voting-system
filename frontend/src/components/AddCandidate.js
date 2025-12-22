import React, { useState } from "react";
import axios from "axios";
import "./AddCandidate.css";

const AddCandidate = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    voter_id: "",
    phone: "",
    party: "",
  });

  const parties = [
    "Bharatiya Janata Party (BJP)",
    "Indian National Congress (INC)",
    "Aam Aadmi Party (AAP)",
    "Shiv Sena",
    "Communist Party of India (CPI)",
    "Nationalist Congress Party (NCP)",
    "DMK",
    "AIADMK",
    "Others",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validations
    if (Number(form.age) < 18) {
      alert("Age must be 18 or above.");
      return;
    }

    const cleanPhone = form.phone.trim();
    if (!/^\d{10}$/.test(cleanPhone)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    if (form.voter_id.length !== 10) {
      alert("Voter ID must be exactly 10 characters.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/candidates", {
        ...form,
        phone: cleanPhone,
        votes: 0
      });

      alert("Candidate added successfully!");
      setForm({ name: "", age: "", voter_id: "", phone: "", party: "" });

      window.location.href = "/vote";
    } catch (error) {
      console.error("Error:", error.response?.data || error);
      alert("Error adding candidate.");
    }
  };

  return (
    <div className="add-candidate-container">

      <div className="form-card animate-card">
        <h2>Add New Candidate</h2>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
            <label>Candidate Name</label>
          </div>

          <div className="input-group">
            <input type="number" name="age" value={form.age} onChange={handleChange} required />
            <label>Age</label>
          </div>

          <div className="input-group">
            <input type="text" name="voter_id" value={form.voter_id} onChange={handleChange} required />
            <label>Voter ID</label>
          </div>

          <div className="input-group">
            <input type="text" name="phone" value={form.phone} onChange={handleChange} required />
            <label>Phone Number</label>
          </div>

          <div className="input-group">
            <select name="party" value={form.party} onChange={handleChange} required>
              <option value="" disabled>Select party</option>
              {parties.map((p, i) => (
                <option key={i} value={p}>{p}</option>
              ))}
            </select>
            <label className="select-label">Party Name</label>
          </div>

          <button type="submit" className="submit-btn">Add Candidate</button>
        </form>
      </div>
    </div>
  );
};

export default AddCandidate;
