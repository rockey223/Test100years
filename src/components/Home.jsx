// import React, { useState } from "react";
import PriceTable from "./dummy/PriceTable.js";
import PriceBox from "./Home/PriceBox/PriceBox";
import Achievement from "./Home/Achievement/Achievement";
import "../responsive.css";
import MidBanner from "./Home/MIdBanner/MidBanner";
import HealthGuides from "./Home/HealtGuides/HealthGuides.jsx";
// import VideoPopUp from "./Helpers/VideoPopUp";
// import Navbar from "./Navbar/Navbar.jsx";
import SlideBox from "./Home/SlideBox/SlideBox.jsx";
import { useEffect } from "react";
import axios from "axios";
import Landing from "./Home/Landing/Landing.jsx";

const Home = ({ tooglePopup }) => {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getMyInfo", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  // window.scrollTo(0, 0);
  useEffect(()=>{

    window.scrollTo(0, 0);
  },[]);
  // console.log(PriceTable)
  return (
    <>
      {/* ******************************************************** */}

      <Landing />

      {/* ******************************************************** */}
      
      {/* ******************************************************** */}

      <div className="Achievement">
        <Achievement />
      </div>

      {/* ******************************************************** */}

      {/* ******************************************************** */}

      <div className="HealthGuides">
        <HealthGuides open={tooglePopup} />
      </div>

      {/* ******************************************************** */}

      <div className="midBanner">
        <MidBanner />
      </div>

      <div className="pricing-table-container">
        <div className="pricing-table-heading">
          Get the perfect Guide for your health
        </div>
        <div className="pricing-table-pointing-up-arrow">
          <svg
            width="265"
            height="50"
            viewBox="0 0 265 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M263.374 42.9591C264.172 42.7351 264.637 41.907 264.413 41.1094L260.763 28.1122C260.539 27.3147 259.711 26.8497 258.913 27.0737C258.116 27.2977 257.651 28.1258 257.875 28.9234L261.119 40.4764L249.566 43.721C248.769 43.945 248.304 44.7732 248.528 45.5707C248.752 46.3683 249.58 46.8333 250.377 46.6093L263.374 42.9591ZM2.85716 49.6549C30.0227 20.1264 127.102 -33.05 262.235 42.8229L263.703 40.2071C127.318 -36.3694 28.7252 17.1058 0.649347 47.6237L2.85716 49.6549Z"
              fill="#01ACF1"
            />
          </svg>
        </div>

        <div className="pricing-table">
          {PriceTable.map((item, index) => {
            // console.log(item.features);
            const {
              title,
              body,
              features,
              star,
              gradient,
              button,
              price,
              link,
            } = item;
            // console.log(features);
            return (
              <PriceBox
                key={index}
                buttons={button}
                price={price}
                title={title}
                body={body}
                features={features}
                star={star}
                gradient={gradient}
                link={link}
              />
            );
          })}
        </div>
        <div className="pricing-table-pointing-down-arrow">
          <svg
            width="265"
            height="51"
            viewBox="0 0 265 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M263.128 6.97418C263.951 7.06182 264.548 7.80066 264.461 8.62444L263.033 22.0487C262.945 22.8725 262.206 23.4692 261.382 23.3816C260.559 23.294 259.962 22.5551 260.049 21.7314L261.319 9.79869L249.386 8.52937C248.562 8.44174 247.966 7.7029 248.053 6.87912C248.141 6.05534 248.88 5.45857 249.703 5.5462L263.128 6.97418ZM2.85727 0.325875C9.56738 7.61965 22.9855 16.6883 40.9984 24.9415C58.9739 33.1775 81.4017 40.5445 106.031 44.5067C155.297 52.4321 213.221 46.7192 262.027 7.29887L263.912 9.63267C214.248 49.7466 155.375 55.4831 105.555 47.4686C80.6418 43.4608 57.9548 36.0105 39.7488 27.6688C21.5801 19.3443 7.74968 10.0748 0.649452 2.35702L2.85727 0.325875Z"
              fill="#01ACF1"
            />
          </svg>
        </div>
      </div>
      <div className="Testinomial">
        <SlideBox />
      </div>
    </>
  );
};

export default Home;
