import React from "react";
import { FillButton } from "../../Helpers/Buttons";
import "./buybanner.css";
const BuyBanner = () => {
  return (
    <>
      <div className="buyBanner-container">
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
              btnTxt={"$9.99 Buy Now"}
              height={"50px"}
              width={"175px"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyBanner;
