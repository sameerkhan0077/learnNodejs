const studentModel = require("../db/model/student");

// getStudentByEmail
async function getStudent(req, res) {
  try {
    const student = await studentModel.find();
    if (student.length === 0) {
      res.status(200).send({ data: "Student not exits" });
    } else {
      res.status(200).send(student);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// getStudentByEmail
async function getStudentByEmail(req, resp) {
  try {
    const findStudent = await studentModel.find({ email: req.params.email });
    resp.status(200).send(findStudent);
  } catch (error) {
    resp.status(500).send(error.message);
  }
}

// createStudent bulk and singal
async function createStudent(req, res) {
  const studentData = req.body;
  if (studentData.length > 0) {
    for (let student of studentData) {
      try {
        const students = new studentModel(student);
        await students.save();
      } catch (error) {
        res.status(500).send(error.message);
      }
    }
    res.status(200).send("Create student bulk");
  } else {
    try {
      const student = new studentModel(studentData);
      await student.save();
      res.status(200).send("Create Student");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

// updateStudent
async function updateStudent(req, res) {
  try {
    const student = await studentModel.updateOne(
      { email: req.params.email },
      { $set: req.body }
    );
    console.log(req.params.email);

    if (student) {
      res.status(202).send("Student updated successfully");
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    console.error("Error updating student:", error);
  }
}

// deleteStudentByEmail
async function deleteStudentByEmail(req, res) {
  try {
    const student = await studentModel.deleteOne({ email: req.params.email });
    console.log(req.params.email);
    if (student.deletedCount === 1) {
      res.status(202).send("Student deleted successfully");
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    console.error("Error deleting student:", error);
  }
}

module.exports = {
  getStudent,
  getStudentByEmail,
  createStudent,
  deleteStudentByEmail,
  updateStudent,
};
