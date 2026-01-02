import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./AdminLayout.module.css";
import Breadcrumb from "./Breadcrumb";
import { useAuth } from "../auth/AuthContext";

export default function AdminLayout() {
  const navigate = useNavigate();
  const { role, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className={styles.wrapper}>
      {/* ===== SIDEBAR ===== */}
      <aside className={styles.sidebar}>
        <h2 className={styles.title}>🛠 Admin Panel</h2>

        {/* ===== ADMIN DASHBOARD ===== */}
        {role === "admin" && (
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            📊 Dashboard
          </NavLink>
        )}

        {/* ===== STUDENT MODULE (ADMIN ONLY) ===== */}
        {role === "admin" && (
          <NavLink
            to="/admin/students"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            🎓 Student Dashboard
          </NavLink>
        )}

        {role === "admin" && (
          <NavLink
            to="/admin/student-attendance"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            📝 Student Attendance
          </NavLink>
        )}

        {role === "admin" && (
          <NavLink
            to="/admin/student-calendar"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            📅 Student Calendar
          </NavLink>
        )}

        {/* ===== TEACHER DASHBOARD ===== */}
        {role === "teacher" && (
          <NavLink
            to="/admin/teacher-dashboard"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            👨‍🏫 My Dashboard
          </NavLink>
        )}

        {/* ===== TEACHER ATTENDANCE (ADMIN + TEACHER) ===== */}
        {(role === "admin" || role === "teacher") && (
          <NavLink
            to="/admin/attendance"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            🧑‍🏫 Teacher Attendance
          </NavLink>
        )}

        {/* ===== TEACHER CALENDAR (ADMIN ONLY) ===== */}
        {role === "admin" && (
          <NavLink
            to="/admin/calendar"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            📅 Teacher Calendar
          </NavLink>
        )}

        {/* ===== LOGOUT ===== */}
        <button className={styles.logoutBtn} onClick={handleLogout}>
          🚪 Logout
        </button>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className={styles.content}>
        <Breadcrumb />
        <Outlet />
      </main>
    </div>
  );
}
