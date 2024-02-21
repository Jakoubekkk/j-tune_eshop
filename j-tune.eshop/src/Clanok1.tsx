import React from 'react';
import './Clanok1.css';
import NavBar from './NavBar';
import Products from './Products';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'


const Clanok1 = ({ importedCartItems }) => {

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
      <div className="mazda-miata-blog">
        <div className="blog-section">
          <img src="https://source.unsplash.com/1200x600/?mazda-miata" alt="Mazda Miata" />
          <div className="text-section">
            <h2>Záhadná krása: Mazda Miata</h2>
            <p>
              Mazda Miata, známá také jako MX-5, je legendárním roadsterem, který se vyznačuje skvělým
              designem, lehkostí a vynikajícím ovládáním. Sledujte náš nový blog a podívejte se na to,
              co tuto ikonickou automobilovou značku dělá tak jedinečnou.
            </p>
          </div>
        </div>
        <div className="blog-section reverse">
          <div className="text-section">
            <h2>Pod kapotou: Technické detaily</h2>
            <p>
              Mazda Miata je vybavena špičkovými technologickými prvky, které zajišťují vynikající
              výkon a spolehlivost. Přečtěte si naši podrobnou recenzi a zjistěte více o motoru,
              převodovce a dalších technických parametrech.
            </p>
          </div>
          <img src="https://source.unsplash.com/1200x600/?mazda-miata-engine" alt="Mazda Miata Engine" />
        </div>
      </div>
    </main>
</div>
    );
  };
  
  export default Clanok1;