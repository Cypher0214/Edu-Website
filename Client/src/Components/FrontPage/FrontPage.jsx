import React from 'react'

import {images} from '../../Constants/images'

import './FrontPage.css'

const FrontPage = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      {/* < SubHeading title="Chase the new flavour" /> */}
      <h1 className="app__header-h1">The key to Career Success</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Details</p>
    </div>

    <div className="app__wrapper_img">
      <img src={images.image12} alt="header img" />
    </div>
  </div>
  )
}

export default FrontPage
