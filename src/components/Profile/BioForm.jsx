import React from "react";
import "./account-form.css";
import "react-toastify/dist/ReactToastify.css";

import {useUser} from "../../contexts/userDetails/userContext"

function BioForm() {
  const {myInfo} = useUser();
  const [info, setInfo] = React.useState({
    name: "",
    occupation: "",
    bio: "",
    website: "",
    twitter: "",
    youtube: "",
    facebook: "",
    instagram: ""
  });
  const [showInfo, setShowInfo] = React.useState("");
  function handleChange(event) {
    const { name, value } = event.target;
    setInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function handleClick(event) {
    event.preventDefault();
    setShowInfo(info);
    alert(
      "Name: " +
        info.name +
        "\n occupation: " +
        info.occupation +
        "\n bio: " +
        info.bio +
        "\n website: " +
        info.website +
        "\n twitter: " +
        info.twitter +
        "\n youtube: " +
        info.youtube +
        "\n facebook: " +
        info.facebook +
        "\n instagram: " +
        info.instagram
    );
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
          name="name"
          value={myInfo.userFullName}
        />
        <input
          type="text"
          className="profile-form-occupation-input-field"
          placeholder="Occupation"
          onChange={handleChange}
          name="occupation"
          value={info.occupation}
        />
        <textarea
          className="profile-form-bio-input-box"
          placeholder="Bio"
          onChange={handleChange}
          name="bio"
          value={info.bio}
        ></textarea>
      </div>
      <hr className="profile-form-line" />
      <div className="profile-form-link-container">
        <label className="profile-form-link-heading">Links</label>
        <input
          type="url"
          className="profile-form-website-link-input-field"
          placeholder="Website Link"
          onChange={handleChange}
          name="website"
          value={info.website}
        />
        <div className="profile-form-twitter-container">
          <div className="profile-form-twitter-input-text-box">
            http:/twitter.com/
          </div>
          <input
            type="url"
            className="profile-form-twitter-input-field"
            placeholder="Twitter Profile"
            onChange={handleChange}
            name="twitter"
            value={info.twitter}
          />
        </div>
        <div className="profile-form-youtube-container">
          <div className="profile-form-youtube-input-text-box">
            http:/youtube.com/
          </div>
          <input
            type="url"
            className="profile-form-youtube-input-field"
            placeholder="Youtube Profile"
            onChange={handleChange}
            name="youtube"
            value={info.youtube}
          />
        </div>
        <div className="profile-form-facebook-container">
          <div className="profile-form-facebook-input-text-box">
            http:/facebook.com/
          </div>
          <input
            type="url"
            className="profile-form-facebook-input-field"
            placeholder="Facebook Profile"
            onChange={handleChange}
            name="facebook"
            value={info.facebook}
          />
        </div>
        <div className="profile-form-instagram-container">
          <div className="profile-form-instagram-input-text-box">
            http:/Instagram.com/
          </div>
          <input
            type="url"
            className="profile-form-instagram-input-field"
            placeholder="Instagram Profile"
            onChange={handleChange}
            name="instagram"
            value={info.instagram}
          />
        </div>
      </div>
      <div className="profile-form-save-btn-container">
        <button
          onClick={handleClick}
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
