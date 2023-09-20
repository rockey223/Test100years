import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useBlog } from "../../contexts/BlogDetails/blogContext";
import "./singleblog.css";
import axios from "axios";
const SingleBlog = () => {
  const APICall = `${process.env.REACT_APP_API}/api`;
  const { id } = useParams();
  
  const [oneBlog, setOneBlog] = useState();
  const getOneBlog = (id) => {
    axios
      .get(`${APICall}/getOneCompanyBlog/${id}`)
      .then((res) => {
        setOneBlog(res.data.data);
        console.log(res.data.data);
        //   dispatch({type:"GET_ONE_BLOG", payload: {oneBlo}})
      })
      .catch((err) => {
        console.log(err);
      });
  };
 

  useEffect(() => {
    window.scrollTo(0, 0);
    getOneBlog(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const API = `${process.env.REACT_APP_API}/imageUploads`;

  console.log(oneBlog);



  return (
    <>
    {
      oneBlog && (
        <>

<div className="singleblog-header">
        <div className="singleblog-header-content">
          <div className="singleblog-header-blueBar"></div>
          <div className="singleblog-header-text">Blog</div>
        </div>
      </div>

      <div className="singleblog-banner-image">
        <img src="" alt="" />
      </div>

      <div className="singleblog-content">
        <div className="singleblog-content-category">Meditation</div>
        <div className="singleblog-content-title">
          {oneBlog.companyBlogTitle}
        </div>
        <div className="singleblog-content-createdDate">November 21, 2019</div>
        <div className="singleblog-content-description">
          {oneBlog.companyBlogContent}
          {/* Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can help prevent chronic diseases and long-term illnesses. Feeling good about yourself and taking care of your health are important for your self-esteem and self-image. Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can help prevent chronic diseases and long-term illnesses. Feeling good about yourself and taking care of your health are important for your self-esteem and self-image. Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can help prevent chronic diseases and long-term illnesses. Feeling good about yourself and taking care of your health are important for your self-esteem and self-image. */}
        </div>

        <div className="singleblog-content-subContent">
          <div className="singleblog-content-subContent-title">
            {oneBlog.companyBlogSubtitleOne}
          </div>

          <div className="singleblog-content-subcontent-description">
            <div className="singleblog-content-subContent-Image">
              <img
                src={API + "/" + oneBlog.companyBlogSubtitleOneImage}
                alt=""
              />
            </div>
            <p>{oneBlog.companyBlogSubtitleOneContent}</p>
          </div>
        </div>
      </div>

        </>
      )
    }
      
    </>
  );
};

export default SingleBlog;
