// @ts-nocheck

import React from 'react';
import './Clanok1.css';
import NavBar from './NavBar';
import Products from './Products';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'


const Clanok4 = ({ importedCartItems }) => {

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
              <img src="/assets/boxster2.jpg" alt="Porsche boxster" />
              <div className="text-section">
                <h2>Malé Porsche s veľkou dušou</h2>
                <p>
                Pôvodný Porsche Boxster z roku 1996 je pre slávnu automobilku z Zuffenhausenu prelomovým modelom. Išlo po mnohých rokoch o nové auto od základu, ktoré sa veľmi zaslúžilo o to, že značka Porsche prežila do dnešných dní. Niekdajší šéf značky Wendelin Wiedeking sa učil u Japoncov a po svojom príchode na post šéfa Porsche naordinoval úspornú kúru.
                Prípravy na uvedenie boxsteru s interným označením Porsche 986 dali zbohom štvorvalce 968 a osemvalce 928 GTS ako posledným mohykánom radu transaxle, teda s motorom vpredu a prevodovkou pri zadnej náprave.  
                </p>
                <p>
                Tradičná 911 séria 993 prežila, avšak jej dni už boli tiež spočítané, keď ju rok po premiére boxsteru nahradila úplne nová generácia 996.
                V snahe znížiť výrobné náklady boli oba modely technicky a vlastne aj tvarovo veľmi unifikované. Napríklad palubné dosky oboch áut sú v zásade rovnaké, a to nehovoríme o motore či zavesení kolies. U 911 to okrem iného znamenalo prechod od posvätného chladenia agregátu vzduchom ku kvapalinovému. So všetkými výhodami a bohužiaľ aj nevýhodami. O prvom vodníku 911 ale niekedy inokedy, teraz sa venujme boxsteru.
                </p>
              </div>
            </div>
            <div className="blog-section reverse">
              <div className="text-section">
                <h2>Lacné športové zvezenie ?</h2>
                <p>
                Prvý boxster dnes predstavuje zrejme finančne najľahšiu cestu k zaobstaraniu naozaj športového porsche. Keď sa pozriete aj len do slovenskej inzercie, zistíte, že pojazdné a napríklad aj pohľadovo celkom slušné exempláre je možné pri troche šťastia zohnať aj za 10 000 EUR. 
                Iste, prvá cayenne je ešte lacnejšia (od zhruba 7000 EUR). Lenže to je SUV, navyše technicky spriaznené s VW Touaregom alebo prvé Audi Q7. Áno, lacnejšie môže byť aj transaxle 924 alebo 944, avšak to sú o dekádu staršie autá, ktoré chcú svoje. Navyše ceny týchto vozidiel rýchlo rastú, takže zachovalé kusy vyjdú na viac ako štvrť milióna korún.
                </p>
              </div>
              <img src="/assets/boxster3.jpg" alt="Boxster986" />
            </div>
          </div>
        </main>
        <footer>
          <p>J-Tune Since 2020</p>
        </footer>
      </div>
    );
    
}; 

export default Clanok4;