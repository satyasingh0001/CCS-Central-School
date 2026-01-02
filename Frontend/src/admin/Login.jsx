import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { apiFetch } from "../api/api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const data = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });

      login(data.token, data.role);

      if (data.role === "admin") navigate("/admin/dashboard");
      else navigate("/admin/teacher-dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Admin / Teacher Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
