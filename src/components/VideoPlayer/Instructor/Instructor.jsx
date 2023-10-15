import React from "react";
import "./instructor.css";
const Instructor = ({ videoDetails }) => {
  const API = `${process.env.REACT_APP_API}/mediaUploads`;
  return (
    <>
      <div className="instructor-container">
        <div className="instructor-container-content">
          <div className="instructor-container-content-title">Instructor</div>
          <div className="instructor-container-content-details">
            <div className="instructor-container-content-details-image">
              <img
                src={API + "/" + videoDetails.courseVideoInstructorImage}
                alt=""
              />
            </div>
            <div className="instructor-container-content-details-content">
              <div className="instructor-container-content-details-content-name">
                {videoDetails.courseVideoInstructorName}
              </div>
              <div className="instructor-container-content-details-content-details">
                {videoDetails.courseVideoDescription}
                {/* here goes instructors details */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor;
