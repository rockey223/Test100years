import React from 'react'
import './inputfeild.css'
const InputField = ({placeholder,width,height,name,type,value, change}) => {
  return (
    <>
        <input type={type} value={value} style={{width:width, height:height}}  onChange={change} placeholder={placeholder} name={name} className='inputFeild' />
   
   </>
  )
}

export default InputField