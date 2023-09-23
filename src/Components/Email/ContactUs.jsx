import React from 'react'

import './ContactUs.css';

import call from '../../assets/call.png';
import mail from '../../assets/mail.png';
import gps from '../../assets/gps.png';
 

const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="contact_heading">Contact Us</div>
      <div className="contact_form_main">
        <div className="contact_info">
            <div className="contact_phone">
              <img src={call} className="phone_image" />
              <p className="contact_mode_text">Phone</p>
              <p className="contact_mode_detail">+91-7424870565</p>
            </div>
            <div className="contact_email">
              <img src={mail} className="mail_image" />
              <p className="contact_mode_text">Phone</p>
              <p className="contact_mode_detail">+91-7424870565</p>
            </div>
            <div className="contact_address">
              <img src={gps} className="gps_image" />
              <p className="contact_mode_text">Phone</p>
              <p className="contact_mode_detail">+91-7424870565</p>
            </div>
        </div>
        <div className="contact_form">
            <div className="contact_form_details">
            <input
                type="text"
                name="name"
                // value={formData.name}
                // onChange={handleInputChange}
                required
                placeholder="Name"
                className="form_input"
              />   
              <input
                type="email"
                name="email"
                // value={formData.email}
                // onChange={handleInputChange}
                placeholder="Email"
                className="form_input"
              />
            <input
              type="phone"
              name="number"   
              // value={formData.number}
              // onChange={handleInputChange}
              required
              placeholder="Number"
              className="form_input"
            />         
            </div>
            <div className="contact_form_message">
            <textarea
              type="phone"
              name="number"   
              // value={formData.number}
              // onChange={handleInputChange}
              required
              placeholder="Type Here"
              className="form_message"
            /> 
            </div>
        </div>
        <div className="send_message">
          <button className="contactus_btn"><p className="contactus_btn_text">Send Message</p></button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
