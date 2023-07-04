// import React, { useState } from 'react';
// import Product from './Product';

// function ProductPage() {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     // Check if the product already exists in the cart
//     const existingProduct = cartItems.find((item) => item.id === product.id);
//     if (existingProduct) {
//       // If the product exists, update the quantity
//       setCartItems(
//         cartItems.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       );
//     } else {
//       // If the product is new, add it to the cart
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   return (
//     <div>
//       <h2>Product Page</h2>
//       <div className="product-list">
//         <Product id={1} name="Product 1" price={10} image="product1.jpg" addToCart={addToCart} />
//         <Product id={2} name="Product 2" price={20} image="product2.jpg" addToCart={addToCart} />
//         <Product id={3} name="Product 3" price={30} image="product3.jpg" addToCart={addToCart} />
//       </div>
//     </div>
//   );
// }

// export default ProductPage;
