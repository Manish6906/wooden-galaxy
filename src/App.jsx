// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Blog from "./Pages/Blog";
import Signup from "./Pages/Signup";
import Shop from "./Pages/Shop";
import OurStory from "./Pages/OurStory";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import Single_product from "./Pages/Single_product";
import Dining from "./assets/dining.png";
import Bedroom from "./assets/bedroom.png";
import Living from "./assets/living.png";
import { dining, bedroom, living } from "./utils/data.js";
import DBL from "./Pages/DBL.jsx";
import Footer2 from "./Components/Footer2";
import CheckOut from "./Pages/CheckOut.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Checkout" element={<CheckOut />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Single_product" element={<Single_product />} />
        <Route
          path="/dining"
          element={
            <DBL
              title={"Dining"}
              data={dining}
              img={Dining}
              desc={"Elevate your dining experience with our furniture."}
            />
          }
        />
        <Route
          path="/bedroom"
          element={
            <DBL
              title={"Bedroom"}
              data={bedroom}
              img={Bedroom}
              desc={"Elevate Your Bedroom with Timeless Elegance."}
            />
          }
        />
        <Route
          path="/living"
          element={
            <DBL
              title={"Living"}
              data={living}
              img={Living}
              desc={"Elevate Your Living Room with Style"}
            />
          }
        />
        <Route path="/footer2" element={<Footer2 />} />
      </Routes>
    </Router>
  );
};

export default App;
