const express = require("express");
const teacherApi = require("../Controller/teacherController.js");
const teacherRouter = express.Router();


teacherRouter.route("")
.get(teacherApi.getAllTeacher)
.post(teacherApi.createTeacher);

teacherRouter.route("/:teachersId")
.get(teacherApi.getTeacherByID)
.post(teacherApi.createteacherBulk)
.delete(teacherApi.deleteTeacherById)
.put(teacherApi.updateTeacherById);

module.exports=teacherRouter