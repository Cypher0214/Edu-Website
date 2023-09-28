import React from 'react'

import './AchieverBlock.css';

const AchieverBlock = ({ image, rank, name }) => (
    <div>
      <div className="achiever_block">
        <div className="achiever_image_div">
            <img src={image} alt="loading" />
        </div>
        <h3 className="rank">{rank}</h3>
        <h3 className="name">{name}</h3>
      </div>
    </div>
);

export default AchieverBlock
