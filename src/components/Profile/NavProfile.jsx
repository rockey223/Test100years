import "./account-nav-profile.css";
import React, { useState } from "react";
import BioForm from "./BioForm";
import PwdForm from "./PwdForm";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { useUser } from "../../contexts/userDetails/userContext";
function NavProfile() {
  const {myInfo,initialName} = useUser()
  const [count, setCount] = useState(true);
  function change() {
    setCount(true);
  }
  function noChange() {
    setCount(false);
  }
  var Orange = { color: "#f66e24" };
  var Black = { color: "#000" };
  return (
    <div className="account-bottom-section">
      <div className="account-bottom-left-container">
        <div className="account-bottom-left-container-profile">
          <div className="account-bottom-left-circle">
            <div className="circle-profile-text">{initialName}</div>
            <div className="account-bottom-left-Check-mark">
              <MdVerified className="verified-mark-icon" />
            </div>
          </div>
          <div className="account-profile-text">
            <div className="account-left-profile-username">{myInfo.userFullName}</div>
            <div className="account-left-profile-verified-text">Verified</div>
          </div>
        </div>
        <hr className="account-profile-line" />
        <div className="account-profile-container">
          <div className="account-text-container">
            <FaUserCircle
              style={count ? Orange : Black}
              className="account-text-container-icon"
            />
            <h3
              onClick={change}
              style={count ? Orange : Black}
              className="account-text"
            >
              Account
            </h3>
          </div>
          <div className="profile-text-container">
            <FaUser
              style={count ? Black : Orange}
              className="profile-text-container-icon"
            />
            <h3
              onClick={noChange}
              style={count ? Black : Orange}
              className="profile-text"
            >
              Profile
            </h3>
          </div>
        </div>
      </div>
      {count ? <PwdForm /> : <BioForm />}
      {/* <div className="account-bottom-right-form-container"></div> */}
    </div>
  );
}
export default NavProfile;
