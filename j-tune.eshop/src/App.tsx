// @ts-nocheck
import { Navigate } from "react-router-dom";
import "./App.css";
import { useAuth } from "./auth/Auth";
import LandingPage from "./LandingPage";
import NavBar from "./NavBar";
import Products from "./Products";
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  const { session } = useAuth();

  return (
    <div className="w-screen h-screen">
      {session ? (
        <LandingPage />
      ) : <Navigate to="/signup" />}
    </div>
  );
}



export default App;

