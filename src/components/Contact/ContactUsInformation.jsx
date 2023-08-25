import React from "react";
import "./contact-us-info.css";
import { FiClock, FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RxEnvelopeClosed } from "react-icons/rx";
function ContactUsInformation() {
  return (
    <div className="contact-us-information-box-container">
      <div className="contact-us-information-day-box">
        <FiClock className="contact-us-information-icon" />
        Monday-Friday
      </div>
      <div className="contact-us-information-location-box">
        <HiOutlineLocationMarker className="contact-us-information-icon" />
        43424 Lucie Crest
      </div>
      <div className="contact-us-information-phone-number-box">
        <FiPhoneCall className="contact-us-information-icon" />
        399-875-3840
      </div>
      <div className="contact-us-information-gmail-box">
        <RxEnvelopeClosed className="contact-us-information-icon" />
        Jefferey75@gmail.com
      </div>
    </div>
  );
}
export default ContactUsInformation;
