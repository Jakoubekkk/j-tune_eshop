// @ts-nocheck

import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

export default function LandingPage({ importedCartItems }): JSX.Element {

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
        <img style={{ width: 800, height: 500 }} src="src/img/carculture2.jpg" alt="Shrooms"/>
          <h3 className="Stepinto" >Join our car culture</h3>
          <p></p>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Naziv-fontu"></link>
          <Link to="/Home"> {}
            <button className="Stepin" >Step in</button>
          </Link>
        </main>

        <footer>
          <p>Science 2023</p>
        </footer>
    </div>
    )
}

