import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import SigngleTop from "./SingleVIdeo/Top/SingleTop";
import SingleWhatYouGet from "./SingleVIdeo/WhatYouGet/SingleWhatYouGet";

// import Video from "./dummy/Video";
import Requirement from "./SingleVIdeo/Requirement/Requirement";
import Who from "./SingleVIdeo/Who/Who";
import Desc from "./SingleVIdeo/Desc/Desc";
// import Content from "./SingleVIdeo/Content/content";
import { FillButton } from "./Helpers/Buttons";
import { TbArticle } from "react-icons/tb";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BiPodcast } from "react-icons/bi";
import { SiBlogger } from "react-icons/si";

import "./SingleVIdeo/SingleVideo.css";
import { useUser } from "../contexts/userDetails/userContext";
import { useVideo } from "../contexts/VideoDetails/videoContext";
const SingleVideo = ({ tooglePopup }) => {
  const API = `${process.env.REACT_APP_API}/mediaUploads`;

  const { level1Videos,level2Videos } = useVideo();
  // window.scrollTo(0, 0);
  const { isloggedIn } = useUser();
 
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // console.log(id);
  // const video = Video.find(({ id }) => id === id);

  const allVideos = [...level1Videos,...level2Videos];
 




  const videoItem = allVideos.find((el) => id === el._id);
 

  const {
    courseVideoAboutThisCourse,
    courseVideoDescription,
    courseVideoInstructorImage,
    courseVideoInstructorName,
    courseVideoRequirements,
    courseVideoThumbnail,
    courseVideoTitle,
    courseVideoWhatYouWillGet,
    courseVideoWhoIsThisFor,
    _id,
  } = videoItem;
  return (
    <>
      <div className="singleVideo-Container" style={{marginTop: '100px'}}>
        {/* ****************************** */}

        {/* ****************************** */}

        <div className="singleVideo-Container-top">
          <div className="singleTop-container-left">
            <div className="singleTop-container-left-title">
              {courseVideoTitle}
            </div>
            <div className="singleTop-container-left-description">
              {courseVideoAboutThisCourse}
            </div>
            {/* <div className="singleTop-container-left-buybtn">$9.99 Buy Now</div> */}

            <FillButton
            className={'singlePage-startBtn'}
              btnTxt="Start Learning"
            width={'156px'}
              disable={isloggedIn ? false : true}
              link={isloggedIn ? `/videoplayer/${_id}` : ""}
            />
            <div className="singleTop-container-left-instrutor">
              <div className="singleTop-container-left-instructor-image">
                <img src={API + "/" + courseVideoInstructorImage} alt="" />
              </div>
              <div className="singleTop-container-instructor-details">
                Instructor: <span>{courseVideoInstructorName}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="singleTop-sticky" >
          <div className="singleTop-container-right">
            <div className="singleTop-container-right-video-box">
              <div className="singleTop-container-right-video-box-thumbnail">
                <img src={API + "/" + courseVideoThumbnail} alt="" />
                <div
                  className="singleTop-container-right-video-box-thumbnail-playBtn"
                  onClick={() => {
                    tooglePopup({ videoItem, courseVideoTitle });
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
                      fillOpacity="0.6"
                    />
                    <path
                      d="M12.0547 9.3186L21.3734 15.1428L12.0547 20.967V9.3186Z"
                      fill="#F66E24"
                    />
                  </svg>

                  <p>Preview This Course</p>
                </div>
              </div>

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

        <div className="singleVideo-page">
          {/* <SigngleTop tooglePopup={tooglePopup} videoDetails={video} /> */}
          <SingleWhatYouGet
            courseVideoWhatYouWillGet={courseVideoWhatYouWillGet}
          />
          <Requirement courseVideoRequirements={courseVideoRequirements} />
          <Who courseVideoWhoIsThisFor={courseVideoWhoIsThisFor} />
          <Desc courseVideoDescription={courseVideoDescription} />
          {/* <Content videoDetails={video} /> */}
        </div>
      </div>
    </>
  );
};

export default SingleVideo;
