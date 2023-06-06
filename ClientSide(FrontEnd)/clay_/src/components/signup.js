import React from 'react';
import './signup.css';
import {useState} from'react';
import image1 from '/home/jtbbjoining/Pottery_Marketing/ClientSide(FrontEnd)/clay_/src/Screenshot from 2023-06-06 17-07-16.png';
function Signup({islogin,setIsLogin}){
    const[name,setName]=useState("");
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");
    const [password,setPassword]=useState("");
    function signUpButtonClick(){
        if(name != "" && username != "" && email != "" && number !="" &&password != ""){
        let signupinfo=JSON.parse(localStorage.getItem("signup"))||[];
        for(let i=0;i<signupinfo;i++){
            if(signupinfo[i].username==username && signupinfo[i].password==password){

            }
        }
        localStorage.setItem("signup",JSON.stringify([...signupinfo,{name,username,email,number,password}]));
        setIsLogin(true);
    }else{
        alert("Enter All Details");
    }
   
    }
    function signUpButtonClick(){
        setIsLogin(true);
    }
    return(
        <div id="layout">
            <div>
                <img className="image1" src={image1} alt=""></img>
                <img className="image2" src={image1} alt=""></img>
             </div>
             
            <div className='starting'>
                
                <div className='starting1'>
                <h1 className='h1'>SignUp page</h1>
                    <input type="text" className="name" placeholder='Name' onChange={e=>setName(e.target.value)}/><br></br>
                    <input type="text" className="username" placeholder='UserName'onChange={e=>setUsername(e.target.value)}/><br></br>
                    <input type="email" className="email" placeholder='Email'onChange={e=>setEmail(e.target.value)}/><br></br>
                    <input type="number" className="number" placeholder='Phone Number'onChange={e=>setNumber(e.target.value)}/><br></br>
                    <input type="number" className="password" placeholder='password'onChange={e=>setPassword(e.target.value)}/><br></br>
                    <button className='submit' onClick={signUpButtonClick}>Submit</button>
                    <h3 className='h3'>If there is no Account<span onClick={signUpButtonClick}>  login?</span></h3>
                </div>
        </div>   
        </div>
    )
}
export default Signup;