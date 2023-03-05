const express = require("express");
const router = express.Router();
const studentMarksController = require("../controllers/studentMarksController");

router.get("/", (req, res) => {
  res.send("Hello this is my final project");
});

router.post("/add-student", async (req, res) => {
  studentMarksController.create(req.body, (err, studentResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send({
      response: studentResponse,
    });
  });
});

router.post("/update-student", (req, res) => {
  let data = req.body;
  studentMarksController.findOneAndUpdate(
    { name: req.body.name.toLowerCase() },
    data,
    (err, updatedStudent) => {
      if (err) {
        return res.send({ response: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send({
        response: updatedStudent,
      });
    }
  );
});

router.get("/find-student", (req, res) => {
  studentMarksController.find(
    { name: req.body.name.toLowerCase() },
    (err, studentDetails) => {
      if (err) {
        return res.send({ response: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.json({
        response: studentDetails,
      });
    }
  );
});

router.delete("/delete-student", (req, res) => {
  studentMarksController.findOneAndRemove(
    { name: req.body.name.toLowerCase() },
    (err, deletedStudent) => {
      if (err) {
        return res.send({ response: err });
      }
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");

      res.send({
        response: deletedStudent,
      });
    }
  );
});

router.get("/find-all-students", (req, res) => {
  studentMarksController.find({}, (err, allStudentDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({
      response: allStudentDetails,
    });
  });
});

module.exports = router;
