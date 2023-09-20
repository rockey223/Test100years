import React from "react";
import VideoCard from "./VideoCard";
import Video from "../../dummy/Video";

import "../../../responsive.css";
import "./healthguides.css";


const HealthGuides = ({ open }) => {


  return (
    <>
    <div className="healthGuides-title">
    Various <span>
      Guides
      </span> are treated by us
    </div>
      <div className="videoCard-Box">
        {Video.map((videoItem, index) => {
          
          return <VideoCard key={index} details={videoItem} open={open} />;
        })}
      </div>
    </>
  );
};

export default HealthGuides;
