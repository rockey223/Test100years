import React from "react";

import "./desc.css";
const Desc = ({courseVideoDescription}) => {
  return (
    <>
      <div className="desc-container">
        <div className="desc-container-content">
          <div className="desc-container-content-title">Description</div>
          <div className="desc-container-content-points">
            <div className="desc-container-content-points-point">
              {courseVideoDescription}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desc;
