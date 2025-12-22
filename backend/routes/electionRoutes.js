const express = require('express');
const router = express.Router();
const Candidate = require('../models/Candidate');

// ✅ Add a new candidate
router.post('/add', async (req, res) => {
  try {
    const { name, party } = req.body;

    if (!name || !party) {
      return res.status(400).json({ message: 'Name and party are required' });
    }

    const candidate = new Candidate({ name, party });
    await candidate.save();

    res.status(201).json({
      message: 'Candidate added successfully',
      candidate
    });
  } catch (error) {
    console.error('Error adding candidate:', error.message);
    res.status(500).json({ message: 'Error adding candidate', error: error.message });
  }
});

// ✅ Get all candidates
router.get('/', async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
  } catch (error) {
    console.error('Error fetching candidates:', error.message);
    res.status(500).json({ message: 'Error fetching candidates', error: error.message });
  }
});

module.exports = router;
