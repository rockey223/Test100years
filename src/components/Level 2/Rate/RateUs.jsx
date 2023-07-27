import React from "react";
import InputField from "../../Helpers/InputField";
import "./rateus.css";
import { FillButton } from "../../Helpers/Buttons";
const RateUs = () => {
  return (
    <>
      <div className="rateus-container">
        <div className="rateus-container-content">
          <div className="rateus-container-content-title">rate us</div>
          <div className="rateus-container-content-tagline">How Do We Do?</div>
          <div className="rateus-container-content-form">
            <form>
              <InputField
                placeholder={"First Name"}
                name={"firstname"}
                width={"333px"}
                height={"20px"}
              />
              <InputField
                placeholder={"Last Name"}
                name={"lastname"}
                width={"333px"}
                height={"20px"}
              />
              <InputField
                placeholder={"Email Address"}
                name={"email"}
                width={"333px"}
                height={"20px"}
              />
              <InputField
                placeholder={"Phone Number"}
                name={"phone"}
                width={"333px"}
                height={"20px"}
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write your review here"
              ></textarea>
              <div className="rateus-container-content-form-recommend-container">
                <div className="rateus-container-content-form-recommend-question">
                  Would you recommend us to your friends?
                </div>
                <div className="rateus-container-content-form-recommend-radio">
                  <div className="rateus-container-content-form-recommend-radio-group">
                    <input type="radio" name="recomend" value="Yes" />
                    <label htmlFor="yes">Yes</label>
                  </div>
                  <div className="rateus-container-content-form-recommend-radio-group">
                    <input type="radio" name="recomend" value="no" />
                    <label htmlFor="yes">No</label>
                  </div>
                </div>
              </div>
              <div className="rateus-container-content-form-submitBtn">
                <FillButton btnTxt={"SUBMIT"} width={"150px"} height={"45px"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RateUs;
