import React from "react";
import "./mainoverlay.css";
import { CgCloseO } from "react-icons/cg";
const MainOverlay = ({ hideOverlay }) => {
  return (
    <div className="main-overlay">
      <div className="overlay-image-container">
      <div className="close-Overlay-btn-div" onClick={hideOverlay}>
        <CgCloseO className="close-overlay-btn" />
      </div>
        <img
          src="https://i.postimg.cc/x14r6gg7/bill-board.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default MainOverlay;
