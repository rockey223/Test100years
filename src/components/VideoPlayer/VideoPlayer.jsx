import React from "react";
import video from "../dummy/video.mp4";
import AboutThisCourse from "./AboutThisCourse/AboutThisCourse";
import PlayerDesc from "./playerDesc/PlayerDesc";
import Instructor from "./Instructor/Instructor";
import { useParams } from "react-router-dom";
import Video from '../dummy/Video';
import './videoplayer.css'
const VideoPlayer = () => {
  window.scrollTo(0, 0);
  const {id} = useParams();

  const videoDetails = Video.find((video)=>video.id === parseInt(id));
  console.log(videoDetails);

  return (
    <>
      <div className="videoplayer-container">
        <div className="videoplayer-container-content">
          <div className="videoplayer-container-content-Player">
            <video controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
         <AboutThisCourse/>
         <PlayerDesc/>
         <Instructor videoDetails={videoDetails}/>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
