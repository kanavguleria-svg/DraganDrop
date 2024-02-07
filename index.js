const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const testRoutes = require("./routes/testRoutes");
const connectDB = require("./config/db");
const verifyJWT = require("./utils/auth");
const authRoutes = require("./routes/authRoutes");
const dataFlowRoutes = require("./routes/dataFlowRoutes");

const multer = require("multer");
const path = require('path');

const app = express();

// dotenv.config({path:"./config.env"});
dotenv.config();

connectDB();
app.use(cors());
app.use(express.json());
app.use (bodyParser.json ());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static('public/uploads'));
// app.use(express.static(path.join(__dirname, 'public')));

const PORT = 8080;



app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/dataFlow", verifyJWT, dataFlowRoutes);
app.use("/api/test", testRoutes);

// app.get('/',(req,res)=>{
//   res.send("hello");
//   next();
// })



// const uploadDir = path.join(__dirname, 'uploads');
// console.log(uploadDir+" --------------------------------");
// Define a storage configuration for multer
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads"); // Set the destination folder for file uploads
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Use the original file name for the uploaded file
//   }
// });


// const upload = multer({storage:storage});
// app.post("/upload", upload.single('file'), (req, res) => {
//   // File upload was successful
//   // Access the file details using req.file
//   console.log(req.file);

//   // Access other form fields using req.body
//   // console.log("body --------------------");
//   // console.log(req.body);

//   res.sendStatus(200);
// });



app.listen(PORT, () => {
  console.log(`Server Running in  mode on port no ${PORT}`);
});
