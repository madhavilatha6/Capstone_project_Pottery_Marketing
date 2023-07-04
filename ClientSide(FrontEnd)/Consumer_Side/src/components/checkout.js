import './checkout.css';

function Checkout(){
  return(
    <div className='checkout'>
      <h1>1.Contact Details</h1>
      <div className='fullname'>
        <div>
            <label for="test">First Name</label><br></br>
            <input type='text' placeholder='FirstName'/>
        </div>
        <div className='last'>
            <label for="test">Last Name</label><br></br>
            <input type='text' placeholder='LastName'/>
        </div>
      </div>
      <div className='lastname'>
        <div>
            <label for="test">Email Address</label><br></br>
            <input type='email' placeholder='Email'/>
        </div>
        <div className='last'>
            <label for="test">Mobile Number</label><br></br>
            <input type='number' placeholder='MobileNumber'/>
        </div>
      </div>
<hr></hr>

      <h1>2.Delivery Address</h1>
      <div className='fullname'>
        <div>
            <label for="test">Country</label><br></br>
            <input type='text' placeholder='Country'/>
        </div>
        <div className='last'>
            <label for="test">State</label><br></br>
            <input type='text' placeholder='State'/>
        </div>
      </div>
      <div className='lastname'>
        <div>
            <label for="test">Street Address</label><br></br>
            <input type='text' placeholder='Address'/>
        </div>
        <div className='last'>
            <label for="test">Pincode</label><br></br>
            <input type='text' placeholder='Pincode'/>
        </div>
      </div>
      <hr></hr>

     <h1>3.Delivery Method</h1>
      <div className='checkbox'>
      <input type="checkbox" id="delivery"/>
      <label for="vehicle1" id='standard'><p id='stand'>Standard Delivery</p></label><br></br>
      </div>
      <div className='checkbox'>
      <input type="checkbox" id="delivery"/>
      <label for="vehicle1" id='standard'><p id='stand'>Next Day Delivery
  </p></label><br></br>
      </div>
      <div className='checkbox'>
      <input type="checkbox" id="delivery"/>
      <label for="vehicle1" id='standard'><p id='stand'>
	Named Day
	</p></label><br></br> 
      </div>
      <button>Confirm delivery method</button>
      <hr></hr>




      <h1>4.Payment Details</h1>
      <div className='fullname'>
        <div>
            <label for="test">Name on Card</label><br></br>
            <input type='text' placeholder='Name on Card'/>
        </div>
        <div>
            <label for="test">Card Number</label><br></br>
            <input type='number' placeholder='Name on Card'/>
        </div>
        </div>
        <div className='fullname'>
        <div>
            <label for="test">Name on Card</label><br></br>
            <input type='text' placeholder='Name on Card' id/>
            <input type='text' placeholder='Name on Card'/>
        </div>
        <div>
            <label for="test">Card Number</label><br></br>
            <input type='number' placeholder='Name on Card'/>
        </div>
        </div>
    </div>
  )
}

export default Checkout;