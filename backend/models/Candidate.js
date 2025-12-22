const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18 },
  voter_id: { type: String, required: true, trim: true, minlength: 10, maxlength: 10 },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^\d{10}$/.test(v),
      message: "Phone number must be exactly 10 digits"
    }
  },
  party: { type: String, required: true, trim: true },
  votes: { type: Number, default: 0 }
}, { timestamps: true });   // ⭐ Added

module.exports = mongoose.model("Candidate", candidateSchema);
