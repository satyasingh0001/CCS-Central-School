import { Navigate } from "react-router-dom";

export default function RoleRoute({ allowed, children }) {
  const role = localStorage.getItem("role");

  return allowed.includes(role) ? children : <Navigate to="/admin/attendance" />;
}
