// import Navbar from "./Components/Navbar/Navbar";
import Gallery from "../Gallery/Gallery";
// import Courses from "../Courses/Courses";
import ContactUs from "../ContactUs/ContactUs";
// import Laurels from "../Laurels/Laurels";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../banner/banner";
const Main = () => {
  return (
    <div>
        <Gallery />
       <AboutUs />
       <ContactUs />
        {/* <Courses />
       <Laurels /> */}
       <Banner />
    </div>
  )
}

export default Main