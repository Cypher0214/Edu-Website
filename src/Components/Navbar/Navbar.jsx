// import  images  from "../../assets/7.png" 
import react, { useState } from 'react';
import {images} from '../../Constants/images'
// import { useState } from 'react';
const Navbar = () => {
  // State to manage the visibility of the dropdown menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown menu visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (      
    <nav className="md:bg-gray-800 text-white p-4 h-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-25 h-25">
          <img src={images.fucker} alt="Not fixed Yet, some issue" />
        </div>
        <div className="navbar-title">
          <h1 className="text-3xl font-semibold">Savita Devi Academy</h1>
        </div>
        <div className="navbar-links">
          {/* Show the "hamburger" icon on small screens */}
          <div className="block lg:hidden" onClick={toggleDropdown}>
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
          </div>

          {/* Navigation links */}
          <ul
            className={`${
              isDropdownOpen ? 'block' : 'hidden'
            } lg:flex space-x-4 lg:space-x-8`}
          >
            <li>
              <a href="#" className="text-white hover:text-blue-500">
                Photos
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-500">
                Admission
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
