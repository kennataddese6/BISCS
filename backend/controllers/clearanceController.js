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
  const clearanceUpdates = req.body; // Assuming req.body is the array you provided

  try {
    for (const clearanceUpdate of clearanceUpdates) {
      const { clearanceItemFor, clearanceItem } = clearanceUpdate;

      // Find the Clearance document by its AcademicName
      let clearance = await Clearance.findOne({
        AcademicName: clearanceItemFor,
      });

      if (!clearance) {
        console.log(`Clearance for ${clearanceItemFor} not found.`);
        continue; // Move to the next clearance update
      }

      // Create a new ClearanceDetail object
      const clearanceDetails = clearanceItem.map((item) => ({
        ClearanceFieldName: item,
        ClearanceOrder: "",
        Approved: false,
        PreRequest: false,
        PreRequestName: "",
        StudentAppeal: false,
      }));

      // Update the ClearanceDetail field with the new data
      clearance.ClearanceDetail = clearanceDetails;

      // Save the updated document
      await clearance.save();
    }
    const allClearance = await Clearance.find();
    res.status(200).json(allClearance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});
module.exports = {
  createClearanceType,
  getClearanceType,
  updateClearance,
};