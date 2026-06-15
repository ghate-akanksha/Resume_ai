import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="dashboard-container">

        <div className="hero-section">
          <h1>ResumeAI Dashboard</h1>
          <p>
            AI-powered resume analysis and placement preparation platform
          </p>
        </div>

        <div className="dashboard-grid">

          <div className="dashboard-card upload">
            <div className="card-top"></div>

            <h3>Upload Resume</h3>

            <p>
              Upload and manage resume versions for AI analysis.
            </p>

            <button onClick={() => navigate("/upload-resume")}>
              Upload Resume
            </button>
          </div>

          <div className="dashboard-card analysis">
            <div className="card-top"></div>

            <h3>Resume Analysis</h3>

            <p>
              Analyze ATS compatibility and resume quality.
            </p>

            <button>
              Launch Module
            </button>
          </div>

          <div className="dashboard-card skill">
            <div className="card-top"></div>

            <h3>Skill Gap Analysis</h3>

            <p>
              Compare current skills with target job requirements.
            </p>

            <button>
              Launch Module
            </button>
          </div>

          <div className="dashboard-card ai">
            <div className="card-top"></div>

            <h3>AI Suggestions</h3>

            <p>
              Get intelligent recommendations to improve your resume.
            </p>

            <button>
              Launch Module
            </button>
          </div>

          <div className="dashboard-card interview">
            <div className="card-top"></div>

            <h3>Interview Preparation</h3>

            <p>
              Generate technical and HR interview questions.
            </p>

            <button>
              Launch Module
            </button>
          </div>

          <div className="dashboard-card project">
            <div className="card-top"></div>

            <h3>Project Review</h3>

            <p>
              Evaluate projects, GitHub repositories and deployment quality.
            </p>

            <button>
              Launch Module
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;