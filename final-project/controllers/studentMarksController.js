const BaseController = require("./baseController");
const StudentMarksModel = require("../models/studentMarksModel");
class StudentMarks extends BaseController {
  constructor() {
    super(StudentMarksModel, StudentMarks);
  }
}
module.exports = new StudentMarks();
