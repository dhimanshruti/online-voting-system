const express = require("express");
const router = express.Router();
const Candidate = require("../models/Candidate");

// Cast Vote (Only one vote allowed per candidate)
router.post("/:id/vote", async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);

    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    // ❗ Restrict candidate to only 1 vote total
    if (candidate.votes >= 1) {
      return res.status(400).json({ message: "This candidate already received a vote!" });
    }

    // First and only vote allowed
    candidate.votes += 1;
    await candidate.save();

    res.json({ message: "Vote added successfully!", candidate });

  } catch (error) {
    console.error("Error voting:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
