const Resume = require("../models/Resume");
const calculateATS = require("../utils/calculateATS");

const analyzeATS = async (req, res) => {
  try {
    const { resumeId, jobDescription } = req.body;

    if (!resumeId || !jobDescription) {
      return res.status(400).json({
        message: "resumeId and jobDescription required",
      });
    }

    const resume = await Resume.findById(resumeId);

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    const resumeSkills = resume.skills || [];

    // Simple skill extraction from JD (temporary logic)
    const jobSkills = jobDescription
      .toLowerCase()
      .split(/[\s,.-]+/)
      .filter((word) => word.length > 2);

    const result = calculateATS(resumeSkills, jobSkills);

    return res.json({
      success: true,
      ...result,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { analyzeATS };