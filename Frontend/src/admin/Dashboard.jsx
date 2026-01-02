import AttendanceCharts from "./AttendanceCharts";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const attendance = JSON.parse(localStorage.getItem("attendance")) || {};

  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();

  // Get only current month data
  const getMonthData = (records = {}) =>
    Object.entries(records).filter(([date]) => {
      const d = new Date(date);
      return d.getMonth() === month && d.getFullYear() === year;
    });

  return (
    <div>
      <h1>📊 Admin Dashboard</h1>

      {/* ===== MONTHLY ATTENDANCE TABLE ===== */}
      <h2 style={{ marginTop: "20px" }}>
        Teacher Attendance – This Month
      </h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Teacher</th>
            <th>Present Days</th>
            <th>Attendance Record</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(attendance).length === 0 && (
            <tr>
              <td colSpan="3">No attendance data available</td>
            </tr>
          )}

          {Object.keys(attendance).map(teacher => {
            const monthData = getMonthData(attendance[teacher]);
            const presentDays = monthData.filter(
              ([, status]) => status === "P"
            ).length;

            return (
              <tr key={teacher}>
                <td>{teacher}</td>
                <td>{presentDays}</td>
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
          })}
        </tbody>
      </table>

      {/* ===== ATTENDANCE ANALYTICS ===== */}
      <AttendanceCharts />
    </div>
  );
}
