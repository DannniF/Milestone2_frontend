// import React, { useState } from 'react';
// import CartItem from './CartItem';

// const Cart = ({ cartItems, onQuantityChange, onRemoveClick }) => {
//     const [cartTotal, setCartTotal] = useState(0);

//     function Newshoppingcart() {
//         const foodItem = ({ item, onClick }) => {
//             const { title, price, imageSrc } = item;
//         }
//         const calculateTotal = () => void {
//             let total = 0;
//             cartItems.forEach((item) => {
//                 total += item.price * item.quantity;
//             });
//             setCartTotal(total.toFixed(2));
//         };
//         const CartItem = ({ item, onQuantityChange, onRemoveClick }) => {
//             const { title, price, imageSrc } = item;
//     }
//     return (
//         <div className="cart">
//             <div className="cart-items">
//                 {cartItems.map((item) => (
//                     <CartItem
//                         key={item.title}
//                         item={item}
//                         onQuantityChange={onQuantityChange}
//                         onRemoveClick={onRemoveClick}
//                     />
//                 ))}
//             </div>
//             <div className="cart-total-price">Total: ${cartTotal}</div>
//             <button className="btn-purchase" type="button" onClick={() => alert('Thank you for your purchase')}>
//                 PURCHASE
//             </button>
//             {cartItems.length > 0 && (
//                 <button className="btn-clear" type="button" onClick={() => onRemoveClick('clear')}>
//                     CLEAR CART
//                 </button>
//             )}
//             {calculateTotal}
//         </div>
//     );
// };

//     <div className="food-item" onClick={onClick}>
//         <div className="food-item-image">
//             <img src={imageSrc} alt={title} />
//         </div>
//         <div className="food-item-details">
//             <span className="food-item-title">{title}</span>
//             <span className="food-item-price">{price}</span>
//         </div>
//     </div>
//     );
// };

//     <div className="cart-item">
//         <div className="cart-item-image">
//             <img src={imageSrc} alt={title} />
//         </div>
//         <div className="cart-item-details">
//             <span className="cart-item-title">{title}</span>
//             <span className="cart-item-price">{price}</span>
//         </div>
//         <input
//             className="cart-quantity-input"
//             type="number"
//             value={item.quantity}
//             onChange={(e) => onQuantityChange(item.title, e.target.value)}
//         />
//         <button className="btn btn-danger" type="button" onClick={() => onRemoveClick(item.title)}>
//             REMOVE
//         </button>
//     </div>
//           );
//         };

// export default Cart;
