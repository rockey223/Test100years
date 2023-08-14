import React, { useEffect, useState } from "react";
import "./navbar.css";
import "../../responsive.css";
import logo from "../../assets/images/logo.jpg";
import { Link, NavLink } from "react-router-dom";
// import { FillButton } from "../Helpers/Buttons";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/userDetails/userContext";
import {GoX} from "react-icons/go"
// import { FaGalacticSenate } from "react-icons/fa";
const Navbar = () => {

  const {isloggedIn,myInfo,Logout,initialName} = useUser();
 
  

  // const name = myInfo.userFullName;
  const [isDropdown, setIsDropdown] = useState(false);
  function displayDropdown() {
    setIsDropdown(!isDropdown);
    
  }

  // function Logout() {
  //   axios("http://192.168.101.6:8000/api/userLogout", {
  //     withCredentials: true,
  //   })
  //     .then((res) => {
  //       setIsloggedin(() => {
  //         return false;
  //       });
  //       setUsername("");
  //       setUsermail("");
  //       // if (res.data.success === true) {
  //         navigate("/");
  //       // }
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // console.log(username);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
console.log(windowWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(()=>window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  const [displayNav,setDisplayNav] = useState(false)
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-container-content">
          <div className="navbar-logo">
            <img src={logo} alt="" />
          </div>
          <div className="navbar-container-links">
            <div className={`navbar-navlinks ${displayNav ? 'display' : ""}`} >
              <ul>
                <li onClick={()=>{
              setDisplayNav((prev)=>!prev)
            }}>
                  <NavLink className="navbar-navLinks-navLink" to={"/"} >
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
              
            </div>
            {isloggedIn ? (
              <div className="navbar-userProfile">
                <div
                  className="navbar-userProfile-profile"
                  onClick={()=>{displayDropdown()}}
                >
                   {initialName}
                </div>
                <div
                  className="navbar-userProfile-dropdownItem"
                  style={
                    isDropdown ? { display: "block" } : { display: "none" }
                  }
                >
                  <p className="navbar-profile">
                    <div className="navbar-userProfile-dropdownItem-item">
                    {initialName}
                    </div>
                    <div className="navbar-userProfile-dropdown-name">
                      <span className="name"> {myInfo.userFullName}</span>
                      <span className="name">{myInfo.userEmail}</span>
                    </div>
                  </p>
                  <hr />
                  <Link to={"/profile"}>
                  <p>My Acocunt</p>
                  </Link>
                  {/* <p>My Profile</p> */}
                  <p>Support</p>
                  <p 
                  onClick={Logout}
                  >Logout</p>
                </div>
              </div>
            ) : (
              <NavLink to="/login">
                {
                  windowWidth< 450? <CgProfile className="LoginProfileIcon"/> :(<div className="navbar-login-btn">
                  Login
                  {/* <FillButton btnTxt={"LOGIN"}/> */}
                </div>)
                }
                
              </NavLink>
            )}
            <div className="navbar-navbar-navlinks-icon" onClick={()=>{
              setDisplayNav((prev)=>!prev)
            }}>
              {
                displayNav? <GoX/> : <GiHamburgerMenu />
              }
                
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
