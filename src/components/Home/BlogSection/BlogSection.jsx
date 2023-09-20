import React, { useEffect, useRef, useState } from "react";
import "./blogsection.css";
import { useBlog } from "../../../contexts/BlogDetails/blogContext";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios"
const BlogSection = () => {
  
  const {
    filter_blogs,
    all_blogs,
    filters: { text, companyBlogCategory },
    updateFilterValue,
    categories
  } = useBlog();

  const API = `${process.env.REACT_APP_API}/imageUploads`;
  const APICALL = `${process.env.REACT_APP_API}/api`;
  
  const getUniqueCat = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });

    return (newVal = ["All", ...new Set(newVal)]);
  };

  const blogCategories = getUniqueCat(all_blogs, "companyBlogCategory");

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

  // useEffect(()=>{
  //   manageScrollIcons()
  //  console.log(btnList.scrollLeft)
  // },[])


  

  var cat = "hellos";
function getOneCategory (id){
  if(id==="All"){
    return "All"
    
  }
 
    
    axios.get(`${APICALL}/getOneCompanyBlogCategory/${id}`)
    .then((res)=>{
      // console.log(res.data.data.companyBlogCategoryName);
      cat = res.data.data.companyBlogCategoryName;
      // return res.data.data.companyBlogCategoryName
      console.log(cat);
      return(cat)
    })
    .catch((err)=>{
      console.log(err);
    })
    console.log(cat);
    return cat;
  
}


  return (
    <>
      <div className="blog-section-title">
        Follow the <span>Trend</span> to change the life
      </div>
      <hr className="blog-section-bar" />

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
            // console.log(blogCategory);
            const isActive = activeIndex === index;
            const categoryname = getOneCategory(blogCategory);
            console.log(blogCategory);
            return (
              <button
                key={index}
                type="button"
                name="companyBlogCategory"
                className={`blog-section-btn ${
                  isActive ? "blog-section-active" : ""
                } `}
                onClick={(e) => {
                  updateFilterValue(e);
                  handleButtonClick(index);
                }}
                value={blogCategory}
              >
                
                {categoryname}
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
          {filter_blogs.slice(0, 5).map((blog, index) => {
            // console.log(blog);
            return (
              <Link to={`/blogpost/${blog._id}`} key={index}>
                <div className="blog-section-blogBox">
                  <div className="blog-section-thumbnail">
                    <img src={API + "/" + blog.companyBlogThumbnail} alt="" />
                  </div>
                  <div className="blog-section-content-texts">
                    <div className="blog-section-content-category">
                      {blog.companyBlogCategory}
                    </div>
                    <div className="blog-section-content-title">
                      {blog.companyBlogTitle}
                    </div>
                    <div className="blog-section-content-createdDate">
                      {blog.createDate}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}

          {filter_blogs.length > 4 && (
            <Link to="/blogs">
            <div className="blog-section-blogBox">
              <div className="blog-section-seeMore">
                see More <BsChevronRight />
              </div>
              {/* <div className="blog-section-thumbnail">
        <img src="" alt="" />
      </div>
      <div className="blog-section-content-texts">
        <div className="blog-section-content-category">
          
        </div>
        <div className="blog-section-content-title"></div>
        <div className="blog-section-content-createdDate">
         
        </div>
      </div> */}
            </div>
            </Link>
          )}
        </div>
      </div>
      <Link to="/blogs" className="blog-section-seemore-btn">
      
        <div>See more <BsChevronRight /> </div>
      </Link>
    </>
  );
};

export default BlogSection;
