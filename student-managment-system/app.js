const express = require("express");
const fs = require("fs");
const app =  express();
const PATH = "/api/v1";


app.use(express.json());
  app.listen("4000","localhost",()=>{
    console.log("started")
  })

const {
    getAllStudent,
    createStudent,
    createStudentBulk,
    getStudentById,
    updateStudentById,
    deleteStudentById,
    updateBulkStudentsByID
} = require("./student.js")


const {
    getAllTeacher,
    createTeacher,
    createteacherBulk,
    getTeacherByID,
    updateTeacherById,
    deleteTeacherById,
    updateBulkteacherById
} = require("./teacher.js")







app.get("/batche",getAllStudent)
app.get("/teacher", getAllTeacher);
app.post('/teacher',createTeacher);
app.post("/student",createStudent)    
app.post('/allstudent',createStudentBulk)
app.post('/allTeacher',createteacherBulk);
app.get(`${PATH}/student/:id`,getStudentById);
app.get(`${PATH}/teacher/:id`,getTeacherByID);
app.put(`${PATH}/student/:id`, updateStudentById);
app.put(`${PATH}/teacher/:id`, updateTeacherById );
app.delete(`${PATH}/student/:id`, deleteStudentById);
app.delete(`${PATH}/teacher/:id`,deleteTeacherById);
app.put(`${PATH}/students/bulk`,updateBulkStudentsByID)
app.put(`${PATH}/teachers/bulk`,updateBulkteacherById)