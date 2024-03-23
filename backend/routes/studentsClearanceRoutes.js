const express = require("express");
const router = express.Router();

const { createStudentsClearance } = require("../controllers/studentsClearanceController");

router.post("/", createStudentsClearance);

module.exports = router;
