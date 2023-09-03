import React from "react";
// import { BsCheck2Circle } from "react-icons/bs";
import './playerDesc.css';
const PlayerDesc = ({courseVideoDescription}) => {
 
  return (
    <>
      <div className="playerDesc-container">
        <div className="playerDesc-container-content">
          <div className="playerDesc-container-content-title">Description</div>
          <div className="playerDesc-container-content-points">

            <div className="playerDesc-container-content-points-point">
              {courseVideoDescription}
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerDesc;
