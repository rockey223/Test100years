import React from "react";
import "./navbar.css";
import "../../responsive.css";
import logo from "../../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
// import { FillButton } from "../Helpers/Buttons";
import {GiHamburgerMenu} from'react-icons/gi';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-navlinks">
        <ul>
          <li>
            <NavLink className="navbar-navLinks-navLink"  to={"/"}>
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
<GiHamburgerMenu/>
        </div>
      </div>
      <NavLink to='/login'>


      <div className="navbar-login-btn">
        Login
        {/* <FillButton btnTxt={"LOGIN"}/> */}
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;
