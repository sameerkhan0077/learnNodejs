const express = require("express");
const studentApi = require("../Controller/studentController.js");
const studentRouter = express.Router();

studentRouter.route("")
.get(studentApi.getAllStudent)
.post(studentApi.createStudent);

studentRouter.route("/:studentId")
.get(studentApi.getStudentById)
.post(studentApi.createStudentBulk)
.delete(studentApi.deleteStudentById)
.put(studentApi.updateStudentById)
.put(studentApi.updateBulkStudentsByID);

module.exports = studentRouter