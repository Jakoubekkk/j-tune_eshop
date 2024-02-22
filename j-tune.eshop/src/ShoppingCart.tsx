// @ts-nocheck

import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useLocation, Link } from 'react-router-dom'

const ShoppingCart: React.FC<ShoppingCartProps> = ({ importedCartItems }) => {

  const [cartItems, setCartItems] = useState();

  const location = useLocation()
  if (location.state != null)
  {
    const { cartData } = location.state
    importedCartItems = cartData;
  }
  useEffect(() => {
    if (importedCartItems != null)
    {
      setCartItems(importedCartItems)
    }
  }, [importedCartItems]);

  const removeProduct = (productId: number) => {
    const indexToDelete = cartItems.findIndex((item) => item.id === productId);
    const updatedCart = [...cartItems.slice(0, indexToDelete), ...cartItems.slice(indexToDelete + 1)];
    setCartItems(updatedCart)
  };

  return (
    <div>
      <NavBar shoppingCartItems={cartItems} />
      <div className="shopping-cart">
        <h2>Your Shopping Cart</h2>
        {cartItems ? (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img_url} alt={item.description} />
              <div>
                <h3>{item.description}</h3>
                <p>Size: {item.size}</p>
                <p>Price: {item.price}€</p>
                <button onClick={() => removeProduct(item.id)}>Remove Product</button>
              </div>
            </div>     
          ))
        ) : null }
        <br></br>
        {cartItems && cartItems.length > 0 ? <button className="navsize" ><Link to="/Order" state={{ cartData: cartItems }} style={{ color: 'white' }}>Check order</Link></button> : null}
      </div>
      <footer>
          <p>J-Tune Science 2020</p>
        </footer>
    </div>
  );
  
};

export default ShoppingCart;
