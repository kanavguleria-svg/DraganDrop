const express = require('express');
const multer = require("multer");
const path = require('path');


const uploadDir = path.join(__dirname, 'uploads');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads"); // Set the destination folder for file uploads
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name for the uploaded file
  }
});


// const singleUpload = upload.single('file');

const upload = multer({storage:storage});

const {createTempoController, getTempoController ,downloadTempoController,getFileData} = require("../controllers/dataFlowControllers");

const router = express.Router();

router.post('/upload',upload.single('file'),createTempoController);
router.get("/allFiles",getTempoController);
router.get("/download",downloadTempoController);
router.get("/getFileText",getFileData);

module.exports = router;