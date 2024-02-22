import { createBrowserRouter } from "react-router-dom";
import About from "../About";
import App from "../App";
import LogIn from "../auth/Login";
import SignUp from "../auth/SignUp";
import Contact from "../Contact";
import Home from "../Home";
import Product from "../Products";
import Order from "../Order";
import LandingPage from "../LandingPage";
import ShoppingCart from "../ShoppingCart";
import { SetStateAction } from "react";
import Clanok1 from "../Clanok1";
import Clanok2 from "../Clanok2";
import Clanok3 from "../Clanok3";
import Clanok4 from "../Clanok4";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/LandingPage",
    element: <LandingPage />,
  },
  {
    path: "/ShoppingCart",
    element: <ShoppingCart cartItems={[]} setCartItems={function (value: SetStateAction<Product[]>): void {
      throw new Error("Function not implemented.");
    } } />,
  },
  {
    path: "/Order",
    element: <Order />,
  },
  {
    path: '/clanok1',
    element: <Clanok1 />,
  },
  {
    path: '/clanok2',
    element: <Clanok2 />,
  },
  {
    path: '/clanok3',
    element: <Clanok3 />,
  },
  {
    path: '/clanok4',
    element: <Clanok4 />,
  },
]);


