
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
// import Gallery from "./Components/Gallery/Gallery";
import Courses from "./Components/Courses/Courses";
import Footer from "./Components/Footer/Footer";
import ContactBarTop from "./Components/ContactBarTop/ContactBarTop";
import Email from "./Components/Email/Email";
import Teacher from './Components/Teachers/Teacher';   
import "./App.css";
import Main from "./Components/Main/Main";
import Yt from "./Components/Yt/Yt";

const App = () => (
  <Router>
    <div>
      <ContactBarTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/contactus" element={<Email />} />
        <Route path="/teacher" element={<Teacher/>}/>
        <Route path="/yt" element={<Yt/>}/>

      </Routes>
   <Footer />
    </div>
  </Router>
);

export default App;
