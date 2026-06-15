import React, { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./UploadResume.css";

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [uploadedResume, setUploadedResume] = useState(null);

  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [updating, setUpdating] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a resume first");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setUploading(true);

      const response = await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData
      );

      setUploadedResume(response.data.resume);

      alert(response.data.message);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Upload Failed"
      );

    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async () => {
    if (!uploadedResume) return;

    try {
      setDeleting(true);

      const response = await axios.delete(
        `http://localhost:5000/api/resume/${uploadedResume._id}`
      );

      alert(response.data.message);

      setUploadedResume(null);
      setFile(null);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Delete Failed"
      );

    } finally {
      setDeleting(false);
    }
  };

  const handleUpdate = async (e) => {
    const newFile = e.target.files[0];

    if (!newFile || !uploadedResume) return;

    const formData = new FormData();

    formData.append("resume", newFile);

    try {

      setUpdating(true);

      const response = await axios.put(
        `http://localhost:5000/api/resume/${uploadedResume._id}`,
        formData
      );

      setUploadedResume(response.data.resume);
      setFile(newFile);

      alert(response.data.message);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Update Failed"
      );

    } finally {

      setUpdating(false);

    }
  };

  const handleRemoveSelection = () => {
    setFile(null);
  };

  return (
    <>
      <Navbar />

      <div className="upload-page">

        <div className="upload-header">
          <h1>Resume Management</h1>
          <p>
            Upload, update and manage your resume for ATS analysis.
          </p>
        </div>

        <div className="upload-card">

          <div className="upload-area">

            <div className="upload-icon">
              📄
            </div>

            <h2>Select Resume</h2>

            <p>
              Supported Formats: PDF, DOC, DOCX
            </p>

            {!uploadedResume && (
              <label className="choose-file-btn">
                Choose Resume

                <input
                  type="file"
                  hidden
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
              </label>
            )}

          </div>

          {file && (

            <div className="resume-card">

              <div className="resume-status">

                {uploadedResume ? (
                  <span className="success-badge">
                    Uploaded Successfully
                  </span>
                ) : (
                  <span className="pending-badge">
                    Ready To Upload
                  </span>
                )}

              </div>

              <h3>{file.name}</h3>

              <div className="resume-info">

                <p>
                  <strong>Size:</strong>{" "}
                  {(file.size / 1024).toFixed(2)} KB
                </p>

                <p>
                  <strong>Type:</strong>{" "}
                  {file.type}
                </p>

              </div>

              {!uploadedResume ? (

                <div className="button-group">

                  <button
                    className="secondary-btn"
                    onClick={handleRemoveSelection}
                  >
                    Remove
                  </button>

                  <button
                    className="primary-btn"
                    onClick={handleUpload}
                    disabled={uploading}
                  >
                    {uploading
                      ? "Uploading..."
                      : "Upload Resume"}
                  </button>

                </div>

              ) : (

                <div className="button-group">

                  <label className="update-btn">

                    {updating
                      ? "Updating..."
                      : "Update Resume"}

                    <input
                      type="file"
                      hidden
                      accept=".pdf,.doc,.docx"
                      onChange={handleUpdate}
                    />

                  </label>

                  <button
                    className="delete-btn"
                    onClick={handleDelete}
                    disabled={deleting}
                  >
                    {deleting
                      ? "Deleting..."
                      : "Delete Resume"}
                  </button>

                </div>

              )}

            </div>

          )}

        </div>

      </div>

      <Footer />
    </>
  );
};

export default UploadResume;