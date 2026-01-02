import { useState, useEffect } from "react";
import styles from "./StudentAttendance.module.css";

/* DEMO STUDENT DATA */
const studentsByClass = {
  "Class 10 - A": ["Rahul", "Anita", "Suresh"],
  "Class 9 - B": ["Pooja", "Amit", "Neha"],
};

export default function StudentAttendance() {
  const today = new Date().toISOString().split("T")[0];
  const [selectedClass, setSelectedClass] = useState("Class 10 - A");
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("studentAttendance")) || {};
    setAttendance(saved);
  }, []);

  const markAttendance = (student, status) => {
    const updated = {
      ...attendance,
      [selectedClass]: {
        ...(attendance[selectedClass] || {}),
        [student]: {
          ...(attendance[selectedClass]?.[student] || {}),
          [today]: status,
        },
      },
    };

    setAttendance(updated);
    localStorage.setItem(
      "studentAttendance",
      JSON.stringify(updated)
    );
  };

  return (
    <div className={styles.container}>
      <h1>📝 Student Attendance</h1>

      {/* CLASS SELECT */}
      <select
        value={selectedClass}
        onChange={e => setSelectedClass(e.target.value)}
      >
        {Object.keys(studentsByClass).map(cls => (
          <option key={cls}>{cls}</option>
        ))}
      </select>

      {/* ATTENDANCE TABLE */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Student</th>
            <th>Status</th>
            <th>Mark</th>
          </tr>
        </thead>

        <tbody>
          {studentsByClass[selectedClass].map(student => {
            const status =
              attendance[selectedClass]?.[student]?.[today];

            return (
              <tr key={student}>
                <td>{student}</td>
                <td>
                  {status === "P" && (
                    <span className={styles.present}>Present</span>
                  )}
                  {status === "A" && (
                    <span className={styles.absent}>Absent</span>
                  )}
                  {!status && "Not Marked"}
                </td>
                <td>
                  <button
                    className={styles.presentBtn}
                    onClick={() => markAttendance(student, "P")}
                  >
                    Present
                  </button>
                  <button
                    className={styles.absentBtn}
                    onClick={() => markAttendance(student, "A")}
                  >
                    Absent
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
