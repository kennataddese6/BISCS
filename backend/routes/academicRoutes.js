const express = require("express");
const router = express.Router();

const {
  createAcademicType,
  getAcademicType,
} = require("../controllers/academicTypeController");

router.post("/", createAcademicType); // Create a route or opening door to create academic type
router.get("/", getAcademicType);

module.exports = router;
