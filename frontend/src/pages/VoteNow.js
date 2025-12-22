import React, { useEffect, useState } from "react";
import axios from "axios";
import "./VoteNow.css";

const VoteNow = () => {
  const [candidates, setCandidates] = useState([]);
  const [latestCandidateId, setLatestCandidateId] = useState(null);

  // Fetch all candidates
  const fetchCandidates = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/elections");

      // ⭐ Find the most recent (latest created) candidate
      const latest = data.reduce((a, b) =>
        new Date(a.createdAt) > new Date(b.createdAt) ? a : b
      );

      setLatestCandidateId(latest?._id);

      // ⭐ Do NOT sort (UI should remain original)
      setCandidates(data);

    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  // Handle vote
  const handleVote = async (candidateId) => {
    try {
      await axios.post(`http://localhost:5000/api/vote/${candidateId}/vote`);
      alert("Vote submitted successfully!");
      fetchCandidates();
    } catch (error) {
      alert(error.response?.data?.message || "Error submitting vote");
    }
  };

  return (
    <div className="vote-container">
      <h1>Vote Now</h1>

      <div className="candidate-list">
        {candidates.map((candidate) => (
          <div
            className={`candidate-card ${
              candidate._id === latestCandidateId ? "highlight" : ""
            }`}
            key={candidate._id}
          >
            <h2>{candidate.name}</h2>
            <p>Party: {candidate.party}</p>
            <p>Votes: {candidate.votes}</p>

            <button
              className="vote-btn"
              onClick={() => handleVote(candidate._id)}
            >
              Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoteNow;
