import React, { useEffect, useState } from "react";
import Top from "./Level 1/Top/Top";
import WhatYouGet from "./Level 1/WhatYouGet/WhatYouGet";
// import VideoPopUp from "./Helpers/VideoPopUp";
// import RateUs from "./Level 1/Rate/RateUs";
import BuyBanner from "./Level 1/BuyBanner/BuyBanner";
import Courses from "./Helpers/Courses";

import { useVideo } from "../contexts/VideoDetails/videoContext";
import { useParams } from "react-router-dom";
import video1 from "./dummy/video.mp4";
import video2 from "./dummy/video2.mp4";
import levels from "./dummy/levels";

const Level1 = ({ tooglePopup, buyBanner, windowScroll }) => {
  const { id } = useParams();

  const { level1Videos, level2Videos } = useVideo();

  const videos = id === "1" ? level1Videos : level2Videos;

  
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);

  const [levelDetails, setLevelDetails] = useState({});

  // console.log(levels);

  useEffect(() => {
    // console.log(id);

    if (id === "1") {
      // console.log(levels);
      setLevelDetails(levels[0]);
    } else {
      setLevelDetails(levels[1]);
    }
  }, [id]);
  
  // console.log(levelDetails);
  // console.log(levelDetails.LevelwhatYouGet);
  return (
    <>
      <Top tooglePopup={tooglePopup}  video={id==="1"? video1 : video2}  levelDetails={levelDetails} link={id==="1"? "level1" : "level2"} />
      <WhatYouGet levelDetails={levelDetails} />
      <Courses tooglePopup={tooglePopup} videos={videos} />
      {/* <RateUs/> */}
      <BuyBanner buyBanner={buyBanner} price={levelDetails.levelPrice} windowScroll={windowScroll} link={id==="1"? "level1" : "level2"} />
    </>
  );
};

export default Level1;
