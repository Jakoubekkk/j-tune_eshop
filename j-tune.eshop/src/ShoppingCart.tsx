// @ts-nocheck

import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useLocation, Link } from 'react-router-dom'

const ShoppingCart: React.FC<ShoppingCartProps> = ({ importedCartItems }) => {

  const [cartItems, setCartItems] = useState();     //Stav pre položky v nákupnom košíku

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
  //Funkcia na odstránenia produktov z košíka
  const removeProduct = (productId: number) => {
    const indexToDelete = cartItems.findIndex((item) => item.id === productId);       
    const updatedCart = [...cartItems.slice(0, indexToDelete), ...cartItems.slice(indexToDelete + 1)];
    setCartItems(updatedCart)
  };

  return (
    <div>
      <NavBar shoppingCartItems={cartItems} />
      <div className="shopping-cart">
        <h2>Tvoj nákupný košík</h2>
        {cartItems ? (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img_url} alt={item.description} />
              <div>
                <h3>{item.description}</h3>
                <p>Veľkosť: {item.size}</p>
                <p>Cena: {item.price}€</p>
                <button onClick={() => removeProduct(item.id)}>Odstrániť produkt</button>
              </div>
            </div>     
          ))
        ) : null }
        <br></br>
        {cartItems && cartItems.length > 0 ? <button className="navsize" ><Link to="/Order" state={{ cartData: cartItems }} style={{ color: 'white' }}>Skontrolovať objednávku</Link></button> : null}
      </div>
      <footer>
          <p>J-Tune Since 2020</p>
        </footer>
    </div>
  );
  
};

export default ShoppingCart;
