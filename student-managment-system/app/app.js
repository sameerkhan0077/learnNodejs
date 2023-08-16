const express = require("express");
require("../db/model/db-config");
const studentRouter = require("../Router/student-router.js");
const teacherRouter = require("../Router/teacher-router.js");
const app = express();
const PATH = "/api/v1";

app.use(express.json());
module.exports = app;
app.use(`${PATH}/student`, studentRouter);

app.use(`${PATH}/teacher`, teacherRouter);
