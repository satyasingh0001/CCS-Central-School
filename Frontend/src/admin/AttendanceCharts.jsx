import styles from "./AttendanceCharts.module.css";

export default function AttendanceCharts() {
  const attendance = JSON.parse(localStorage.getItem("attendance")) || {};

  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();

  let totalPresent = 0;
  let totalAbsent = 0;

  const teacherStats = Object.entries(attendance).map(
    ([teacher, records]) => {
      let present = 0;

      Object.entries(records).forEach(([date, status]) => {
        const d = new Date(date);
        if (d.getMonth() === month && d.getFullYear() === year) {
          if (status === "P") {
            present++;
            totalPresent++;
          } else if (status === "A") {
            totalAbsent++;
          }
        }
      });

      return { teacher, present };
    }
  );

  const total = totalPresent + totalAbsent;
  const presentPercent = total ? (totalPresent / total) * 100 : 0;
  const absentPercent = total ? (totalAbsent / total) * 100 : 0;

  return (
    <div className={styles.container}>
      <h2>📊 Attendance Analytics (This Month)</h2>

      {/* BAR CHART */}
      <div className={styles.barChart}>
        {teacherStats.map(t => (
          <div key={t.teacher} className={styles.barItem}>
            <span>{t.teacher}</span>
            <div className={styles.bar}>
              <div
                className={styles.barFill}
                style={{ width: `${t.present * 10}%` }}
              >
                {t.present}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PIE CHART */}
      <div className={styles.pieSection}>
        <h3>Overall Attendance</h3>
        <div className={styles.pie}>
          <div
            className={styles.present}
            style={{ flex: presentPercent }}
          >
            Present ({totalPresent})
          </div>
          <div
            className={styles.absent}
            style={{ flex: absentPercent }}
          >
            Absent ({totalAbsent})
          </div>
        </div>
      </div>
    </div>
  );
}
