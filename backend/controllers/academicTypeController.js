const AcademicType = require("../models/academicTypeModel");
const asyncHandler = require("express-async-handler");

//This is a function to create/register academic type
const createAcademicType = asyncHandler(async (req, res) => {
  // It takes request from the frontend (req)
  const result = await AcademicType.create({
    AcademicName: req.body.AcademicName,
  });
  console.log(result);
});

module.exports = {
  createAcademicType,
};
