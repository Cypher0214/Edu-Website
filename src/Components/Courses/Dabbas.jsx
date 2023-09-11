import React from 'react';
import './Dabbas.css';

const Dabbas = ({ title, img, description, linkUrl }) => (
<div className="content-center bg-slate-400 h-75 w-40 border-2 border-black courses_card rounded-2xl">
    <div className="image_div">
      <img className="img" src={img} alt="Loading" />
    </div>
    <div className="p-4 content-center h-55 w-40 heading_design">
      <h2 >{title}</h2>  
    </div>      
    <div className="text_design">
      <p>{description}</p>  
      <a className="learn_more_btn" href={linkUrl}>Learn More...</a>
    </div>
  </div>
);

export default Dabbas;

