// @ts-nocheck

import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import "./Contact.css";

const Contact = ({ importedCartItems }) => {

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

   return(
    <div>
      
      <NavBar shoppingCartItems={cartItems} />
      
      <main>
      <div className="contact-container">
      <h1>Kontaktuj nás!</h1>
      <p>
        Máte otázky alebo by ste sa s nami chceli skontaktovať? Neváhajte nás kontaktovať pomocou uvedených kontaktných informácií.
      </p>
      <div className="contact-info">
        <p>Email: j.tune@gmail.com</p>
        <p>Telefón: +421905573829</p>
        <p>Instagram: @j_tune.sk</p>
        <p>Facebook: J-Tune.sk</p>
      </div>
      <img src="/assets/lexusik.JPG" alt="j-tune" />
    </div>     
      </main>
      <footer>
          <p>J-Tune Since 2020</p>
        </footer>
    </div>
    

   );

}

export default Contact;