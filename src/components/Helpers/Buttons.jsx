import React from "react";
import "./buttons.css";
import { Link } from "react-router-dom";
const OutLineButton = ({ btnTxt, width, height, className }) => {
  return (
    <>
      <div
        className={`outline-btn ${className ? className : ""}`}
        style={{ width: width, height: height }}
      >
        {btnTxt}
      </div>
    </>
  );
};
const FillButton = ({ btnTxt, width, height, disable, className, link }) => {
  return (
    <>
      <Link  
        to={link === null ? null : link}
        style={{ display: "block", width: width, height: height }}
        
      >
        <div
          className={`fill-btn ${className ? className : ""}`}
          style={{
            width: width,
            height: height,
            background: disable ? "#868686" : "",
          }}
        >
          {btnTxt}
        </div>
      </Link>
    </>
  );
};

export { OutLineButton, FillButton };
