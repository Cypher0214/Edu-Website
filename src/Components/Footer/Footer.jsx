import './Footer.css'
import {images} from '../../Constants/images'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div className="main_container_footer  ">
      <div className="top">
        {/* <p>This is the Top Part</p> */}
        <div className="top_left">
          <div>
            <img src={images.logo} className="footer_logo" />
          </div>
          <div className="follow_links">
            <p>Follow Us</p>
            <SocialIcon style={{ height: 35, width: 35 }} url="www.facebook.com" />
            <SocialIcon style={{ height: 35, width: 35 }} url="www.twitter.com" />
            <SocialIcon style={{ height: 35, width: 35 }} url="www.instagram.com" />
            <SocialIcon style={{ height: 35, width: 35 }} url="www.linkedin.com" />
          </div>
        </div>
        <div className="top_right">
          <div>
            <div className="top_right_inner">
            <p>Savita Devi Academy</p>
            <p>Gorakhpur Road</p>
            <p>Near SK Petrol Pump</p>
            <p>Kasya, Kushinagar</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bottom">
        <div className="inner_bottom"><p>1</p></div>
        <div className="inner_bottom"><p>2</p></div>
        <div className="inner_bottom"><p>3</p></div>
        <div className="inner_bottom"><p>4</p></div>
        <div className="inner_bottom"><p>5</p></div>
      </div> */}
    </div>
  )
}

export default Footer
