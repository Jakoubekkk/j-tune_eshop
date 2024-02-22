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
        <img style={{ width: 420, height: 600 }} src="src/img/crew.jpg" alt="car"/>
          <h3 className="Stepinto" >Pripoj sa k Nám!</h3>
          <p></p>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Naziv-fontu"></link>
          <Link to="/Home"> {}
            <button className="Stepin" >Pripojiť</button>
          </Link>
        </main>

        <footer>
          <p>J-Tune Science 2020</p>
        </footer>
    </div>
    )
}

