import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-top">
          <div className="footer-container-subscribe">
            <p>Subscribe Newsletter</p>
            <div className="footer-container-subscribe-input">
              <input
              name="footer-email"
                type="text"
                className="footer-container-subscribe-input-field"
                placeholder="jhondoe@example.com"
              />
              <button className="footer-container-subscribe-input-btn">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="footer-container-mid">
          <div className="footer-container-mid-content">
            <div className="footer-sitemap ">
              <p className="footer-mid-title">Site Map</p>
              <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/contactus">
                  <li>Contact</li>
                </Link>
                <Link>
                  <li>About Us</li>
                </Link>
                <Link>
                  <li>Blog</li>
                </Link>
              </ul>
            </div>
            <div className="footer-letshelp">
              <p className="footer-mid-title">Let Us Help</p>
              <ul>
                <Link>
                  <li>Help and Support</li>
                </Link>
                <Link>
                  <li>Terms</li>
                </Link>
                <Link>
                  <li>Privacy Policy</li>
                </Link>
              </ul>
            </div>
            <div className="footer-contact">
              <p className="footer-mid-title">Contact Info</p>
              <ul>
                <li>9080 Pfannerstill Lake</li>
                <li>409-214-9201</li>
                <li>409-214-9201</li>
                <li>jhon@example.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container-bottom">
        <div className="footer-social-icon">
          <Link to="https://facebook.com">
            <FaFacebookF className="footer-fb-icon" />
          </Link>
          <Link>
            <RiInstagramFill className="footer-ig-icon" />
          </Link>
        </div>
        <div className="footer-copyright">
          Copyright @ 2023 All reserved
          <p>
            <span> 100 Years</span>
            <span> Healthy </span>
            <span> Life </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
