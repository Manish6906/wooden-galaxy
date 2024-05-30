// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Blog from "./Pages/Blog";
import Signup from "./Pages/Signup";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import OurStory from "./Pages/OurStory";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import Single_product from "./Pages/Single_product";
import Dining from "./assets/dining.png";
import Bedroom from "./assets/bedroom.png";
import Living from "./assets/living.png";
import DBL from "./Pages/DBL.jsx";
import Footer2 from "./Components/Footer2";
import CheckOut from "./Pages/CheckOut.jsx";
import CartNav from "./Components/CartNav.jsx";
import CoNav from "./Components/CoNav.jsx";
import CheNav from "./Components/CheNav.jsx";
import useFetch from "./zustand/useFetch.jsx";
import { useEffect } from "react";

const App = () => {
  const {
    dining,
    bedroom,
    living,
    fetchDiningData,
    fetchBedroomData,
    fetchLivingData,
  } = useFetch();
  useEffect(() => {
    fetchDiningData();
    fetchBedroomData();
    fetchLivingData();
  }, );
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Footer' element={<Footer />} />
        <Route path='/CheckOut' element={<CheckOut />} />
        <Route path='/Navbar' element={<Navbar />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/OurStory' element={<OurStory />} />
        <Route path='/Faq' element={<Faq />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/CartNav' element={<CartNav />} />
        <Route path='/CoNav' element={<CoNav />} />
        <Route path='/CheNav' element={<CheNav />} />
        <Route path='/Single_product' element={<Single_product />} />
        <Route
          path='/dining'
          element={
            <DBL
              title={"Dining"}
              data={dining ? dining.data : []}
              img={Dining}
              desc={"Elevate your dining experience with our furniture."}
            />
          }
        />
        <Route
          path='/bedroom'
          element={
            <DBL
              title={"Bedroom"}
              data={bedroom ? bedroom.data : []}
              img={Bedroom}
              desc={"Elevate Your Bedroom with Timeless Elegance."}
            />
          }
        />
        <Route
          path='/living'
          element={
            <DBL
              title={"Living"}
              data={living ? living.data : []}
              img={Living}
              desc={"Elevate Your Living Room with Style"}
            />
          }
        />
        <Route path='/footer2' element={<Footer2 />} />
      </Routes>
    </Router>
  );
};

export default App;
