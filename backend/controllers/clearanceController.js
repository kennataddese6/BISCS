const Clearance = require("../models/clearanceModel");
const asyncHandler = require("express-async-handler");

//This is a function to create/register academic type
const createClearanceType = asyncHandler(async (req, res) => {
  // It takes request from the frontend (req)
  let result;
  const AcademicTypes = req.body;

  const newPromise = new Promise((resolve, reject) => {
    AcademicTypes &&
      AcademicTypes.map(async (academicType) => {
        result = await Clearance.create({
          AcademicName: academicType,
        });
        resolve(result);
      });
  });
  newPromise
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json("Your request was not successful", error);
    });
});
//This is a function to get all Clearance types
const getClearanceType = asyncHandler(async (req, res) => {
  const result = await Clearance.find();
  if (result.length) {
    res.status(200).json(result); // This give resposne to the frontend
  } else {
    res.status(400).json("No academic Type found!");
  }
});
const updateClearance = asyncHandler(async (req, res) => {
  console.log(req.body);
});
module.exports = {
  createClearanceType,
  getClearanceType,
  updateClearance,
};
