import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ username: "", password: "", role: "CUSTOMER" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      navigate("/login");
    } catch {
      setError("Registration failed");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3 className="mb-3 text-center">Register</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="username" placeholder="Username" onChange={handleChange} />
        <input className="form-control mb-2" type="password" name="password" placeholder="Password" onChange={handleChange} />
        <select className="form-select mb-2" name="role" onChange={handleChange}>
          <option value="CUSTOMER">Customer</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
}
