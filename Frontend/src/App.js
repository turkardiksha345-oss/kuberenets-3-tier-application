import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Signup from "./components/Signup";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Hero />
      <Menu addToCart={addToCart} />
      <Cart cart={cart} />
      <Signup />
    </>
  );
}

export default App;