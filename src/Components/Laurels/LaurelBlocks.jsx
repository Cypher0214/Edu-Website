import React from 'react';
import './LaurelBlocks.css';

const LaurelBlocks = ({ title, img, description, linkUrl }) => (
    <div className="content-center h-75 w-40 border-2 achiever_card rounded-2xl">
        <div className="image_div">
          <img className="img" src={img} alt="Loading" />
        </div>
        <hr />
        <div className="p-4 content-center h-55 w-40 heading_design">
          <h2 >{title}</h2>  
        </div>      
        <div className="text_design">
          <p>{description}</p>  
        </div>
      </div>
    );

export default LaurelBlocks
