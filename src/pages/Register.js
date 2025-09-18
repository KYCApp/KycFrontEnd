import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    nationality: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    city: "",
    country: "",
    idNumber: "",
    idType: "",
    idExpiryDate: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api.post("/auth/register", formData);
      alert("Registration successful! Check your email to verify your account.");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">Customer Registration</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        {/* Username */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <select
              className="form-control mb-3"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
        </div>

        <input
          type="date"
          className="form-control mb-3"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="ID Number"
          name="idNumber"
          value={formData.idNumber}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="ID Type (Passport, National ID, etc.)"
          name="idType"
          value={formData.idType}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          className="form-control mb-3"
          name="idExpiryDate"
          value={formData.idExpiryDate}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
