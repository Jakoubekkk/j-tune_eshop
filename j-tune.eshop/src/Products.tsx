// @ts-nocheck

import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { supabase } from "./supabase/supabaseClient";
import { useLocation } from 'react-router-dom'

type Product = {
  id: number;
  description: string;
  price: number;
  img_url: string;
  size: string;
};

const Products = ({ importedCartItems }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

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

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("id, description, price, img_url")
        .range(0, 100);

      if (error) {
        console.error(error);
        return;
      }

      if (data) {
        const productsWithSize = data.map((product: Product) => ({ ...product, size: 'M' }));
        setProducts(productsWithSize);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    setNotification(`${product.description} has been added to your cart.`);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>, productId: number) => {
    const newSize = e.target.value;
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, size: newSize };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <div>
      <NavBar shoppingCartItems={cartItems} />
      <main>
        <div>
          {products.map((product) => (
            <div key={product.id} className="product-box">
              <img src={product.img_url} alt={product.description} />
              <h2>{product.description}</h2>
              <select value={product.size} onChange={(e) => handleSizeChange(e, product.id)}>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
              <p>Price: {product.price}€</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        {notification && <div className="notification">{notification}</div>}
      </main>
    </div>
  );
};

export default Products;
