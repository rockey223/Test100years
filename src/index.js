import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { LoginProvider } from './contexts/loginContext';
import { UserProvider } from "../src/contexts/userDetails/userContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Router>
  <UserProvider>
      <App />
  </UserProvider>
    </Router>
);
