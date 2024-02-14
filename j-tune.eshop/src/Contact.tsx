// @ts-nocheck

import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

const Contact = ({ importedCartItems }) => {

  const [cartItems, setCartItems] = useState<Product[]>([]);

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

   return(
       <div>
      <header>
      
        <NavBar shoppingCartItems={cartItems} />
      </header>
      
    <main>
      
        <h2>Contact</h2>
        <p>email: radolskyj@gmail.com</p>
        <p>phone: 0908 535 696</p>
        
    </main>
    </div>
    

   );

}

export default Contact;