import React from "react";
import video from "./video.mp4";
import "./videopopup.css";
import { CgClose } from "react-icons/cg";
const VideoPopUp = ({ videoUrl, close, details, title }) => {
  // console.log(close)
  // console.log(details.video.title);
console.log(details);
const {
  courseVideoAboutThisCourse,
  courseVideoCategory,
  courseVideoDescription,
  courseVideoDuration,
  courseVideoInstructorImage,
  courseVideoInstructorName,
  courseVideoLevel,
  courseVideoPreview,
  courseVideoRequirements,
  courseVideoThumbnail,
  courseVideoTitle,
  courseVideoWhatYouWillGet,
  courseVideoWhoIsThisFor,
  _id,
} = details;

  const API = `${process.env.REACT_APP_API}/mediaUploads`;
  return (
    <>
      <div className="videoPop-Container-main">
        <div className="videoPopUp-bg">
        <div className="videoPopUp">
          <div className="videoPopup-container">
            <div
              className="videoPopup-container-close"
              onClick={() => {
                close(false);
              }}
            >
              <CgClose />
            </div>
            <div className="videoPopup-container-top-container">
              <div className="videoPopup-container-preview-text">
                Course preview
              </div>
              <div className="videoPopup-container-video-title">
                {details.courseVideoTitle}
              </div>
            </div>

            <video controls autoPlay>
              <source src={`${API}/${details.videoItem.courseVideoPreview}`} type="video/mp4" />
            </video>
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default VideoPopUp;
