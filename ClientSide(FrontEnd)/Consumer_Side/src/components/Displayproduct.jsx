import { useEffect , useState} from "react";
import "./product.css";
const Displayproduct = () => {
        const [inputValue, setInputValue] = useState('');
        const [potteryData,setPotteryData] = useState([]);
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


        const [rating, setRating] = useState(0);

        const handleRatingClick = (value) => {
          if (value === rating) {

            setRating(0);
          } else {
            setRating(value);
          }
        }
    return (
    
    <div>
        <div className="color">

       
       <header>
                <nav>
                    <div id="navbar"></div>

                    <div className="colors">
                        <input id="searchbar" type="text" placeholder="Search" value={inputValue} onChange={handleInputChange} />
                        <button id="search" onClick={searchProductData}>search</button>
                        <h4 className="clearsearch" onClick={PotteryProductData}>ClearSearch</h4>

                        <select name="cars" id="sorting" onChange={(e) => sortData(e.target.value)}>
                            <option value="asc">LowToHigh</option>
                            <option value="desc">HighToLow</option>
                        </select>
                    </div>
                   
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
                </nav>
       </header>
       <div className="array">
       {
        potteryData.map(({category_image,category_name,category_price,category_rating})=><div id="pictires_display">
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
                    {[1, 2, 3, 4, 5].map((value) => (
                    <span key={value} onClick={() => handleRatingClick(value)} style={{ cursor: 'pointer', color: value <= rating ? 'gold' : 'gray' }}>★</span>
                    ))}
                </div>
            </div>
        </div>
        )
    
       }
     
    </div>
</div>
</div>
    )

    
}
export default Displayproduct;

// get data from the input box in react using hooks useState
// write a fucntion for calling the api
// pass input value while calling the api
// display the data accordingly
//modify the search api 
//if the user search with a half text
//result should came
