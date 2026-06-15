const express = require("express");

const router = express.Router();

const upload = require(
  "../middleware/uploadMiddleware"
);

const {
  uploadResume,
  getAllResumes,
  getResumeById,
  updateResume,
  deleteResume,
} = require(
  "../controllers/resumeController"
);


// Upload Resume
router.post(
  "/upload",
  upload.single("resume"),
  uploadResume
);


// Get All Resumes
router.get(
  "/",
  getAllResumes
);


// Get Single Resume
router.get(
  "/:id",
  getResumeById
);


// Update Resume
router.put(
  "/:id",
  upload.single("resume"),
  updateResume
);


// Delete Resume
router.delete(
  "/:id",
  deleteResume
);

module.exports = router;