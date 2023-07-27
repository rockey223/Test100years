import React from "react";
import { OutLineButton } from "../../Helpers/Buttons";
import "./landing.css";
import video from "../../dummy/video.mp4"

const Landing = () => {
  return (
    <>
      <div className="landing-container">
        <div className="landing-container-video">
          <video src={video} autoPlay loop muted></video>
          <div className="landing-container-content">
            <div className="landing-container-content-title">
              My Life My Rules
            </div>
            <div className="landing-container-content-tagline">
              Let's go 100 Years Happy Life
            </div>
            <div className="landing-container-content-info">
              A ut accusamus ipsa ut. Eos et quis totam ut autem. Facere quasi
              tempore et rem sunt natus consequatur perferendis non. Et et unde.
            </div>
            <OutLineButton
              btnTxt={"Start Now"}
              width={"193px"}
              height={"50px"}
              className={"landing"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
