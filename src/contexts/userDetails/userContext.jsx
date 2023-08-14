import React, { useContext, useEffect, useReducer, useState } from "react";

import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import userDetailsFunctions from "../../FunctionCollection/userDetails/userDetailsFunctions";
import axios from "axios";
const userDetails = createContext();

const initialState = {
  isloggedIn: false,
  myInfo: {},
  initialName: "",
  
};
const API = "http://192.168.101.6:8000/api/getMyInfo";
const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(userDetailsFunctions, initialState);

  // Get User Details
  const getUserDetails = (url) => {
    axios
      .get(url, { withCredentials: true })
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
  function Login(e, email, password) {
    e.preventDefault();

    axios
      .post(
        "http://192.168.101.6:8000/api/userLogin",
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
          navigate(-1);
          const userName = res.data.user.userFullName[0];
          dispatch({ type: "LOGIN", payload: { user, userName } });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // signup function
  function Signup(e, signupDetails) {
    e.preventDefault();

    axios
      .post(
        "http://192.168.101.6:8000/api/userRegister",
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
        console.log(err);
      });
  }

  // Logout function
  function Logout() {
    axios("http://192.168.101.6:8000/api/userLogout", {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch({ type: "LOGOUT", payload: {} });
  }
  useEffect(() => {
    getUserDetails(API);
  }, []);

  return (
    <userDetails.Provider value={{ ...state, Logout, Login, Signup }}>
      {children}
    </userDetails.Provider>
  );
};

const useUser = () => {
  return useContext(userDetails);
};

export { UserProvider, useUser };
