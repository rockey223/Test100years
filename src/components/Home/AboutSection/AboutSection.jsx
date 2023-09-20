import React from "react";
import "./aboutsection.css";
const AboutSection = () => {
  return (
    <>
      <div className="about-section">
        <div className="about-section-left">
          <div className="about-section-left-image">
            <div className="about-section-left-image-imgbox">

            <img src="https://i.postimg.cc/vBWGLYNv/young-athletic-man-working-out-listening-music-riverside-outdoors.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="about-section-right">
          <div className="about-section-right-title">
            <div className="about-section-right-title-bar"></div>
            <div className="about-section-right-title-text">About us</div>
          </div>
          <div className="about-section-right-content">
            <p>
            As the natural ceiling of human life expectancy has already proven over 120 years "100 years healthy life" also known as "Family Blue Zone" is a strategy for preserving excellent health and a high standard of living for individuals or families at least for a century while aims for extending the average life expectancy to the maximum natural upper limit. It typically marks an important turning point in human longevity and is often associated with the desire to delay aging and live longer the younger while also making sure that those extra years are full of independence, vitality, and well-being.
            </p>

            {/* <p>
              If "100 Years Healthy Life" is indeed a company or organization,
              it may be involved in various aspects of health and wellness, such
              as healthcare services, longevity research, nutrition, fitness, or
              products and services aimed at promoting a healthy lifestyle and
              extending human lifespan.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
