import "./checkout.css";

function Checkout() {
  return (
    <div>
      <img
        className="horse"
        src="https://sktperfectdemo.com/themepack/pottery/wp-content/themes/skt-pottery/images/default-header-img.jpg"
        alt=""
      />
      <h1>Checkout</h1>
      <hr></hr>
      <h3>Contact Details</h3>
      <div className="fullname">
        <div>
          <label for="test">First Name</label>
          <br></br>
          <input type="text" placeholder="FirstName" />
        </div>
        <div className="last">
          <label for="test">Last Name</label>
          <br></br>
          <input type="text" placeholder="LastName" />
        </div>
      </div>

      <div className="lastname">
        <div>
          <label for="test">Email Address</label>
          <br></br>
          <input type="email" placeholder="Email" />
        </div>
        <div className="last">
          <label for="test">Mobile Number</label>
          <br></br>
          <input type="number" placeholder="MobileNumber" />
        </div>
      </div>

      <div className="full">
        <div>
          <label for="test">Country</label>
          <br></br>
          <input type="text" placeholder="Country" />
        </div>
        <div className="last">
          <label for="test">State</label>
          <br></br>
          <input type="text" placeholder="State" />
        </div>
      </div>

      <div className="last1">
        <div>
          <label for="test">Street Address</label>
          <br></br>
          <input type="text" placeholder="Address" />
        </div>
        <div className="last">
          <label for="test">Pincode</label>
          <br></br>
          <input type="text" placeholder="Pincode" />
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Checkout;
