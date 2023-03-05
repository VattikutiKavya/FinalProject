var mongoose = require("mongoose");

//schema
var studentMarksSchema = mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  unit1: {
    type: Number,
    required: false,
    default: 0,
  },
  unit2: {
    type: Number,
    required: false,
    default: 0,
  },
  unit3: {
    type: Number,
    required: false,
    default: 0,
  },
  unit4: {
    type: Number,
    required: false,
    default: 0,
  },
  unit5: {
    type: Number,
    required: false,
    default: 0,
  },
});

const StudentMarks = mongoose.model("student marks", studentMarksSchema);
module.exports = StudentMarks;
