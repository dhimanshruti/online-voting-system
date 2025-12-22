const express = require("express"); 
const router = express.Router();
const Candidate = require("../models/Candidate");

// GET results
router.get("/", async (req, res) => {
  try {
    const candidates = await Candidate.find();

    if (!candidates || candidates.length === 0) {
      return res.json({ totalVotes: 0, parties: [], winner: "No votes yet" });
    }

    // Group votes by party
    const partyVotes = {};
    candidates.forEach(candidate => {
      if (partyVotes[candidate.party]) {
        partyVotes[candidate.party] += candidate.votes;
      } else {
        partyVotes[candidate.party] = candidate.votes;
      }
    });

    // List parties
    const parties = Object.keys(partyVotes).map(party => ({
      party,
      votes: partyVotes[party],
      percentage: 0
    }));

    // Find winner
    const winnerParty = parties.reduce(
      (prev, current) => (current.votes > prev.votes ? current : prev),
      { votes: -1 }
    );

    // Total Votes = Winner Votes Only
    const totalVotes = winnerParty.votes;

    // Recalculate percentages
    parties.forEach(p => {
      p.percentage = totalVotes > 0 
        ? ((p.votes / totalVotes) * 100).toFixed(2)
        : 0;
    });

    res.json({
      totalVotes,  // winner's votes ONLY
      parties,
      winner: winnerParty.votes > 0 ? winnerParty.party : "No votes yet"
    });

  } catch (err) {
    console.error("Error in result route:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
