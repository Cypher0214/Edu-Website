import React from 'react'
import { useState } from 'react';

import './ContactUs.css';

import call from '../../assets/call.png';
import mail from '../../assets/mail.png';
import gps from '../../assets/gps.png';

const ContactUs = () => {
    const [formData, setFormData] = useState({
      name: '', 
      email: '',
      number: '',
      message: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('https://formsubmit.co/rajputrohan196@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Form data submitted successfully.');
          // You can handle success here, e.g., show a success message or redirect the user.
        } else {
          console.error('Form data submission failed.');
          // You can handle errors here, e.g., display an error message.
        }
      } catch (error) {
        console.error('An error occurred while submitting the form:', error);
      }
  
      // Clear the form after submission
      setFormData({
        name: '',
        email: '',
        number: '',
        message: '',
      });
    };

  return (
    <div className="contactus" id="contactus">
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
              <p className="contact_mode_text">E-mail</p>
              <p className="contact_mode_detail">rajputrohan196@gmail.com</p>
            </div>
            <div className="contact_address">
              <img src={gps} className="gps_image" />
              <p className="contact_mode_text">Location</p>
              <p className="contact_mode_detail">Uttar Pradesh, India</p>
            </div> 
        </div>
        <div className="contact_info_small">
              <div className="contact_info_details_small">
                <img src={call} className="phone_image_small" />
                <p className="contact_mode_detail_small">+91-7424870565</p>
              </div>
              <div className="contact_info_details_small">
                <img src={mail} className="email_image_small" />
                <p className="contact_mode_detail_small">+91-7424870565</p>
              </div>
              <div className="contact_info_details_small">
                <img src={gps} className="location_image_small" />
                <p className="contact_mode_detail_small">+91-7424870565</p>
              </div>
            </div>
        <div className="contact_form">
          <form onSubmit={handleSubmit}>
            <div className="contact_form_details">
              <div className="form_input_cont">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Name"
                  className="form_input"
                />   
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="form_input"
                />
                <input
                  type="phone"
                  name="number"   
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                  placeholder="Number"
                  className="form_input"
                />         
              </div>
              <div className="contact_form_message">
                <textarea
                  type="text"
                  name="message"   
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Type Here"
                  className="form_message"
                />
              </div>
              </div>             
              <div className="send_message">
                {/* <div className="contactus_btn"> */}
                  <button className="contactus_btn"><p className="contactus_btn_text">Send Message</p></button>
                {/* </div> */}
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
