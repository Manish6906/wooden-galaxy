// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Blog from "./Components/Blog";
import Shop from "./Components/Shop";
import OurStory from "./Components/OurStory";
import Faq from "./Components/Faq";
import Contact from "./Components/Contact"
import Login from "./Pages/Login";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
