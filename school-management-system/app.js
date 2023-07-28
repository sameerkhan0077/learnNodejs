// ======= 1 get all teacher ========
const express = require("express");
const fs = require("fs");
const path = require("path");
const app =  express();
app.use(express.json());
let students =JSON.parse(fs.readFileSync("students.json",'utf-8'));
let  teachers=JSON.parse(fs.readFileSync("teacher.json","utf-8"));
let batches = JSON.parse(fs.readFileSync("batche.json",'utf-8'));
  app.listen("4000","localhost",()=>{
    console.log("started")
  })
  const PATH = "/api/v1";


// app.listen(4000,"localhost",()=>{
//     console.log("server started")
// });

// let getAllTeacher =(req,res)=>{
//     let response ={
//         status:"success",
//         data:{
//             teacher,
//         }
//     }
//     res.status(200).json(response)
// }



//=========== 2get All batches ==========
// let getAllbatche=(req, res) => {
//         let response = {
//             status: "success",
//             data: {
//                 batche
//             }
//         }
//         res.status(200).json(response)
//     };
// app.listen(5000,"localhost",()=>{
//     console.log("server started")
// })


//============ 3create student=======

// const express = require("express");
// const fs = require("fs");
// const app =  express();
// app.use(express.json());
// let studentData=JSON.parse(fs.readFileSync("students.json",'utf-8'));


// const createStudent = (req, res) => {
//     const body = req.body;
//     const id = studentData[studentData.length - 1].id + 1;
//     let obj = Object.assign({ id: id },body);
//     studentData.push(obj);
    
//     fs.writeFileSync("students.json", JSON.stringify(studentData), "utf-8")
//     res.send("Created");
//   };
//   app.listen("4000","localhost",()=>{
//     console.log("started")
//   })

 


// ============ 4create reateStudentBulk ============

// const express = require('express');
// const fs = require('fs')
// const app = express();
// app.use(express.json());

// let allstudents = JSON.parse(fs.readFileSync('students.json','utf-8'));
// const createStudentBulk = (req, res) => {
//     const studentsBody = req.body;
//     for (let student of studentsBody) {
//       const id = allstudents[allstudents.length - 1].id + 1;
//       let obj = Object.assign({ id: id }, student);
//       allstudents.push(obj);
//     }
    //     fs.writeFileSync("students.json", JSON.stringify(allstudents), "utf-8");
    //     res.send("Created");
//   };

// app.listen('7860','localhost',()=>{
//     console.log("runing")
// })



// ============5create  teacherBulk============


//  const express = require('express');
//  const fs = require('fs')
//  const app = express();
//  app.use(express.json());

//  let allTeacher = JSON.parse(fs.readFileSync("teacher.json",'utf-8'));

//  let createteacherBulk = (req,res)=>{
//     let teacherbody = req.body
//     for(teachers of teacherbody){
//         let id = allTeacher[allTeacher.length-1].id +1;
//         let  obj = Object.assign({id:id},teachers)
//         allTeacher.push(obj)

//     }
//     fs.writeFileSync("teacher.json",JSON.stringify(allTeacher),'utf-8');
//     res.send("createing")
//  }

//  app.listen('7860','localhost',()=>{
//     console.log('run')
//  })




//  =====================6create batchbulk===

//  const express = require('express');
//  const fs = require('fs')
//  const app = express();
//  app.use(express.json());

//  let allbatche = JSON.parse(fs.readFileSync("batche.json",'utf-8'));
//  let createallBatche=(req,res)=>{
//     let batcheBody = req.body;
//     for(let batchs of batcheBody){
//         let id = allbatche[allbatche.length-1].id +1;
//         let obj =Object.assign({id:id},batchs)
//         allbatche.push(obj)

//     } 
//     fs.writeFileSync('batche.json',JSON.stringify(allbatche),'utf-8');
//     res.send("datarun")

//  }
 
//   app.listen('7860','localhost',()=>{
//     console.log('run')
//   })



// ====================get studentBy id================

//  const { create } = require('domain');
// const express = require('express');
//  const fs = require('fs')
//  const app = express();
// //  const PATH = "/api/v1";
//  app.use(express.json());


// let  students =JSON.parse(fs.readFileSync("students.json","utf-8"));
// const getStudentById = (req, res) => {
//     console.log(req.params);
//     let id = +req.params.id;
//     let student = students.filter((student) => {
//       return student.id === id;
//     });
//     if (!student || student.length === 0) {
//       res.status(404).send({
//         status: "failure",
//         message: "Student not found with the given id",
//         data: {},
//       });
//     }
//     res.status(200).send({
//       status: "success",
//       data: {
//         student: student[0],
//       },
//     });
//     fs.writeFileSync("students.json", JSON.stringify(students), "utf-8");
//   };

//    app.listen('7860','localhost',()=>{
//      console.log('run')
//   })

// =================get teacherbyID========================

