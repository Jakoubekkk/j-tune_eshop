// @ts-nocheck

import React from 'react';
import './Clanok2.css';
import NavBar from './NavBar';
import Products from './Products';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'


const Clanok2 = ({ importedCartItems }) => {

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
          <div className="tesla-model-s-blog">
            <div className="blog-section">
              <img src="https://source.unsplash.com/1200x600/?tesla-model-s" alt="Tesla Model S" />
              <div className="text-section">
                <h2>Budúcnosť jazdy: Tesla Model S</h2>
                <p>
                  Tesla Model S je revolučným elektrickým sedanom, ktorý združuje vysoký výkon,
                  luxus a bezemisnú premávku. Preskúmajte náš nový blog a zistite viac o tom,
                  ako táto ikonická značka mení budúcnosť automobilovej dopravy.
                </p>
              </div>
            </div>
            <div className="blog-section reverse">
              <div className="text-section">
                <h2>Elektrická sila pod kapotou</h2>
                <p>
                  Tesla Model S je poháňaná výkonným elektromotorom, ktorý poskytuje rýchly a tichý
                  jazdný zážitok. Prečítajte si našu podrobnú recenziu a objavte viac o kapacite batérie,
                  výkonových možnostiach a technologických inováciách.
                </p>
              </div>
              <img src="https://source.unsplash.com/1200x600/?tesla-model-s-engine" alt="Tesla Model S Engine" />
            </div>
          </div>
        </main>
      </div>
    );
    
}; 

export default Clanok2;