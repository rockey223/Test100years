import React from 'react'
import './login.css'
const LoginHelper = ({icon,socialName}) => {
  return (
    <>
    <div className="continue-container">
        <div className="continue-container-icon">
           <img src={icon} alt="" />
        </div>
        <div className="continue-container-social">
            Continue with {socialName}
        </div>
    </div>
    </>
  )
}

export default LoginHelper