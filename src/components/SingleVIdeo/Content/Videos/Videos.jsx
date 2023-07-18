import React from "react";
import "./videos.css";
import { NavLink } from "react-router-dom";
const Videos = ({ videoDetails }) => {
  return (
    <>

    <NavLink to={`/videoplayer/${videoDetails.id}`}>
      <div className="content-videos-container">
        <div className="content-videos-container-content">
        <div className="content-videos-container-thumbnail">
          <img src={videoDetails.thumbnail} alt="" />
          <div
            className="content-videos-container-thumbnail-playBtn"
            // onClick={() => {
            //   tooglePopup({video});
            // }}
          >
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5491 30.2857C23.9123 30.2857 30.692 23.506 30.692 15.1429C30.692 6.77969 23.9123 0 15.5491 0C7.18594 0 0.40625 6.77969 0.40625 15.1429C0.40625 23.506 7.18594 30.2857 15.5491 30.2857Z"
                fill="white"
                fill-opacity="0.6"
              />
              <path
                d="M12.0547 9.3186L21.3734 15.1428L12.0547 20.967V9.3186Z"
                fill="#F66E24"
              />
            </svg>
          </div>
        </div>
        <div className="content-videos-container-videoDescription">
          <div className="content-videos-container-videoDescription-title">
            {videoDetails.title}
          </div>
          <div className="content-videos-container-videoDescription-videoDuration">
            Video - 30:00
          </div>
        </div>
        </div>
        
      </div>
      </NavLink>
    </>
  );
};

export default Videos;
