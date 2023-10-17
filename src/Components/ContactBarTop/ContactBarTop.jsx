import React from 'react'

import Dropdown from 'rsuite/Dropdown'; 
import ButtonToolbar from 'rsuite/ButtonToolbar'; 
import 'rsuite/dist/rsuite.min.css'; 

// import { SocialIcon } from 'react-social-icons'

import './ContactBarTop.css'

const ContactBarTop = () => {
  return (
    <div className="top_bar">
        <div>
          {/* <SocialIcon style={{ height: 10, width: 10 }} url="www.gmail.com" /> */}
        <h1>contact@savitadevi.com</h1>
        </div>
        <div>
          <h1>Contact: +91-7424870565</h1>
        </div>
        <ButtonToolbar> 
          <Dropdown title="Student Alerts" activeKey="a" className="dropdown_btn"> 
            <Dropdown.Item eventKey="a">Item A</Dropdown.Item> 
            <Dropdown.Item eventKey="b">Item B</Dropdown.Item> 
            <Dropdown.Item eventKey="c">Item C</Dropdown.Item> 
            <Dropdown.Item eventKey="d">Item D</Dropdown.Item> 
          </Dropdown> 
        </ButtonToolbar>          
    </div>
  )
}

export default ContactBarTop
