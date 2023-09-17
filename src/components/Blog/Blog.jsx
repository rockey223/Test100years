import React,{useEffect} from 'react'
import "./blog.css";
const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


      

  return (
    <>
    
    <div className="blog-header">
        <div className="blog-header-content">

        <div className="blog-header-blueBar"></div>
        <div className="blog-header-text">Blog</div>
        </div>
    </div>

    <div className="blog-banner-image">
        <img src="https://i.postimg.cc/3wb6qDJt/Are-you-as-healthy-as-you-think-i-Stock-1140193165-500x409.jpg" alt="" />
    </div>

    <div className="blog-content">
        <div className="blog-content-category">
            Meditation
        </div>
        <div className="blog-content-title">
            The Importance of Health in our daily life
        </div>
        <div className="blog-content-createdDate">
            November 21, 2019
        </div>
        <div className="blog-content-description">
            Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can help prevent chronic diseases and long-term illnesses. Feeling good about yourself and taking care of your health are important for your self-esteem and self-image. Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can help prevent chronic diseases and long-term illnesses. Feeling good about yourself and taking care of your health are important for your self-esteem and self-image. Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can help prevent chronic diseases and long-term illnesses. Feeling good about yourself and taking care of your health are important for your self-esteem and self-image.
        </div>

        <div className="blog-content-subContent">
            <div className="blog-content-subContent-title">
                Nutrition
            </div>

            <div className="blog-content-subcontent-description">
            <div className="blog-content-subContent-Image">
                <img src="https://i.postimg.cc/3wb6qDJt/Are-you-as-healthy-as-you-think-i-Stock-1140193165-500x409.jpg" alt="" />
            </div>
            <p>

            Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can help prevent chronic diseases and long-term illnesses. Feeling good about yourself and taking care of your health are important for your self-esteem and self-image. Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can help prevent chronic diseases and long-term illnesses. Feeling good about yourself and taking care of your health are important for your self-esteem and self-image. Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can help prevent chronic diseases and long-term illnesses. Feeling good about yourself and taking care of your health are important for your self-esteem and self-image.
            </p>
            </div>
        </div>

    </div>

    
    </>
  )
}

export default Blog