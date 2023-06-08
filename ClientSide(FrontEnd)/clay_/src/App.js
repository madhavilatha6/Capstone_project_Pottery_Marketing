import { useState } from 'react';
import './App.css';
import Forgot from './components/forgot';
import Images from './components/Images';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <div className="App">
      <Images />
     {/* <Login />
     <Signup />
      <Forgot /> */}
    </div>
  );
}

export default App;
