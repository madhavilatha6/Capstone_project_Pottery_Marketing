import React, { useState } from 'react';
import './forgot.css';

function Forgot(){
    const [name,setName]=useState("");
    const [number,setNumber]=useState("");
    const [password,setPassword]=useState("");
    function forgotClick(){
        if(number =="" ||password ==""){
            alert("fill all details");
        }else{
            let forgotinfo=JSON.parse(localStorage.getItem("signup"))|| [];
            let empty = []
            if(number==password){
				for(let i=0;i<forgotinfo.length;i++){
                    console.log(forgotinfo[i])
					if(name===forgotinfo[i].username){
						empty.push({...forgotinfo[i], password})
                    }		
                    else{
                        empty.push(forgotinfo[i]);
                    }
				}
                localStorage.setItem("signup", JSON.stringify(empty));
				alert("password changed")
            }else{
				alert("password not matching")
            }
        }
    }
    
    return(
        <div>
            <div>
                <img className="pic" src="resources/hangingBrownBell.png" alt=""></img>
                <img className="pic1" src="resources/hangingBrownBell.png" alt=""></img>
             </div>
             
            <div className='start'>
                
                <div className='start1'>
                <h1 className='h12'>Forgot page</h1>
                    <input type="text" value={name}className="name" placeholder='Name'onChange={e=>setName(e.target.value)}/><br></br>
                    <input type="password" value={number} className="number" placeholder='New Password'onChange={e=>setNumber(e.target.value)}/><br></br>
                    <input type="password" vlaue={password}className="password" placeholder='Confirm Password'onChange={e=>setPassword(e.target.value)}/><br></br>
                    <button className='sub' onClick={forgotClick}>Submit</button>
                </div>
        </div>   
        </div>
    )
    }

export default Forgot;