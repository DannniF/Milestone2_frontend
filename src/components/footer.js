import React from "react";
import logo from '../assets/img/foodie-central'

const Footer = () => {
    return (
        <div>
        <footer className="footer">
            <div className="layout-container">
                <img src={logo} alt='foodie central' style='height: auto;' />
                    <div className="footer-row">
                    <div className="footer-nav-col">
                        <h3>About Us</h3>
                        <ul>
                            <li class='footer-link'><a href='/about'/>About the Company</li>
                            <li class='footer-link'><a href='/careers'/>Careers</li>
                            <li class='footer-link'><a href='/news'/>News Room</li>
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
                </div>
            </div>
        </footer>
            <div class='footer-social-links'>
                <div class='footer-social-ribbon'>Let's Connect</div>
                <ul>
                    <li class='footer-social-links-icon'><a href='https://icons8.com/icon/118497/facebook'></a></li>
                    <li class='footer-social-links-icon'><a href='https://icons8.com/icon/nj0Uj45LGUYh/instagram'></a></li>
                    <li class='footer-social-links-icon'><a href='https://icons8.com/icon/phOKFKYpe00C/twitterx'></a></li>
                    <li class='footer-social-links-icon'><a href='https://icons8.com/icon/qLVB1tIe9Ts9/youtube'></a></li>
                    <li class='footer-social-links-icon'><a href='https://icons8.com/icon/63676/pinterest'></a></li>
                </ul>
        </div>
     </div>
    )
}