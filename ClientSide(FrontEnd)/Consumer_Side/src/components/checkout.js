// import React, { useState } from 'react';
// import './checkout.css'

// const Checkout = () => {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleAddressChange = (e) => {
//     setAddress(e.target.value);
//   };

//   const handlePaymentMethodChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleCheckout = () => {
//     // Save the checkout details to local storage
//     localStorage.setItem('name', name);
//     localStorage.setItem('address', address);
//     localStorage.setItem('paymentMethod', paymentMethod);

//     // Perform additional actions like submitting the order to the server, etc.

//     // Clear the form fields
//     setName('');
//     setAddress('');
//     setPaymentMethod('');
//   };

//   return (
//     <div>
//       <h2>Checkout</h2>
//       <form>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={handleNameChange} />
//         </label>
//         <br />
//         <label>
//           Address:
//           <input type="text" value={address} onChange={handleAddressChange} />
//         </label>
//         <br />
//         <label>
//           Payment Method:
//           <select value={paymentMethod} onChange={handlePaymentMethodChange}>
//             <option value="">Select</option>
//             <option value="credit-card">Credit Card</option>
//             <option value="paypal">PayPal</option>
//           </select>
//         </label>
//         <br />
//         <button type="button" onClick={handleCheckout}>
//           Checkout
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Checkout;


// import React, { useState } from 'react';

// const ProductDetails = () => {
//   const [productName, setProductName] = useState('');
//   const [quantity, setQuantity] = useState(1);

//   const handleProductNameChange = (e) => {
//     setProductName(e.target.value);
//   };

//   const handleQuantityChange = (e) => {
//     setQuantity(e.target.value);
//   };

//   const handleBuyNow = () => {
//     // Validate the product selection and user input
//     if (!productName || quantity <= 0) {
//       alert('Please select a product and enter a valid quantity.');
//       return;
//     }

//     // Create an order or cart object
//     const order = {
//       productName,
//       quantity,
//     };

//     // Send the order to the server for further processing
//     // You can use fetch() or any other library to make an API call
//     fetch('/api/create-order', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(order),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the server's response
//         // You can display a success message or redirect to a payment gateway
//         console.log('Order created:', data);
//         alert('Order created successfully!');
//       })
//       .catch((error) => {
//         // console.error('Error creating order:', error);
//         alert('An error occurred while processing your order. Please try again.');
//       });
//   };

//   return (
//     <div>
//       <h2>Product Details</h2>
//       <form>
//         <label>
//           Product Name:
//           <input type="text" value={productName} onChange={handleProductNameChange} />
//         </label>
//         <br />
//         <label>
//           Quantity:
//           <input type="number" value={quantity} onChange={handleQuantityChange} />
//         </label>
//         <br />
//         <button type="button" onClick={handleBuyNow}>
//           Buy Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProductDetails;





import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        throw new Error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
