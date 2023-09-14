import Dabbas from './Dabbas';
import gate from '../../assets/gate.png';
import './Courses.css';

const Courses = () => {
  return (
    <div className="main">
      <div className="courses_heading"><h1 className="courses_h1">Courses Offered</h1></div>
      <div className="cards_div w-full display flex items-center space-between gap-4 content-center  ">
        <Dabbas 
          img={gate} 
          title="JEE Main" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
        <Dabbas 
          img={gate} 
          title="JEE Advanced" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
        <Dabbas 
          img={gate} 
          title="NEET" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
        <Dabbas 
          img={gate} 
          title="SSC" 
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
          linkUrl="www.instagram.com" />
      </div>
    </div>
  )
}

export default Courses
