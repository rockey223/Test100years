import React from "react";
import "./header.css";
function Header(props) {
  return (
    <div className="header-container" style={{marginTop: '100px'}}>
      <div className="header-container-item">
        <div className="header-container-item-heading">
          <div className="header-container-item-bar"></div>
          <div className="header-container-item-title">{props.heading}</div>
        </div>
        <div className="header-container-item-text">{props.headingtext}</div>
      </div>
    </div>
  );
}
export default Header;
