// controllers/candidateController.js
// const Candidate = require("../models/Candidate");

// =============================
// ADD NEW CANDIDATE
// =============================
// exports.addCandidate = async (req, res) => {
//   try {
//     const {
//       name,
//       party,
//       age,
//       photo,
//       symbol,
//       biography,
//       promises,
//       constituency,
//       experience,
//     } = req.body;

    // Create and save new candidate
    
// =============================
// GET ALL CANDIDATES
// =============================
// exports.getAllCandidates = async (req, res) => {
//   try {
//     const candidates = await Candidate.find();
//     res.status(200).json(candidates);
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to fetch candidates",
//       error: error.message,
//     });
//   }
// };



const Candidate = require("../models/Candidate");

exports.addCandidate = async (req, res) => {
  try {
    const { name, age, aadhar, phone, address, party } = req.body;

    const candidate = new Candidate({
      name,
      age,
      aadhar,
      phone,
      address,
      party
    });

    await candidate.save();

    res.status(201).json({
      message: "Candidate added successfully",
      candidate
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to add candidate",
      error: error.message
    });
  }
};

