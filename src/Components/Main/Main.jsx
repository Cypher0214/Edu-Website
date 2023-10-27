// import Navbar from "./Components/Navbar/Navbar";
import Gallery from "../Gallery/Gallery";
// import Courses from "../Courses/Courses";
import ContactUs from "../ContactUs/ContactUs";
// import Laurels from "../Laurels/Laurels";
// import Achievements from "../Achievements/Achievements";
import Banner from "../banner/banner";
const Main = () => {
  return (
    <div>
        <Gallery />
       {/* <Achievements /> */}
       <ContactUs />
        {/* <Courses />
       <Laurels /> */}
       <Banner />
    </div>
  )
}

export default Main