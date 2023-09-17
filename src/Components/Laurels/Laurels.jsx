import React from 'react'

import LaurelBlocks from './LaurelBlocks';

import './Laurels.css'

import achiever from '../../assets/achiever.jpg';

const Laurels = () => {
  return (
    <div className="main_laurels">
      <div className="achievements_heading">
        <h1>Achievements</h1>
      </div>
      <div className="laurel_div w-full display flex items-center space-between gap-4 content-center content-stretch ">
      <LaurelBlocks 
          img={achiever} 
          title="Ranchod Das" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          />
        <LaurelBlocks 
          img={achiever} 
          title="Rancho" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          />
        <LaurelBlocks 
          img={achiever} 
          title="Wangdu" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          />
      </div>      
      <div className="moreLaurels"><a>View More &gt;&gt;&gt; </a></div>
    </div>
  )
}

export default Laurels
