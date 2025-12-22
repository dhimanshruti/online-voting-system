const express = require('express');
const router = express.Router();
const Candidate = require('../models/Candidate');
const Vote = require('../models/Vote'); // <-- added to handle votes

// ADD Candidate
router.post('/', async (req, res) => {
  try {
    let { name, age, voter_id, phone, party } = req.body;

    // Trim fields
    name = name?.trim();
    voter_id = voter_id?.trim();
    phone = phone?.trim();
    party = party?.trim();

    // Validations
    if (!name || !age || !voter_id || !phone || !party) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (Number(age) < 18) {
      return res.status(400).json({ message: "Age must be at least 18" });
    }

    if (!/^\d{10}$/.test(phone)) {
      return res.status(400).json({ message: "Phone number must be exactly 10 digits" });
    }

    if (voter_id.length !== 10) {
      return res.status(400).json({ message: "Voter ID must be exactly 10 characters" });
    }

    // Save candidate
    const candidate = new Candidate({ name, age, voter_id, phone, party });
    await candidate.save();

    res.status(201).json({
      message: "Candidate added successfully",
      candidate
    });

  } catch (error) {
    console.error("ADD CANDIDATE ERROR:", error.message);
    res.status(500).json({
      message: "Failed to add candidate",
      error: error.message
    });
  }
});

// GET all candidates
router.get('/', async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: "Error fetching candidates", error: error.message });
  }
});

// DELETE candidate
router.delete('/:id', async (req, res) => {
  try {
    const candidate = await Candidate.findByIdAndDelete(req.params.id);

    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    // Delete all votes associated with this candidate
    await Vote.deleteMany({ candidateId: candidate._id });

    res.json({ message: "Candidate and associated votes deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error deleting candidate", error: error.message });
  }
});

module.exports = router;
