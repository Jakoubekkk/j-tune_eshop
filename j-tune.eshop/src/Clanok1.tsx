// @ts-nocheck

import React from 'react';
import './Clanok1.css';
import NavBar from './NavBar';
import Products from './Products';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player';


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
          <div className="blog">
            <div className="blog-section">
              <img src="/assets/miata3.jpg" alt="mazda mx5 miata" />
              <div className="text-section">
                <h2>Nestarnúca Mazda MX-5</h2>
                <p>
                Malé dvojdverové a dvojmiestne japonské auto malo svetovú premiéru 9. februára 1989 na autosalóne v Chicagu. Aj keď ju u nás poznáme pod názvom MX-5, v Japonsku je to Mazda Rodster a v Spojených štátoch Miata. Prvá generácia NA dostala ako jediná vyklápacie predné svetlá, teda maličkosť, ktorú miluje asi každý petrolhead.
                Zo začiatku ste si MX-5 mohli kúpiť v bežnej červenej či modrej farbe, neskôr pribúdali strieborné alebo čierne odtiene. K dispozícii boli tiež špeciálne edície, napríklad vo farbe Racing Green, Speed Yellow alebo takzvanej Nachtblau.
                </p>
              </div>
            </div>
            <div className="blog-section reverse">
              <div className="text-section">
                <h2>Vážila menej ako tonu</h2>
                <p>
                Pohotovostná hmotnosť Miaty začínala pod jednou tonou, čo je dnes takmer nepredstaviteľné. Samozrejme má na tom vplyv aj slabšia pasívna bezpečnosť v podobe menej robustných výstuh. Ideálne rozloženie hmotnosti 50:50 zabezpečilo perfektné jazdné vlastnosti a tiež radosť z jazdy nielen na ceste, ale aj pri rôznych slalomoch a súťažiach.
                Na všetkých kolesách boli kotúčové brzdy, vpredu dokonca aj s vnútorným chladením. V priebehu výroby sa zvyšovala i pasívna bezpečnosť s dodatočnými výstuhami a upravenou karosériou, ruku v ruke s tým išla aj vyššia hmotnosť. 
                </p>
                <p>
                Airbagy či ABS neboli v sérii, za tie ste si najprv priplácali, rovnako ste mali v cenníku aj klimatizáciu či vyhrievané sedadlá.
                Do predaja sa MX-5 dostala s benzínovým štvorvalcom 1.6 a výkonom 85 kW (115 koní). Následne v roku 1994 prišla väčšia 1.8 naladená na 96 kW (131 koní) a o pár mesiacov sa do ponuky vrátila aj menšia 1.6 s 66 kW (90 koní).
                </p>
              </div>
              <img src="/assets/miata4.jpg" alt="Mazda mx5" />
            </div>
          </div>
        </main>
        <footer>
          <p>J-Tune Since 2020</p>
        </footer>
      </div>
    );
    
}; 

export default Clanok1;