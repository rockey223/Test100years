// import React,{useState} from "react";
import Top from "./Level 1/Top/Top";
import WhatYouGet from "./Level 1/WhatYouGet/WhatYouGet";
// import VideoPopUp from "./Helpers/VideoPopUp";
import RateUs from "./Level 1/Rate/RateUs"
import BuyBanner from "./Level 1/BuyBanner/BuyBanner";
import Courses from "./Helpers/Courses";
const Level2 = ({tooglePopup,buyBanner,windowScroll}) => {
  // window.scrollTo(0, 0); 

  return (
    <>
   
      <Top tooglePopup={tooglePopup} />
      <WhatYouGet/>
      <Courses tooglePopup={tooglePopup}/> 
      {/* <RateUs/> */}
      <BuyBanner buyBanner={buyBanner} windowScroll={windowScroll}/>
    </>
  );
};

export default Level2;
