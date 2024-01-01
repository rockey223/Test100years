import React from "react";
import "./courses.css";
// import { useState } from "react";
import VideoBox from "./VideoBox";
// import Video from "../dummy/Video";
import NotFound from "./NotFound";

const Courses = ({ tooglePopup, videos,link }) => {
  //remove comment for animations of articals, podcasts, and bolg when navigated
  // const [activeCoursenav, setActiveCourseNav] = useState("94px");
  const activeNav = "video";
  // const [activeNav, setActiveNav] = useState("video");

  // const changeActiveNav = (content) => {
  //   if (content === "article") {
  //     setActiveCourseNav("288px");
  //     setActiveNav("article");
  //   } else if (content === "podcast") {
  //     setActiveCourseNav("500px");
  //     setActiveNav("podcast");
  //   } else if (content === "blog") {
  //     setActiveCourseNav("690px");
  //     setActiveNav("blog");
  //   } else {
  //     setActiveCourseNav("94px");
  //     setActiveNav("video");
  //   }
  // };
  console.log(videos);
  return (
    <>
      <div className="courses-container">
        <div className="courses-container-nav">
          <div
            className={`courses-container-nav-item ${
              activeNav === "video" ? "courses-container-nav-item-active" : null
            }`}
            // onClick={() => {
            //   changeActiveNav("video");
            // }}
          >
            Videos
          </div>
          <div
            className={`courses-container-nav-item disable ${
              activeNav === "article"
                ? "courses-container-nav-item-active"
                : null
            }`}
            // onClick={() => {
            //   changeActiveNav("article");
            // }}
          >
            Articles
          </div>
          <div
            className={`courses-container-nav-item disable ${
              activeNav === "podcast"
                ? "courses-container-nav-item-active"
                : null
            }`}
            // onClick={() => {
            //   changeActiveNav("podcast");
            // }}
          >
            Podcasts
          </div>
          <div
            className={`courses-container-nav-item disable ${
              activeNav === "blog" ? "courses-container-nav-item-active" : null
            }`}
            // onClick={() => {
            //   changeActiveNav("blog");
            // }}
          >
            Blogs
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
                  {videos.length > 0 ? (
                    <VideoBox video={videos} tooglePopup={tooglePopup} link={link}/>
                  ) : (
                    <NotFound text={"Videos"} />
                  )}
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
