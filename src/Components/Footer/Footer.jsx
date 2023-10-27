import './Footer.css';
import { images } from '../../Constants/images';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="main_container_footer">
      <div className="footer">
        <div className="footer_logo_links">
          <div className="footer_logo_div">
            <img src={images.logo} className="footer_logo" alt="Footer Logo" />
          </div>
          <div className="follow_links">
            <p>Follow Us:</p>
            <SocialIcon className="follow_links_icons" style={{ height: 35, width: 35 }} url="www.facebook.com" />
            <SocialIcon className="follow_links_icons" style={{ height: 35, width: 35 }} url="www.twitter.com" />
            <SocialIcon className="follow_links_icons" style={{ height: 35, width: 35 }} url="www.instagram.com" />
            <SocialIcon className="follow_links_icons" style={{ height: 35, width: 35 }} url="www.linkedin.com" />
          </div>
        </div>
        <div className="footer_small_div_line">
          <hr />
        </div>
        <div className="footer_enroll">
          <Link to="/contactus">
            <button className="enroll_btn">Enroll Now</button>
          </Link>
        </div>
        <div className="footer_small_div_line">
          <hr />
        </div>
        <div className="footer_details">
          <div className="footer_details_inner_up">
            <p>Savita Devi Academy</p>
            <p>Kushinagar, Gorakhpur</p>
            <p>Uttar Pradesh</p>
          </div>
          <div className="footer_details_inner_down">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.860678587688!2d83.90464639999999!3d26.748821699999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993ebaaed472eb7%3A0x82c75acfc9eb6159!2sSavita%20Devi%20academy%20and%20Library!5e0!3m2!1sen!2sin!4v1697456981514!5m2!1sen!2sin"
              width="500"
              height="150"
              style={{ border: 0 }}
              // allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
