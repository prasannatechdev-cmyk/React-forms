import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup-form.css";

export default function Signupform() {
  // Navigation
  const navigate = useNavigate();

  // Validation Patterns
  const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&*_]).{8,}$/;
  const phonepattern = /^[6-9][0-9]{9}$/;

  // Date restriction
  const maxdate = "2008-12-31";

  // Form States
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  // Error States
  const [fnamerror, setFnamerror] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [cpassworderror, setCpassworderror] = useState("");
  const [doberror, setDoberror] = useState("");
  const [phoneerror, setPhoneerror] = useState("");
  const [gendererror, setGendererror] = useState("");

  // Full Name Validation
  const changefullname = (event) => {
    const fnamevalue = event.target.value;

    setFullname(fnamevalue);

    if (fnamevalue.trim() === "") {
      setFnamerror("*name is required");
    } else {
      setFnamerror("");
    }
  };

  // Email Validation
  const changemail = (event) => {
    const emailValue = event.target.value;

    setEmail(emailValue);

    if (emailValue === "") {
      setEmailerror("*email is required");
    } else if (!emailpattern.test(emailValue)) {
      setEmailerror("*invalid email");
    } else {
      setEmailerror("");
    }
  };

  // Phone Number Validation
  // Phone number is optional
  const changephonenumber = (event) => {
    const phonenumber = event.target.value;

    setPhone(phonenumber);

    if (phonenumber === "") {
      setPhoneerror("*phone number is required");
    } else if (!phonepattern.test(phonenumber)) {
      setPhoneerror("*invalid phone number");
    } else {
      setPhoneerror("");
    }
  };

  // Date of Birth Validation
  const changedob = (event) => {
    const dobvalue = event.target.value;

    setDob(dobvalue);

    if (dobvalue === "") {
      setDoberror("*date of birth is required");
    } else {
      setDoberror("");
    }
  };

  // Gender Validation
  const changegender = (event) => {
    const gendervalue = event.target.value;

    setGender(gendervalue);
    setGendererror("");
  };

  // Password Validation
  const changepassword = (event) => {
    const passwordvalue = event.target.value;

    setPassword(passwordvalue);

    if (passwordvalue === "") {
      setPassworderror("required");
    } else if (!passwordpattern.test(passwordvalue)) {
      setPassworderror("invalid");
    } else {
      setPassworderror("");
    }

    // Revalidate confirm password if user already entered it
    if (cpassword !== "") {
      if (cpassword !== passwordvalue) {
        setCpassworderror("*confirm password does not match");
      } else {
        setCpassworderror("");
      }
    }
  };

  // Confirm Password Validation
  const changecpassword = (event) => {
    const cpasswordvalue = event.target.value;

    setCpassword(cpasswordvalue);

    if (cpasswordvalue === "") {
      setCpassworderror("*confirm password is required");
    } else if (cpasswordvalue !== password) {
      setCpassworderror("*confirm password does not match");
    } else {
      setCpassworderror("");
    }
  };

  // Form Submission
  const submitform = (event) => {
    event.preventDefault();

    let formvalid = true;

    // Full Name Validation
    if (fullname.trim() === "") {
      setFnamerror("*name is required");
      formvalid = false;
    } else {
      setFnamerror("");
    }

    // Email Validation
    if (email === "") {
      setEmailerror("*email is required");
      formvalid = false;
    } else if (!emailpattern.test(email)) {
      setEmailerror("*invalid email");
      formvalid = false;
    } else {
      setEmailerror("");
    }

    // Phone Number Validation
    if (phone === "") {
      setPhoneerror("*phone number is required");
    } else if (!phonepattern.test(phone)) {
      setPhoneerror("*invalid phone number");
      formvalid = false;
    } else {
      setPhoneerror("");
    }

    // Date of Birth Validation
    if (dob === "") {
      setDoberror("*date of birth is required");
      formvalid = false;
    } else if (dob > maxdate) {
      setDoberror("*invalid date of birth");
      formvalid = false;
    } else {
      setDoberror("");
    }

    // Gender Validation
    if (gender === "") {
      setGendererror("");
      // formvalid = false;
    } else {
      setGendererror("");
    }

    // Password Validation
    if (password === "") {
      setPassworderror("required");
      formvalid = false;
    } else if (!passwordpattern.test(password)) {
      setPassworderror("invalid");
      formvalid = false;
    } else {
      setPassworderror("");
    }

    // Confirm Password Validation
    if (cpassword === "") {
      setCpassworderror("*confirm password is required");
      formvalid = false;
    } else if (cpassword !== password) {
      setCpassworderror("*confirm password does not match");
      formvalid = false;
    } else {
      setCpassworderror("");
    }

    // Successful Form Submission
    if (formvalid) {
      alert("signed up Successfully!");
      navigate("/", {
        state: {
          uname: fullname,
          email: email,
          psw: password,
          cpsw: cpassword,
          dateofbirth: dob,
          phonenumber: phone,
          gender: gender,
        },
      });

      // Clear form
      setFullname("");
      setEmail("");
      setPassword("");
      setCpassword("");
      setDob("");
      setPhone("");
      setGender("");

      // Clear errors
      setFnamerror("");
      setEmailerror("");
      setPassworderror("");
      setCpassworderror("");
      setDoberror("");
      setPhoneerror("");
      setGendererror("");
    }
  };

  return (
    <>
      {/* Signup Form */}

      <div className="m-5 d-flex justify-content-center align-items-center">
        <div className="card shadow-lg rounded-5" style={{ width: "500px" }}>
          <form className="p-4" onSubmit={submitform} noValidate>
            <p className="text-center form-header">SignUp</p>

            {/* Full Name */}
            <div>
              <label htmlFor="fname">Full Name</label>

              <input
                type="text"
                className="form-control"
                value={fullname}
                id="fname"
                name="fullname"
                autoComplete="name"
                onChange={changefullname}
              />
            </div>

            {fnamerror && <p className="err-msg">{fnamerror}</p>}

            {/* Email */}
            <div className="mt-3">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                value={email}
                autoComplete="email"
                onChange={changemail}
              />
            </div>

            {emailerror && <p className="err-msg">{emailerror}</p>}

            {/* Phone Number */}
            <div className="mt-3">
              <label htmlFor="phone">Phone Number</label>

              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                value={phone}
                maxLength="10"
                onChange={changephonenumber}
              />

              {phoneerror && <p className="err-msg">{phoneerror}</p>}
            </div>

            {/* Date of Birth */}
            <div className="mt-3">
              <label htmlFor="dob">Date of Birth</label>

              <input
                type="date"
                className={`form-control ${
                  dob !== "" && dob > maxdate ? "is-invalid" : ""
                }`}
                name="dob"
                id="dob"
                value={dob}
                onChange={changedob}
                max={maxdate}
              />
            </div>

            {doberror && <p className="err-msg">{doberror}</p>}

            {/* Gender */}
            <div className="mt-3">
              <label>Gender</label>

              <br />

              <div>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  // checked={gender === "male"}
                  onChange={changegender}
                />
                &nbsp;Male
              </div>

              <div>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  // checked={gender === "female"}
                  onChange={changegender}
                />
                &nbsp;Female
              </div>
            </div>

            {gendererror && <p className="err-msg">{gendererror}</p>}

            {/* Password */}
            <div className="mt-3">
              <label htmlFor="password">Password</label>

              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                autoComplete="new-password"
                onChange={changepassword}
              />
            </div>

            {passworderror === "required" && (
              <p className="err-msg">*password is required</p>
            )}

            {passworderror === "invalid" && (
              <p className="err-msg">
                *At least 1 uppercase (A-Z) <br />
                *At least 1 lowercase (a-z) <br />
                *At least 1 digit (0-9) <br />
                *At least 1 symbol (!@#$&*_)
              </p>
            )}

            {/* Confirm Password */}
            <div className="mt-3">
              <label htmlFor="cpassword">Confirm Password</label>

              <input
                type="password"
                className="form-control"
                id="cpassword"
                name="cpassword"
                value={cpassword}
                autoComplete="new-password"
                onChange={changecpassword}
              />
            </div>

            {cpassworderror && <p className="err-msg">{cpassworderror}</p>}

            {/* Submit Button */}
            <div className="mt-3 justify-content-center text-center">
              <button type="submit" className="btn btn-primary w-100">
                SignUp
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="text-center mb-3">
            Already have an account? <Link to="/">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}
