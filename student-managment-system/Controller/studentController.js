const fs = require("fs");
let students = JSON.parse(fs.readFileSync("./data/students.json", 'utf-8'));


let getAllStudent = (req, res) => {
  let response = {
    status: "success",
    data: {
      students
    }
  }
  res.status(200).json(response)
};


const getStudentById = (req, res) => {
  console.log(req.params);
  let id = +req.params.id;
  let student = students.filter((student) => {
    return student.id === id;
  });
  if (!student || student.length === 0) {
    res.status(404).send({
      status: "failure",
      message: "Student not found with the given id",
      data: {},
    });
  }
  res.status(200).send({
    status: "success",
    data: {
      student: student[0],
    },
  });
  fs.writeFileSync("students.json", JSON.stringify(students), "utf-8");
};



const createStudent = (req, res) => {
  const body = req.body;
  const id = students[students.length - 1].id + 1;
  let obj = Object.assign({ id: id }, body);
  students.push(obj);

  fs.writeFileSync("students.json", JSON.stringify(students), "utf-8")
  res.send("Created");
};


const createStudentBulk = (req, res) => {
  const studentsBody = req.body;
  for (let student of studentsBody) {
    const id = students[students.length - 1].id + 1;
    let obj = Object.assign({ id: id }, student);
    students.push(obj);
  }
  fs.writeFileSync("students.json", JSON.stringify(students), "utf-8");
  res.send("Created");
};


const updateStudentById = (req, res) => {
  let id = +req.params.id;
  let index = students.findIndex((student) => {
    return student.id === id;
  });
  //Note - find a way to update only truthy values
  students[index] = Object.assign({}, req.body);
  fs.writeFileSync("students.json", JSON.stringify(students), "utf-8");
  res.send("Updated");
};



const deleteStudentById = (req, res) => {
  let id = +req.params.id;
  let index = students.findIndex((student) => {
    return student.id === id;
  });
  students.splice(index, 1);
  fs.writeFileSync("students.json", JSON.stringify(students), "utf-8");
  res.send("Deleted");
};


const updateBulkStudentsByID = (req, res) => {
  let body = req.body;
  for (let value of body) {
    console.log(value)
    let id = value.id;
    let index = students.findIndex((student) => {
      return student.id === id;
    });
    students[index] = value;

  }
  fs.writeFileSync("students.json", JSON.stringify(students), "utf-8")
  res.send("done")
}


module.exports = {
  getAllStudent, createStudent,
  createStudentBulk, getStudentById, updateStudentById,
  deleteStudentById, updateBulkStudentsByID

}