import React from "react";
import "./videoBox.css";
import { Link } from "react-router-dom";
import { FillButton } from "./Buttons";
// import Level1 from "../Level1";
import { useVideo } from "../../contexts/VideoDetails/videoContext";
const VideoBox = ({ video, tooglePopup }) => {
  // console.log(videoItem)

  // console.log(videoItem);
  const API = `${process.env.REACT_APP_API}/mediaUploads`;
  const {ChangefalseStatic} = useVideo()
  return (
    <>
      {video.map((videoItem) => {
        // console.log(videoItem);

        const {
          courseVideoCategory,
          courseVideoDuration,
          courseVideoThumbnail,
          courseVideoTitle,
          _id
        } = videoItem;

        // const { id, title, category, videTime, happy, thumbnail } = videoItem;

        return (
          <div key={_id} className="VideoBox-container">
            <div className="VideoBox-container-thumbnail">
              <img src={`${API}/${courseVideoThumbnail}`} alt="" />
              <div
                className="VideoBox-container-thumbnail-playBtn"
                onClick={() => {
                  ChangefalseStatic();
                  tooglePopup({ videoItem, courseVideoTitle });
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
                  {courseVideoCategory}
                </div>
                <div className="VideoBox-container-textContent-videoDetails-title">
                  {courseVideoTitle}
                </div>
              </div>
              <div className="VideoBox-container-textContent-bottom">
                <div className="VideoBox-container-textContent-bottom-videoDuration">
                  {courseVideoDuration}
                </div>
                <div className="VideoBox-container-textContent-bottom-numberOfLearners">
                  25 happy learner
                </div>
              </div>
            </div>
            <div className="VideoBox-container-button">
              <FillButton
              link={`/videoplayer/${_id}`}
              className={"startLearning"}
                btnTxt={"Start Learning"}
                // height={"50px"}
                // width={"186px"}
              />

              <Link to={`/singlevideo/${_id}`}>
                <div className="VideoBox-container-button-text">More Info</div>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default VideoBox;
