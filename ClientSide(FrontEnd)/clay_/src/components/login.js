import React from 'react';
import './login.css';
import { useState } from 'react';
function Login(){
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
    
    return(
        <div>
            <div>
                <img className="image4" src="resources/hangingBrownBell.png" alt=""></img>
                <img className="image5" src="resources/hangingBrownBell.png" alt=""></img>
             </div>
             
            <div className='starting123'>
                
                <div className='starting1234'>
                <h1 className='h11'>Login page</h1>
                    <input type="text" className="username1" placeholder='UserName' onChange={e=>setUsername1(e.target.value)}/><br></br>
                    <input type="number" className="password1" placeholder='password' onChange={e=>setPassword1(e.target.value)}/><br></br>
                    <button className='submit1' onClick={btnClick}>Submit</button>
                    <h3>signup page</h3>
                    <h3 className='span'>Forgot page</h3>
                </div>
        </div>   
        </div>
    )
}
export default Login;