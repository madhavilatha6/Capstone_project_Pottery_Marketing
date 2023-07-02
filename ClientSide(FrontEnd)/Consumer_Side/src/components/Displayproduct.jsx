import { useEffect , useState} from "react";
import "./product.css";
const Displayproduct = () => {
        const [inputValue, setInputValue] = useState('');
        const [potteryData,setPotteryData] = useState([]);
        const [color, setColor] = useState("gray");
        const [value, setValue] = useState(1);
    useEffect(()=>{
        PotteryProductData();
    },[])
    const PotteryProductData = () => {
        fetch("http://localhost:5050/data").then((res)=>{
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

        const [rating, setRating] = useState(0);

        const handleColorClick = (value) => {
            setValue(value);
            for(let i = 1; i <= value; i++){
                const backgroundTemp = {
                    backgroundColor :"gold"
                }
                document.querySelector(`.starStyle${i}`).style.color = "gold";
            }
            setColor("gold");
            // console.log(data);
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
                        
                    </div>
                    <div className="text-align">
                        <p className="one">Design Pot</p>
                        <p className="two">Flower Pot</p>
                        <p className="three">Hanging bell</p>
                        <p className="four">Natural Pot</p>
                        <p className="five">Cooking Pot</p>
                    </div>
       
       <header>
                <nav>
                    <div id="navbar">

                    <div id="colors">
                        <input id="bar" type="text" placeholder="Search" value={inputValue} onChange={handleInputChange} />
                        {/* <div onClick={clearData()}>clear</div> */}
                        <button id="searchdata" onClick={searchProductData}>search</button>
                        <img onClick={clearData} id="wrong"src="https://tse4.mm.bing.net/th?id=OIP.5QYvJ6lCh-_pQ0AeWcpOfQHaHa&pid=Api&P=0&h=180" alt="" />
                        
                    </div>
                             
                
       
        <div id="lowhigh">
                <select name="cars" onChange={(e) => sortData(e.target.value)}>
                    <option>Sort By Price</option>
                    <option value="asc">LowToHigh</option>
                    <option value="desc">HighToLow</option>
                </select>
        </div>

        <div id="category">
                <select>
                    <option>Click More Items</option>
                    <option></option>
                    <option></option>
                </select>
        </div>
        </div>
        </nav>
        </header>
                   
                    
           
       <div className="array">
       {
        potteryData?.filter(function(element){
            if(element.category_name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())){
                return potteryData;
            }
        })?.map(({category_image,category_name,category_price,category_rating})=><div id="pictires_display">
            <div className="display">
                <div>
                    <img src={category_image} alt="" />
                </div>
                <div className="hover">
                    <h4>{category_name}</h4>
                    <h4>{category_price}</h4>
                    <h4>{category_rating}</h4>
                </div>
                <div>
                    <span className={`starStyle${1}`} onClick={() => handleColorClick(1)} style={{ cursor: 'pointer'}}>★</span>
                    <span className={`starStyle${2}`} onClick={() => handleColorClick(2)} style={{ cursor: 'pointer'}}>★</span>
                    <span className={`starStyle${3}`} onClick={() => handleColorClick(3)} style={{ cursor: 'pointer'}}>★</span>
                    <span className={`starStyle${4}`} onClick={() => handleColorClick(4)} style={{ cursor: 'pointer'}}>★</span>
                    <span className={`starStyle${5}`} onClick={() => handleColorClick(5)} style={{ cursor: 'pointer'}}>★</span>
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
