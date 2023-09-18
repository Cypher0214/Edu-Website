import Dabbas from './Dabbas';
import gate from '../../assets/gate.png';
import './Courses.css';

const Courses = () => {
  return (
    <div className="main" id="courses">
      <div className="courses_heading"><h1 className="courses_h1">Courses Offered</h1></div>
      <div className="cards_div w-full display flex items-center space-between gap-4 content-center  ">
        <Dabbas 
          img={gate} 
          title="UPP" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
        <Dabbas 
          img={gate} 
          title="SSC" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
        <Dabbas 
          img={gate} 
          title="TET" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
        <Dabbas 
          img={gate} 
          title="NDA" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
          <Dabbas 
          img={gate} 
          title="UPSI" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
          <Dabbas 
          img={gate} 
          title="Super TET" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
          <Dabbas 
          img={gate} 
          title="C-TET" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
          {/* <Dabbas 
          img={gate} 
          title="Railway" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
          <Dabbas 
          img={gate} 
          title="Army" 
          //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" /> */}
      </div>
      {/* <div className="viewMore"><a>View More</a></div> */}
    </div>
  )
}

export default Courses
