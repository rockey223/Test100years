import React from "react";
import VideoCard from "./VideoCard";
// import Video from "../../dummy/Video";

import "../../../responsive.css";
import "./healthguides.css";
import { useVideo } from "../../../contexts/VideoDetails/videoContext";

const HealthGuides = ({ open }) => {

  const {featuredVideos} = useVideo();
// console.log(featuredVideos);
  return (
    <>
    <div className="healthGuides-title">
    Various <span>
      Guides
      </span> are treated by us
    </div>
      <div className="videoCard-Box">
        {featuredVideos.map((videoItem, index) => {
          
          return <VideoCard key={index} videoItem={videoItem} open={open} />;
        })}
      </div>
    </>
  );
};

export default HealthGuides;
