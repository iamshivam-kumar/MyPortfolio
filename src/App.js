import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import './App.css'
import Skill from "./component/page/skill/Skill";
import Contact from "./component/page/Contact/Contact";
import Home from "./Home/Home";
import Footer from "./component/Footer/Footer";
import Project from "./component/page/Project/Project";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project/>}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
