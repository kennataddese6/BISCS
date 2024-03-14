const AcademicType = require("../models/academicTypeModel");
const asyncHandler = require("express-async-handler");

//This is a function to create/register academic type
const createAcademicType = asyncHandler(async (req, res) => {
  // It takes request from the frontend (req)
  let result;
  const AcademicTypes = req.body;
  AcademicTypes &&
    AcademicTypes.map(async (academicType) => {
      result = await AcademicType.create({
        AcademicName: academicType,
      });
    });

  if (result) {
    res.status(200).json("Your request was successful. Academic type created");
  } else {
    res.status(400).json("Your request was not successful");
  }
});
//This is a function to get all academic types
const getAcademicType = asyncHandler(async (req, res) => {
  const result = await AcademicType.find();
  if (result.length) {
    res.status(200).json(result); // This give resposne to the frontend
  } else {
    res.status(400).json("No academic Type found!");
  }
});

module.exports = {
  createAcademicType,
  getAcademicType,
};
