import React from 'react'

import { alertsData } from "../../Constants/alerts";


import Dropdown from 'rsuite/Dropdown'; 
import ButtonToolbar from 'rsuite/ButtonToolbar'; 
import 'rsuite/dist/rsuite.min.css'; 

import { SocialIcon } from 'react-social-icons';

import './ContactBarTop.css'

const ContactBarTop = () => {
  const dropdownTitleStyle = {
    color: '#000', // Replace with the desired color value (e.g., red)
  };

  return (
    <div className="top_bar">
      <div className="top_bar_big">
          <div>
            {/* <SocialIcon style={{ height: 10, width: 10 }} url="www.gmail.com" /> */}
          <h1 className="contactBar_details">contact@savitadevi.com</h1>
          </div>
          <div>
            <h1 className="contactBar_details">Contact: +91-7424870565</h1>
          </div>
          <ButtonToolbar> 
            <Dropdown title="Student Alerts" activeKey="a" style={dropdownTitleStyle}> 
              {alertsData.alerts.map((alert) => (
              <Dropdown.Item key={alert.id} eventKey={alert.id}>
                <div className="alert_message">{alert.message}</div>
              </Dropdown.Item>
              ))}
            </Dropdown> 
          </ButtonToolbar>        
      </div>
      <div className="top_bar_small">
        <div>
        <SocialIcon className="top_bar_contact" style={{ height: 25, width: 25 }} url="www.mailto.com" />
        {/* <h1 className="contactBar_details"><a href="contact">Contact</a></h1> */}
        </div>
        <div>
          <ButtonToolbar> 
            <Dropdown title="Student Alerts" activeKey="a" style={dropdownTitleStyle}> 
              {alertsData.alerts.map((alert) => (
              <Dropdown.Item key={alert.id} eventKey={alert.id}>
                <div className="alert_message">{alert.message}</div>
              </Dropdown.Item>
              ))}
            </Dropdown> 
          </ButtonToolbar>  
        </div>
      </div>
    </div>
  )
}

export default ContactBarTop
