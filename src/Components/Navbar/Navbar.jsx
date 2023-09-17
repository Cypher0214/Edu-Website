// import  images  from "../../assets/7.png" 
import react, { useState } from 'react';
import {images} from '../../Constants/images'
import './Navbarr.css'

// import { useState } from 'react';

const Navbar = () => {
  // State to manage the visibility of the dropdown menu
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // // Toggle the dropdown menu visibility
  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (      
      <div className="container_main_nav">
        {/* mx-auto justify-between items-center */}
        <div className="navbar_image">
          <img src={images.logo} alt="Not fixed Yet, some issue" className="image_logo" />
        </div>
        <div className="navbar_title">
          <h1>Savita Devi Academy</h1>
        </div>
        <div className="navbar_links">  
          <a href="#home">Home</a>
          <a href="#">About Us</a>
          <a href="#achievements">Achievements</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact Us</a>
        </div> 
      </div>
  );
        };

export default Navbar;

{/* Show the "hamburger" icon on small screens */}
          {/* <div className="block lg:hidden" onClick={toggleDropdown}>
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 3.5A.5.5 0 003.5 4H16a.5.5 0 000-1H3.5A.5.5 0 003 3.5z"
              />
              <path
                fillRule="evenodd"
                d="M3 8a.5.5 0 01.5-.5h13a.5.5 0 010 1H3.5A.5.5 0 013 8z"
              />
              <path
                fillRule="evenodd"
                d="M3.5 12a.5.5 0 00-.5.5H16a.5.5 0 000-1H3.5a.5.5 0 00-.5.5z"
              />
              <path
                fillRule="evenodd"
                d="M3 16.5A.5.5 0 013.5 16H16a.5.5 0 010 1H3.5a.5.5 0 01-.5-.5z"
              />
            </svg>
          </div> */}

          {/* Navigation links */}
          {/* <ul
            className={`${
              isDropdownOpen ? 'block' : 'hidden'
            } lg:flex space-x-4 lg:space-x-8`}
          > */}

