const fs = require("fs");
const Resume = require("../models/Resume");


// Upload Resume
const uploadResume = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a resume",
      });
    }

    const resume = await Resume.create({
      originalName: req.file.originalname,
      storedName: req.file.filename,
      filePath: req.file.path,
      size: req.file.size,
    });

    res.status(201).json({
      success: true,
      message: "Resume uploaded successfully",
      resume,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// Get All Resumes
const getAllResumes = async (req, res) => {
  try {

    const resumes = await Resume.find()
      .sort({ uploadedAt: -1 });

    res.status(200).json({
      success: true,
      count: resumes.length,
      resumes,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// Get Single Resume
const getResumeById = async (req, res) => {
  try {

    const resume = await Resume.findById(
      req.params.id
    );

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    res.status(200).json({
      success: true,
      resume,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// Update Resume
const updateResume = async (req, res) => {
  try {

    const resume = await Resume.findById(
      req.params.id
    );

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please select a new resume",
      });
    }

    if (fs.existsSync(resume.filePath)) {
      fs.unlinkSync(resume.filePath);
    }

    resume.originalName =
      req.file.originalname;

    resume.storedName =
      req.file.filename;

    resume.filePath =
      req.file.path;

    resume.size =
      req.file.size;

    await resume.save();

    res.status(200).json({
      success: true,
      message: "Resume updated successfully",
      resume,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// Delete Resume
const deleteResume = async (req, res) => {
  try {

    const resume = await Resume.findById(
      req.params.id
    );

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    if (fs.existsSync(resume.filePath)) {
      fs.unlinkSync(resume.filePath);
    }

    await resume.deleteOne();

    res.status(200).json({
      success: true,
      message: "Resume deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  uploadResume,
  getAllResumes,
  getResumeById,
  updateResume,
  deleteResume,
};