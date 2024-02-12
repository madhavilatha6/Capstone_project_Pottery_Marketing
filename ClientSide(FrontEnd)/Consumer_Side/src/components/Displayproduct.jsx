import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { searchProducts } from "../Redux/ProductReducer/action.js"; // Replace 'action' with the actual file name
import { getSearchProductFailure } from "../Redux/ProductReducer/action.js";

const DisplayProduct = () => {
  const [inputValue, setInputValue] = useState("");
  const [potteryData, setPotteryData] = useState([]);
  const [loading, setLoading] = useState(false);

  const productData = useSelector((state) => state.products.productData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPotteryProductData();
  }, []);

  const fetchPotteryProductData = async () => {
    3;
    try {
      const response = await axios.get("http://localhost:8080/products");
      setPotteryData(response.data);
      console.log("Pottery Data:", response.data);
    } catch (error) {
      console.error("Error fetching pottery data:", error);
    }
  };
  const searchProductData = async () => {
    try {
      if (inputValue === "") fetchPotteryProductData();
      else {
        const response = await axios.get(
          `http://localhost:8080/products/searchByName/${inputValue}`
        );
        setPotteryData(response.data);
      }
    } catch (error) {
      console.error("Error searching for products:", error);
      dispatch(getSearchProductFailure());
    }
  };

  const sortData = (sortOrder) => {
    const apiUrl = `http://localhost:8080/products/sort=${sortOrder}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setPotteryData(res);
        console.log(res);
      })
      .catch((error) => {
        console.error("Error in sortData:", error);
      });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function clearData() {
    setInputValue("");
  }

  const handleAddToCart = () => {
    // You can add the logic to add the product to the cart here
    // For now, let's just navigate to the CartPage
    navigate("/cart");
  };
  return (
    <div>
      <div className="color">
        <header>
          <nav>
            <div id="navbar">
              <div id="colors">
                <input
                  id="bar"
                  type="text"
                  placeholder="Search"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <button id="searchdata" onClick={searchProductData}>
                  Search
                </button>
                <img
                  onClick={clearData}
                  id="wrong"
                  src="https://tse4.mm.bing.net/th?id=OIP.5QYvJ6lCh-_pQ0AeWcpOfQHaHa&pid=Api&P=0&h=180"
                  alt=""
                />
              </div>
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
          <div className="filter_box"></div>
          {Array.isArray(potteryData) ? (
            potteryData.length > 0 ? (
              potteryData.map((product, index) => (
                <div key={index} id="pictures_display">
                  <div className="display" key={index}>
                    <div className="hoverimg">
                      <img
                        id="hoverimage"
                        src={product.productImage}
                        alt={product.productImage}
                      />
                      {/* <div className="smallBoxes1"  onClick={handleAddToCart}> */}
                      {/* <img
                          className="hoverimg1"
                          src="https://thumbs.dreamstime.com/b/shopping-cart-icon-vector-logo-137280611.jpg"
                          alt="Add to Cart"
                        />   */}
                      {/* </div> */}
                    </div>
                    <div className="hover">
                      <h4>{product.productName}</h4>
                      <h4>{product.productPrice}</h4>
                      <button className="cartOne" onClick={handleAddToCart}>
                        Add to cart
                      </button>
                      <div id="boxesSmall"></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>NO Products</p>
            )
          ) : (
            <div id="pictures_display">
              <div className="display">
                <div>
                  <img
                    src={potteryData["products"].categaryImage}
                    alt={potteryData["products"].categaryName}
                  />
                </div>
                <div className="hover">
                  <h4>{potteryData["products"].categaryName}</h4>
                  <h4>{potteryData["products"].categaryDescription}</h4>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
