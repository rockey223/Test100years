import React from 'react'
import './content.css'
import Videos from './Videos/Videos'
const content = ({videoDetails}) => {
  return (
   <>
   <div className="content-container">
    <div className="content-container-content">
        <div className="content-container-content-title">
            Contents
        </div>
        <div className="content-container-content-nav">
            

            <div className="content-container-content-nav-link">
                Videos
            </div>
          
            <div className="content-container-content-nav-link">
                Blog
            </div>
            <div className="content-container-content-nav-link">
                Podcast
            </div>
        </div>
<Videos videoDetails={videoDetails}/>
    </div>
   </div>
   </>
  )
}

export default content