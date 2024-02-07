const express = require("express");
const {getTest,createStudentController,getAllStudentController,getOneStudentController} = require("../controllers/getTestController");
const router = express.Router();
// console.log(getTestController);
router.get("/getTest",getTest);
router.post("/createStudent",createStudentController);
router.get('/getAllStudent',getAllStudentController);
router.get('/getOneStudent',getOneStudentController);
module.exports = router;