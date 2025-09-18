import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import ProtectedRoute from "./components/ProtectedRoute.js";
import CustomerDashboard from "./pages/CustomerDashboard.js";
import AdminDashboard from "./pages/AdminDashboard.js";
import Landing from "./components/Landing.js";

function App() {
  const token = localStorage.getItem("token");
  const location = useLocation();

  const showNavbar =
    token && (location.pathname.startsWith("/customer") || location.pathname.startsWith("/admin"));

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route
          path="/customer"
          element={
            <ProtectedRoute role="CUSTOMER">
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
