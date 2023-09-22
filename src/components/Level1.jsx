import React, { useEffect, useState } from "react";
import Top from "./Level 1/Top/Top";
import WhatYouGet from "./Level 1/WhatYouGet/WhatYouGet";
// import VideoPopUp from "./Helpers/VideoPopUp";
import RateUs from "./Level 1/Rate/RateUs";
import BuyBanner from "./Level 1/BuyBanner/BuyBanner";
import Courses from "./Helpers/Courses";

import { useVideo } from "../contexts/VideoDetails/videoContext";
import { useParams } from "react-router-dom";

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
      <Top tooglePopup={tooglePopup} levelDetails={levelDetails} />
      <WhatYouGet levelDetails={levelDetails} />
      <Courses tooglePopup={tooglePopup} videos={videos} />
      {/* <RateUs/> */}
      <BuyBanner buyBanner={buyBanner} price={levelDetails.levelPrice} windowScroll={windowScroll} />
    </>
  );
};

export default Level1;
