// @ts-nocheck

import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ importedCartItems }) => {

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
  
  const articles = [
    {
      title: 'Mazda MX-5 má za sebou už štyri generácie a 35 rokov ',
      content: 'Bezpochyby najúspešnejší roadster na svete , a tak by sme mohli pomenovať MX-5.',
      image: '/assets/miata3.jpg',
    },
    {
      title: 'Lexus RC F je V8 fosília ktorá MUSÍ prežiť. Atmosferický motor?',
      content: 'Dnes sa atmosférické benzínové motory už nenosia.',
      image: '/assets/lexus.png',
    },
    {
      title: 'Honda NSX: Japonské "Ferrari" otriaslo v Amerike pred 25 rokmi',
      content: 'Japonci predstavili v roku 1989 v Chicagu superšport.',
      image: '/assets/nsx3.JPG',
    },
    {
      title: 'Porsche boxster 986 S. Legenda a zábavné kabrio za dobrý peniaz?',
      content: 'Pôvodné Porsche Boxster z roku 1996.',
      image: '/assets/boxster1.jpg',
    },
  ];
  

return (
      <div>
        <NavBar shoppingCartItems={cartItems} />
        <main>
        <div className="home-container">
          <div className="home-page">
            <h1>Zaujímavé články zo sveta motorizmu</h1>
            <div className="articles-container">
              {articles.map((article, index) => (
                <Link to={`/Clanok${index + 1}`} state={{ cartData: cartItems }} key={index} className="article-link">
                  <div className="article">
                    <img src={article.image} alt={`Obrazok k článku ${index + 1}`} />
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          </div>
        </main>
        <footer>
          <p>J-Tune Science 2020</p>
        </footer>
      </div>
    );
  };
  
export default Home;