import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login-form.css";

export default function Loginform() {
  // useLocation Hook
  const location = useLocation();

  // Accessing Signup Data from Location State
  const signemail = location.state?.email;
  const signpsw = location.state?.psw;
  const cpassword = location.state?.cpsw;
  const name = location.state?.uname;
  const dateofbirth = location.state?.dateofbirth;
  const phonenumber = location.state?.phonenumber;
  const gender = location.state?.gender;

  // Form States //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error States //
  const [emailerror, setEmailerror] = useState();
  const [passworderror, setPassworderror] = useState();
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  const emailfun = (event) => {
    setEmail(event.target.value);
    setEmailerror("");
  };

  const passwordfun = (event) => {
    setPassword(event.target.value);
    setPassworderror("");
  };

  const submitform = (event) => {
    event.preventDefault();

    // Email validation //
    if (email === "") {
      setEmailerror("*email is required");
    } else if (email !== signemail) {
      setErrors("errors");
    } else {
      setEmailerror("");
    }

    // Password validation //

    if (password === "") {
      setPassworderror("*password is required");
    } else if (password !== signpsw) {
      setErrors("errors");
    } else {
      // form reset after submission //
      setPassworderror("");
    }

    // Reset only when both fields are filled(if both fields are not empty then reset)
    if (
      email !== "" &&
      email === signemail &&
      password !== "" &&
      password === signpsw
    ) {
      setEmail("");
      setPassword("");
      alert("Logged in Successfully!");

      navigate("/formsdetails", {
        state: {
          email: email,
          password: password,
          name: name,
          cpassword: cpassword,
          dateofbirth: dateofbirth,
          phonenumber: phonenumber,
          gender: gender,
        },
      });
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div
          className="card rounded-5 shadow-lg p-2"
          style={{ width: "400px" }}
        >
          {errors === "errors" && (
            <p className="err-msg mt-4 justify-content-center text-center fs-5">
              {" "}
              Invalid Email or Password
            </p>
          )}
          <form className="p-4" onSubmit={submitform} noValidate>
            <p className="text-center formheader">Login</p>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                className="form-control"
                name="email"
                id="email"
                onChange={emailfun}
                autoComplete="username"
              />
            </div>
            {emailerror && <p className="err-msg">{emailerror}</p>}
            <div className="mt-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                className="form-control"
                name="password"
                id="password"
                autoComplete="current-password"
                onChange={passwordfun}
              />
            </div>
            {passworderror && <p className="err-msg">{passworderror}</p>}
            <div className="m-3 justify-content-center text-center">
              <button className="btn btn-primary w-100">Login</button>
            </div>
          </form>
          <Link to="/signupform" className="text-center">
            Forgot Password?
          </Link>
          <div className="text-center mt-2 mb-4">
            Don't have an account? <Link to="/signupform">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
}
