import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import './whatyouget.css';
const WhatYouGet = ({levelDetails}) => {
  console.log(levelDetails);
  const {LevelwhatYouGet} = levelDetails
  return (
    <>
      <div className="what-container">
        <div className="what-container-content">
          <div className="what-container-content-title">What You Will Get?</div>
          <div className="what-container-content-points">
            {
              LevelwhatYouGet.map((lwyg)=>{
            <div className="what-container-content-points-point">
              <BsCheck2Circle className="what-container-content-points-icon"/> {lwyg.point}
            </div>

              })
            }
            {/* <div className="what-container-content-points-point">
              <BsCheck2Circle className="what-container-content-points-icon"/> You will learn, a healthy habit for living 100
              years:
            </div>
            <div className="what-container-content-points-point">
              <BsCheck2Circle className="what-container-content-points-icon"/> You will learn, a healthy habit for living 100
              years:
            </div>
            <div className="what-container-content-points-point">
              <BsCheck2Circle className="what-container-content-points-icon"/> You will learn, a healthy habit for living 100
              years:
            </div>
            <div className="what-container-content-points-point">
              <BsCheck2Circle className="what-container-content-points-icon"/> You will learn, a healthy habit for living 100
              years:
            </div>
            <div className="what-container-content-points-point">
              <BsCheck2Circle className="what-container-content-points-icon"/> You will learn, a healthy habit for living 100
              years:
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatYouGet;
