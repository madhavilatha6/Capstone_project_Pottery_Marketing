import { useState } from 'react';
import './App.css';
import Forgot from './components/Forgot';
import Images from './components/Images';
import Login from './components/login';
import Signup from './components/signup';
import About from './components/about';
function App() {
  return (
    <div className="App">
      {/* <Images />
     <Login />
     <Signup />
      <Forgot /> */}
      <About />
    </div>
  );
}

export default App;
