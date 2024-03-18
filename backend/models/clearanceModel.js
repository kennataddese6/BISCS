const mongoose = require("mongoose"); //This is used to define the database schema

const ClearanceDetail = new mongoose.Schema({
  ClearanceFieldName: {
    type: String,
  },
  ClearanceOrder: {
    type: String,
  },
  Approved: {
    type: Boolean,
    default: false,
  },
  PreRequest: {
    type: Boolean,
    default: false,
  },
  PreRequestName: {
    type: String,
  },
  StudentAppeal: {
    type: Boolean,
    default: false,
  },
});

const ClearanceSchema = mongoose.Schema({
  //We are defining a schema for adademic type
  AcademicName: {
    type: String,
  },
  ClearanceName: {
    type: String,
  },
  StudentId: {
    type: String,
  },
  AdminId: {
    type: String,
  },
  Completed: {
    type: Boolean,
    default: false,
  },
  Started: {
    type: Boolean,
    default: false,
  },
  Deadline: {
    type: Date,
  },
  ClearanceDetail: {
    type: [ClearanceDetail],
  },
});

module.exports = mongoose.model("Clearance", ClearanceSchema);
