import { useState, useEffect } from "react";
import { apiFetch } from "../api/api";

export default function TeacherAttendance() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    apiFetch("/teacher-attendance")
      .then(setTeachers)
      .catch(console.error);
  }, []);

  const markAttendance = async (teacher, status) => {
    await apiFetch("/teacher-attendance", {
      method: "POST",
      body: JSON.stringify({
        teacher,
        date: new Date().toISOString().split("T")[0],
        status,
      }),
    });

    alert("Attendance saved");
  };

  return (
    <div>
      <h2>Teacher Attendance</h2>

      {teachers.map(t => (
        <div key={t.teacher}>
          {t.teacher}
          <button onClick={() => markAttendance(t.teacher, "P")}>
            Present
          </button>
          <button onClick={() => markAttendance(t.teacher, "A")}>
            Absent
          </button>
        </div>
      ))}
    </div>
  );
}
