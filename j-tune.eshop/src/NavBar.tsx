// @ts-nocheck

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({shoppingCartItems}) => { 

  const [cartData, setCartData] = useState(shoppingCartItems);

  useEffect(() => {
    setCartData(shoppingCartItems);
  }, [shoppingCartItems]);

  return (
    <header>
      <Link to="/LandingPage" state={{ cartData: cartData }}>
      <Link to="/LandingPage" state={{ cartData: cartData }}>
         <img style={{ width: 250, height: 250 }} src="src/img/jtun.png" alt="j&k" className="jak"/>
      </Link>
      </Link>
      
      <nav>
        <ul>          
          <li className="navsize"><Link to="/home" state={{ cartData: cartData }}>Home</Link></li>
          <li className="navsize"><Link to="/about" state={{ cartData: cartData }}>About</Link></li>
          <li className="navsize"><Link to="/products" state={{ cartData: cartData }}>Products</Link></li>
          <li className="navsize"><Link to="/contact" state={{ cartData: cartData }}>Contact</Link></li>
        </ul>
      </nav>

      <div className="Cart">
        <Link to="/ShoppingCart" state={{ cartData: cartData }}>My Cart({cartData ? cartData.length : 0})</Link>
      </div>
    </header>
  );
};


export default NavBar;