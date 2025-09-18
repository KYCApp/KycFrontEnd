import { useEffect, useState } from "react";
import api from "../api/axios";

export default function CustomerDashboard() {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const res = await api.get("/customers/me");
        setCustomer(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch profile");
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, []);

  if (loading) return <p className="text-center mt-5">Loading profile...</p>;
  if (error) return <p className="text-danger text-center mt-5">{error}</p>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Customer Profile</h2>

      <div className="card shadow p-4">
        <div className="row mb-3">
          <div className="col">
            <strong>Username:</strong> {customer.username}
          </div>
          <div className="col">
            <strong>Email:</strong> {customer.email}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <strong>First Name:</strong> {customer.firstName}
          </div>
          <div className="col">
            <strong>Last Name:</strong> {customer.lastName}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <strong>Phone Number:</strong> {customer.phoneNumber}
          </div>
          <div className="col">
            <strong>Nationality:</strong> {customer.nationality}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <strong>Gender:</strong> {customer.gender}
          </div>
          <div className="col">
            <strong>Date of Birth:</strong> {customer.dateOfBirth}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <strong>Address:</strong> {customer.address}
          </div>
          <div className="col">
            <strong>City:</strong> {customer.city}
          </div>
          <div className="col">
            <strong>Country:</strong> {customer.country}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <strong>ID Number:</strong> {customer.idNumber}
          </div>
          <div className="col">
            <strong>ID Type:</strong> {customer.idType}
          </div>
          <div className="col">
            <strong>ID Expiry Date:</strong> {customer.idExpiryDate}
          </div>
        </div>
      </div>
    </div>
  );
}
