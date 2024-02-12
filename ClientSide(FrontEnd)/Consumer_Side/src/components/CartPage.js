import React, { useState } from "react";

const CartPage = () => {
  // Create local state to store selected products
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  return (
    <div>
      <h1>Cart</h1>
      {selectedProducts.map((product, index) => (
        <div key={index}>
          <img src={product.productImage} alt={product.productName} />
          <h2>{product.productName}</h2>
          <p>{product.productPrice}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
