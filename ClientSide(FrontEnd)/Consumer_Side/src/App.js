import React from 'react';

import './App.css';
import Displayproduct from "./components/Displayproduct";
import Category from "./components/category";
import  Contact from "./components/contact";
import About from "./components/About";
import Checkout from "./components/checkout";
import Signup from "./components/signup";
import Product from './components/Product';
import Login from "./components/login";
import Images from "./components/Images";
import Forgot from  "./components/Forgot";
import {Route,Routes} from 'react-router';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path='/home' Component={Images} />
          <Route path='/Category' Component={Displayproduct} />
          <Route path='/about' Component={About} />
          <Route path='/contact' Component={Contact} />
          {/* <Route path='/footer' Component={Footer} /> */}
          {/* <Images/> */}
          {/* <Displayproduct />
          <Signup/>
          <Login/>
          <Forgot/> 
          <About/>
          <Contact/>
          <Checkout/> */}
          {/* <Navbar /> */}
          {/* <Footer /> */}
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;


