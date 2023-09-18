// import Navbar from "./Components/Navbar/Navbar";
import Gallery from "../Gallery/Gallery";
import Courses from "../Courses/Courses";
// import Footer from "./Components/Footer/Footer";
// import ContactBarTop from "./Components/ContactBarTop/ContactBarTop";
import Laurels from "../Laurels/Laurels";
import Email from "../Email/Email";

const Main = () => {
  return (
    <div>
       <Gallery/>
       <Email/>
       <Courses/>
       <Laurels/>
    </div>
  )
}

export default Main