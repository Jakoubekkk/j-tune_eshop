// @ts-nocheck

import { useAuth } from "./auth/Auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({shoppingCartItems}) => { 

  const {signOut} = useAuth()
  const [cartData, setCartData] = useState(shoppingCartItems);

  useEffect(() => {
    setCartData(shoppingCartItems);
  }, [shoppingCartItems]);

  function handleLogOut(): void {
    signOut();
}

  return (
    <header>
      <Link to="/LandingPage" state={{ cartData: cartData }}>
      <Link to="/LandingPage" state={{ cartData: cartData }}>
         <img style={{ width: 160, height: 90 }} src="/assets/jtun.png" alt="j&k" className="jak"/>
      </Link>
      </Link>
      
      <nav>
        <ul>          
          <li className="navsize"><Link to="/home" state={{ cartData: cartData }}>Domov</Link></li>
          <li className="navsize"><Link to="/about" state={{ cartData: cartData }}>O Nás</Link></li>
          <li className="navsize"><Link to="/products" state={{ cartData: cartData }}>Produkty</Link></li>
          <li className="navsize"><Link to="/contact" state={{ cartData: cartData }}>Kontakt</Link></li>
        </ul>
      </nav>

      <div className="Cart">
        <Link to="/ShoppingCart" state={{ cartData: cartData }}><img style={{ width: 50, height: 50 }} src="/assets/cartico.jpg"/>({cartData ? cartData.length : 0})</Link>
      </div>
      <button onClick={handleLogOut}><Link to="/Login" style={{ color: 'white' }}>Odhlásiť sa</Link></button>
    </header>
  );
};


export default NavBar;