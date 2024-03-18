const express = require("express");
const router = express.Router();

const {
  createClearanceType,
  getClearanceType,
} = require("../controllers/academicTypeController");

router.post("/", createClearanceType); // Create a route or opening door to create academic type
router.get("/", getClearanceType);

module.exports = router;
