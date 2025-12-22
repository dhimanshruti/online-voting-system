import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Online Voting System</h1>

      <section className="about-section">
        <h2>Introduction</h2>
        <p>
          The Online Voting System is a secure, reliable, and user-friendly platform
          designed to modernize the voting process. By digitizing elections, it
          eliminates long queues, reduces administrative overhead, and minimizes
          human error. This system is accessible from anywhere, enabling citizens
          to participate in elections without geographic or logistical constraints.
          It also provides real-time monitoring, transparency, and instant result
          tabulation, ensuring a fair and democratic voting process for all.
        </p>
      </section>

      <section className="about-section">
        <h2>Key Features</h2>
        <ul>
          <li>User registration and authentication</li>
          <li>Candidate management (add, view)</li>
          <li>Real-time voting</li>
          <li>Vote counting and results visualization with charts</li>
          <li>Secure and tamper-proof system</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Benefits</h2>
        <ul>
          <li>Time-saving and efficient</li>
          <li>Reduces errors in vote counting</li>
          <li>Accessible from anywhere</li>
          <li>Transparent and reliable</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Security Measures</h2>
        <p>
           Security is at the core of our Online Voting System. It incorporates
          advanced encryption techniques to protect sensitive voter data and
          ensure confidentiality. Secure authentication protocols verify voter
          identity, preventing unauthorized access. The system also prevents
          multiple votes by the same user and maintains an immutable audit trail,
          making the election process fully tamper-proof. Additionally, continuous
          monitoring and threat detection mechanisms safeguard against cyber attacks
          or data breaches.
        </p>
      </section>

      <section className="about-section">
        <h2>How it Works</h2>
        <ol>
          <li>Users sign up and log in</li>
          <li>Eligible voters cast their votes for candidates</li>
          <li>Votes are counted automatically</li>
          <li>Results are displayed in charts and tables</li>
        </ol>
      </section>

      <section className="about-section">
        <h2>Conclusion</h2>
        <p>
         The Online Voting System revolutionizes the way elections are conducted
          by combining technology with security, transparency, and accessibility.
          It empowers citizens to exercise their democratic rights easily, reduces
          administrative burden, and ensures accurate, real-time results. Join us
          in embracing a smarter, safer, and more efficient way of voting for a
          stronger democracy.
        </p>
      </section>
    </div>
  );
};

export default About;
