import React, { useState } from "react";
import "./blogsection.css";
import { useBlog } from "../../../contexts/BlogDetails/blogContext";

const BlogSection = () => {
  const {
    filter_blogs,
    all_blogs,
    filters: { text, category },
    updateFilterValue,
  } = useBlog();

  

  const getUniqueCat = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    console.log(newVal);
    return (newVal = ["All", ...new Set(newVal)]);
  };

  const blogCategories = getUniqueCat(all_blogs, "category");

  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

 
  return (
    <>
      <div className="blog-section-title">
        Follow the <span>Trend</span> to change the life
      </div>
      <hr className="blog-section-bar" />

      <div className="blog-section-filter-btns">
        {blogCategories.map((blogCategory, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={index}
              type="button"
              name="category"
              className={`blog-section-btn ${
                isActive ? "blog-section-active" : ""
              } `}
              onClick={(e)=>{
                updateFilterValue(e);
                handleButtonClick(index);
              }}
              value={blogCategory}
            >
              {blogCategory}
            </button>
          );
        })}
      </div>

      <div className="blog-section-contents">
        {filter_blogs.map((blog, index) => {
          return (
            <div key={index} className="blog-section-blogBox">
              <div className="blog-section-thumbnail">
                <img src={blog.thumbnail} alt="" />
              </div>
              <div className="blog-section-content-texts">
                <div className="blog-section-content-category">
                  {blog.category}
                </div>
                <div className="blog-section-content-title">{blog.title}</div>
                <div className="blog-section-content-createdDate">
                  {blog.createdDate}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogSection;
