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
    <div className="login-details-page flex-column">
      <div className="page-details-header">
        <p className="welcome">Welcome</p>
        <p className="header-name">{name}🎉</p>
      </div>
      <div className="user-details-header">
        <h1>Your Entered Details</h1>
      </div>

      <div className="user-details-card">
        <div className="user-details-body">
          <h4 className="text-center login-header">Login details</h4>
          <hr />
          <div className="details-row">
            <div className="details-label">
              <p>EMAIL</p>
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
          <h4 className="mt-5 text-center signup-header">SignUp details</h4>
          <hr />

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
              <p>EMAIL</p>
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

          <div className="details-row">
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
