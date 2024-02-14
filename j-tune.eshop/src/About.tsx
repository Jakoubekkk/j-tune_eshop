// @ts-nocheck

import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

const About = ({ importedCartItems }) => {

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

    return (
      <div>
        
        <NavBar shoppingCartItems={cartItems} />
  
        <main>
          <h2>About</h2>
          <p>based in : Čadca</p>
          <p>From car lovers to car lovers</p>
          <p>Small Group of car enthusiasts from small town heading to the Moon</p>
        </main>
  
        <footer>
          <p>Science 2023</p>
        </footer>
      </div>
    );
  }
  
  export default About;