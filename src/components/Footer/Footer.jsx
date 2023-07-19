import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <div className="footer-container footer">
        <div className="footer-container-content">
          <div className="footer-container-sitemap">
            <div className="footer-container-sitemap-title">Site Map</div>
            <div className="footer-container-sitemap-links">
              <ul>
                <NavLink className="footerLink">
                  <li>Home</li>
                </NavLink>
                <NavLink className="footerLink">
                  <li>Home</li>
                </NavLink>
                <NavLink className="footerLink">
                  <li>Home</li>
                </NavLink>
                <NavLink className="footerLink">
                  <li>Home</li>
                </NavLink>
                <NavLink className="footerLink">
                  <li>Home</li>
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="footer-container-letshelp">
            <div className="footer-container-letshelp-title">Let Us Help</div>
            <div className="footer-container-letshelp-links">
              <ul>
                <NavLink className="footerLink">
                  <li>Help and Support</li>
                </NavLink>
                <NavLink className="footerLink">
                  <li>Terms</li>
                </NavLink>
                <NavLink className="footerLink">
                  <li>Privacy Policy</li>
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="footer-container-midSection">
            <div className="footer-container-midSection-logo">
              <img src={logo} alt="" />
            </div>
            <div className="footer-container-midSection-subscribe">
              <div className="footer-container-midSection-subscribe-title">
                subscribe newsletter
              </div>
              <div className="footer-container-midSection-subscribe-form">
                <input
                  type="text"
                  placeholder="e.g., email@example.com"
                  name="subsEmail"
                />
                <input type="button" value="Join" />
              </div>
            </div>
          </div>
          <div className="footer-container-contact">
            <div className="footer-container-contact-title">Contact info</div>
            <div className="footer-container-contact-details">
              <div className="footer-container-contact-details-address">
                <div className="footer-container-contact-details-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_912_3453)">
                      <path
                        d="M8.64383 16.64C8.89844 16.5657 9.17212 16.5957 9.40466 16.7232C9.63721 16.8507 9.80957 17.0654 9.88383 17.32C9.95809 17.5746 9.92817 17.8483 9.80064 18.0808C9.67312 18.3134 9.45844 18.4857 9.20383 18.56C8.70383 18.706 8.34383 18.86 8.11283 19C8.35083 19.143 8.72683 19.303 9.24883 19.452C10.4038 19.782 12.0568 20 13.9238 20C15.7908 20 17.4438 19.782 18.5988 19.452C19.1218 19.303 19.4968 19.143 19.7348 19C19.5048 18.86 19.1448 18.706 18.6448 18.56C18.3942 18.4825 18.1841 18.3096 18.0598 18.0786C17.9355 17.8476 17.9069 17.577 17.9803 17.3251C18.0536 17.0733 18.2229 16.8603 18.4518 16.7321C18.6807 16.604 18.9508 16.5709 19.2038 16.64C19.8718 16.835 20.4838 17.085 20.9538 17.406C21.3888 17.705 21.9238 18.226 21.9238 19C21.9238 19.783 21.3758 20.308 20.9338 20.607C20.4558 20.929 19.8308 21.18 19.1478 21.375C17.7698 21.77 15.9238 22 13.9238 22C11.9238 22 10.0778 21.77 8.69983 21.375C8.01683 21.18 7.39183 20.929 6.91383 20.607C6.47183 20.307 5.92383 19.783 5.92383 19C5.92383 18.226 6.45883 17.705 6.89383 17.406C7.36383 17.085 7.97583 16.835 8.64383 16.64ZM13.9238 2C15.913 2 17.8206 2.79018 19.2271 4.1967C20.6337 5.60322 21.4238 7.51088 21.4238 9.5C21.4238 12.068 20.0238 14.156 18.5738 15.64C17.9974 16.2239 17.378 16.7638 16.7208 17.255C16.1268 17.701 14.7688 18.537 14.7688 18.537C14.5113 18.6834 14.2201 18.7604 13.9238 18.7604C13.6276 18.7604 13.3364 18.6834 13.0788 18.537C12.4046 18.1467 11.7529 17.7187 11.1268 17.255C10.4694 16.7641 9.84994 16.2242 9.27383 15.64C7.82383 14.156 6.42383 12.068 6.42383 9.5C6.42383 7.51088 7.214 5.60322 8.62053 4.1967C10.0271 2.79018 11.9347 2 13.9238 2ZM13.9238 4C12.4651 4 11.0662 4.57946 10.0347 5.61091C9.00329 6.64236 8.42383 8.04131 8.42383 9.5C8.42383 11.316 9.41983 12.928 10.7038 14.24C11.6698 15.228 12.7338 15.98 13.4708 16.442L13.9238 16.716L14.3768 16.442C15.1128 15.98 16.1778 15.228 17.1438 14.241C18.4278 12.928 19.4238 11.316 19.4238 9.5C19.4238 8.04131 18.8444 6.64236 17.8129 5.61091C16.7815 4.57946 15.3825 4 13.9238 4ZM13.9238 6.5C14.3178 6.5 14.7079 6.5776 15.0719 6.72836C15.4359 6.87913 15.7666 7.1001 16.0451 7.37868C16.3237 7.65726 16.5447 7.98797 16.6955 8.35195C16.8462 8.71593 16.9238 9.10603 16.9238 9.5C16.9238 9.89397 16.8462 10.2841 16.6955 10.6481C16.5447 11.012 16.3237 11.3427 16.0451 11.6213C15.7666 11.8999 15.4359 12.1209 15.0719 12.2716C14.7079 12.4224 14.3178 12.5 13.9238 12.5C13.1282 12.5 12.3651 12.1839 11.8025 11.6213C11.2399 11.0587 10.9238 10.2956 10.9238 9.5C10.9238 8.70435 11.2399 7.94129 11.8025 7.37868C12.3651 6.81607 13.1282 6.5 13.9238 6.5ZM13.9238 8.5C13.6586 8.5 13.4043 8.60536 13.2167 8.79289C13.0292 8.98043 12.9238 9.23478 12.9238 9.5C12.9238 9.76522 13.0292 10.0196 13.2167 10.2071C13.4043 10.3946 13.6586 10.5 13.9238 10.5C14.189 10.5 14.4434 10.3946 14.6309 10.2071C14.8185 10.0196 14.9238 9.76522 14.9238 9.5C14.9238 9.23478 14.8185 8.98043 14.6309 8.79289C14.4434 8.60536 14.189 8.5 13.9238 8.5Z"
                        fill="#01ACF1"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_912_3453">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="footer-container-contact-details-address-desc">
                  6080 Pfannerstill Lake, Gilbraltar UK
                </div>
              </div>
              <div className="footer-container-contact-details-phone">
                <div className="footer-container-contact-details-icon">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.9062 11.0035C25.073 9.86394 25.0171 8.70205 24.7416 7.58452C24.3656 6.05742 23.5881 4.66328 22.4925 3.55168C21.4001 2.43667 20.0299 1.64532 18.5291 1.26252C17.4307 0.982536 16.2889 0.925832 15.1689 1.09566M19.9075 10.4647C19.9995 9.84274 19.9466 9.20746 19.7531 8.61009C19.5595 8.01272 19.2307 7.46998 18.7932 7.02563C18.3564 6.58056 17.823 6.24613 17.2359 6.0493C16.6488 5.85247 16.0245 5.79874 15.4133 5.89245"
                      stroke="#01ACF1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.8581 3.08691C7.09304 3.08704 7.32368 3.1511 7.52611 3.27247C7.72853 3.39383 7.89536 3.56808 8.00931 3.77715L9.62088 6.72974C9.72487 6.92028 9.78161 7.13375 9.7862 7.35165C9.79079 7.56955 9.74309 7.7853 9.64723 7.9802L8.09493 11.1385C8.09493 11.1385 8.54475 13.492 10.427 15.4072C12.3099 17.3225 14.615 17.7728 14.615 17.7728L17.7183 16.1933C17.9099 16.0957 18.1221 16.0473 18.3364 16.0521C18.5507 16.0568 18.7606 16.1148 18.9478 16.2208L21.8588 17.8673C22.0639 17.9835 22.2348 18.1534 22.3537 18.3593C22.4726 18.5653 22.5353 18.7998 22.5352 19.0387V22.4389C22.5352 24.1699 20.9546 25.421 19.3423 24.8668C16.031 23.7302 10.8913 21.5651 7.6326 18.2506C4.37521 14.9355 2.24796 9.70511 1.13033 6.3357C0.586334 4.69522 1.81526 3.08691 3.51706 3.08691H6.8581Z"
                      stroke="#01ACF1"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="footer-container-contact-details-phone-desc">
                  409-214-9201 409-214-8302
                </div>
              </div>
              <div className="footer-container-contact-details-mail">
                <div className="footer-container-contact-details-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_912_3460)">
                      <path
                        d="M19.9238 7.5H23.9238V20.5H3.92383V7.5H7.92383M13.9238 9.5V2.5"
                        stroke="#01ACF1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.9238 6.5L13.9238 9.5L10.9238 6.5"
                        stroke="#01ACF1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.92383 7.5L13.9238 15L23.9238 7.5"
                        stroke="#01ACF1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_912_3460">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="footer-container-contact-details-mail-desc">
                  Ivy48@hotmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright-container">
        <div className="footer-copyright-container-content">
        <div className="footer-copyright-container-left">
          Copyright @2023 All reserved <span> 100 Years </span>{" "}
          <span>Healthy</span>
          <span> Life</span>
        </div>
        <div className="footer-copyright-container-right">
          <FaFacebookF />
          <RiInstagramFill />
        </div>
        </div>
       
      </div>
    </>
  );
};

export default Footer;
