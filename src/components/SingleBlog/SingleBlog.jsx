import React,{useEffect} from 'react'
import "./singleblog.css";
const SingleBlog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


      

  return (
    <>
    
    <div className="singleblog-header">
        <div className="singleblog-header-content">

        <div className="singleblog-header-blueBar"></div>
        <div className="singleblog-header-text">Blog</div>
        </div>
    </div>

    <div className="singleblog-banner-image">
        <img src="https://i.postimg.cc/3wb6qDJt/Are-you-as-healthy-as-you-think-i-Stock-1140193165-500x409.jpg" alt="" />
    </div>

    <div className="singleblog-content">
        <div className="singleblog-content-category">
            Meditation
        </div>
        <div className="singleblog-content-title">
            The Importance of Health in our daily life
        </div>
        <div className="singleblog-content-createdDate">
            November 21, 2019
        </div>
        <div className="singleblog-content-description">
            Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can help prevent chronic diseases and long-term illnesses. Feeling good about yourself and taking care of your health are important for your self-esteem and self-image. Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can help prevent chronic diseases and long-term illnesses. Feeling good about yourself and taking care of your health are important for your self-esteem and self-image. Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can help prevent chronic diseases and long-term illnesses. Feeling good about yourself and taking care of your health are important for your self-esteem and self-image.
        </div>

        <div className="singleblog-content-subContent">
            <div className="singleblog-content-subContent-title">
                Nutrition
            </div>

            <div className="singleblog-content-subcontent-description">
            <div className="singleblog-content-subContent-Image">
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

export default SingleBlog