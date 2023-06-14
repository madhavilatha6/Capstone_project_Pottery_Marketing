import "./category.css";
function Category(){
    return(
        <div>
            <div className="navpage">
                <div>Home</div>
                <div>Category</div>
                <div>About Us</div>
                <button className="buttonpage">Register</button>
                <button className="buttonpage">Add to cart</button>
            </div>
            <div className='searchBar'>
                <input className='searchBox' type='text' placeholder='Search'/>
                <div className='barSearch'></div>
            </div>
            <div className='categoryStart'>
                <h3>SortBy:</h3>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
















             <div className='footerpage'>
                <div className='aboutpage'>
                    <h4>AboutUs</h4>
                    <p>Potters</p>
                    <p>Vision</p>
                    <p>Aim</p>
                </div>
                <div className='servicepage'>
                    <h4>Services</h4>
                    <p>Writing</p>
                    <p>Vision</p>
                    <p>Aim</p>
                </div>
                <div className='contactpage'>
                    <h4>Contactus</h4>
                    <p>Andrapradesh</p>
                    <p>Karnataka</p>
                    <p>Tamilnadu</p>
                </div>
                <div className='socialpage'>
                    <h4>Socialmedia</h4>
                    <p>Facebook</p>
                    <p>WhatsApp</p>
                    <p>Twitter</p>
                    <p>Google</p>
                    <p>Instagram</p>
                </div>
                <div className='logopage'>
                    <img className="google" src="resources/google.png" alt="mud pot"/>
                    <img className="facebook" src="resources/facebook.png" alt="mud pot"/>
                    <img className="instagram" src="resources/instagram.png" alt="mud pot"/>
                    <img className="whatsapp" src="resources/whatsapp.png" alt="mud pot"/>
                </div>
                <div>
                    <img className="colorpotspage" src="resources/colorPots.png" alt="mud pot"/>
                </div>  
            </div>
        </div>
    )
}

export default Category;