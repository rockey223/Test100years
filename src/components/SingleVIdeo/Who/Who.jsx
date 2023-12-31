import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import "./who.css";
const Who = ({ courseVideoWhoIsThisFor }) => {
  return (
    <>
      <div className="who-container">
        <div className="who-container-content">
          <div className="who-container-content-title">Who Is This For </div>
          <div className="who-container-content-points">
            {courseVideoWhoIsThisFor.map((whois,index) => {
              return (
                <div key={index} className="who-container-content-points-point">
                  <BsCheck2Circle className="who-container-content-points-icon" />
                  {whois}
                </div>
              );
            })}
            {/* <div className="who-container-content-points-point">
              <BsCheck2Circle className="who-container-content-points-icon" />
              You will learn, a healthy habit for living 100 years: You will learn, a healthy habit for living 100 years:
            </div>
            <div className="who-container-content-points-point">
              <BsCheck2Circle className="who-container-content-points-icon" />
              You will learn, a healthy habit for living 100 years: You will learn, a healthy habit for living 100 years:
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Who;
