const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  age: { 
        type: Number, min: 18, max: 65
   },
  school: {
    type: "String",
    require:false
  },
});

const student = mongoose.model('student',studentSchema,'student');
module.exports = student;
