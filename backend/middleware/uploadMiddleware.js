const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/resumes");
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /pdf|doc|docx/;

  const extName = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );

  if (extName) {
    return cb(null, true);
  }

  cb(new Error("Only PDF, DOC and DOCX files are allowed"));
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;