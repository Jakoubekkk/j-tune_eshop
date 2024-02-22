// @ts-nocheck

import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import "./About.css";

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
      <div className="about-container">
        <h1>Vytajte v J-Tune</h1>
          <p>
          J-Tune je komunita automobilových nadšencov, ktorú spojila naša spoločná
          vášeň pre automobily. Naša skupina bola založená v roku 2020 a rozrástla sa na veľkú komunitu milovníkov áut, ktorí oceňujú krásu a
          remeselné spracovanie vozidiel.
          </p>
          <img src="src/img/foto.jpg" alt="j-tune" />
          <p>
            My veríme v autá čo majú dušu!
          </p>
      </div>
        </main>
  
        <footer>
          <p>J-Tune Science 2020</p>
        </footer>
      </div>
    );
  }
  
  export default About;