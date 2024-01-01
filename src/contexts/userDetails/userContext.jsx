import React, { useContext, useEffect, useReducer } from "react";

import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import userDetailsFunctions from "../../FunctionCollection/userDetails/userDetailsFunctions";
import axios from "axios";
import { toast } from "react-toastify";
const userDetails = createContext();

const initialState = {
  isloggedIn: false,
  myInfo: {},
  initialName: "",
  isLoading: false,
  displayOverLay: true
};

const API = `${process.env.REACT_APP_API}/api`;
const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(userDetailsFunctions, initialState);

  // Get User Details
  const getUserDetails = () => {
    axios
      .get(`${API}/getMyInfo`, { withCredentials: true })
      .then((res) => {
        
        const user = res.data.user;
        const userName = res.data.user.userFullName[0];
        dispatch({ type: "GET_MY_INFO", payload: { user, userName } });
      })
      .catch((err) => {
        dispatch({ type: "GET_MY_INFO_ERROR", payload: err });
      });
  };

  // Login Function
  function Login(email, password) {
    console.log(API);
    // e.preventDefault();
    dispatch({ type: "SET_LOADING" });

    axios
      .post(
        `${API}/userLogin`,
        {
          userEmail: email,
          userPassword: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.success === true) {
          console.log(res.data);

          const user = res.data.user;
          navigate("/");
          const userName = res.data.user.userFullName[0];
          dispatch({ type: "LOGIN", payload: { user, userName } });
        }
      })
      .catch((err) => {
        dispatch({ type: "UNSET_lOADING" });
        if (!err.response) {
          toast.error(err.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        console.log(err);
      });
  }

  // signup function
  function Signup(signupDetails) {
    dispatch({ type: "SET_LOADING" });

    axios
      .post(
        `${API}/userRegister`,
        {
          userEmail: signupDetails.signupEmail,
          userPassword: signupDetails.signupPassword,
          userConfirmPassword: signupDetails.signupRePassword,
          userFullName: signupDetails.signupFullname,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.success === true) {
          console.log(res.data.user);

          const user = res.data.user;
          navigate("/");
          const userName = res.data.user.userFullName[0];
          dispatch({ type: "SIGNUP", payload: { user, userName } });
        }
      })
      .catch((err) => {
        dispatch({ type: "UNSET_lOADING" });
        if (!err.response) {
          toast.error(err.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        console.log(err);
      });
  }

  // update userDetails Function

  function updateUser(updateInfo) {
    // console.log(updateInfo);

    axios
      .patch(
        `${API}/updateUserDetails`,
        {
          userFullName: updateInfo.userFullName,
          userOccupation: updateInfo.userOccupation,
          userBio: updateInfo.userBio,
          userSocialMediaLinks: updateInfo.userSocialMediaLinks,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        getUserDetails();
      })
      .catch((err) => {
        if (!err.response) {
          toast.error(err.message, {});
        } else {
          toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        console.log(err);
      });
  }

  //change password
  function ChangePassword(password, setPasswords) {
    dispatch({ type: "SET_LOADING" });
    axios
      .put(`${API}/changeUserPassword`, password, { withCredentials: true })
      .then((res) => {
        setPasswords({
          oldUserPassword: "",
          newUserPassword: "",
          confirmUserPassword: "",
        });
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.log(res);
        dispatch({ type: "UNSET_lOADING" });
      })
      .catch((err) => {
        dispatch({ type: "UNSET_lOADING" });
        if (!err.response) {
          toast.error(err.message, {});
        } else {
          toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        console.log(err);
      });
  }

  // Logout function
  function Logout() {
    axios
      .get(`${API}/userLogout`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        dispatch({ type: "LOGOUT", payload: {} });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getUserDetails();
  }, []);

  function HideOverlay (){
    console.log('close')
    dispatch({type: 'HIDE_OVERLAY'})
  }

  return (
    <userDetails.Provider
      value={{ ...state, Logout, Login, Signup, updateUser, ChangePassword,HideOverlay }}
    >
      {children}
    </userDetails.Provider>
  );
};

const useUser = () => {
  return useContext(userDetails);
};

export { UserProvider, useUser };
