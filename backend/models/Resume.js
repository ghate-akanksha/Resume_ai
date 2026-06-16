const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    originalName: String,
    storedName: String,
    filePath: String,
    size: Number,

    extractedText: {
      type: String,
      default: "",
    },
     skills: {
      type: [String],
      default: [],
    },
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Resume",
  resumeSchema
);