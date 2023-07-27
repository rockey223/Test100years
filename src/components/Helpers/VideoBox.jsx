import React from "react";
import "./videoBox.css";
import { Link, NavLink } from "react-router-dom";
import { FillButton } from "./Buttons";

const VideoBox = ({ video, open }) => {
  // console.log(videoItem)

  // console.log(videoItem);

  return (
    <>
      {video.map((videoItem) => {
        console.log(videoItem);
        const { id, title, category, videTime, happy, thumbnail } = videoItem;

        return (
          <div key={id} className="VideoBox-container">
            <div className="VideoBox-container-thumbnail">
              <img src={thumbnail} alt="" />
              <div
                className="VideoBox-container-thumbnail-playBtn"
                onClick={() => {
                  open({videoItem,title});
                }}
              >
                <svg
                  width="60"
                  height="59"
                  viewBox="0 0 60 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.9693 58.9455C46.098 58.9455 59.1729 45.8706 59.1729 29.7418C59.1729 13.6131 46.098 0.538208 29.9693 0.538208C13.8405 0.538208 0.765625 13.6131 0.765625 29.7418C0.765625 45.8706 13.8405 58.9455 29.9693 58.9455Z"
                    fill="white"
                  />
                  <path
                    d="M23.2295 18.5098L41.201 29.7419L23.2295 40.9741V18.5098Z"
                    fill="#F66E24"
                  />
                </svg>
                <p>Preview This Course</p>
              </div>
            </div>

            <div className="VideoBox-container-textContent">
              <div className="VideoBox-container-textContent-videoDetails">
                <div className="VideoBox-container-textContent-videoDetails-category">
                  {category}
                </div>
                <div className="VideoBox-container-textContent-videoDetails-title">
                  {title}
                </div>
              </div>
              <div className="VideoBox-container-textContent-bottom">
                <div className="VideoBox-container-textContent-bottom-videoDuration">
                  {videTime}
                </div>
                <div className="VideoBox-container-textContent-bottom-numberOfLearners">
                  {happy} happy learner
                </div>
              </div>
            </div>
            <div className="VideoBox-container-button">
              <FillButton btnTxt={'Start Learning'} height={'50px'} width={'186px'} />

              <Link to={`/singlevideo/${id}`}>


              <div className="VideoBox-container-button-text">
                More Info
              </div>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default VideoBox;
