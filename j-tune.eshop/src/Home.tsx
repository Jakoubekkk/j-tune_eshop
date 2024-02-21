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
      title: 'Nadchádzajúce automobilové udalosti',
      content: 'Tento víkend sa pripravte na vzrušujúce automobilové udalosti!',
      image: 'url_k_obrazku_1.jpg',
    },
    {
      title: 'Mazda MX-5 má za sebou už štyri generácie a 35 rokov',
      content: 'Bezpochyby najúspešnejší roadster na svete, aj tak by sme mohli pomenovať MX-5.',
      image: 'src/img/miata.jpg',
    },
    {
      title: 'Ako udržiavať váš automobil v optimálnom stave',
      content: 'Tipy a triky na udržiavanie vašeho vozidla v top kondícii.',
      image: 'url_k_obrazku_2.jpg',
    },
    {
      title: 'Ako udržiavať váš automobil v optimálnom stave',
      content: 'Tipy a triky na udržiavanie vašeho vozidla v top kondícii.',
      image: 'url_k_obrazku_2.jpg',
    },
  ];
  

return (
      <div>
        <NavBar shoppingCartItems={cartItems} />
        <main>
          <div className="home-page">
            <h1>Vitajte na našom portáli pre motoristov!</h1>
            <div className="articles-container">
            {/* <button className="navsize" ><Link to="/Clanok1" state={{ cartData: cartItems }} style={{ color: 'white' }}>Check order</Link></button> */}
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
        </main>
      </div>
    );
  };
  
export default Home;