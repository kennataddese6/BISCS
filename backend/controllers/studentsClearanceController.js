const Clearance = require("../models/clearanceModel");
const Students = require("../models/studentModel");
const StudentsClearance = require("../models/studentsClearanceModel");
const asyncHandler = require("express-async-handler");

const createStudentsClearance = asyncHandler(async (req, res) => {
  const clearances = await Clearance.find();
  const students = await Students.find();

  for (const student of students) {
    for (const clearance of clearances) {
      if (student.EnrolledIn === clearance.AcademicName)
        console.log("Hello I am called", clearance.ClearanceDetail);
      await StudentsClearance.create({
        AcademicName: clearance.AcademicName,
        StudentId: student.StudentId,
        AdminId: student.AdminId,
        Completed: false,
        Started: false,
        Deadline: clearance.Deadline,
        ClearanceDetail: clearance.ClearanceDetail,
      });
    }
  }
});

module.exports = {
  createStudentsClearance,
};
