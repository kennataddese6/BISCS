const mongoose = require("mongoose"); //This is used to define the database schema

const academicTypeSchema = mongoose.Schema({   //We are defining a schema for adademic type
  AcademicName: {                               // We are adding an attribute academic name which is string
    type: String,
    require: [true, "Please add an Academic name"],
  },
});

module.exports = mongoose.model("AcademicType",academicTypeSchema)
