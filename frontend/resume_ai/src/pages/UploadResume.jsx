import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./UploadResume.css";

const UploadResume = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      <Navbar />

      <div className="upload-page">

        <div className="upload-header">
          <h1>Upload Resume</h1>
          <p>
            Upload your resume to start ATS analysis, skill gap detection,
            and interview preparation.
          </p>
        </div>

        <div className="upload-card">

          <div className="upload-area">

            <div className="upload-icon">
              📄
            </div>

            <h2>Choose Resume File</h2>

            <p>
              Supported formats: PDF, DOC, DOCX
            </p>

            <label className="choose-file-btn">
              Select Resume
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                hidden
                onChange={handleFileChange}
              />
            </label>

          </div>

          {file && (
            <div className="file-preview">

              <div className="file-details">
                <h3>Selected Resume</h3>

                <p>
                  <strong>Name:</strong> {file.name}
                </p>

                <p>
                  <strong>Size:</strong>{" "}
                  {(file.size / 1024).toFixed(2)} KB
                </p>

                <p>
                  <strong>Type:</strong> {file.type}
                </p>
              </div>

            </div>
          )}

          <div className="upload-action">
            <button className="upload-btn">
              Upload Resume
            </button>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default UploadResume;