// import  images  from "../../assets/7.png" 

import { useEffect, useState } from 'react';
import {images} from '../../Constants/images'
import './Navbarr.css'
import { Link, useLocation } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import {GiCrossedBones } from 'react-icons/gi';

// import { useState } from 'react';
// import { useState } from 'react';

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);
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
        <div className="navbar_logo">
          <img src={images.logo} />
        </div>
        <div className="navbar_title">
          <h1 className="navbar_regular_heading">Savita Devi Academy</h1>
          <h1 className="navbar_small_heading">SD Academy</h1>
        </div>
        <div className="navbar_links">  
          <Link to = "/" className={" "+(current=="/"?"text-blue-500":"")}> Home </Link>
          <Link to = "/courses" className={" "+(current=="/courses"?"text-blue-500":"")}> Courses </Link>
          {/* <Link to="/courses" className={`link ${current === '/' ? 'selected' : ''}`}>Courses</Link> */}
          <Link to = "/contactus" className={" "+(current=="/contactus"?"text-blue-500":"")}> Contact Us </Link>
          <Link to = "/teacher" className={" "+(current=="/teacher"?"text-blue-500":"")}> Teacher </Link>
          <Link to = "/yt" className={" "+(current=="/yt"?"text-blue-500":"")}> Youtube </Link>
        </div>
        <div className="navbar_smallscreen">
        <GiHamburgerMenu color="#000" fontSize={27} onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (      // If ToggleMenu is true
          <div className="navbar_smallscreen_overlay flex__center slide_bottom">
            <GiCrossedBones fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul  onClick={() => setToggleMenu(false)} className="navbar_smallscreen_links">
              <Link to = "/" className="small_link">Home</Link>
              <Link to = "/courses" className="small_link">Courses</Link>
              <Link to = "/contactus" className="small_link">Contact Us</Link>
              <Link to = "/teacher" className="small_link">Teachers</Link>
              <Link to = "/yt" className="small_link">Youtube</Link>
            </ul>
            {/* <div className="navbar_links">  
              <Link to = "/"> Home </Link>
              <Link to = "/courses"> Courses </Link>
              <Link to = "/contactus"> Contact Us </Link>
              <Link to = "/teacher"> Teacher </Link>
              <Link to = "/yt"> Youtube </Link>
            </div> */}
          </div>
        )}
      </div> 
    </div>
      <span className='line'></span>
      </>
  );
        };

export default Navbar;
