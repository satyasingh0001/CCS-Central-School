import styles from "./StudentAttendanceCalendar.module.css";

export default function StudentAttendanceCalendar() {
  const data =
    JSON.parse(localStorage.getItem("studentAttendance")) || {};

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return (
    <div className={styles.container}>
      <h1>📅 Student Attendance Calendar</h1>

      {Object.keys(data).length === 0 && (
        <p>No attendance data available</p>
      )}

      {Object.entries(data).map(([className, students]) => (
        <div key={className} className={styles.classBox}>
          <h2>{className}</h2>

          <div className={styles.tableWrapper}>
            <table>
              <thead>
                <tr>
                  <th>Student</th>
                  {[...Array(daysInMonth)].map((_, i) => (
                    <th key={i}>{i + 1}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {Object.entries(students).map(
                  ([student, records]) => (
                    <tr key={student}>
                      <td>{student}</td>

                      {[...Array(daysInMonth)].map((_, day) => {
                        const date = `${year}-${String(
                          month + 1
                        ).padStart(2, "0")}-${String(
                          day + 1
                        ).padStart(2, "0")}`;

                        const status = records[date];

                        return (
                          <td
                            key={day}
                            className={
                              status === "P"
                                ? styles.present
                                : status === "A"
                                ? styles.absent
                                : styles.empty
                            }
                          >
                            {status || "-"}
                          </td>
                        );
                      })}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
