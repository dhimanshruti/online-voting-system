import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isAdmin = true;
  const isLoggedIn = false;

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={styles.navbar}>
      {/* Left Section */}
      <div style={styles.left}>
        <img
          src="https://img.freepik.com/free-vector/vote-india-general-election-background-with-tricolor-voters-finger_1017-49861.jpg?w=740&q=80"
          alt="Logo"
          style={styles.logo}
        />
        <span style={styles.logoText}>Online Voting</span>
      </div>

      {/* Desktop Menu */}
      <div style={{ ...styles.navLinks, ...(menuOpen ? styles.showMenu : {}) }}>
        <Link to="/" style={{ ...styles.link, ...(isActive("/") ? styles.activeLink : {}) }}>
          Home
        </Link>

        {isAdmin && (
          <Link
            to="/add"
            style={{ ...styles.link, ...(isActive("/add") ? styles.activeLink : {}) }}
          >
            Add Candidate
          </Link>
        )}

        <Link
          to="/list"
          style={{ ...styles.link, ...(isActive("/list") ? styles.activeLink : {}) }}
        >
          Candidate List
        </Link>

        <Link
          to="/vote"
          style={{ ...styles.link, ...(isActive("/vote") ? styles.activeLink : {}) }}
        >
          Vote Now
        </Link>

        <Link
          to="/results"
          style={{ ...styles.link, ...(isActive("/results") ? styles.activeLink : {}) }}
        >
          Results
        </Link>

        <Link
          to="/about"
          style={{ ...styles.link, ...(isActive("/about") ? styles.activeLink : {}) }}
        >
          About
        </Link>

        {/* Mobile Auth Buttons */}
        {menuOpen && (
          <div style={styles.mobileAuth}>
            {!isLoggedIn ? (
              <>
                <Link to="/login" style={styles.authButton}>Login</Link>
                <Link to="/signup" style={styles.authButton}>Sign Up</Link>
              </>
            ) : (
              <button style={styles.logoutButton}>Logout</button>
            )}
          </div>
        )}
      </div>

      {/* Desktop Auth Buttons */}
      <div style={styles.authButtons}>
        {!isLoggedIn ? (
          <>
            <Link to="/login" style={styles.authButton}>Login</Link>
            <Link to="/signup" style={styles.authButton}>Sign Up</Link>
          </>
        ) : (
          <button style={styles.logoutButton}>Logout</button>
        )}
      </div>

      {/* Hamburger Menu */}
      <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <div style={{ ...styles.bar, ...(menuOpen ? styles.bar1 : {}) }}></div>
        <div style={{ ...styles.bar, ...(menuOpen ? styles.bar2 : {}) }}></div>
        <div style={{ ...styles.bar, ...(menuOpen ? styles.bar3 : {}) }}></div>
      </div>
    </nav>
  );
};

/* ---------- CSS Styles ---------- */
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: "10px 25px",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logo: {
    width: "55px",
    height: "55px",
    borderRadius: "8px",
    objectFit: "cover",
  },

  logoText: {
    fontWeight: "bold",
    fontSize: "20px",
  },

  navLinks: {
    display: "flex",
    gap: "25px",
    transition: "0.4s",
  },

  link: {
    color: "black",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    position: "relative",
  },

  activeLink: {
    textDecoration: "underline",
    fontWeight: "700",
  },

  authButtons: {
    display: "flex",
    gap: "12px",
  },

  authButton: {
    padding: "8px 18px",
    borderRadius: "8px",
    border: "2px solid #007bff",
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "600",
    background: "white",
  },

  logoutButton: {
    padding: "8px 18px",
    borderRadius: "8px",
    background: "#ff4d4d",
    color: "white",
    border: "none",
    fontWeight: "600",
  },

  /* Mobile */
  hamburger: {
    display: "none",
    cursor: "pointer",
  },

  bar: {
    width: "28px",
    height: "3px",
    backgroundColor: "black",
    margin: "5px",
    transition: "0.4s",
  },

  bar1: { transform: "rotate(-45deg) translate(-6px, 6px)" },
  bar2: { opacity: 0 },
  bar3: { transform: "rotate(45deg) translate(-6px, -6px)" },

  showMenu: {
    position: "absolute",
    top: "70px",
    right: "10px",
    background: "white",
    padding: "20px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    borderRadius: "12px",
  },

  mobileAuth: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "10px",
  },

  /* RESPONSIVE */
  "@media (max-width: 850px)": {
    navLinks: {
      display: "none",
    },
    hamburger: {
      display: "block",
    },
    authButtons: {
      display: "none",
    },
  },
};

export default Navbar;
