import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumb.module.css";

const iconMap = {
  dashboard: "",
  attendance: "",
  calendar: "",
};

export default function Breadcrumb() {
  const location = useLocation();

  const paths = location.pathname
    .split("/")
    .filter(p => p && p !== "admin");

  return (
    <div className={styles.breadcrumb}>
      <Link to="/admin/dashboard">🏠 Admin</Link>

      {paths.map((p, i) => (
        <span key={p}>
          {" > "}
          <span className={styles.current}>
            {iconMap[p]} {p.charAt(0).toUpperCase() + p.slice(1)}
          </span>
        </span>
      ))}
    </div>
  );
}
