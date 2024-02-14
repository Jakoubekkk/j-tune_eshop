import React from 'react';
import MyCart from './MyCart';
/*import Product from './Products';*/
import { Product } from  './Products';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';

type CartProps = {
  cartItems: Product[]; 
  onRemoveFromCart: (product: Product) => void;
};

const Cart: React.FC<CartProps> = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div>
      <header>
        
        
        
        
        <NavBar />
        

      </header>
      <main>
      <h2 className='Shcrt'>Shopping Cart</h2>  
      
        </main>
      <ul>
        {/* {cartItems.map((item) => ( */}
           {/* <li key={item.id}> */}
          {/* //   {item.description} - ${item.price}{' '} */}
          {/* //   <button onClick={() => onRemoveFromCart(item)}>Remove</button> */}
          {/* // </li> */}
        {/* ))} */}
      </ul>
    </div>
  );
};

export default Cart;