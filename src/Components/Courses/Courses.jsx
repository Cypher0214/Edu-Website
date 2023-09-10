import React from 'react'
import Dabbas from './Dabbas';
import gate from '../../assets/gate.png';
import './Courses.css';

const Courses = () => {
  return (
    <div className="main">
      <div className="align-center heading"><h1>Courses Offered</h1></div>
      <div className="cards_div w-full display flex space-between gap-4 content-center content-stretch ">
        <Dabbas 
          img={gate} 
          title="IIT JEE" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
        <Dabbas 
          img={gate} 
          title="IIT JEE" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
        <Dabbas 
          img={gate} 
          title="IIT JEE" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
        <Dabbas 
          img={gate} 
          title="IIT JEE" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
      </div>
    </div>
  )
}

export default Courses
