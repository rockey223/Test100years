import React, { useState } from "react";
import "./account-form.css";
import "react-toastify/dist/ReactToastify.css";

import { useUser } from "../../contexts/userDetails/userContext";

function BioForm() {
  const { myInfo, updateUser } = useUser();

  const [info, setInfo] = useState({
    userFullName: myInfo.userFullName || "",
    userOccupation: myInfo.userOccupation || "",
    userBio: myInfo.userBio || "",
    userSocialMediaLinks: myInfo.userSocialMediaLinks || "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleSocialMedia(e, index) {
    setInfo((prev) => {
      const updatedLinks = [...prev.userSocialMediaLinks];
      updatedLinks[index] = e.target.value;
      return {
        ...prev,
        userSocialMediaLinks: updatedLinks,
      };
    });
  }

  return (
    <div className="profile-bottom-right-form-container">
      <div className="profile-form-basic-container">
        <label className="profile-form-basic-heading">Basic</label>
        <input
          type="text"
          className="profile-form-name-input-field"
          placeholder="Name"
          onChange={handleChange}
          name="userFullName"
          value={info.userFullName}
        />
        <input
          type="text"
          className="profile-form-occupation-input-field"
          placeholder="Occupation"
          onChange={handleChange}
          name="userOccupation"
          value={info.userOccupation}
        />
        <textarea
          className="profile-form-bio-input-box"
          placeholder="Bio"
          onChange={handleChange}
          name="userBio"
          value={info.userBio}
        ></textarea>
      </div>
      <hr className="profile-form-line" />
      <div className="profile-form-link-container">
        <label className="profile-form-link-heading">Links</label>
        <input
          type="url"
          className="profile-form-website-link-input-field"
          placeholder="Website Link"
          onChange={(e) => handleSocialMedia(e, 0)}
          name="userSocialMediaLinks"
          value={info.userSocialMediaLinks[0]}
        />
        <div className="profile-form-twitter-container">
          <div className="profile-form-twitter-input-text-box">
            https://twitter.com/
          </div>
          <input
            type="text"
            className="profile-form-twitter-input-field"
            placeholder="Twitter Profile"
            onChange={(e) => handleSocialMedia(e, 1)}
            name="userSocialMediaLinks"
            value={info.userSocialMediaLinks[1]}
          />
        </div>
        <div className="profile-form-youtube-container">
          <div className="profile-form-youtube-input-text-box">
            https://youtube.com/
          </div>
          <input
            type="text"
            className="profile-form-youtube-input-field"
            placeholder="Youtube Profile"
            onChange={(e) => handleSocialMedia(e, 2)}
            name="userSocialMediaLinks"
            value={info.userSocialMediaLinks[2]}
          />
        </div>
        <div className="profile-form-facebook-container">
          <div className="profile-form-facebook-input-text-box">
            https://facebook.com/
          </div>
          <input
            type="text"
            className="profile-form-facebook-input-field"
            placeholder="Facebook Profile"
            onChange={(e) => handleSocialMedia(e, 3)}
            name="userSocialMediaLinks"
            value={info.userSocialMediaLinks[3]}
          />
        </div>
        <div className="profile-form-instagram-container">
          <div className="profile-form-instagram-input-text-box">
            https://Instagram.com/
          </div>
          <input
            type="text"
            className="profile-form-instagram-input-field"
            placeholder="Instagram Profile"
            onChange={(e) => handleSocialMedia(e, 4)}
            name="userSocialMediaLinks"
            value={info.userSocialMediaLinks[4]}
          />
        </div>
      </div>
      <div className="profile-form-save-btn-container">
        <button
          onClick={() => {
            updateUser(info);
          }}
          type="submit"
          className="profile-form-save-btn"
        >
          Save
        </button>
      </div>
    </div>
  );
}
export default BioForm;
