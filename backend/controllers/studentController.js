const Students = require("../models/studentModel");
const asyncHandler = require("express-async-handler");

const createStudent = asyncHandler(async (req, res) => {
  const students = Students.create(req.body);
  if (students) {
    res.status(200).json(students);
  } else {
    res.status(400).json("Something went wrong");
  }
});
module.exports = {
  createStudent,
};
