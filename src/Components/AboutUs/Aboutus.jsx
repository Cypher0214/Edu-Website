import React from 'react'

import { images } from '../../Constants/images';

import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="aboutus_main">
      <div className="aboutus_logo_heading">
        <img src={images.logo} className="aboutus_logo" alt="About Us Logo" />
        <h2>Savita Devi Academy</h2>
      </div>
      <div className="aboutus_down">
        <div className="aboutus_girl_div">
            <img src={images.aboutus} className="aboutus_girl" alt="About Us Logo" />
        </div>
        <div className="aboutus_arrow_div">
            <img src={images.aboutus_arrow} className="aboutus_arrow" alt="About Us Arrow" />
        </div>
        <div className="aboutus_arrow_down_div">
            <img src={images.aboutus_arrow_down} className="aboutus_arrow_down" alt="About Us Arrow" />
        </div>
        <div className="aboutus_text_div">
            <img src={images.aboutus_text} className="aboutus_text" alt="About Us Text" />
        </div>
      </div>
    </div>
  )
}

export default Aboutus
