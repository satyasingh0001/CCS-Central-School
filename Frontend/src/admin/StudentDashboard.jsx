import styles from "./StudentDashboard.module.css";

export default function StudentDashboard() {
  const data =
    JSON.parse(localStorage.getItem("studentAttendance")) || {};

  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();

  const getMonthData = records =>
    Object.entries(records || {}).filter(([date]) => {
      const d = new Date(date);
      return d.getMonth() === month && d.getFullYear() === year;
    });

  return (
    <div>
      <h1>🎓 Student Attendance Dashboard</h1>

      {Object.keys(data).length === 0 && (
        <p>No student attendance data available</p>
      )}

      {Object.entries(data).map(([className, students]) => (
        <div key={className} className={styles.classBox}>
          <h2>{className}</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Student</th>
                <th>Present Days</th>
                <th>Attendance Record</th>
              </tr>
            </thead>

            <tbody>
              {Object.entries(students).map(
                ([student, records]) => {
                  const monthData = getMonthData(records);
                  const presentCount = monthData.filter(
                    ([, status]) => status === "P"
                  ).length;

                  return (
                    <tr key={student}>
                      <td>{student}</td>
                      <td>{presentCount}</td>
                      <td>
                        {monthData.map(([date, status]) => (
                          <span
                            key={date}
                            className={
                              status === "P"
                                ? styles.present
                                : styles.absent
                            }
                          >
                            {new Date(date).getDate()}
                          </span>
                        ))}
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
