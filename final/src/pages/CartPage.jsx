import React, { useContext } from 'react';
import { CartContext } from '../components/link';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const merchandiseTotal = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace(/,/g, '')), 0);
  const tax = (merchandiseTotal * 0.18).toFixed(2);
  const shippingHandling = cartItems.length > 0 ? 279.00 : 0.00;
  const orderTotal = (parseFloat(merchandiseTotal) + parseFloat(tax) + shippingHandling).toFixed(2);

  return (
    <div className="cart-page">
      <h1>Cart: ({cartItems.length} items)</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Looks like your cart is empty.   <Link to="/add-product">Click here to shop now</Link></p>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <p>${item.price}</p>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <p>Merchandise: ${merchandiseTotal.toFixed(2)}</p>
            <p>Est. Shipping & Handling: ${shippingHandling.toFixed(2)}</p>
            <p>Est. Tax: ${tax}</p>
            <h3>Est. Order Total: ${orderTotal}</h3>
            <button>Checkout Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
