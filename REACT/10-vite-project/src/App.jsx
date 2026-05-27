import React from "react";
import { CartProvider } from "./Components/CartContext";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import "./App.css"

function App() {
  return (
    <CartProvider>
      <div className="container mt-5">
        <h1 className="text-center mb-5">
        Кав'ярня
        </h1>
        <ProductList></ProductList>
        <Cart></Cart>
      </div>
    </CartProvider>
  )
}

export default App
