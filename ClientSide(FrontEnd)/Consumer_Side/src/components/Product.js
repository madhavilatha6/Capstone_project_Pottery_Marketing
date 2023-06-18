// import React from 'react';
// import './Product.css';

// function Product({ id, name, price, image, addToCart }) {
//   return (
//     <div className="product">
//       <img src={image} alt={name} />
//       <h3>{name}</h3>
//       <p>${price}</p>
//       <button onClick={() => addToCart({ id, name, price })}>Add to Cart</button>
//     </div>
//   );
// }

// export default Product;

// import React from 'react';
// import './Product.css';

// function Product({ id, name, price, image, addToCart }) {
//   return (
//     <div className="product">
//       <img src={image} alt={name} />
//       <h3>{name}</h3>
//       <p>${price}</p>
//       <button onClick={() => addToCart({ id, name, price })}>Add to Cart</button>
//     </div>
//   );
// }

// export default Product;



import React from 'react';
import './Product.css';

function Product({ id, name, price, image, addToCart }) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart({ id, name, price })}>Add to Cart</button>
    </div>
  );
}

export default Product;
