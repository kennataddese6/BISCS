const Clearance = require("../models/clearanceModel");
const Students = require("../models/studentModel");
const StudentsClearance = require("../models/studentsClearanceModel");
const asyncHandler = require("express-async-handler");

const createStudentsClearance = asyncHandler(async (req, res) => {
  const clearances = await Clearance.find();
  const students = await Students.find();
  try {
    for (const student of students) {
      for (const clearance of clearances) {
        if (student.EnrolledIn === clearance.AcademicName)
          await StudentsClearance.create({
            AcademicName: clearance.AcademicName,
            StudentId: student.StudentId,
            AdminId: student.AdminId,
            Deadline: clearance.Deadline,
            ClearanceDetail: clearance.ClearanceDetail,
          });
        continue;
      }
    }
    const allStudentClearances = await StudentsClearance.find();
    res.status(200).json(allStudentClearances);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = {
  createStudentsClearance,
};
