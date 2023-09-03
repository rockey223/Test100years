import React from "react";
import "./courses.css";
import { useState } from "react";
import VideoBox from "./VideoBox";
import Video from "../dummy/Video";

const Courses = ({ tooglePopup, videos }) => {
  const [activeCoursenav, setActiveCourseNav] = useState("94px");
  const [activeNav, setActiveNav] = useState("video");

  const changeActiveNav = (content) => {
    if (content === "article") {
      setActiveCourseNav("288px");
      setActiveNav("article");
    } else if (content === "podcast") {
      setActiveCourseNav("500px");
      setActiveNav("podcast");
    } else if (content === "blog") {
      setActiveCourseNav("690px");
      setActiveNav("blog");
    } else {
      setActiveCourseNav("94px");
      setActiveNav("video");
    }
  };

  return (
    <>
      <div className="courses-container">
        <div className="courses-container-nav">
          <div
            className={`courses-container-nav-item ${
              activeNav === "video" ? "courses-container-nav-item-active" : null
            }`}
            onClick={() => {
              changeActiveNav("video");
            }}
          >
            Video
          </div>
          <div
            className={`courses-container-nav-item ${
              activeNav === "article"
                ? "courses-container-nav-item-active"
                : null
            }`}
            onClick={() => {
              changeActiveNav("article");
            }}
          >
            Articles
          </div>
          <div
            className={`courses-container-nav-item ${
              activeNav === "podcast"
                ? "courses-container-nav-item-active"
                : null
            }`}
            onClick={() => {
              changeActiveNav("podcast");
            }}
          >
            Podccasts
          </div>
          <div
            className={`courses-container-nav-item ${
              activeNav === "blog" ? "courses-container-nav-item-active" : null
            }`}
            onClick={() => {
              changeActiveNav("blog");
            }}
          >
            Blog
          </div>
        </div>
        <div className="courses-container-nav-line">
          {/* <div
            className="courses-container-nav-line-active"
            style={{ left: activeCoursenav }}
          ></div> */}
        </div>

        {(() => {
          switch (activeNav) {
            case "video":
              return (
                <div className="coursesVideo">
                  <VideoBox video={videos} tooglePopup={tooglePopup} />
                </div>
              );

            case "inprogress":
              // return <InProgress OrderedItem={allOrderedItem}  />;
              break;
            case "beingDelivered":
              // return <BeingDelivered OrderedItem={allOrderedItem} />;
              break;
            case "completed":
              // return <Completed OrderedItem={allOrderedItem}  />;
              break;
            case "canceled":
              // return <Canceled OrderedItem={allOrderedItem}  />;
              break;
            default:
            // return <Pending OrderedItem={allOrderedItem} />;
          }
        })()}
      </div>
    </>
  );
};

export default Courses;
