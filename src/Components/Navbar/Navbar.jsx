// import  images  from "../../assets/7.png" 

import { useEffect, useState } from 'react';
import {images} from '../../Constants/images'
import './Navbarr.css'
import { Link, useLocation } from 'react-router-dom';
// import { useState } from 'react';

const Navbar = () => {
  const location=useLocation();
  const [current,setcurrent]=useState("/");
  // State to manage the visibility of the dropdown menu
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // // Toggle the dropdown menu visibility
  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);

  useEffect(()=>{
   setcurrent(location.pathname);
  //  console.log(current);
  },[location]);
  // };

  return (
    <>      
      <div className="container_main_nav">
        {/* mx-auto justify-between items-center */}
        {/* <div className="navbar_image">
          <img src={images.logo} alt="Not fixed Yet, some issue" className="image_logo" />
        </div> */}
        <div className="navbar_title">
          <h1 >Savita Devi Academy</h1>
        </div>
        <div className="navbar_links">  
          {/* <a href="#">Home</a>
          <a href="#">Photos</a>
          <a href="#about">About Us</a>
          <a href="#about">Courses</a>
          <a href="#">Contact Us</a> */}
           {/* <NavLink to={teacher} className=' '>
                Faculty
         </NavLink> */}
         <Link to = "/" className={" "+(current=="/"?"text-blue-500":"")}> Home </Link>
         <Link to = "/courses" className={" "+(current=="/courses"?"text-blue-500":"")}> Courses </Link>
         <Link to = "/contactus" className={" "+(current=="/contactus"?"text-blue-500":"")}> Contact Us </Link>
         <Link to = "/teacher" className={" "+(current=="/teacher"?"text-blue-500":"")}> Teacher </Link>
         <Link to = "/yt" className={" "+(current=="/yt"?"text-blue-500":"")}> Youtube </Link>

        </div> 
      </div>
      <span className='line'></span>
      </>
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
