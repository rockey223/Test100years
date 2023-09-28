import React from "react";
import { FillButton } from "../../Helpers/Buttons";
import "./buybanner.css";
const BuyBanner = ({buyBanner,windowScroll,price,link}) => {
  return (
    <>
      <div className="buyBanner-container" style={
        buyBanner > 414 || windowScroll < 0
          ? buyBanner >= 414
            ? { bottom: "0px" }
            : { bottom: "-69px" }
          : { bottom: "-69px" }
      }>
        <div className="buyBanner-container-content">
          <div className="buyBanner-container-left">
            <div className="buyBanner-container-left-top">
              This contains fundamentals of social and mental health.
            </div>
            <div className="buyBanner-container-left-bottom">
              Full body workout (push-pull-legs) using Dumbbells.
              Straightforward exercises (No B.S)
            </div>
          </div>
          <div className="buyBanner-container-right">
            <FillButton
            link={`/checkout/${link}`}
              btnTxt={`$${price} Buy Now`}
              height={"40px"}
              width={"150px"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyBanner;
