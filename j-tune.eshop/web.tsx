import React, { useState } from 'react'

import LandingPage from "./LandingPage";

interface Product {

id: number;
name: string;
price:number;
image: string;

}
 const products : Product[] = [
    {id: 1, name : 'Product 1', price: 25.99, image : 'owi/boro.jpg'}, 
    {id: 2, name : 'Product 2', price: 9.99, image : 'owi/gaahl.jpeg'}, 
    {id: 3, name : 'Product 3', price: 29.99, image : 'owi/zena.jpg'}, 
 ];

 const App = ( )=> {
    const[cart, setCart]=
useState<Product[]>([]);
const addToCart = (product: Product) =>{
    setCart([...cart,product]);
};
}
