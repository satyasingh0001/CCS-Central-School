import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

/* ===== PUBLIC ===== */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admission from "./pages/Admission";
import Faculty from "./pages/Faculty";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

/* ===== AUTH & ADMIN ===== */
import Login from "./admin/Login";
import ProtectedRoute from "./admin/ProtectedRoute";
import RoleRoute from "./admin/RoleRoute";

import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import TeacherDashboard from "./admin/TeacherDashboard";
import TeacherAttendance from "./admin/TeacherAttendance";
import AttendanceCalendar from "./admin/AttendanceCalendar";

import StudentDashboard from "./admin/StudentDashboard";
import StudentAttendance from "./admin/StudentAttendance";
import StudentAttendanceCalendar from "./admin/StudentAttendanceCalendar";

/* ===== LAYOUT HANDLER ===== */
function AppLayout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* PUBLIC NAVBAR */}
      {!isAdminRoute && <Navbar />}

      <main style={{ minHeight: "100vh" }}>
        <Routes>
          {/* ===== PUBLIC ROUTES ===== */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* ===== ADMIN LOGIN ===== */}
          <Route path="/admin/login" element={<Login />} />

          {/* ===== ADMIN PANEL ===== */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            {/* ADMIN ONLY */}
            <Route
              path="dashboard"
              element={
                <RoleRoute allowed={["admin"]}>
                  <Dashboard />
                </RoleRoute>
              }
            />

            <Route
              path="students"
              element={
                <RoleRoute allowed={["admin"]}>
                  <StudentDashboard />
                </RoleRoute>
              }
            />

            <Route
              path="student-attendance"
              element={
                <RoleRoute allowed={["admin"]}>
                  <StudentAttendance />
                </RoleRoute>
              }
            />

            <Route
              path="student-calendar"
              element={
                <RoleRoute allowed={["admin"]}>
                  <StudentAttendanceCalendar />
                </RoleRoute>
              }
            />

            <Route
              path="calendar"
              element={
                <RoleRoute allowed={["admin"]}>
                  <AttendanceCalendar />
                </RoleRoute>
              }
            />

            {/* TEACHER ONLY */}
            <Route
              path="teacher-dashboard"
              element={
                <RoleRoute allowed={["teacher"]}>
                  <TeacherDashboard />
                </RoleRoute>
              }
            />

            {/* ADMIN + TEACHER */}
            <Route
              path="attendance"
              element={
                <RoleRoute allowed={["admin", "teacher"]}>
                  <TeacherAttendance />
                </RoleRoute>
              }
            />
          </Route>
        </Routes>
      </main>

      {/* PUBLIC FOOTER */}
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
