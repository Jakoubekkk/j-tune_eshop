// @ts-nocheck

import React from 'react';
import './Clanok1.css';
import NavBar from './NavBar';
import Products from './Products';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'


const Clanok3 = ({ importedCartItems }) => {

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
              <img src="/assets/nsx1.JPG" alt="NSX" />
              <div className="text-section">
                <h2>Auto ktoré urobilo rozruch</h2>
                <p>
                Začiatkom osemdesiatych rokoch bolo už všetkým jasné, že japonský automobilový priemysel treba brať vážne. Prekročil hranice domovskej krajiny a začal valcovať svetové trhy najmä kompaktmi typu Honda Civic či Toyota Corolla. To však Japoncom nestačilo. V pláne bola nielen ofenzíva v luxusnom segmente pomocou nových divízií Lexus, Xedos či Acura. V Honde zatúžili aj po prvom japonskom superšporte.
                Plány na vývoj auta, ktoré by sa mohlo parametrami rovnať Ferrari či Porsche, sa v Honde začali rodiť v roku 1984. Vtedy Honda požiadala talianske dizajnérske štúdio Pininfarina, aby navrhlo športové kupé s motorom v strede. Vznikol tak pôsobivý prototyp Honda HP-X (Honda Pininfarina – eXperimental) s dvojlitrovým vidlicovým 6-valcom. Projekt dostal zelenú, hoci bolo všetkým jasné, že futuristická talianska karoséria to má spočítané.   
                </p>
              </div>
            </div>
            <div className="blog-section reverse">
              <div className="text-section">
                <h2>Ako keby ho vytvoril Japonský samurai</h2>
                <p>
                Technickým vývojom bol poverený Shigeru Uehara a dizajn dostal na starosť Ken Okuyama. Cieľ bol jasný. Postaviť superšport lepší, ako sú najlepšie talianske a nemecké kupé, Ferrari 328 nevynímajúc, ale za nižšiu cenu a s vyššou kvalitou. Z toho dôvodu bolo rozhodnuté nahradiť pôvodný dvojliter silnejším agregátom 3,0 V6. Konštruktéri sa v mnohom inšpirovali stíhačkami, najmä americkou ikonou vojenského letectva F-16 Fighting Falcon.
                Prednosť dostala koncepcia „cab-forward“ s kokpitom posunutým čo najviac vpred a dlhou zadnou časťou so spojlerom. Cieľom bolo dosiahnuť takmer 360-stupňový výhľad z kabíny, podobne ako pri F-16, a tiež dostatočnú smerovú stabilitu. Konfigurácia s motorom v strede tiež umožnila ideálne rozloženie hmotnosti medzi nápravy. Po techniku nemusela ísť Honda ďaleko. Jednoducho využila svoje skúsenosti z tímu F1.
                </p>
                <p>
                Revolučná konštrukcia karosérie s hliníkovým monokokom priniesla úsporu hmotnosti až 200 kg.
                Konštrukcia bola na tie časy naozaj revolučná. Superšport, vtedy ešte s pracovným názvom Honda New Sport, dostal ako prvý sériový automobil hliníkový monokok a odpruženie. Len na karosérii sa podarilo ušetriť 200 kg v porovnaní s bežnou oceľovou konštrukciou. Hliníkové komponenty podvozku zas znížili váhu neodpružených hmôt o 20 kg. Rovnako pokrokový bol brzdový systém so 4-kanálovým ABS a elektronické ovládanie škrtiacej klapky.
                </p>
              </div>
              <img src="/assets/nsx2.JPG" alt="nsx" />
            </div>
          </div>
        </main>
        <footer>
          <p>J-Tune Since 2020</p>
        </footer>
      </div>
    );
    
}; 

export default Clanok3;