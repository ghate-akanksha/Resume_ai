const express = require("express");
const router = express.Router();

const { analyzeATS } = require("../controllers/atsController");

// ✅ ATS Score API
router.post("/score", analyzeATS);

module.exports = router;