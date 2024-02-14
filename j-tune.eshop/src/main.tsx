import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./auth/Auth";
import "./index.css";
import { router } from "./router/router";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

ReactDOM.render(
  <React.StrictMode>
    <ShoppingCart />
  </React.StrictMode>,
  document.getElementById("root")
);