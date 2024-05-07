import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onQuantityChange, onRemoveClick }) => {
  const [cartTotal, setCartTotal] = useState(0);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setCartTotal(total.toFixed(2));
  };

  return (
    <div className="cart">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem
            key={item.title}
            item={item}
            onQuantityChange={onQuantityChange}
            onRemoveClick={onRemoveClick}
          />
        ))}
      </div>
      <div className="cart-total-price">Total: ${cartTotal}</div>
      <button className="btn-purchase" type="button" onClick={() => alert('Thank you for your purchase')}>
        PURCHASE
      </button>
      {cartItems.length > 0 && (
        <button className="btn-clear" type="button" onClick={() => onRemoveClick('clear')}>
          CLEAR CART
        </button>
      )}
      {calculateTotal}
    </div>
  );
};

export default Cart;