import React, { useEffect, useRef, useState } from "react";

import { useBlog } from "../../contexts/BlogDetails/blogContext";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
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

    return (newVal = ["All", ...new Set(newVal)]);
  };

  const blogCategories = getUniqueCat(all_blogs, "category");

  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const [leftActiveArrow, setLeftActiveArrow] = useState(false);
  const [rightActiveArrow, setRightActiveArrow] = useState(true);
  const btnListRef = useRef();

  const btnList = btnListRef.current;

  const rightArrowHandler = () => {
    btnList.scrollLeft += 200;
    manageScrollIcons();
  };

  const leftArrowHandler = () => {
    btnList.scrollLeft -= 200;
    manageScrollIcons();
  };

  const manageScrollIcons = () => {
    if (btnList.scrollLeft >= 20) {
      setLeftActiveArrow(true);
    } else {
      setLeftActiveArrow(false);
    }

    let maxScrollValue = btnList.scrollWidth - btnList.clientWidth - 20;

    if (btnList.scrollLeft >= maxScrollValue) {
      setRightActiveArrow(false);
    } else {
      setRightActiveArrow(true);
    }
  };
  return (
    <>
      <div className="singleblog-header">
        <div className="singleblog-header-content">
          <div className="singleblog-header-blueBar"></div>
          <div className="singleblog-header-text">Blog</div>
        </div>
      </div>

      <div className="blog-section-filter-btns">
        <div className={`blog-leftarrow ${leftActiveArrow && "active-arrow"}`}>
          <BsChevronLeft className="blog-arrows" onClick={leftArrowHandler} />
        </div>
        <div
          ref={btnListRef}
          className="blog-section-filter-btn"
          onScroll={manageScrollIcons}
        >
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
                onClick={(e) => {
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
        <div
          className={`blog-rightarrow ${rightActiveArrow && "active-arrow"} `}
        >
          <BsChevronRight className="blog-arrows" onClick={rightArrowHandler} />
        </div>
      </div>

      <div className="blog-section-contents">
        <div className="blog-section-content">
          {filter_blogs.map((blog, index) => {
            return (
              <Link to={`/blogpost/${blog.id}`}>
                <div key={index} className="blog-section-blogBox">
                  <div className="blog-section-thumbnail">
                    <img src={blog.thumbnail} alt="" />
                  </div>
                  <div className="blog-section-content-texts">
                    <div className="blog-section-content-category">
                      {blog.category}
                    </div>
                    <div className="blog-section-content-title">
                      {blog.title}
                    </div>
                    <div className="blog-section-content-createdDate">
                      {blog.createdDate}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
