// import React, { useState } from "react";
// import VideoPopUp from "../../Helpers/VideoPopUp";
import video from "../../Home/HealtGuides/video.mp4";
import "./top.css";
import { FillButton } from "../../Helpers/Buttons";
import { TbArticle } from "react-icons/tb";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BiPodcast } from "react-icons/bi";
import { SiBlogger } from "react-icons/si";
// import SingleVideo from "../../SingleVideo";
const SingleTop = ({ tooglePopup, videoDetails }) => {
  // console.log(videoDetails);

  return (
    <>
      <div className="singleTop-container">
        <div className="singleTop-container-left">
          <div className="singleTop-container-left-title">{videoDetails.title}</div>
          <div className="singleTop-container-left-description">
            {videoDetails.description}
          </div>
          {/* <div className="singleTop-container-left-buybtn">$9.99 Buy Now</div> */}
          <FillButton
            btnTxt={"30 minutes"}
            width={"156px"}
            height={"48px"}
            disable={true}
          />
          <div className="singleTop-container-left-instrutor">
            <div className="singleTop-container-left-instructor-image">
              <img src={videoDetails.thumbnail} alt="" />
            </div>
            <div className="singleTop-container-instructor-details">
              Instructor: <span>{videoDetails.instructor}</span>
            </div>
          </div>
        </div>
        <div className="singleTop-container-right">
          <div className="singleTop-container-right-video-box">
            <div className="singleTop-container-right-video-box-thumbnail">
              <img src={videoDetails.thumbnail} alt="" />
              <div
                className="singleTop-container-right-video-box-thumbnail-playBtn"
                onClick={() => {
                  tooglePopup({ video });
                }}
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

                <p>Preview This Course</p>
              </div>
            </div>
            {/* <OutLineButton btnTxt={"Preview"} className="singleTop-container-right-video-box-btn" width={'111px'} height={'35px'}/> */}
            <div className="singleTop-container-right-video-box-tagline">
              For your Better Tomorrow
            </div>
          </div>
          <div className="singleTop-container-right-video-desc">
            <div className="singleTop-container-right-video-box-descTitle">
              This course contains
            </div>
            <ul>
              <li>
                <TbArticle className="singleTop-container-right-video-box-icon" />
                Article
              </li>
              <li>
                <BsFillCameraVideoFill className="singleTop-container-right-video-box-icon" />
                Video
              </li>
              <li>
                <BiPodcast className="singleTop-container-right-video-box-icon" />{" "}
                Podcast
              </li>
              <li>
                <SiBlogger className="singleTop-container-right-video-box-icon" />{" "}
                Customer Experience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTop;
