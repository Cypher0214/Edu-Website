import Dabbas from './Dabbas';
import gate from '../../assets/gate.png';
import UPP from '../../assets/CoursesLogos/UPP.png';
import Army from '../../assets/CoursesLogos/Army.png';
import Bank from '../../assets/CoursesLogos/Bank.png';
import CTET from '../../assets/CoursesLogos/UPP.png';
import NDA from '../../assets/CoursesLogos/UPP.png';
import Rail from '../../assets/CoursesLogos/UPP.png';
import SSC from '../../assets/CoursesLogos/UPP.png';
import SuperTET from '../../assets/CoursesLogos/SuperTET.png';
import TET from '../../assets/CoursesLogos/TET.png';
import UPSI from '../../assets/CoursesLogos/UPSI.png';

import './Courses.css';

const Courses = () => {
  return (
    <div className="main" id="courses">
      <div className="courses_heading"><h1 className="courses_h1">Courses We Offer</h1></div>
      <div className="cards_div w-full display flex items-center space-between gap-4 content-center  ">
        <Dabbas 
          img={UPP} 
          title="UPP" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
        <Dabbas 
          img={SSC} 
          title="SSC" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
        <Dabbas 
          img={TET} 
          title="TET" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
        <Dabbas 
          img={NDA} 
          title="NDA" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
          <Dabbas 
          img={UPSI} 
          title="UPSI" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
          <Dabbas 
          img={SuperTET} 
          title="Super TET" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
          <Dabbas 
          img={CTET} 
          title="C-TET" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
          <Dabbas 
          img={Rail} 
          title="Railway" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
          <Dabbas 
          img={Army} 
          title="Army" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
          <Dabbas 
          img={Bank} 
          title="Banking" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
        <Dabbas 
          img={UPP} 
          title="Lekhpal" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
        <Dabbas 
          img={UPP} 
          title="Polytechnic" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
      </div>
      {/* <div className="viewMore"><a>View More</a></div> */}
    </div>
  )
}

export default Courses
