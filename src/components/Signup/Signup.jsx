import React, { useState,useEffect } from "react";
import InputField from "../Helpers/InputField";
import { NavLink } from "react-router-dom";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const Signup = ({setIsloggedin}) => {
  const navigate = useNavigate();
  // window.scrollTo(0, 0);
  useEffect(()=>{

    window.scrollTo(0, 0);
  },[]);
  const [signupDetails, setSignupDetails] = useState({
    signupFullname: "",
    signupEmail: "",
    signupPassword: "",
    signupRePassword: "",
    userLevel: "beginner",
  });
  const [error, setError] = useState();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupDetails((prevSignupDetails) => {
      return {
        ...prevSignupDetails,
        [name]: value,
      };
    });
  };

  const handleSignUpForm = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/userRegister", {
        userEmail: signupDetails.signupEmail,
        userPassword: signupDetails.signupPassword,
        userConfirmPassword: signupDetails.signupRePassword,
        userFullName: signupDetails.signupFullname,
      },{
        withCredentials: true
      })
      .then((res) =>{
setIsloggedin(()=>{
  return true
})
        setSignupDetails({
              signupFullname: "",
              signupEmail: "",
              signupPassword: "",
              signupRePassword: "",
            });
            if(res.data.success===true){
             
              navigate("/");
            }
            else{
              setError("Problem in signinup")
            }
        console.log(res.data)})
      .catch((err) => console.log(err));

    // if (signupDetails.signupPassword != signupDetails.signupRePassword) {
    //   console.log("password mismatch");
    //   setError("Password Incorrect");
    // } else {
    //   console.log(signupDetails);
    //   setSignupDetails({
    //     signupFullname: "",
    //     signupEmail: "",
    //     signupPassword: "",
    //     signupRePassword: "",
    //   });
    // }
  };

  return (
    <>
    {/* <ToastContainer /> */}
      <div className="signup-container">
        <div className="signup-container-content">
          <div className="signup-container-content-header">
            <div className="signup-container-content-header-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 20C32 22.1217 31.1571 24.1566 29.6569 25.6569C28.1566 27.1571 26.1217 28 24 28C21.8783 28 19.8434 27.1571 18.3431 25.6569C16.8429 24.1566 16 22.1217 16 20C16 17.8783 16.8429 15.8434 18.3431 14.3431C19.8434 12.8429 21.8783 12 24 12C26.1217 12 28.1566 12.8429 29.6569 14.3431C31.1571 15.8434 32 17.8783 32 20Z"
                  fill="#F66E24"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.184 43.984C12.517 43.556 4 34.772 4 24C4 12.954 12.954 4 24 4C35.046 4 44 12.954 44 24C44 35.046 35.046 44 24 44C23.9087 44.0006 23.8173 44.0006 23.726 44C23.545 44 23.364 43.994 23.184 43.984ZM11.166 36.62C11.0165 36.1906 10.9656 35.733 11.0171 35.2812C11.0686 34.8294 11.2212 34.395 11.4636 34.0103C11.706 33.6255 12.0319 33.3003 12.4171 33.0588C12.8024 32.8172 13.2371 32.6655 13.689 32.615C21.485 31.752 26.563 31.83 34.321 32.633C34.7735 32.6801 35.2093 32.8299 35.5952 33.0709C35.9811 33.3119 36.3068 33.6378 36.5477 34.0237C36.7886 34.4096 36.9383 34.8455 36.9853 35.298C37.0323 35.7505 36.9754 36.2078 36.819 36.635C40.1439 33.2709 42.006 28.7299 42 24C42 14.059 33.941 6 24 6C14.059 6 6 14.059 6 24C6 28.916 7.971 33.372 11.166 36.62Z"
                  fill="#F66E24"
                />
              </svg>
            </div>
            <div className="signup-container-content-header-title">Sign Up</div>
          </div>
          <div className="signup-container-content-form">
            <form>
              <InputField
                placeholder={"Full Name"}
                name={"signupFullname"}
                width={"360px"}
                height={"10px"}
                value={signupDetails.signupFullname}
                change={handleChange}
              />
              <InputField
                placeholder={"Email"}
                name={"signupEmail"}
                width={"360px"}
                height={"10px"}
                value={signupDetails.signupEmail}
                change={handleChange}
                type={"email"}
              />

              <InputField
                placeholder={"Password"}
                name={"signupPassword"}
                width={"360px"}
                height={"10px"}
                type={"password"}
                value={signupDetails.signupPassword}
                change={handleChange}
              />

              <InputField
                placeholder={"Retype Password"}
                name={"signupRePassword"}
                width={"360px"}
                height={"10px"}
                type={"password"}
                value={signupDetails.signupRePassword}
                change={handleChange}
              />
              {error ? <div className="signuperror">{error}</div> : ""}
              <input
                type="submit"
                value="Sign Up"
                className="signup-container-content-form-submitBtn"
                onClick={handleSignUpForm}
              />
            </form>
            <div className="signup-container-content-terms">
              By signing up, you agree to our &nbsp;<span> Terms of Use </span>{" "}
              &nbsp; and &nbsp; <span> Privacy Policy</span>.
            </div>
          </div>
          <div className="signup-container-content-login">
            Already have account?{" "}
            <NavLink to="/login">
              <span> &nbsp; Login</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
