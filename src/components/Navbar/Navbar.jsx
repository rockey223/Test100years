import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import "../../responsive.css";
import logo from "../../assets/images/logo.jpg";
import { Link, NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

import { useUser } from "../../contexts/userDetails/userContext";
import { GoX } from "react-icons/go";

const Navbar = () => {
  const { isloggedIn, myInfo, Logout, initialName } = useUser();

  const [isDropdown, setIsDropdown] = useState(false);

  function displayDropdown() {
    setIsDropdown((prevValue) => !prevValue);
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(() => window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  // console.log(windowWidth);
  const [displayNav, setDisplayNav] = useState(false);

  const profileRef = useRef(null);
  // useEffect(() => {
  //   let handleClickOut = (e) => {
  //     if (!profileRef.current.contains(e.target)) {
  //       setIsDropdown(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOut);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOut);
  //   };
  // });

  useEffect(() => {
    let handler = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsDropdown(false);
      }
    }
  
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener("touchstart", handler);
    }
  }, [profileRef]);
  
  return (
    <>
      <div
        className="navbar-container"
        style={{ position: displayNav && windowWidth < 780 ? "sticky" : "" }}
      >
        <div className="navbar-container-content">
          <Link to={"/"}>
            <div className="navbar-logo">
              <img src={logo} alt="" />
            </div>
          </Link>
          <div className="navbar-container-links">
            <div className={`navbar-navlinks ${displayNav ? "display" : ""}`}>
              <ul>
                <li
                  onClick={() => {
                    setDisplayNav((prev) => !prev);
                  }}
                >
                  <NavLink className="navbar-navLinks-navLink" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li className="dropbtn">
                  Courses
                  <div
                    className="dropdown-content"
                    onClick={() => {
                      setDisplayNav((prev) => !prev);
                    }}
                  >
                    <NavLink to={"/level/1"}>Level 1</NavLink>
                    <NavLink to={"/level/2"}>Level 2</NavLink>
                  </div>
                </li>
                {/* <li
                  onClick={() => {
                    setDisplayNav((prev) => !prev);
                  }}
                >
                  <NavLink className="navbar-navLinks-navLink" to={"/upgrade"}>
                    upgrade
                  </NavLink>
                </li> */}
                <li
                  onClick={() => {
                    setDisplayNav((prev) => !prev);
                  }}
                >
                  <NavLink className="navbar-navLinks-navLink" to={"/blogs"}>
                    Blog
                  </NavLink>
                </li>
                <li
                  onClick={() => {
                    setDisplayNav((prev) => !prev);
                  }}
                >
                  <NavLink
                    className="navbar-navLinks-navLink"
                    to={"/contactus"}
                  >
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </div>

            {isloggedIn ? (
              <div className="navbar-userProfile" ref={profileRef}>
                <div
                  className="navbar-userProfile-profile"
                  onClick={() => {
                    displayDropdown();
                  }}
                >
                  {initialName}
                </div>
                <div
                  className="navbar-userProfile-dropdownItem"
                  style={
                    isDropdown ? { display: "block" } : { display: "none" }
                  }
                >
                  <div className="navbar-profile">
                    <div className="navbar-userProfile-dropdownItem-item">
                      {initialName}
                    </div>
                    <div className="navbar-userProfile-dropdown-name">
                      <span className="name"> {myInfo.userFullName}</span>
                      <span className="name">{myInfo.userEmail}</span>
                    </div>
                  </div>
                  <hr />
                  <Link
                    to={"/profile"}
                    onClick={() => {
                      displayDropdown();
                    }}
                    id="profile-links"
                  >
                    <p>My Acocunt</p>
                  </Link>
                  <Link
                    to={"/profileBio"}
                    onClick={() => {
                      displayDropdown();
                    }}
                    id="profile-links"
                  >
                    <p>My Profile</p>
                  </Link>

                  <p>Support</p>
                  <p
                    onClick={() => {
                      displayDropdown();
                      Logout();
                    }}
                    id="profile-links"
                  >
                    Logout
                  </p>
                </div>
              </div>
            ) : (
              <NavLink to="/login">
                {windowWidth < 450 ? (
                  <CgProfile className="LoginProfileIcon" />
                ) : (
                  <div className="navbar-login-btn">Login</div>
                )}
              </NavLink>
            )}
            <div
              className="navbar-navbar-navlinks-icon"
              onClick={() => {
                setDisplayNav((prev) => !prev);
              }}
            >
              {displayNav ? <GoX /> : <GiHamburgerMenu />}
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
