import React from 'react';
import '../SCSS/index.css';
import Iframe from 'react-iframe';

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer-section_padding">
        {/* New Parent Div for all four columns */}
        <div className="sb_footer-column-container" style={{ paddingBottom: '20px' }}>
          {/* Column 1 */}
          <div className="sb_footer-links">
            <div className="sb_footer-link-div">
              <h4>About</h4>
              <div className="sb_footer-links_div">
                <a href="#">
                  <p>Profile</p>
                </a>
                <a href="#">
                  <p>Careers</p>
                </a>
                <a href="/community">
                  <p>Community</p>
                </a>
              </div>
            </div>
            {/* Column 2 */}
            <div className="sb_footer-link-div">
              <h4>Resources</h4>
              <div className="sb_footer-links_div">
                <a href="/resource">
                  <p>Resource Center</p>
                </a>
                <a href="/resource">
                  <p>Testimonial</p>
                </a>
                <a href="/resource">
                  <p>Individual</p>
                </a>
              </div>
            </div>
            {/* Column 3 */}
            <div className="sb_footer-link-div">
              <h4>Contact Us</h4>
              <a href="#">
                <i className="bi bi-geo-alt-fill">Las Vegas,Nevada</i>
              </a>
              <br></br>
              <a href="#">
                <i className="bi bi-telephone-fill">+123-456-7890</i>
              </a>
              <br></br>
              <a href="#">
                <i className="bi bi-envelope-at-fill">company@gmail.com</i>
              </a>
              <br></br>
              <Iframe
                className="footer-map"
                width="50px"
                height="25px"
                frameborder="0"
                style="border:0"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://places.googleapis.com/v1/places/ChIJs5ydyTiuEmsR0fRSlU0C7k0?fields=id,displayName&key=AIzaSyCfQYThYI5MDG3eG9VFnRyYUQiZS34N-wA"
                allowfullscreen=""
                loading="lazy"
              ></Iframe>
            </div>
        {/* Column 4 */}
        <div className="sb_footer-link_div">
          <h4>Let's Connect</h4>
          <div className="sb_footer-links_div">
                <div className="socialmedia" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
              <a href="#">
                <img src={process.env.PUBLIC_URL + '/fb.png'} alt="Facebook" style={{ marginRight: '10px' }}/>
                  </a>
                  <br/>
              <a href="#">
                <img src={process.env.PUBLIC_URL + '/x.jpg'} alt="Twitter" style={{ marginRight: '10px' }} />
                  </a>
                  <br/>
              <a href="#">
                <img
                  src={process.env.PUBLIC_URL + '/pin.png' }
                  alt="Pinterest" style={{ marginRight: '10px' }}
                />
                  </a>
                  <br/>
              <a href="#">
                <img
                  src="/http://localhost:3000/assets/img/insta.png"
                  alt="Instagram" style={{ marginRight: '10px' }}
                />
                  </a>
                  <br/>
                  </div>
        </div>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="sb_footer-below" style={{ paddingBottom: '20px' }}>
          <div className="sb_footer-copyright">
            <p>
              &copy;{new Date().getFullYear()} FOODIE CENTRAL INC | All right
              reserved | Terms of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
