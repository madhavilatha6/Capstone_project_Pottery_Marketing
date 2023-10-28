import { useEffect , useState} from "react";
import "./product.css";
import Category from "./category";
import axios from "axios";
const Displayproduct = () => {
        const [inputValue, setInputValue] = useState('');
        // const [inputValue, setInputValue] = useState('');
        const [potteryData,setPotteryData] = useState([]);
    useEffect(()=>{
        PotteryProductData();
    },[])
    const PotteryProductData = async() => {
        const response=await axios.get("http://localhost:8080/information");
        console.log("test",response)
        setPotteryData(response?.data);
    }

    const searchProductData = () => {
        fetch(`http://localhost:5050/search/${inputValue}`).then((res)=>{
            return res.json();
        }).then((res)=>{
            setPotteryData(res);
            console.log(res);
        })
    }


    const categaryProductData = () => {
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

    const categoryFunction = ( Category)=>{
        fetch(`http://localhost:5050/categary/${Category}`).then((res)=>{
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
                        <div className="design" onClick={() => categoryFunction(116)}>
                            <img src="https://i.etsystatic.com/26610308/r/il/723e68/2831141092/il_1588xN.2831141092_dr44.jpg" alt="" />
                        </div>
                        <div className="flower" onClick={() => categoryFunction(117)}>
                            <img src="https://img0.etsystatic.com/151/0/14285414/il_340x270.1156193620_ol78.jpg" alt="" />
                        </div>
                        <div className="hangingbells" onClick={() => categoryFunction(119)}>
                            <img src="https://n2.sdlcdn.com/imgs/j/k/g/Royaltresure-Clay-Diwali-Diya-Pack-SDL035462887-1-71909.jpg" alt="" />
                        </div>
                        <div className="naturalpots" onClick={() => categoryFunction(121)}>
                            <img src="https://madeheart.com/media/productphoto/767/30518970/1_13_1.jpg" alt="" />
                        </div>
                        <div className="animaldesign" onClick={() => categoryFunction(122)}>
                            <img src="https://thumbs.dreamstime.com/b/handmade-clay-pots-workshop-11386949.jpg" alt="" />
                        </div>
                        <div className="animal" onClick={() => categoryFunction(123)}>
                            <img src="https://madeheart.com/media/productphoto/930/65263236/148_DSC_0154.jpg" alt="" />
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
                        <button id="searchdata" onClick={() =>searchProductData()}>search</button>
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
