import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import "./swhatyouget.css";
const SingleWhatYouGet = ({courseVideoWhatYouWillGet}) => {
  return (
    <>
      <div className="swhat-container">
        <div className="swhat-container-content">
          <div className="swhat-container-content-title">What You Will Get?</div>
          <div className="swhat-container-content-points">
            {
              courseVideoWhatYouWillGet.map((what,index)=>{
return(

            <div key={index} className="swhat-container-content-points-point">
              <BsCheck2Circle className="swhat-container-content-points-icon" />
              {what}
            </div>
)
              })
            }
            {/* <div className="swhat-container-content-points-point">
              <BsCheck2Circle className="swhat-container-content-points-icon" />
              You will learn, a healthy habit for living 100 years:
            </div>
            <div className="swhat-container-content-points-point">
              <BsCheck2Circle className="swhat-container-content-points-icon" />
              You will learn, a healthy habit for living 100 years:
            </div>
            <div className="swhat-container-content-points-point">
              <BsCheck2Circle className="swhat-container-content-points-icon" />
              You will learn, a healthy habit for living 100 years:
            </div> */}
           
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleWhatYouGet;
