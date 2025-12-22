import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CandidateList.css";

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);

  const fetchCandidates = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/candidates");
      setCandidates(res.data);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  const voteCandidate = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/votes/${id}`);
      alert("Vote cast successfully!");
      fetchCandidates();
    } catch (error) {
      alert("Error voting");
    }
  };

  const deleteCandidate = async (id) => {
    if (!window.confirm("Are you sure you want to delete this candidate?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/candidates/${id}`);
      alert("Candidate deleted!");
      fetchCandidates();
    } catch (error) {
      console.error(error);
      alert("Error deleting candidate");
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <div className="candidate-list-container">
      <h2 className="title">Candidate List</h2>

      <div className="candidate-grid">
        {candidates.map((c) => (
          <div key={c._id} className="candidate-card">
            <h3>{c.name}</h3>
            <p className="party">{c.party}</p>
            <p><strong>Age:</strong> {c.age}</p>
            <p><strong>Phone:</strong> {c.phone}</p>
            <p><strong>Voter_Id:</strong> {c.voter_id}</p>


          

            <button onClick={() => voteCandidate(c._id)} className="vote-btn">
              Vote
            </button>

            <button onClick={() => deleteCandidate(c._id)} className="delete-btn">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateList;
