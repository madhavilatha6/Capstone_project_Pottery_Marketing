import React from 'react';
import './forgot.css';
import imag from '/home/jtbbjoining/Pottery_Marketing/ClientSide(FrontEnd)/clay_/src/Screenshot from 2023-06-06 17-07-16.png';
function Forgot(){
    let flag=false;
    if(ame == username){
        let arr=[];
    }
    return(
        <div>
            <div>
                <img className="pic" src={imag} alt=""></img>
                <img className="pic1" src={imag} alt=""></img>
             </div>
             
            <div className='start'>
                
                <div className='start1'>
                <h1 className='h12'>Forgot page</h1>
                    <input type="text" className="ame" placeholder='Name'onChange={e=>setAme(e.target.value)}/><br></br>
                    <input type="number" className="umber" placeholder='New Password'onChange={e=>setUmber(e.target.value)}/><br></br>
                    <input type="number" className="assword" placeholder='Confirm Password'onChange={e=>setAssword(e.target.value)}/><br></br>
                    <button className='sub'>Submit</button>
                </div>
        </div>   
        </div>
    )
}
export default Forgot;