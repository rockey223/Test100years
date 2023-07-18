import React from 'react'
import './buttons.css';
const OutLineButton = ({btnTxt, width, height}) => {
  return (
    <>
    <div className='outline-btn' style={{width: width, height: height}}>
      {btnTxt}
    </div>
    
    </>
  )
}
const FillButton = ({btnTxt, width, height,disable}) => {
  return (
    <>
<div className="fill-btn" style={{ width: width, height: height, background: disable ? '#868686' : '' }}>
      {btnTxt}
    </div>
    
    </>
  )
}



export {OutLineButton, FillButton};

