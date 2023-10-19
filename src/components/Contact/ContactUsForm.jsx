import React from "react";
import "./contact-us-form.css";
import axios from "axios";
import { toast } from "react-toastify";
function ContactUsForm() {
  const API = `${process.env.REACT_APP_API}`;
  const [info, setInfo] = React.useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    event.preventDefault();

    if(info.fname== "" || info.lname== "" || info.number== "" || info.message== "" || info.subject== "" || info.email == ""){
      return  toast.error('All fields are required to be filled up.', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    axios
      .post(`${API}/api/sendContactEmail`, {
        customerName: `${info.fname} ${info.lname}`,
        customerContact: info.number,
        customerEmail: info.email,
        customerMessageSubject: info.subject,
        customerMessage: info.message,
      })
      .then((res) => {
        setInfo((prev) => {
          return {
            ...prev,

            fname: "",
            lname: "",
            email: "",
            number: "",
            subject: "",
            message: "",
          };
        });
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });

        console.log(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  }
  // function validate() {
  //   var firstName = document.getElementById("contact-us-from-fname");
  //   var lastName = document.getElementById("contact-us-from-lname");
  //   if (firstName.value == "" || lastName.value == "") {
  //     alert("No blank value allowed!");
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  return (
    <div className="contact-us-form-container">
      <div className="contact-us-form-name-input-field-container">
        <input
          type="text"
          className="contact-us-form-first-name-input-field"
          placeholder="First Name"
          onChange={handleChange}
          name="fname"
          value={info.fname}
        />
        <input
          type="text"
          className="contact-us-form-second-name-input-field"
          placeholder="Last Name"
          onChange={handleChange}
          name="lname"
          value={info.lname}
        />
      </div>
      <input
        type="email"
        className="contact-us-form-email-input-field"
        placeholder="Email Address"
        onChange={handleChange}
        name="email"
        value={info.email}
        autoComplete="false"
      />
      <input
        type="text"
        className="contact-us-form-phone-number-input-field"
        placeholder="Phone Number"
        onChange={handleChange}
        name="number"
        value={info.number}
        autoComplete="false"
      />
      <input
        type="text"
        className="contact-us-form-subject-input-field"
        placeholder="Subject"
        onChange={handleChange}
        name="subject"
        value={info.subject}
      />
      <textarea
        className="contact-us-form-message-box"
        placeholder="Your message"
        onChange={handleChange}
        name="message"
        value={info.message}
      ></textarea>
      <button
        type="submit"
        className="contact-us-send-msg-btn"
        onClick={handleClick}
      >
        Send Message
      </button>
    </div>
  );
}
export default ContactUsForm;
