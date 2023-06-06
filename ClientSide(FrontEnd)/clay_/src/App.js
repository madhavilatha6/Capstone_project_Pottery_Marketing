import { useState } from 'react';
import './App.css';
// import Forgot from './components/forgot';
// import Images from './components/Images';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  const [islogin,setIsLogin] = useState(false);
  return (
    <div className="App">
      {/* <Images /> */}
      {
         (!islogin) ? <Signup islogin={islogin} setIsLogin={setIsLogin}/> : <Login islogin={islogin} setIsLogin={setIsLogin}/>
      }
      {/* <Forgot /> */}
    </div>
  );
}

export default App;
