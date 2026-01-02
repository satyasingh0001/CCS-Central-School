const mongoose = require("mongoose");

const StudentAttendanceSchema = new mongoose.Schema({
  className: String,
  student: String,
  date: String,
  status: String,
});

module.exports = mongoose.model("StudentAttendance", StudentAttendanceSchema);
