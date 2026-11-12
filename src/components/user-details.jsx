import { useLocation } from "react-router-dom";
import "./user-details.css";

export default function UserDetails() {
  const location = useLocation();

  const name = location.state?.name;
  const email = location.state?.email;
  const phonenumber = location.state?.phonenumber;
  const dateofbirth = location.state?.dateofbirth;
  const gender = location.state?.gender;
  const password = location.state?.password;
  const cpassword = location.state?.cpassword;

  return (
    <div className="login-details-page">
      {/* Welcome Section */}
      <div className="welcome-section">
        <p className="welcome-text">Welcome</p>
        <p className="header-name">{name} 🎉</p>
      </div>

      <p className="details-title">Your Entered Details</p>

      {/* Details Card */}
      <div className="user-details-card">
        {/* Card Header */}
        <div className="card-top">
          <div className="user-icon">
            {name ? name.charAt(0).toUpperCase() : "U"}
          </div>

          <div>
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        </div>

        {/* Login Details */}
        <div className="details-section">
          <h3 className="section-title">
            <span className="section-icon">🔐</span>
            Login Details
          </h3>

          <div className="details-row">
            <div className="details-label">
              <p>Email</p>
            </div>

            <div className="details-value">
              <p>{email}</p>
            </div>
          </div>

          <div className="details-row">
            <div className="details-label">
              <p>Password</p>
            </div>

            <div className="details-value">
              <p>{password}</p>
            </div>
          </div>
        </div>

        {/* Signup Details */}
        <div className="details-section">
          <h3 className="section-title">
            <span className="section-icon">👤</span>
            Signup Details
          </h3>

          <div className="details-row">
            <div className="details-label">
              <p>Name</p>
            </div>

            <div className="details-value">
              <p>{name}</p>
            </div>
          </div>

          <div className="details-row">
            <div className="details-label">
              <p>Email</p>
            </div>

            <div className="details-value">
              <p>{email}</p>
            </div>
          </div>

          <div className="details-row">
            <div className="details-label">
              <p>Phone Number</p>
            </div>

            <div className="details-value">
              <p>{phonenumber}</p>
            </div>
          </div>

          <div className="details-row">
            <div className="details-label">
              <p>Date of Birth</p>
            </div>

            <div className="details-value">
              <p>{dateofbirth}</p>
            </div>
          </div>

          {gender && (
            <div className="details-row">
              <div className="details-label">
                <p>Gender</p>
              </div>

              <div className="details-value">
                <p>{gender}</p>
              </div>
            </div>
          )}

          <div className="details-row">
            <div className="details-label">
              <p>Password</p>
            </div>

            <div className="details-value">
              <p>{password}</p>
            </div>
          </div>

          <div className="details-row last-row">
            <div className="details-label">
              <p>Confirm Password</p>
            </div>

            <div className="details-value">
              <p>{cpassword}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
