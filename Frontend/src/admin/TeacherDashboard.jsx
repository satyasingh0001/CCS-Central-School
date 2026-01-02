import styles from "./TeacherDashboard.module.css";

export default function TeacherDashboard() {
  const attendance = JSON.parse(localStorage.getItem("attendance")) || {};
  const role = localStorage.getItem("role");

  // Demo: teacher username is same as key (you can improve later)
  const teacherName = "teacher";

  const today = new Date().toISOString().split("T")[0];
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();

  const records = attendance[teacherName] || {};

  const todayStatus = records[today] || "Not Marked";

  const presentThisMonth = Object.entries(records).filter(([date, status]) => {
    const d = new Date(date);
    return (
      d.getMonth() === month &&
      d.getFullYear() === year &&
      status === "P"
    );
  }).length;

  return (
    <div className={styles.container}>
      <h1>Teacher Dashboard</h1>

      <div className={styles.card}>
        <h3>Teacher</h3>
        <p>{teacherName}</p>
      </div>

      <div className={styles.card}>
        <h3>Today’s Status</h3>
        <p
          className={
            todayStatus === "P"
              ? styles.present
              : todayStatus === "A"
              ? styles.absent
              : ""
          }
        >
          {todayStatus === "P"
            ? "Present"
            : todayStatus === "A"
            ? "Absent"
            : "Not Marked"}
        </p>
      </div>

      <div className={styles.card}>
        <h3>Present Days (This Month)</h3>
        <p>{presentThisMonth}</p>
      </div>
    </div>
  );
}
