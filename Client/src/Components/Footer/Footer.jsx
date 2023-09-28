import './Footer.css'
import {images} from '../../Constants/images'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div className="main_container_footer  ">
      <div className="footer">
        {/* <p>This is the footer Part</p> */}
        <div className="footer_left">
          <div>
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
        <div className="footer_middle">
          <button className="enroll_btn">Enroll Now</button>
        </div>
        <div className="footer_right">
          <div>
            <div className="footer_right_inner">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ultricies sapien. Phasellus interdum odio vel nibh pellentesque ullamcorper. Quisque libero erat, pulvinar eu sollicitudin consectetur, posuere sed sapien. Phasellus ultricies ut ante sed tincidunt. Pellentesque metus turpis, ultricies sed arcu vitae, accumsan eleifend ante. Aenean volutpat nulla non facilisis commodo. Sed sed eros pharetra, porttitor justo non, cursus urna. Mauris elementum turpis interdum nulla luctus sagittis.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
