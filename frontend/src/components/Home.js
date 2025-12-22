import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <div className="hero-section">

        <div className="hero-video-wrapper">
          <video
            src="https://media.istockphoto.com/id/2209758928/video/india-map-made-of-people-symbol-on-white-background.mp4?s=mp4-640x640-is&k=20&c=AGeysutHuwjqFVLI-_T0x-rhkvdmwS46U7Izwims6J4="
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          />
        </div>

        <div className="hero-text">
          <h1>Online Voting System</h1>
          <p>
            Cast your vote securely and effortlessly anytime, anywhere.
            A modern digital voting system designed for simplicity and transparency.
          </p>

          <Link to="/add">
            <button className="hero-btn">Get Started</button>
          </Link>
        </div>

      </div>

      {/* INFO SECTION */}
      <div className="info-section">

        <div className="info-left">
          <img
            src="https://thumbs.dreamstime.com/b/woman-putting-vote-ballot-paper-voting-box-election-campaign-concept-flat-illustratio-style-illustration-332027482.jpg"
            alt="Secure Voting Illustration"
          />
        </div>

        <div className="info-right">
          <h2 className="info-title">
            Voting made simple while still being fully
            <span className="highlight-black"> Secure and Reliable</span>
          </h2>

          <ul className="info-list">
            <li>
              <strong>🟦 Trustworthy</strong>
              <p>We manage the voter roll securely for online ballots.</p>
            </li>

            <li>
              <strong>🛡 Safe and Secure</strong>
              <p>Industry-leading internet voting ensures anonymity & safety.</p>
            </li>

            <li>
              <strong>📊 Result Analysis</strong>
              <p>Results delivered in a professional report at the end.</p>
            </li>
          </ul>
        </div>

      </div>

      {/* HOW TO VOTE TITLE */}
      <div className="howto-section">
        <h2 className="howto-title">How to Vote on This Platform</h2>
      </div>

      {/* 3 BEAUTIFUL STEPS */}
      <div className="steps-container">

        <div className="step-box animate-step" style={{ animationDelay: "0.2s" }}>
          <div className="step-icon bounce">1️⃣</div>
          <h3>Add Candidate</h3>
          <p>Go to the <b>Add Candidate</b> page and enter your candidate details.</p>
        </div>

        <div className="step-box animate-step" style={{ animationDelay: "0.4s" }}>
          <div className="step-icon bounce">2️⃣</div>
          <h3>Open Voting Page</h3>
          <p>The system automatically opens the <b>Vote Page</b> once a candidate is added.</p>
        </div>

        <div className="step-box animate-step" style={{ animationDelay: "0.6s" }}>
          <div className="step-icon bounce">3️⃣</div>
          <h3>Cast Your Vote</h3>
          <p>Click the <b>Vote</b> button next to the candidate’s name to submit your vote.</p>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Online Voting System. All rights reserved.</p>
        <p>Contact: support@onlinevotingsystem.com</p>
      </footer>

    </div>
  );
};

export default Home;
