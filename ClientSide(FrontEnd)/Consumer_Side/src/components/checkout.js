import "./checkout.css";

function Checkout() {
  return (
    <div>
      <img
        className="horse"
        src="https://sktperfectdemo.com/themepack/pottery/wp-content/themes/skt-pottery/images/default-header-img.jpg"
        alt=""
      />
      <h1 className="check">Checkout</h1>
      <div className="color-div"></div>
      <div id="checkout-div">
          <div className="details-contact">
            <h3 className="contact-details">Contact Details</h3>
            <div className="main-input-page">
              <div>
                <label className="name-label">FirstName</label>
                <br></br>
                <input className="firstname" placeholder="FirstName" />
              </div>
              <div>
                <label className="name-label1">LastName</label>
                <br></br>
                <input className="lastname" placeholder="LastName" />
              </div>
            </div>

            <div className="main-input-page1">
              <div>
                <label className="name-label3">FirstName</label>
                <br></br>
                <input className="firstname1" placeholder="FirstName1" />
              </div>
              <div>
                <label className="name-label4">LastName</label>
                <br></br>
                <input className="lastname1" placeholder="LastName" />
              </div>
            </div>
            <div className="main-input-page2">
              <div>
                <label className="name-label5">Address</label>
                <br></br>
                <input className="firstname2" placeholder="Flat,House No" />
                <br></br>
              </div>
            </div>
            <div className="main-input-page3">
              <div>
                <input className="firstname2" placeholder="Flat,House No" />
              </div>

              <div className="main-input-page4">
                <div>
                  <label className="name-label3">FirstName</label>
                  <br></br>
                  <input className="firstname1" placeholder="FirstName1" />
                </div>
                <div>
                  <label className="name-label4">LastName</label>
                  <br></br>
                  <input className="lastname1" placeholder="LastName" />
                </div>
              </div>
            </div>
          </div>
          <div id="details-contact1">
              <h3 className="contact-details">Your Order</h3>
          </div>
        </div>
    </div>
  );
}

export default Checkout;
