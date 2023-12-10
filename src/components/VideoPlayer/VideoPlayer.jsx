import React, { useEffect, useState } from "react";

import AboutThisCourse from "./AboutThisCourse/AboutThisCourse";
import PlayerDesc from "./playerDesc/PlayerDesc";
import Instructor from "./Instructor/Instructor";
import { useParams } from "react-router-dom";

import "./videoplayer.css";
import { useVideo } from "../../contexts/VideoDetails/videoContext";
const VideoPlayer = () => {
  const API = `${process.env.REACT_APP_API}/mediaUploads`;
  const { level1Videos, level2Videos } = useVideo();
  // window.scrollTo(0, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();

  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    const allVideos = [
      ...Object.values(level1Videos),
      ...Object.values(level2Videos),
    ];
    const selectedVideo = allVideos.find((video) => video._id === id);
    setVideoDetails(selectedVideo);
  }, [level1Videos, level2Videos, id]);

  if (!videoDetails) {
    // Handle case where videoDetails is null or still loading
    return <div>Loading...</div>;
  }
  // const allVideos = [...level1Videos,...level2Videos];
  // const videoDetails = allVideos.find((video)=>video._id === id);
  // console.log(typeof(allVideos));
  const {
    courseVideoAboutThisCourse,
    courseVideoDescription,
    courseVideoPreview,
  } = videoDetails;
  return (
    <>
      {
        <div className="videoplayer-container" style={{marginTop: '100px'}}>
          <div className="videoplayer-container-content">
            <div className="videoplayer-container-content-Player">
              <video controls>
                <source src={API + "/" + courseVideoPreview} type="video/mp4" />
              </video>
            </div>
            <div className="videoPlayer-desc-container">
              <AboutThisCourse
                courseVideoAboutThisCourse={courseVideoAboutThisCourse}
              />
              <PlayerDesc courseVideoDescription={courseVideoDescription} />
              <Instructor videoDetails={videoDetails} />
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default VideoPlayer;
