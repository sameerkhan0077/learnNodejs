const teacherModel = require("../db/model/teacher");

// getTeacher
async function getTeacher(req, res) {
  try {
    const teacher = await teacherModel.find();
    if (teacher.length === 0) {
      res.status(200).send({ data: "teacher not exits" });
    } else {
      res.status(200).send(teacher);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// getTeacherByEmail
async function getTeacherByEmail(req, resp) {
  try {
    const findTeacher = await teacherModel.find({ email: req.params.email });
    resp.status(200).send(findTeacher);
  } catch (error) {
    resp.status(500).send(error.message);
  }
}

// createStudent bulk and singal
async function createTeacher(req, res) {
  const teacherData = req.body;
  if (teacherData.length > 0) {
    for (let teacher of teacherData) {
      try {
        const teachers = new teacherModel(teacher);
        await teachers.save();
      } catch (error) {
        res.status(500).send(error.message);
      }
    }
    res.status(200).send("Create teachers bulk");
  } else {
    try {
      const teacher = new teacherModel(teacherData);
      await teacher.save();
      res.status(200).send("Create teacher");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

// updateTeacher
async function updateTeacher(req, res) {
  try {
    const teacher = await teacherModel.updateOne(
      { email: req.params.email },
      { $set: req.body }
    );

    if (!teacher) {
      res.status(404).send("Teacher not found");
    } else if (teacher) {
      res.status(202).send("Teacher updated successfully");
    }
  } catch (error) {
    console.error("Error updating student:", error);
  }
}

// deleteTeacherByEmail
async function deleteTeacherByEmail(req, res) {
  try {
    const teacher = await teacherModel.deleteOne({ email: req.params.email });
    if (teacher) {
      res.status(202).send("Teacher deleted successfully");
    } else {
      res.status(404).send("Teacher not found");
    }
  } catch (error) {
    console.error("Error deleting teacher:", error);
  }
}

module.exports = {
  getTeacher,
  getTeacherByEmail,
  createTeacher,
  deleteTeacherByEmail,
  updateTeacher,
};
