import React from "react";
import "./about-me.css";
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useUser } from "../../contexts/userDetails/userContext";
import { Link } from "react-router-dom";
function AboutMe() {
  const { myInfo, initialName } = useUser();
  
  return (
    <div className="profile-about-me-main-container">
      <div className="profile-about-me-user-name-container">
        <div className="profile-about-me-circle">
          <div className="profile-about-me-circle-text">{initialName}</div>
        </div>
        <div className="profile-about-me-user-name-role-container">
          <div className="profile-about-me-user-name-text">
            {myInfo.userFullName}
          </div>
          <div className="profile-about-me-role-text">
            {myInfo.userOccupation}
          </div>
        </div>
      </div>
      <div className="profile-about-me-text-main-container">
        <div className="profile-about-me-heading">About Me</div>
        <div className="prfile-about-me-text">
          {myInfo.userBio}
          {/* Suscipit unde sit voluptatum. Cupiditate et provident laboriosam. Qui
          qui laudantium sed rerum. Vero ut saepe suscipit ipsa
          praesentium.Doloremque rerum nesciunt deserunt quae dolor natus ut sed
          consequatur. Dolores velit aut cum. Quos sed sequi qui in. Dicta
          molestiae et nulla optio corporis veniam doloribus. */}
        </div>

        <div className="profile-about-me-icon-container">
          <Link
            target="_blank"
            to={`https://twitter.com/${myInfo.userSocialMediaLinks[1]}`}
          >
            <FaTwitter className="profile-about-me-icon" />
          </Link>
          <Link
            target="_blank"
            to={`https://facebook.com/${myInfo.userSocialMediaLinks[3]}`}
          >
            <FaFacebook className="profile-about-me-icon" />
          </Link>
          <Link
            target="_blank"
            to={`https://instagram.com/${myInfo.userSocialMediaLinks[4]}`}
          >
            <AiFillInstagram className="profile-about-me-icon" />
          </Link>
          <Link
            target="_blank"
            to={`https://youtube.com/${myInfo.userSocialMediaLinks[2]}`}
          >
            <FaYoutube className="profile-about-me-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
