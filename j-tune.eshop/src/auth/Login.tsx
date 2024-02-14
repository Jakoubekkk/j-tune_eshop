import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, session } = useAuth();

  async function handleLogIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { error } = await signIn(email, password);
      if (error) throw error;
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
    }
  }

  return !session ? (
    <div className="w-screen h-screen flex flex-col justify-center">
      <form onSubmit={handleLogIn} className="flex flex-col items-center">
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-64 my-2"
          style={{ 
            border: "2px solid gray", 
            borderRadius: "5px", 
            padding: "10px",
            fontSize: "16px",
          }}
        />
        <input
          id="password"
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-64 my-2"
          style={{ 
            border: "2px solid gray", 
            borderRadius: "5px", 
            padding: "10px",
            fontSize: "16px",
          }}
        />
        <input
          type="submit"
          value="Log In"
          className="w-64 rounded-full bg-sky-500/50 px-2 py-1 my-4"
          style={{ 
            backgroundColor: "blue",
            border: "none",
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
            cursor: "pointer",
          }}
        />
        <p className="mt-5" style={{ fontSize: "16px" }}>
          Don't have an account?{" "}
          <Link to="/signup" className="text-emerald-300" style={{ textDecoration: "none" }}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  ) : (
    <Navigate to="/" />
  );
}