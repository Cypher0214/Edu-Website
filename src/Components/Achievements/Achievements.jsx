import React from 'react'
import AchieverBlock from './AchieverBlock';

import girl from '../../assets/girl.png';


import './Achievements.css';

const Achievements = () => {
  return (
    <div className="achieve_main" id="achieve ">
      <div className="achieve_main_heading">
        <h1>Our Outstanding Results</h1>
        <hr />
        <h1>The Champions !!!</h1>
      </div>

      <div className="achiever_cards_div">
        <AchieverBlock 
        image={girl}
        rank="AIR 5"
        name="Anshika Aggarwal"
        />
        <AchieverBlock 
        image={girl}
        rank="AIR 6"
        name="Rolando"
        />
        <AchieverBlock 
        image={girl}
        rank="AIR 7"
        name="Lonal Mausi"
        />
        <AchieverBlock 
        image={girl}
        rank="AIR 7"
        name="Lonal Mausi"
        />
        <AchieverBlock 
        image={girl}
        rank="AIR 7"
        name="Lonal Mausi"
        />
        <AchieverBlock 
        image={girl}
        rank="AIR 7"
        name="Lonal Mausi"
        />
        <AchieverBlock 
        image={girl}
        rank="AIR 7"
        name="Lonal Mausi"
        />
        <AchieverBlock 
        image={girl}
        rank="AIR 7"
        name="Lonal Mausi"
        />
      </div>


    </div>
  )
}

export default Achievements
