import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { LoginProvider } from './contexts/loginContext';
import { UserProvider } from "../src/contexts/userDetails/userContext";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoProvider } from "./contexts/VideoDetails/videoContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
      <Router>
  <UserProvider>
      <VideoProvider>
        <App />
      </VideoProvider>
    </UserProvider>
  </Router>
);
