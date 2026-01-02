const mongoose = require("mongoose");

const TeacherAttendanceSchema = new mongoose.Schema({
  teacher: String,
  date: String,
  status: String,
});

module.exports = mongoose.model("TeacherAttendance", TeacherAttendanceSchema);
