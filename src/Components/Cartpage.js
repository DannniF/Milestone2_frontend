import React, { useEffect, useState } from 'react';
import CartProductList from './CartProductList';


function Shopping() {
  const [cart, setCart] = useState();

  const addProductToCart = (productId) => {
    commerce.cart.add(productId, 1)
      .then(result => {
        setCart(result.cart);
        alert("Product added to cart");
      });
  }

  useEffect(() => {
    commerce.cart.retrieve()
      .then(cart => {
        setCart(cart);
      })
  }, [])

  return (
    <div className="container">
        
        <div className="container">
          <h2>Products</h2>
        </div>
        <CartProductList />
      
    </div>
  );
}

export default Shopping;