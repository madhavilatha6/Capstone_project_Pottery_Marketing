import React from 'react';
import './login.css';
import { useState } from 'react';
import image4 from '/home/jtbbjoining/Pottery_Marketing/ClientSide(FrontEnd)/clay_/src/Screenshot from 2023-06-06 17-07-16.png';
function Login({islogin,setIsLogin}){
    const [username1,setUsername1]=useState("");
    const [password1,setPassword1]=useState("");
    
    function btnClick(){
       
        if(username1 =="" ||password1 ==""){
            alert("fill all details");
        }else{
            let logininfo=JSON.parse(localStorage.getItem("signup"))||[];
            for(let i=0;i<logininfo.length;i++){
                if(logininfo[i].username==username1 && logininfo[i].password==password1){
                    alert("login Successfull");
                    localStorage.setItem("logindata",JSON.stringify(logininfo[i]));
                    break;
                 }
                else{
                    alert("user does not exsist");
                }   
            }
        }
    }
    function loginButtonClick(){
        setIsLogin(false);
    }
    function loginButton(){
        setIsLogin(false);
    }
    return(
        <div>
            <div>
                <img className="image4" src={image4} alt=""></img>
                <img className="image5" src={image4} alt=""></img>
             </div>
             
            <div className='starting123'>
                
                <div className='starting1234'>
                <h1 className='h11'>Login page</h1>
                    <input type="text" className="username1" placeholder='UserName' onChange={e=>setUsername1(e.target.value)}/><br></br>
                    <input type="number" className="password1" placeholder='password' onChange={e=>setPassword1(e.target.value)}/><br></br>
                    <button className='submit1' onClick={btnClick}>Submit</button>
                    <h3><span onClick={loginButtonClick}>signup page</span></h3>
                    <h3 className='span'><span onClick={loginButton}>Forgot page</span></h3>
                </div>
        </div>   
        </div>
    )
}
export default Login;