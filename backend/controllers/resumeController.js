const fs = require("fs");
const pdfParse = require("pdf-parse");

const Resume = require("../models/Resume");
const extractSkills = require("../utils/skillExtractor");


// Upload Resume
const uploadResume = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a resume",
      });
    }

    const dataBuffer =
      fs.readFileSync(req.file.path);

    const pdfData =
      await pdfParse(dataBuffer);

    const extractedText =
      pdfData.text;

    const skills =
      extractSkills(extractedText);

    const resume =
      await Resume.create({

        originalName:
          req.file.originalname,

        storedName:
          req.file.filename,

        filePath:
          req.file.path,

        size:
          req.file.size,

        extractedText,

        skills,
      });

    res.status(201).json({
      success: true,
      message:
        "Resume uploaded successfully",
      resume,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// Get All Resumes
const getAllResumes = async (req, res) => {
  try {

    const resumes =
      await Resume.find()
      .sort({ createdAt: -1 });

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

    const resume =
      await Resume.findById(
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

    const resume =
      await Resume.findById(
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
        message: "Please upload a resume",
      });
    }

    if (
      resume.filePath &&
      fs.existsSync(
        resume.filePath
      )
    ) {
      fs.unlinkSync(
        resume.filePath
      );
    }

    const dataBuffer =
      fs.readFileSync(
        req.file.path
      );

    const pdfData =
      await pdfParse(
        dataBuffer
      );

    const extractedText =
      pdfData.text;

    const skills =
      extractSkills(
        extractedText
      );

    resume.originalName =
      req.file.originalname;

    resume.storedName =
      req.file.filename;

    resume.filePath =
      req.file.path;

    resume.size =
      req.file.size;

    resume.extractedText =
      extractedText;

    resume.skills =
      skills;

    await resume.save();

    res.status(200).json({
      success: true,
      message:
        "Resume updated successfully",
      resume,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// Delete Resume
const deleteResume = async (req, res) => {
  try {

    const resume =
      await Resume.findById(
        req.params.id
      );

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    if (
      resume.filePath &&
      fs.existsSync(
        resume.filePath
      )
    ) {
      fs.unlinkSync(
        resume.filePath
      );
    }

    await resume.deleteOne();

    res.status(200).json({
      success: true,
      message:
        "Resume deleted successfully",
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