import React, { useState } from 'react';
import './Forgot.css';

function Forgot(){
    const [name,setName]=useState("");
    const [number,setNumber]=useState("");
    const [password,setPassword]=useState("");
    function ForgotClick(){
        if(number ==="" ||password ===""){
            alert("fill all details");
        }else{
            let Forgotinfo=JSON.parse(localStorage.getItem("signup"))|| [];
            let empty = []
            if(number===password){
				for(let i=0;i<Forgotinfo.length;i++){
					if(name===Forgotinfo[i].username){
						empty.push({...Forgotinfo[i], password})
                    }		
                    else{
                        empty.push(Forgotinfo[i]);
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
                <img className="hangingbrownbell" src="resources/hangingBrownBell.png" alt="mud pot"/>
                <img className="hangingbrownbell1" src="resources/hangingBrownBell.png" alt="mud pot"/>
             </div>
             
            <div className='maincontainer'>
                
                <div className='main-container'>
                <h1 className='Forgotpage'>Forgot page</h1>
                    <input type="text" value={name}className="name" placeholder='Name'onChange={e=>setName(e.target.value)}/><br></br>
                    <input type="password" value={number} className="number" placeholder='New Password'onChange={e=>setNumber(e.target.value)}/><br></br>
                    <input type="password" vlaue={password}className="password" placeholder='Confirm Password'onChange={e=>setPassword(e.target.value)}/><br></br>
                    <button className='sub' onClick={ForgotClick}>Submit</button>
                </div>
        </div>   
        </div>
    )
}

export default Forgot;