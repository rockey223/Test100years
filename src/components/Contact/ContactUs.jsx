import React from "react";
import Header from "./Header";
import Info from "./ContactUsInformation";
import "./contact-us.css";
import ContactUsHeading from "./ContactUsHeading";
import ContactUsForm from "./ContactUsForm";
function ContactUs() {
  return (
    <>
      <Header heading="Contact Us" />
      <div className="contact-us-bottom-container">
        <ContactUsHeading />
        <ContactUsForm />
        <Info />
      </div>
    </>
  );
}
export default ContactUs;
