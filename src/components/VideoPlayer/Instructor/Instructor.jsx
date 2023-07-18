import React from 'react'
import './instructor.css'
const Instructor = ({videoDetails}) => {
  return (
    <>
    <div className="instructor-container">
        <div className="instructor-container-content">
            <div className="instructor-container-content-title">Instructor</div>
            <div className="instructor-container-content-details">
            <div className="instructor-container-content-details-image">

                <img src={videoDetails.thumbnail} alt="" />
            </div>
                <div className="instructor-container-content-details-content">
                    <div className="instructor-container-content-details-content-name">
                        {videoDetails.instructor}
                    </div>
                    <div className="instructor-container-content-details-content-details">
                        {videoDetails.description}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Instructor