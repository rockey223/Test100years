import React, { useState } from "react";
import "./account-password-form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useUser} from "../../contexts/userDetails/userContext"
function PwdForm() {
  const {myInfo} = useUser();
  const [info, setInfo] = React.useState({
    email: myInfo.userEmail,
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
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
    console.log(showInfo);
    if (info.newPassword === info.confirmPassword) {
      alert(
        "Email: " +
          info.email +
          "\nCurrent Password: " +
          info.currentPassword +
          "\nNew Password: " +
          info.newPassword +
          "\nConfirm Password: " +
          info.confirmPassword
      );
    } else
      toast.error("New Password and Confirm password must be Same!", {
        position: toast.POSITION.TOP_CENTER
      });
  }
  const [edit, setEdit] = useState(true);
  // const inputRef = useRef();
  function editClick(event) {
    setEdit((prevValue) => !prevValue);
    event.preventDefault();
    // if (edit === false) {
    //   inputRef.current.focus();
    //   console.log(inputRef.current);
    // }
  }
  return (
    <div className="account-bottom-right-form-container">
      <div className="account-form-email-container">
        <label className="account-form-email" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className="account-form-email-input-field"
          placeholder="abcxyz@gmail.com" // ref={inputRef}
          onChange={handleChange}
          name="email"
          value={info.email}
          disabled={edit}
        />
        <button
          className="account-form-email-input-field-edit-btn"
          onClick={editClick}
        >
     
          {edit ? "edit" : "done"}
        </button>
      </div>
      <hr className="account-form-line" />
      <div className="account-form-password-container">
        <label className="account-form-password">Password</label>
        <input
          type="password"
          className="account-form-password-input-field"
          placeholder="Enter Current password"
          onChange={handleChange}
          name="currentPassword"
          value={info.currentPassword}
          required
        />
        <input
          type="password"
          className="account-form-password-input-field"
          placeholder="Enter New Password"
          onChange={handleChange}
          name="newPassword"
          value={info.newPassword}
          required
        />
        <input
          type="password"
          className="account-form-password-input-field"
          placeholder="Comfirm Password"
          onChange={handleChange}
          name="confirmPassword"
          value={info.confirmPassword}
          required
        />
      </div>
      <div className="account-form-save-btn-container">
        <button
          type="submit"
          className="account-form-save-btn"
          onClick={handleClick}
        >
          Save
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}
export default PwdForm;
