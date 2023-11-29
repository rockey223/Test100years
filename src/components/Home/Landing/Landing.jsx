import React, { useRef, useEffect } from "react";
import { OutLineButton } from "../../Helpers/Buttons";
import "./landing.css";
import video from "../../dummy/video3.mp4";

import Rounded from "../../Helpers/Rounded";
const Landing = () => {
  
  return (
    <>
      <div className="landing-container">
        <div className="landing-container-video">
          <video src={video} autoPlay loop muted></video>
          <div className="landing-container-content">
            <div className="landing-container-content-title">
              Your Health is Our Concern
            </div>
            <div className="landing-container-content-tagline">
              Let's go 100 Years Happy Life
            </div>
            <div className="landing-container-content-info">
              A ut accusamus ipsa ut. Eos et quis totam ut autem. Facere quasi
              tempore et rem sunt natus consequatur perferendis non. Et et unde.
            </div>

            <Rounded>
              <p>Start Now </p>
            </Rounded>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
