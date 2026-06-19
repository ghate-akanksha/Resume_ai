import React, { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./JobDescription.css";

function JobDescription() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [atsResult, setAtsResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const resumeId = localStorage.getItem("resumeId");

  const handleSubmit = async () => {
    if (!resumeId) return alert("Please upload resume first");
    if (!description) return alert("Please enter job description");

    try {
      setLoading(true);

      const response = await axios.post(
  "http://localhost:5000/api/ats/score",
  {
    resumeId,
    jobDescription: description,
  }
);

      setAtsResult(response.data);
    } catch (error) {
      alert(error.response?.data?.message || "ATS calculation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="job-container">
        <div className="job-card">

          <h1 className="title">ATS Job Analyzer</h1>

          <input
            className="input-box"
            type="text"
            placeholder="Enter Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="textarea-box"
            placeholder="Paste Job Description here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Get ATS Score"}
          </button>

          {atsResult && (
            <div className="result-box">
              <h2>ATS Score: {atsResult.score}</h2>

              <div className="result-grid">
                <div>
                  <h4>Matched Skills</h4>
                  <p>{atsResult.matchedSkills?.join(", ")}</p>
                </div>

                <div>
                  <h4>Missing Skills</h4>
                  <p>{atsResult.missingSkills?.join(", ")}</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default JobDescription;