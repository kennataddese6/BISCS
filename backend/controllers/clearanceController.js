const Clearance = require("../models/clearanceModel");
const asyncHandler = require("express-async-handler");

//This is a function to create/register academic type
const createClearanceType = asyncHandler(async (req, res) => {
  try {
    const AcademicTypes = req.body;

    const promises = AcademicTypes.map(async (academicType) => {
      const clearanceExist = await Clearance.findOne({
        AcademicName: academicType,
      });
      if (clearanceExist) {
        console.log("Here is the error", clearanceExist.AcademicName);
        throw new Error(`${academicType} already exists.`);
      }
      return Clearance.create({ AcademicName: academicType });
    });

    const results = await Promise.all(promises);
    res.status(200).json(results);
  } catch (error) {
    console.log("Error thrown", error.message);
    res.status(400).json({
      message: error.message,
      error: error.message,
    });
  }
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
  const clearanceUpdates = req.body;

  try {
    for (const clearanceUpdate of clearanceUpdates) {
      const { clearancefor, clearance } = clearanceUpdate;

      // Find the Clearance document by its AcademicName
      let ClearanceData = await Clearance.findOne({
        AcademicName: clearancefor,
      });

      if (!ClearanceData) {
        console.log(`Clearance for ${clearancefor} not found.`);
        continue; // Move to the next Clearance update
      }

      // Create a new ClearanceDetail object
      const clearanceDetails = clearance.map((item) => ({
        ClearanceFieldName: item,
        ClearanceOrder: "",
        Approved: false,
        PreRequest: false,
        PreRequestName: "",
        StudentAppeal: false,
      }));

      // Update the ClearanceDetail field with the new data
      ClearanceData.ClearanceDetail = clearanceDetails;

      // Save the updated document
      await ClearanceData.save();
    }
    const allClearance = await Clearance.find();
    res.status(200).json(allClearance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});
const defineClearance = asyncHandler(async (req, res) => {
  console.log(req.body);
});
module.exports = {
  createClearanceType,
  getClearanceType,
  updateClearance,
  defineClearance,
};
