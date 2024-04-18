// @ts-nocheck

import NavBar from "./NavBar";
import { useEffect, useState, useRef } from "react";
import { useLocation, Link } from 'react-router-dom';
import { supabase } from "./supabase/supabaseClient";
import { loadScript } from "@paypal/paypal-js";


const Order = ({ importedCartItems }) => {

  const [cartItems, setCartItems] = useState<Product[]>([]);  //globálne premenne
  const [totalPrice, setTotalPrice] = useState();
  const [warning, setWarning] = useState("");
  //referencie pre textové polia vo formulári
  const name = useRef();
  const surname = useRef();
  const email = useRef();
  const phone = useRef();
  const address = useRef();
  const city = useRef();
  const country = useRef();
  const postal_code = useRef();
  const delivery_slovakpost = useRef();
  const payment_cash_on_delivery = useRef();
  //Funkcia na odoslanie objednávky
  const sendOrder = async () => {

    if (
      name.current.value != "" &&
      surname.current.value != "" &&
      email.current.value != "" &&
      phone.current.value != "" &&
      address.current.value != "" &&            //kontrola či sú vyplnené políčka
      city.current.value != "" &&
      country.current.value != "" &&
      postal_code.current.value != "" &&
      delivery_slovakpost.current.checked &&
      payment_cash_on_delivery.current.checked)
    {
      let delivery_type = "";
      let payment_type = "";
      let products = "";
  
      if (delivery_slovakpost.current.checked)
      {
        delivery_type = "Slovak post";
      }                                               // predvolenie platby a dopravy
  
      if (payment_cash_on_delivery.current.checked)
      {
        payment_type = "Cash on delivery";
      }
      {
        payment_type = "Cash on delivery";
      }
  
      cartItems.map((item) => (products += item.description + "-Size:" + item.size + " | "))  //možnosť menenia veľkosti oblečenia
      // Vloženie objednávky do databázy
      const { } = await supabase
      .from('orders')
      .insert({ 
        name: name.current.value + " " + surname.current.value, 
        info: email.current.value + " | " + phone.current.value, 
        address: address.current.value + ", " + city.current.value + ", " + country.current.value + ", " + postal_code.current.value, 
        delivery_type: delivery_type, 
        payment_type: payment_type, 
        total_price: totalPrice + "€",
        products: products 
      })
      alert("Order sucessfully created!");
    }
    else
    {  
      setWarning("Please, fill all your information first!");  // Upozornenie na nevyplnené políčka
      window.scrollTo({top: 0, behavior: 'smooth'});          
    }
  }
  // Načítanie dát z URL, ak sú k dispozícii
    const location = useLocation()
    {
      if (location.state != null)
      {
        const { cartData } = location.state
        importedCartItems = cartData;
      }
    }

  useEffect(() => {
    if (importedCartItems != null)
    {
      setCartItems(importedCartItems)
      calculateTotal()
    }
  }, [importedCartItems]);

  useEffect(() => {
    calculateTotal()  
  }, [cartItems]);
  
  // Funkcia na výpočet celkovej ceny
  function calculateTotal()
  {
    let total = 0;
    cartItems.map((item) => (total += item.price))
    setTotalPrice(total);
  }

  return (
    <div>

      <NavBar shoppingCartItems={cartItems} />

      <main>
        <a className="warning">{warning}</a>
        <h2>Detail objednávky</h2>

        <div className="order-inline">
          <div className="order-incolumn">
            <label className="order-label" htmlFor="name">Meno</label>
            <input ref={name} className="rounded-input" type="text" id="name" placeholder="Name" />
          </div>
          <div className="order-incolumn">
            <label className="order-label" htmlFor="order-surname">Priezvisko</label>
            <input ref={surname} className="rounded-input" type="text" id="surname" placeholder="Surname" />
          </div>
        </div>

        <div className="order-inline">
          <div className="order-incolumn">
            <label className="order-label" htmlFor="email">E-Mail</label>
            <input ref={email} className="rounded-input" type="text" id="email" placeholder="E-Mail" />
          </div>
          <div className="order-incolumn">
            <label className="order-label" htmlFor="phone">Tel. číslo</label>
            <input ref={phone} className="rounded-input" type="number" id="phone" placeholder="Phone number" />
          </div>
        </div>

        <br />
        <br />

        <div className="order-inline">
          <div className="order-incolumn">
            <label className="order-label" htmlFor="address">Adresa</label>
            <input ref={address} className="rounded-input" type="text" id="address" placeholder="Address" />
          </div>
          <div className="order-incolumn">
            <label className="order-label" htmlFor="city">Mesto</label>
            <input ref={city} className="rounded-input" type="text" id="city" placeholder="City" />
          </div>
        </div>

        <div className="order-inline">
          <div className="order-incolumn">
            <label className="order-label" htmlFor="country">Krajina</label>
            <input ref={country} className="rounded-input" type="text" id="country" placeholder="Country" />
          </div>
          <div className="order-incolumn">
            <label className="order-label" htmlFor="postal">PSČ</label>
            <input ref={postal_code} className="rounded-input" type="text" id="postal" placeholder="Postal code" />
          </div>
        </div>

        <br />
        <br />

        <div className="order-inline">
          <div className="order-incolumn">
          <label className="order-label">Doprava</label>
            <div className="order-rectangle">
              <input ref={delivery_slovakpost} type="radio" defaultChecked="true" id="slovak_post" name="delivery" value="slovak_post" />
              <label htmlFor="slovak_post">Slovenská pošta</label>
            </div>
          </div>
          <div className="order-incolumn">
            <label className="order-label">Platba</label>
            <div className="order-rectangle">
              <input ref={payment_cash_on_delivery} type="radio" defaultChecked="true" id="cash_on_delivery" name="payment" value="cash_on_delivery" />
              <label htmlFor="cash_on_delivery">Na dobierku</label>
            </div>
            <div className="order-rectangle">
              <input ref={payment_cash_on_delivery} type="radio" defaultChecked="true" id="online_payment" name="payment" value="online_payment" />
              <label htmlFor="cash_on_delivery">PayPal</label>
            </div>
            </div>
        </div>
      </main>

      <div className="shopping-cart">
        <h2>Súhrn Nákupu</h2>
        {cartItems ? (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img_url} alt={item.description} />
              <div>
                <h3>{item.description}</h3>
                <p>Veľkosť: {item.size}</p>
                <p>Cena: {item.price}€</p>
              </div>
            </div>     
          ))
        ) : null }
        <h2>Celkovo: {totalPrice}€</h2>
        <br />
        <button className="navsize" onClick={() => sendOrder()}><Link to="/Home" style={{ color: 'white' }}>Objednať</Link></button>
      </div>
      <footer>
          <p>J-Tune Since 2020</p>
        </footer>
    </div>
  );
}
  
export default Order;