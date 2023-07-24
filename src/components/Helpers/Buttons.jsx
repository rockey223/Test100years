import React from 'react'
import './buttons.css';
const OutLineButton = ({btnTxt, width, height,className}) => {
  return (
    <>
    <div className={`outline-btn ${className? className : ""}`} style={{width: width, height: height}}>
      {btnTxt}
    </div>
    
    </>
  )
}
const FillButton = ({btnTxt, width, height,disable,className}) => {
  return (
    <>
<div className={`fill-btn ${className? className : ""}`} style={{ width: width, height: height, background: disable ? '#868686' : '' }}>
      {btnTxt}
    </div>
    
    </>
  )
}



export {OutLineButton, FillButton};

