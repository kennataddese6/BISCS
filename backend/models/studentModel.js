const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  StudentId: {
    type: String,
  },
  Password: {
    type: String,
  },
  EnrolledIn: {
    type: String,
  },
  Department: {
    type: String,
  },
  Block: {
    type: String,
  },
  RoomNo: {
    type: String,
  },
});

module.exports = mongoose.model("Students", studentSchema);
