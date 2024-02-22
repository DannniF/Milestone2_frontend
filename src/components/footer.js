import React from "react";
import { Link } from "react-router-dom"; //Import Link component
import logo from '../assets/img/foodie-central-logo.png'

function Footer() {
    return (
      <div>
        <footer className="footer">
          <div className="layout-container">
            <img src={logo} alt="foodie central" style={{ height: "auto" }} />
            <div className="footer-row">
              <div className="footer-nav-col">
                <h3>About Us</h3>
                <ul>
                  <li className="footer-link">
                    <Link to="/about">About the Company</Link>
                  </li>
                  <li className="footer-link">
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li className="footer-link">
                    <Link to="/news">News Room</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-col">
                <h3>Help</h3>
                <ul>
                  <li>Help Center</li>
                  <li>Advertise With Us</li>
                  <li>My Account</li>
                  <li>Feedback</li>
                </ul>
              </div>
              <div className="footer-col">
                <h3>Services</h3>
                <ul>
                  <li>Track Orders</li>
                  <li>Shipping FAQs</li>
                  <li>Pickup</li>
                  <li>Same-day Delivery</li>
                </ul>
              </div>
              <div className="footer-social-links">
                <div className="footer-social-ribbon">Let's Connect</div>
                <ul>
                  <li className="footer-social-links-icon">
                    <a href="https://icons8.com/icon/118497/facebook"></a>
                  </li>
                  <li className="footer-social-links-icon">
                    <a href="https://icons8.com/icon/nj0Uj45LGUYh/instagram"></a>
                  </li>
                  <li className="footer-social-links-icon">
                    <a href="https://icons8.com/icon/phOKFKYpe00C/twitterx"></a>
                  </li>
                  <li className="footer-social-links-icon">
                    <a href="https://icons8.com/icon/qLVB1tIe9Ts9/youtube"></a>
                  </li>
                  <li className="footer-social-links-icon">
                    <a href="https://icons8.com/icon/63676/pinterest"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;