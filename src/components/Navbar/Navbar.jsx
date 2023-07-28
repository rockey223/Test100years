import React, { useEffect, useState } from "react";
import "./navbar.css";
import "../../responsive.css";
import logo from "../../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
// import { FillButton } from "../Helpers/Buttons";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGalacticSenate } from "react-icons/fa";
const Navbar = ({
  isloggedin,
  setIsloggedin,
  usermail,
  username,
  setUsername,
  setUsermail,
}) => {
  const navigate = useNavigate();
  // const [isloggedin, setIsloggedin] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getMyInfo", {
        withCredentials: true,
      })
      .then((res) => {
        setIsloggedin(() => {
          return true;
        });

        console.log(res.data.user.userFullName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [isDropdown, setIsDropdown] = useState(false);
  function displayDropdown() {
    setIsDropdown(!isDropdown);
    console.log("asdf");
  }

  function Logout() {
    axios("http://localhost:8000/api/userLogout", {
      withCredentials: true,
    })
      .then((res) => {
        setIsloggedin(() => {
          return false;
        });
        setUsername("");
        setUsermail("");
        // if (res.data.success === true) {
          navigate("/");
        // }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(username);
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-container-content">
          <div className="navbar-logo">
            <img src={logo} alt="" />
          </div>
          <div className="navbar-container-links">
            <div className="navbar-navlinks">
              <ul>
                <li>
                  <NavLink className="navbar-navLinks-navLink" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar-navLinks-navLink" to={"/upgrade"}>
                    upgrade
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar-navLinks-navLink" to={"/e"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar-navLinks-navLink" to={"/r"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar-navLinks-navLink" to={"/t"}>
                    Home
                  </NavLink>
                </li>
              </ul>
              <div className="navbar-navbar-navlinks-icon">
                <GiHamburgerMenu />
              </div>
            </div>
            {isloggedin ? (
              <div className="navbar-userProfile">
                <div
                  className="navbar-userProfile-profile"
                  onClick={displayDropdown}
                >
                  {username[0]}
                </div>
                <div
                  className="navbar-userProfile-dropdownItem"
                  style={
                    isDropdown ? { display: "block" } : { display: "none" }
                  }
                >
                  <p className="navbar-profile">
                    <div className="navbar-userProfile-dropdownItem-item">
                      {username[0]}
                    </div>
                    <div className="navbar-userProfile-dropdown-name">
                      <span className="name">{username}</span>
                      <span className="name">{usermail}</span>
                    </div>
                  </p>
                  <hr />
                  <p>My Acocunt</p>
                  <p>My Profile</p>
                  <p>Support</p>
                  <p onClick={Logout}>Logout</p>
                </div>
              </div>
            ) : (
              <NavLink to="/login">
                <div className="navbar-login-btn">
                  Login
                  {/* <FillButton btnTxt={"LOGIN"}/> */}
                </div>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
