// import React,{useState} from "react";
import { useParams } from "react-router-dom";
import SigngleTop from "./SingleVIdeo/Top/SingleTop";
import SingleWhatYouGet from "./SingleVIdeo/WhatYouGet/SingleWhatYouGet";

import Video from './dummy/Video';
import Requirement from "./SingleVIdeo/Requirement/Requirement";
import Who from "./SingleVIdeo/Who/Who";
import Desc from "./SingleVIdeo/Desc/Desc";
import Content from "./SingleVIdeo/Content/content"

const SingleVideo = ({tooglePopup}) => {
  window.scrollTo(0, 0); 

  const {id} = useParams();
  console.log(id);
  // const video = Video.find(({ id }) => id === id);
  const video = (Video.find((el)=>parseInt(id) === el.id));
  console.log(video);
  
  return (
    <>
   <div className="singleVideo-Container">

      <SigngleTop tooglePopup={tooglePopup} videoDetails={video}/>
      <SingleWhatYouGet/>
      <Requirement/>
      <Who/>
      <Desc/>
      <Content videoDetails={video}/>
   </div>
      
    </>
  );
};

export default SingleVideo;
