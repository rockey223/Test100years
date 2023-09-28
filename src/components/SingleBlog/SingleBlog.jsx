import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBlog } from "../../contexts/BlogDetails/blogContext";
import "./singleblog.css";
import axios from "axios";
const SingleBlog = () => {
  const APICall = `${process.env.REACT_APP_API}/api`;
  const { id } = useParams();
  const { categories } = useBlog();
  const [oneBlog, setOneBlog] = useState();
  const [date, setDate] = useState();
  const getOneBlog = (id) => {
    axios
      .get(`${APICall}/getOneCompanyBlog/${id}`)
      .then((res) => {
        const one = res.data.data;
        console.log(res.data.data.companyBlogContent);

        const dateStr = one.createDate;
        const date = new Date(dateStr);
        const options = {
          timeZone: "Europe/London",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        };
        const nepalTime = date.toLocaleString("en-US", options);
        const onlyDate = nepalTime.split(",")[0].trim();

        setDate(onlyDate);

        setOneBlog(res.data.data);
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

  // console.log(oneBlog);
  const category =
    oneBlog &&
    categories.find((cat) => oneBlog.companyBlogCategory === cat._id);
  const API = `${process.env.REACT_APP_API}/imageUploads`;

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <>
      {oneBlog && (
        <>
          <div className="singleblog-banner-image">
            <img src={API + "/" + oneBlog.companyBlogImage} alt="" />
          </div>

          <div className="singleblog-content">
            <div className="singleblog-content-category">
              {category.companyBlogCategoryName}
            </div>
            <div className="singleblog-content-title">
              {oneBlog.companyBlogTitle}
            </div>
            <div className="singleblog-content-createdDate">
              {formatDate(date)}
            </div>
            <div className="singleblog-content-description">
              <pre >

              {oneBlog.companyBlogContent}
              </pre>
              {/* Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can help prevent chronic diseases and long-term illnesses. Feeling good about yourself and taking care of your health are important for your self-esteem and self-image. Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can help prevent chronic diseases and long-term illnesses. Feeling good about yourself and taking care of your health are important for your self-esteem and self-image. Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can help prevent chronic diseases and long-term illnesses. Feeling good about yourself and taking care of your health are important for your self-esteem and self-image. */}
            </div>

            {oneBlog.companyBlogSubtitleOne && (
              <div className="singleblog-content-subContent">
                <div className="singleblog-content-subContent-title">
                  {oneBlog.companyBlogSubtitleOne}
                </div>

                <div className="singleblog-content-subcontent-description">
                  {
                    oneBlog.companyBlogSubtitleOneImage &&
                  <div className="singleblog-content-subContent-Image">
                    <img
                      src={API + "/" + oneBlog.companyBlogSubtitleOneImage}
                      alt=""
                    />
                  </div>
                  }
                  <pre>{oneBlog.companyBlogSubtitleOneContent}</pre>
                </div>
              </div>
            )}
            {oneBlog.companyBlogSubtitleTwo && (
              <div className="singleblog-content-subContent second-content">
                <div className="singleblog-content-subContent-title">
                  {oneBlog.companyBlogSubtitleTwo}
                </div>

                <div className="singleblog-content-subcontent-description">
                  <div className="singleblog-content-subContent-Image">
                    <img
                      src={API + "/" + oneBlog.companyBlogSubtitleTwoImage}
                      alt=""
                    />
                  </div>
                  <pre>{oneBlog.companyBlogSubtitleTwoContent}</pre>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default SingleBlog;
