import React from "react";
import PriceBoxAnswer from "./PriceBoxAnswer";
import { OutLineButton, FillButton } from "../../Helpers/Buttons";
import "./PriceBox.css";
import { Link } from "react-router-dom";
import { useUser } from "../../../contexts/userDetails/userContext";
const PriceBox = ({
  title,
  body,
  features,
  star,
  gradient,
  buttons,
  price,
  link,
}) => {
  // console.log(features)

  const{isloggedIn} = useUser()

  return (
    <>
      <div
        className={`priceBox-container ${gradient ? "gradient-border" : ""}`}
      >
        {star ? (
          <svg
            width="60"
            id="star"
            height="57"
            viewBox="0 0 60 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.0979 1.8541C28.6966 0.0114745 31.3034 0.01148 31.9021 1.8541L37.409 18.8024C37.6767 19.6265 38.4446 20.1844 39.3111 20.1844L57.1316 20.1844C59.0691 20.1844 59.8746 22.6636 58.3072 23.8024L43.8901 34.2771C43.1891 34.7864 42.8958 35.6891 43.1635 36.5132L48.6704 53.4615C49.2691 55.3041 47.1601 56.8364 45.5927 55.6976L31.1756 45.2229C30.4746 44.7136 29.5254 44.7136 28.8244 45.2229L14.4073 55.6976C12.8399 56.8364 10.7309 55.3041 11.3296 53.4615L16.8365 36.5132C17.1042 35.6891 16.8109 34.7864 16.1099 34.2771L1.69281 23.8024C0.125385 22.6636 0.93094 20.1844 2.86839 20.1844L20.6889 20.1844C21.5554 20.1844 22.3233 19.6265 22.591 18.8024L28.0979 1.8541Z"
              fill="#F66E24"
            />
          </svg>
        ) : null}
        <div className="priceBox-title">
          <span>{title}</span>
        </div>
        <div className="priceBox-desc">
          <span>{body}</span>
        </div>

        <div className="priceBox-feature-question">
          <span>What you'll get:</span>
        </div>
        <div className="priceBox-feature-answer">
          {features.map((answer, index) => {
            // console.log(answer);
            return <PriceBoxAnswer key={index} answer={answer} />;
          })}
        </div>
        {buttons ? (
          <div className="button-section">
            <Link to={`/level/${link}`}>
              <OutLineButton
                className={"priceBox-btn"}
                btnTxt={"Preview"}
                width={"142px"}
                height={"50px"}
              />
            </Link>

          
              <FillButton
                className={"priceBox-btn"}
                btnTxt={`$${price}`}
                width={"142px"}
                height={"50px"}
                link={isloggedIn? "/checkout" : "/login"} 
              />
           
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default PriceBox;
