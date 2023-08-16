const express = require("express");
const teacherApi = require("../Controller/teacherController.js");
const teacherRouter = express.Router();

teacherRouter
  .route("")
  .get(teacherApi.getTeacher)
  .post(teacherApi.createTeacher);

teacherRouter
  .route("/:email")
  .get(teacherApi.getTeacherByEmail)
  .delete(teacherApi.deleteTeacherByEmail)
  .put(teacherApi.updateTeacher);

module.exports = teacherRouter;
