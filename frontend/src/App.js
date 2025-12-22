import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddCandidate from "./components/AddCandidate";
import CandidateList from "./components/CandidateList";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Result from "./components/Result";
import About from "./components/About";
import VoteNow from "./pages/VoteNow";   // ✅ Correct import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddCandidate />} />
        <Route path="/list" element={<CandidateList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/results" element={<Result />} />
        <Route path="/about" element={<About />} />
        <Route path="/vote" element={<VoteNow />} />  {/* Vote page */}
      </Routes>
    </Router>
  );
}

export default App;
