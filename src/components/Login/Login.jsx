import React, { useState, useEffect } from "react";
import InputField from "../Helpers/InputField";
// import LoginHelper from "./LoginHelper";
import "./login.css";
// import { NavLink } from "react-router-dom";

import Loader from "../Helpers/Loader/Loader"

// import { useLogin } from "../../contexts/login/loginContext";
import {useUser} from "../../contexts/userDetails/userContext"
import Toggler from "../Helpers/Toggler";

const Login = () => {

const [InputType,icon] =Toggler();

  const { Login,isLoading } = useUser();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loginDetails, setloginDetails] = useState({
    loginUsername: "",
    loginPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setloginDetails((prevloginDetails) => {
      return {
        ...prevloginDetails,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-container-content">
          <div className="login-container-content-header">
            <div className="login-container-content-header-icon">
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
            <div className="login-container-content-header-title">Log in</div>
          </div>
          <div className="login-container-content-form">
            <form>
              <div className="login-inputbox">

              <InputField
                placeholder={"User Name"}
                name={"loginUsername"}
                width={"360px"}
                height={"10px"}
                value={loginDetails.loginUsername}
                change={handleChange}
              />
              </div>
              <div className="login-inputbox">

              <InputField
                placeholder={"Password"}
                name={"loginPassword"}
                width={"360px"}
                height={"10px"}
                type={InputType}
                value={loginDetails.loginPassword}
                change={handleChange}
             
              />
              <span className="password-toggle-icon">{icon}</span>
              </div>
              {/* <input
                type="submit"
                value="Login"
                className="login-container-content-form-submitBtn"
                onClick={handleLoginForm}
              /> */}
              <div className="login-container-content-form-submitBtn" onClick={() => {
                  Login(
                   
                    loginDetails.loginUsername.trim(),
                    loginDetails.loginPassword
                  );
                }}>
              {
                isLoading? <Loader/> : <input type="submit" value="Login"/> 
              }
              </div>
              
            </form>
            <div className="login-container-content-forgot">
              Forgot Password?
            </div>

{/* temp removed */}
{/* 
            <div className="login-container-content-oauth">
              <NavLink>
                <LoginHelper
                  socialName={"Facebook"}
                  icon={"https://i.postimg.cc/bJ4t287X/facebook.png"}
                />
              </NavLink>
              <NavLink>
                <LoginHelper
                  socialName={"Google"}
                  icon={"https://i.postimg.cc/WzVR5qrs/google.png"}
                />
              </NavLink>
              <NavLink>
                <LoginHelper
                  socialName={"Apple"}
                  icon={"https://i.postimg.cc/VNRr4n2F/apple-logo.png"}
                />
              </NavLink>
            </div>
            <div className="login-container-content-signup">
              Don't have account?{" "}
              <NavLink to="/signup">
                <span>Sign Up</span>
              </NavLink>
            </div>
             */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
