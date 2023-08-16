const express = require("express");
const studentApi = require("../Controller/studentController.js");
const studentRouter = express.Router();

studentRouter
  .route("")
  .get(studentApi.getStudent)
  .post(studentApi.createStudent);

studentRouter
  .route("/:email")
  .get(studentApi.getStudentByEmail)
  .delete(studentApi.deleteStudentByEmail)
  .put(studentApi.updateStudent);

module.exports = studentRouter;
