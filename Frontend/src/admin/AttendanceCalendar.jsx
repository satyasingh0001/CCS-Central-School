import styles from "./AttendanceCalendar.module.css";

export default function AttendanceCalendar() {
  const attendance = JSON.parse(localStorage.getItem("attendance")) || {};
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const teachers = Object.keys(attendance);

  return (
    <div className={styles.container}>
      <h1>Monthly Attendance Calendar</h1>

      <table>
        <thead>
          <tr>
            <th>Teacher</th>
            {[...Array(daysInMonth)].map((_, i) => (
              <th key={i}>{i + 1}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {teachers.map(teacher => (
            <tr key={teacher}>
              <td>{teacher}</td>

              {[...Array(daysInMonth)].map((_, day) => {
                const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(day + 1).padStart(2, "0")}`;
                const status = attendance[teacher]?.[date];

                return (
                  <td
                    key={day}
                    className={
                      status === "P"
                        ? styles.present
                        : status === "A"
                        ? styles.absent
                        : ""
                    }
                  >
                    {status || "-"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
