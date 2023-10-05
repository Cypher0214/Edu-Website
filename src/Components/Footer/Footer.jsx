import './Footer.css'
import {images} from '../../Constants/images'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div className="main_container_footer  ">
      <div className="footer">
        {/* <p>This is the footer Part</p> */}
        <div className="footer_logo_links">
          <div className="footer_logo_div">
            <img src={images.logo} className="footer_logo" />
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
          <button className="enroll_btn">Enroll Now</button>
        </div>
        <div className="footer_small_div_line">
          <hr />
        </div>
        <div className="footer_details">  
            <div className="footer_details_inner">
              <p>Savita Devi Academy </p>
              <p>Kushinagar, Gorakhpur</p>
              <p>Uttar Pradesh</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
