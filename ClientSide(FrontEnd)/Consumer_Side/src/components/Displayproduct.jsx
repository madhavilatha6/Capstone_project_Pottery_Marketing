import { useEffect , useState} from "react";
import "./product.css";
const Displayproduct = () => {
        const [inputValue, setInputValue] = useState('');
        const [potteryData,setPotteryData] = useState([]);
    useEffect(()=>{
        PotteryProductData();
    },[])
    const PotteryProductData = () => {
        fetch("http://localhost:5050/potterdata").then((res)=>{
            return res.json();
        }).then((res)=>{
            setPotteryData(res);
            console.log(res);
        })
    }

    const searchProductData = () => {
        fetch(`http://localhost:5050/search/${inputValue}`).then((res)=>{
            return res.json();
        }).then((res)=>{
            setPotteryData(res);
            console.log(res);
        })
    }

    const sortData = (data) =>{
        fetch(`http://localhost:5050/sort/${data}`).then((res)=>{
            return res.json();
        }).then((res)=>{
            setPotteryData(res);
            console.log(res);
        })
    }

      
        const handleInputChange = (event) => {
          setInputValue(event.target.value);
        };

        function clearData(){
            setInputValue("");
        }

       
        
    return (
    
    <div>
        <div className="color">
        <div className="categories">
                        <div className="design">
                            <img src="https://leadwinner.com/shilparamam2/images2/tera/3.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                        </div>
                        <div className="flower">
                            <img src="https://leadwinner.com/shilparamam2/images2/tera/1.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                        </div>
                        <div className="hangingbells">
                            <img src="https://leadwinner.com/shilparamam2/images2/tera/12.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                        </div>
                        <div className="naturalpots">
                            <img src="https://leadwinner.com/shilparamam2/images2/tera/10.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                        </div>
                        <div className="animaldesign">
                            <img src="https://leadwinner.com/shilparamam2/images2/tera/20.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                        </div>
                        <div className="animal">
                            <img src="https://leadwinner.com/shilparamam2/images2/tera/20.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                        </div>
                        
                    </div>
                    <div className="text-align">
                        <p className="one">Design Pot</p>
                        <p className="two">Flower Pot</p>
                        <p className="three">Hanging bell</p>
                        <p className="four">Natural Pot</p>
                        <p className="five">Cooking Pot</p>
                        <p className="six">Cooking Pot</p>
                    </div>
                   
       
       <header>
                <nav>
                    <div id="navbar">

                    <div id="colors">
                        <input id="bar" type="text" placeholder="Search" value={inputValue} onChange={handleInputChange} />
                        <button id="searchdata" onClick={searchProductData}>search</button>
                        <img onClick={clearData} id="wrong"src="https://tse4.mm.bing.net/th?id=OIP.5QYvJ6lCh-_pQ0AeWcpOfQHaHa&pid=Api&P=0&h=180" alt="" />
                        
                    </div>
                    <img id="emoji"src="https://media.tenor.com/images/e7997130d42c853ea735e526beee6144/tenor.gif" alt="" />       
                
       
        <div id="lowhigh">
                <select name="cars" onChange={(e) => sortData(e.target.value)}>
                    <option>Sort By Price</option>
                    <option value="asc">LowToHigh</option>
                    <option value="desc">HighToLow</option>
                </select>
        </div>

       
        </div>
        </nav>
        </header>
                   
                    
           
       <div className="array">
       {
        potteryData?.filter(function(element){
            if(element.product_name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())){
                return potteryData;
            }
        })?.map(({product_image,product_name,product_price})=><div id="pictires_display">
            <div className="display">
                <div>
                    <img src={product_image} alt="" />
                </div>
                <div className="hover">
                    <h4>{product_name}</h4>
                    <h4>{product_price}</h4>
                    <div id="boxesSmall">
                    <div className="smallBoxes1"><img src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-logo-137280611.jpg" alt="" /></div>
                    {/* <div className="addtocart">Add to Cart</div> */}
                    <div className="smallBoxes2"><img src="https://media.istockphoto.com/id/1284125145/photo/magnifying-glass-top-view-with-blue-tinted-lens.jpg?s=612x612&w=0&k=20&c=1lOGI1OLFj4bHi4liplOollhhplRaYm99uvhL53fY8Q=" alt="" /></div>
                    {/* <div className="view">View</div> */}
                    <div className="smallBoxes3"><img src="https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-wish-list-icon-wishlist-check-png-image_4841955.png" alt="" /></div>
                    {/* <div className="wishlist">Wishlist</div> */}
                    </div>
                </div>
            
            </div>
        </div>
        )
    
       }
     
    </div>
</div>
    
</div>
)}

export default Displayproduct;

// get data from the input box in react using hooks useState
// write a fucntion for calling the api
// pass input value while calling the api
// display the data accordingly
//modify the search api 
//if the user search with a half text
//result should came
