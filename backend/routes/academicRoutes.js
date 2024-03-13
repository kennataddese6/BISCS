const express = require("express");
const router = express.Router();

const { createAcademicType } = require("../controllers/academicTypeController");

router.post("/", createAcademicType); // Create a route or opening door to create academic type

module.exports = router;
