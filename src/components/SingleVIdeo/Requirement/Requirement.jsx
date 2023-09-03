import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import "./requirement.css";
const Requirement = ({ courseVideoRequirements }) => {
  return (
    <>
      <div className="requirement-container">
        <div className="requirement-container-content">
          <div className="requirement-container-content-title">Requirement</div>
          <div className="requirement-container-content-points">
            {courseVideoRequirements.map((requirement,index) => {
              return (
                <div key={index} className="requirement-container-content-points-point">
                  <BsCheck2Circle className="requirement-container-content-points-icon" />
                  {requirement}
                </div>
              );
            })}

            {/* <div className="requirement-container-content-points-point">
              <BsCheck2Circle className="requirement-container-content-points-icon" />
              You will learn, a healthy habit for living 100 years:
            </div>
            <div className="requirement-container-content-points-point">
              <BsCheck2Circle className="requirement-container-content-points-icon" />
              You will learn, a healthy habit for living 100 years:
            </div>
            <div className="requirement-container-content-points-point">
              <BsCheck2Circle className="requirement-container-content-points-icon" />
              You will learn, a healthy habit for living 100 years:
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Requirement;
