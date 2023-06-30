import "./category.css";
// import data from "./flowerPots";
function Category(){

    // function click(){
    
    const ConceptsData = [
            {
                title: "FlowerPot",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/1.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: "400.00",
                rating: "★★★★☆",
            },
            {
                title: "Vase",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/2.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: "350.00",
                rating: "★★★★☆",
            },
            {
                title: "Bowel",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/3.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: "450.00",
                rating: "★★★★☆",
            },
            {
                title: "Bowel",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/4.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: "280.00",
                rating: "★★★★☆",
            },
            {
                title: "FishBowel",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/5.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: "420.00",
                rating: "★★★★☆",
            },
            {
                title: "Bowel",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/6.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: "200.00",
                rating: "★★★★☆",
            },
            {
                title: "TulasiKota",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/7.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: "450.00",
                rating: "★★★★☆",
            },
            {
                title: "Coin Bank",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/8.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: "100.00",
                rating: "★★★★☆",
            },
            {
                title: "WallHanging",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/9.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: "200.00",
                rating: "★★★★☆",
            },
            {
                title: "DecorativeBell",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/10.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: "250.00",
                rating: "★★★★☆",
            },
            {
                title: "Bowel",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/11.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: "350.00",
                rating: "★★★★☆",
            },
            {
                title: "Bell",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/12.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: "150.00",
                rating: "★★★★☆",
            },
            {
                title: "Vase",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/13.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: "180.00",
                rating: "★★★★☆",
            },
            {
                title: "FlowerPot",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/15.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: ".00",
                rating: "★★★★☆",
            },
            {
                title: "Elephant",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/16.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: "800.00",
                rating: "★★★★☆",
            },
            {
                title: "Budda",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/17.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: "600.00",
                rating: "★★★★☆",
            },
            {
                title: "Horse",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/18.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: "400.00",
                rating: "★★★★☆",
            },
            {
                title: "CookingPot",
                avatar: "https://leadwinner.com/shilparamam2/images2/tera/19.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                price: "180.00",
                rating: "★★★★☆",
            }
        ]
    // }
    
    localStorage.setItem("video", JSON.stringify(ConceptsData));
    let viewoneconcepts = JSON.parse(localStorage.getItem("video"));
    const renderVideos = () =>{
        viewoneconcepts.map()
    }
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
                    <option value="volvo">SortByPrice</option>
                    <option value="saab">LowToHigh</option>
                    <option value="opel">HighToLow</option>
                </select>
                <div className="filter">
                <h3>FilterBy:</h3>
                <select name="cars" id="cars">
                <option value="volvo">FilterByModels</option>
                    <option value="volvo"><a href="../components/About.js">CookingPots</a></option>
                    <option value="saab">DesignPots</option>
                    <option value="opel">Flowerpots</option>
                    <option value="opel">HangingBells</option>
                    <option value="opel">NaturalPots</option>
                </select>
            </div>
            </div>
        
            <div className="displayVideos">
               {
                viewoneconcepts.map(({avatar,title,price,rating}) => (
                
                        <div className="div">
                            <img src={avatar} alt=''/>
                            <h4>{title}</h4>
                            <h4>{price}</h4>
                            <p>{rating}</p>
                            <button className="add">Add To Cart</button>
                        </div>
                    
                ))
                }
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



