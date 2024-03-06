// import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Footer' element={<Footer/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
        </Routes> 
        </Router>
  )
}

export default App