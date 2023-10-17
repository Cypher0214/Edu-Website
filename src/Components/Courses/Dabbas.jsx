import React from 'react';
import './Dabbas.css';

const Dabbas = ({ title, img, description, linkUrl }) => (
<div className="courses_card">
    <div className="image_div">
      <img className="img" src={img} alt="Loading" />
    </div>
    <div className="heading_design">
      <h2 className="course_title">{title}</h2>  
    </div>      
    {/* <div className="text_design">
      <p>{description}</p>  
      <a className="learn_more_btn" href={linkUrl}>Learn More...</a>
    </div> */}
  </div>
);

export default Dabbas

