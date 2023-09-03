import React, { useState } from "react";
import "./account-password-form.css";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../contexts/userDetails/userContext";
import Loader from "../Helpers/Loader/Loader";
function PwdForm() {
  const { myInfo, ChangePassword,isLoading } = useUser();

  const [passwords, setPasswords] = useState({
    oldUserPassword: "",
    newUserPassword: "",
    confirmUserPassword: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setPasswords((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
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
        <label className="account-form-email" htmlFor="userEmail">
          Email
        </label>
        <input
        id="userEmail"
          type="email"
          className="account-form-email-input-field"
          placeholder="abcxyz@gmail.com" // ref={inputRef}
          name="userEmail"
          value={myInfo.userEmail}
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
        <label className="account-form-password" htmlFor="oldPassword">Password</label>
        <input
        id="oldPassword"
          type="password"
          className="account-form-password-input-field"
          placeholder="Enter Current password"
          onChange={handleChange}
          name="oldUserPassword"
          value={passwords.oldUserPassword}
          required
        />
        <input
          type="password"
          className="account-form-password-input-field"
          placeholder="Enter New Password"
          onChange={handleChange}
          name="newUserPassword"
          value={passwords.newUserPassword}
          required
        />
        <input
          type="password"
          className="account-form-password-input-field"
          placeholder="Comfirm Password"
          onChange={handleChange}
          name="confirmUserPassword"
          value={passwords.confirmUserPassword}
          required
        />
      </div>
      <div className="account-form-save-btn-container">
        <button
          type="submit"
          className="account-form-save-btn"
          onClick={() => ChangePassword(passwords, setPasswords)}
        >{
          isLoading? <Loader/> : "Save"
        }
         
        </button>
       
      </div>
    </div>
  );
}
export default PwdForm;
