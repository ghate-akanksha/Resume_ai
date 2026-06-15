import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        © 2026 ResumeAI. All Rights Reserved.
      </div>

      <div className="footer-center">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>

      <div className="footer-right">
        AI-Powered Resume Analyzer
      </div>
    </footer>
  );
};

export default Footer;