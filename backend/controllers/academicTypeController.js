const AcademicType = require("../models/academicTypeModel");
const asyncHandler = require("express-async-handler");

//This is a function to create/register academic type
const createAcademicType = asyncHandler(async (req, res) => {
  // It takes request from the frontend (req)
  const result = await AcademicType.create({
    AcademicName: req.body.AcademicName,
  });
  if (result) {
    res.status(200).json("Your request was successful. Academic type created");
  } else {
    res.status(400).json("Your request was not successful");
  }
});

module.exports = {
  createAcademicType,
};
