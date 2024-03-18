const express = require("express");
const router = express.Router();

const {
  createClearanceType,
  getClearanceType,
  updateClearance,
} = require("../controllers/clearanceController");

router.post("/", createClearanceType); // Create a route or opening door to create academic type
router.get("/", getClearanceType);
router.put("/", updateClearance);

module.exports = router;
