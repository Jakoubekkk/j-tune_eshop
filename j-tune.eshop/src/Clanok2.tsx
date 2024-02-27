// @ts-nocheck

import React from 'react';
import './Clanok1.css';
import NavBar from './NavBar';
import Products from './Products';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player';


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
          <div className="blog">
            <div className="blog-section">
              <img src="/assets/lexus.jpg" alt="Lexus RCF" />
              <div className="text-section">
                <h2>Lexus RC-F Takumi Edition : Posledný mohykán</h2>
                <p>
                Cena pre slovenský trh bude 119 900 Eur. Príjazd spomínaných vozidiel pre Slovensko je naplánovaný už začiatkom leta 2023.
                Špeciálna Takumi Edition je určená iba pre európsky trh a dodáva prémiovému športovému kupé exkluzivitu a precízne technické spracovanie. Pre európskych zákazníkov (a teda celosvetovo) vznikne iba obmedzený počet 15 exemplárov. Týchto 15 kusov RC F Takumi Edition bude jazdiť iba v 3 krajinách Európy – v Českej republike, Veľkej Británii a na Slovensku.
                </p>
                <p>
                Takumi Edition je postavená na modeli RC F Track Edition, ktorý spája zlepšenú aerodynamiku, nižšiu hmotnosť a upravený podvozok. Pod kapotou bude tĺcť plod toho najlepšieho konštrukčného umenia: nepreplňovaný vidlicový osemvalec 5,0 litra s výkonom 341 kW/464 k a dokonalým chodom, do ktorého sa tiež premietli postupy Takumi.
                Pôžitok za volantom bude znásobený pocitom hladkého nástupu otáčok a zdokonaleným zvukom, na ktorom sa podpísalo starostlivé vyváženie hmotnosti piestov a ojníc v kombinácii s rozprašovaním paliva systému vstrekovania.
                </p>
              </div>
            </div>
            <div className="blog-section reverse">
              <div className="text-section">
                <h2>Dôraz na detail</h2>
                <p>
                Neuveriteľný dôraz na detail a nekompromisné úsilie o dokonalosť dokladuje aj ručné vymedzenie záberu ozubených kolies s presnosťou na 0,01 mm, opäť z rúk majstrov Takumi: precízne nastavenie v rámci exkluzívneho samosvorného diferenciálu Torsen prispieva k ešte vyššiemu pôžitku z jazdy.
                Raritný charakter a sofistikovanosť RC F Takumi Edition navonok hlási markantný odtieň karosérie. 
                </p>
                <p>
                Sivý odtieň Titanium Carbide kombinuje tvrdosť titánu s neutrálnou stredne jasnou sivou a tlmeným tónom, pričom decentne odkazuje na pokrvnú príbuznosť s pretekárskymi vozidlami a necháva vyniknúť pútavý vzhľad tohto vyhotovenia.
                Na vyskúšanie verzie RC F Takumi Edition, ktorá spája špičkové remeselné spracovanie s opojnými jazdnými schopnosťami športového vozidla, nebudú musieť európski zákazníci čakať dlho. Výroba a montáž Takumi prebieha od januára a prvé dodávky sú naplánované začiatok leta 2023.
                </p>
              </div>
              <img src="/assets/lexus2.jpg" alt="Lexus RCF" />
            </div>
          </div>
        </main>
        <footer>
          <p>J-Tune Since 2020</p>
        </footer>
      </div>
    );
    
}; 

export default Clanok2;