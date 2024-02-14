// @ts-nocheck

import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

const Home = ({ importedCartItems }) => {

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
        
        <h1 className="New">News</h1>
        <p>♥ Newest drop comming soon!!! ♥</p>
        </main>
    </div>
       );
}
export default Home;