// let teachers =JSON.parse(fs.readFileSync("teacher.json",'utf-8'));
// const getTeacherByID = (req,res)=>{
//     let  id=  +req.params.id;
//     let  teacher = teachers.filter((teacher)=>{
//        return teacher.id === id
//     })
//     if(!teacher|| teacher.length==0){
//         res.status(404).send({
//             status:"not found",
//             data:{}
//         })
//     }
//     res.status(200).send({
//         status:"success",
//         data:{
//             teacher
//         }
//     })
// };

//     app.listen('7860','localhost',()=>{
//       console.log('run')
//    })

// // =====================upDateStudentByID===============================
// let students =JSON.parse(fs.readFileSync("students.json",'utf-8'));

// const updateStudentById = (req, res) => {
//     let id = +req.params.id;
//     let index = students.findIndex((student) => {
//       return student.id === id;
//     });
//     //Note - find a way to update only truthy values
//     students[index] = Object.assign({}, req.body);
//     fs.writeFileSync("students.json", JSON.stringify(students), "utf-8");
//     res.send("Updated");
//   };

//   app.listen('7860','localhost',()=>{
//     console.log('run')
//  })


 // =====================upDateteacherByID===============================
// let teachers = JSON.parse(fs.readFileSync("teacher.json","utf-8"))

// let updateTeacherById =(req,res)=>{
//     let id = +req.params.id;
//     let index=teachers.findIndex((teacher)=>{
//         return teacher.id===id
//     });
//     teachers[index]=Object.assign({},req.body)
//     fs.writeFileSync("teacher.json", JSON.stringify(teachers), "utf-8");
//  res.send("Updated");
    
// }

//   app.listen('7860','localhost',()=>{
//     console.log('run')
//  })

// ============================createTeacher=========
// const express = require('express');
//  const fs = require('fs')
//  const app = express();
//   const PATH = "/api/v1";
//  app.use(express.json());
// let teacherData=JSON.parse(fs.readFileSync("teacher.json",'utf-8'));


// const createTeacher = (req, res) => {
//     const body = req.body;
//     const id = teacherData[teacherData.length - 1].id + 1;
//     console.log(id)
//     let obj = Object.assign({id:id},body);
//     teacherData.push(obj);
//     res.send("Created");
//     fs.writeFileSync("teacher.json", JSON.stringify(teacherData), "utf-8");
//   };
//   app.listen("4000","localhost",()=>{
//     console.log("started")
//   })
//   app.post("/teacher",createTeacher)

// ==================================================

// const deleteStudentById = (req, res) => {
//   let id = +req.params.id;
//   let index = students.findIndex((student) => {
//     return student.id === id;
//   });
//   students.splice(index, 1);
//   fs.writeFileSync("students.json", JSON.stringify(students), "utf-8");
//   res.send("Deleted");
// };
// ================================================

// const  deleteTeacherById =(req,res)=>{
//     const id = +req.params.id
//     let index =  teachers.findIndex((teacher)=>{
//         return teacher.id ===id
//     })
//     teachers.splice(index,1)
//     fs.writeFileSync("teacher.json",JSON.stringify(teachers),'utf-8');
//       res.send("Deleted");
    
// }
// ===================update bulk student data ============================
// const updateBulkStudentsByID=(req,res)=>{
//     let body=req.body;
//     for(let value of body){
//         console.log(value)
//      let id = value.id;
//      let index=students.findIndex((student)=>{
//        return student.id===id;
//      });
//      students[index]=value;
    
//     }
//     fs.writeFileSync("students.json",JSON.stringify(students),"utf-8")
//     res.send("done")
// }

// app.put("/student/bulk",updateBulkStudentsByID);

// =================update bulk teacherdata ==============
// const  updateBulkteacherById =(req,res)=>{
//     let body = req.body;
//     for(let teacher of body){
//         let  id =  teacher.id
//         let index = teachers.findIndex((teacher)=>{
//             return teacher.id === id
//         })
//         teachers[index]= teacher
//     }
//     fs.writeFileSync("teacher.json",JSON.stringify(teachers),'utf-8');
//     res.send("done")
// }

// app.put("/teachers/bulk",updateBulkteacherById)










// app.get("/teacher", getAllTeacher);
// app.get("/batche",getAllbatche)
// app.post("/student",createStudent)    
// app.post('/allstudent',createStudentBulk)
// app.post('/allbatche',createallBatche);
// app.post('/allTeacher',createteacherBulk);
//  app.get(`${path}/student/:id`,getStudentById);
//  app.get(`${path}/teacher/:id`,getTeacherByID);
//  app.put(`${path}/student/:id`, updateStudentById);
//  app.put(`${path}/teacher/:id`, updateTeacherById );
// app.delete(`${PATH}/student/:id`, deleteStudentById);
// app.delete(`${PATH}/teacher/:id`,deleteTeacherById);