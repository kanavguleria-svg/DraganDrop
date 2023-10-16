const express = require("express");
const getTestController = require("../controllers/getTestController");
const router = express.Router();

router.get('/getTest',getTestController);

module.exports = router;