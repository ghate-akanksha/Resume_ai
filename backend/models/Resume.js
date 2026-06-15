const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    originalName: {
      type: String,
      required: true,
    },

    storedName: {
      type: String,
      required: true,
    },

    filePath: {
      type: String,
      required: true,
    },

    size: {
      type: Number,
      required: true,
    },

    uploadedAt: {
      type: Date,
      default: Date.now,
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