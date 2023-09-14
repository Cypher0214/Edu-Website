import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Gallery from "./Components/Gallery/Gallery"
import Courses from "./Components/Courses/Courses"
import Footer from "./Components/Footer/Footer"
import ContactBarTop from "./Components/ContactBarTop/ContactBarTop"; 
import  Email  from "./Components/Email/Email";
import Achievements from "./Components/Achievements/Achievements";
import FrontPage from "./Components/FrontPage/FrontPage";

import './App.css'

const App = () => (
  <div>
    <ContactBarTop />
    <Navbar />
    {/* <FrontPage /> */}
    {/* <Main /> */}
    <Gallery/>
     <Courses />
    <Achievements />
    <Email/>
    <Footer /> 
  </div>
);

export default App;
