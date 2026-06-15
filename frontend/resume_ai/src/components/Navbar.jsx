import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">
        ResumeAI
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/analysis">Analysis</Link>
        </li>

        <li>
          <Link to="/skillgap">Skill Gap</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>

      <div className="navbar-buttons">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;