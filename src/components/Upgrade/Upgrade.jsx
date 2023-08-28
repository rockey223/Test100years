import React,{useEffect} from "react";
// import { BsCheck2Circle } from "react-icons/bs";
import './upgrade.css'
import {FillButton} from '../Helpers/Buttons';
const Upgrade = () => {
  useEffect(()=>{

    window.scrollTo(0, 0);
  },[]);
  return (
    <>
      <div className="upgrade-container">
        <div className="upgrade-container-content">
          <div className="upgrade-container-content-title">
            Upgrade to Level 2
          </div>
          <div className="upgrade-container-content-requirement">
            <div className="upgrade-container-content-requirement-title">
              Requirements
            </div>
         
              <div className="upgrade-container-content-requirement-points">
                <ol>
                  <li className="upgrade-container-content-requirement-points-point">
                    You will learn, a healthy habit for living 100 years: You will learn, a healthy habit for living 100 years:
                  </li>
                  <li className="upgrade-container-content-requirement-points-point">
                    You will learn, a healthy habit for living 100 years: You will learn, a healthy habit for living 100 years:
                  </li>
                  <li className="upgrade-container-content-requirement-points-point">
                    You will learn, a healthy habit for living 100 years: You will learn, a healthy habit for living 100 years:
                  </li>
                </ol>
              </div>
           <div className="upgrade-container-content-requirement-terms">
            <input type="checkbox" name="upgradeTerms" id="upgradeTerms" /> <span>I agree to provide all the above mentioned reports/details </span>
           </div>
           <div className="upgrade-container-content-requirement-submit">

           <FillButton btnTxt={'Submit'} width={'156px'} height={'45px'} />
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upgrade;
