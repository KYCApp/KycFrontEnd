import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">KYC App</Link>

      {/* Toggler for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {!token && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
          )}

          {role === "CUSTOMER" && (
            <li className="nav-item">
              <Link className="nav-link" to="/customer/dashboard">Dashboard</Link>
            </li>
          )}

          {role === "ADMIN" && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/customers">Customers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/documents">Documents</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/audit-logs">Audit Logs</Link>
              </li>
            </>
          )}

          {token && (
            <li className="nav-item">
              <button
                className="btn btn-sm btn-outline-light ms-2"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
