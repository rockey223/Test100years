import React,{useEffect} from "react";
import Top from "./Level 2/Top/Top";
import WhatYouGet from "./Level 2/WhatYouGet/WhatYouGet";
// import VideoPopUp from "./Helpers/VideoPopUp";
import RateUs from "./Level 2/Rate/RateUs"
import BuyBanner from "./Level 2/BuyBanner/BuyBanner";
import Courses from "./Helpers/Courses";
const Level2 = ({tooglePopup,buyBanner,windowScroll}) => {
  // window.scrollTo(0, 0); 
  useEffect(()=>{

    window.scrollTo(0, 0);
  },[]);
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
