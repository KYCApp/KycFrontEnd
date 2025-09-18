import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Welcome to KYC App</h1>
      <p>Please login or register to continue.</p>
      <div className="d-flex justify-content-center gap-3 mt-3">
        <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/register" className="btn btn-outline-primary">Register</Link>
      </div>
    </div>
  );
}
