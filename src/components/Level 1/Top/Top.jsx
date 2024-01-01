// import React, { useState } from "react";
// import VideoPopUp from "../../Helpers/VideoPopUp";
// import video from "../../Home/HealtGuides/video.mp4";
import "./top.css";
import { FillButton } from "../../Helpers/Buttons";
import { TbArticle } from "react-icons/tb";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BiPodcast } from "react-icons/bi";
import { SiBlogger } from "react-icons/si";
import { useVideo } from "../../../contexts/VideoDetails/videoContext";
import { useUser } from "../../../contexts/userDetails/userContext";
const Top = ({ tooglePopup, levelDetails, link, video }) => {
  const { myInfo } = useUser();
  var title = levelDetails.levelTitle;
  const { changeIsStatic } = useVideo();

  return (
    <>
      <div className="top-container" style={{ marginTop: "100px" }}>
        <div className="top-container-left">
          <div className="top-container-left-level">
            {levelDetails.levelName}
          </div>
          <div className="top-container-left-title">
            {levelDetails.levelTitle}
          </div>
          <div className="top-container-left-description">
            {levelDetails.levelDesc}
          </div>
          {/* <div className="top-container-left-buybtn">$9.99 Buy Now</div> */}
          {myInfo.userLevel == "level1" && link == "level1" ? (
            ""
          ) : myInfo.userLevel == "level2" ? (
            ""
          ) : (
            <FillButton
              link={`/checkout/${link}`}
              btnTxt={`$${levelDetails.levelPrice} Buy Now`}
              width={"156px"}
              height={"48px"}
            />
          )}
        </div>
        <div className="top-container-right">
          <div className="top-container-right-video-box">
            <div className="top-container-right-video-box-thumbnail">
              <img
                src="https://i.postimg.cc/Qt1w0LL0/Are-you-as-healthy-as-you-think-i-Stock-1140193165-500x409.jpg"
                alt=""
              />
              <div
                className="top-container-right-video-box-thumbnail-playBtn"
                onClick={() => {
                  changeIsStatic();
                  tooglePopup({ video, title });
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
            {/* <OutLineButton btnTxt={"Preview"} className="top-container-right-video-box-btn" width={'111px'} height={'35px'}/> */}
            <div className="top-container-right-video-box-tagline">
              For your Better Tomorrow
            </div>
          </div>
          <div className="top-container-right-video-desc">
            <div className="top-container-right-video-box-descTitle">
              This course contains
            </div>
            <ul>
              <li>
                <TbArticle className="top-container-right-video-box-icon" />
                Article
              </li>
              <li>
                <BsFillCameraVideoFill className="top-container-right-video-box-icon" />
                Video
              </li>
              <li>
                <BiPodcast className="top-container-right-video-box-icon" />{" "}
                Podcast
              </li>
              <li>
                <SiBlogger className="top-container-right-video-box-icon" />{" "}
                Customer Experience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
