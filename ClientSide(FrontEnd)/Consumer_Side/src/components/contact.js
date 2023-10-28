import './contact.css';

function Contact(){
    return(
        <div>
            <div className='mainImg'>
            {/* <div className="navpart">
                    <div>Home</div>
                    <div>Category</div>
                    <div>About Us</div>
                    <button className="buttonpart">Register</button>
                    <button className="buttonpart">Add to cart</button>
                </div> */}
                <img src='./resources/contact.jpg' alt=''/>
            </div>
            <div className='locationInfo'> 
                <div className='class'>
                    <h2>Location</h2>
                    <p>Gantavoor</p>
                    <p>Palamaner</p>
                    <p>517408</p>
                    <p>Andrapradesh</p>
                </div>
                <div className='class'>
                    <h2>OurHours</h2>
                    <p>All time</p>
                </div>
                <div className='class'>
                    <h2>ContactUs</h2>
                    <p>Email:madhavilathamadhu54@gmail.com</p>
                    <p>phone:123456789</p>
                </div>
            </div>
            <div className='map'>
                <h2>Google location</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62151.321202209765!2d78.74373460877851!3d13.196563861176974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spalamaner%20andrapradesh%20pottery!5e0!3m2!1sen!2sin!4v1686673702289!5m2!1sen!2sin"></iframe>
            </div>
           
        </div>
    )
}

export default Contact;