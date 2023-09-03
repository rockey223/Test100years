import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import "./aboutthiscourse.css";
const AboutThisCourse = ({ courseVideoAboutThisCourse }) => {
  return (
    <>
      <div className="aboutThisCourse-container">
        <div className="aboutThisCourse-container-content">
          <div className="aboutThisCourse-container-content-title">
            About This Course{" "}
          </div>
          <div className="aboutThisCourse-container-content-points">
            {courseVideoAboutThisCourse.map((aboutCourse, index) => {
              return (
                <div
                  key={index}
                  className="aboutThisCourse-container-content-points-point"
                >
                  <BsCheck2Circle className="aboutThisCourse-container-content-points-icon" />
                  {aboutCourse}
                </div>
              );
            })}
            {/* <div className="aboutThisCourse-container-content-points-point">
              <BsCheck2Circle className="aboutThisCourse-container-content-points-icon" />
              You will learn, a healthy habit for living 100 years: You will learn, a healthy habit for living 100 years:
            </div>
            <div className="aboutThisCourse-container-content-points-point">
              <BsCheck2Circle className="aboutThisCourse-container-content-points-icon" />
              You will learn, a healthy habit for living 100 years: You will learn, a healthy habit for living 100 years:
            </div>
            <div className="aboutThisCourse-container-content-points-point">
              <BsCheck2Circle className="aboutThisCourse-container-content-points-icon" />
              You will learn, a healthy habit for living 100 years: You will learn, a healthy habit for living 100 years:
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutThisCourse;
