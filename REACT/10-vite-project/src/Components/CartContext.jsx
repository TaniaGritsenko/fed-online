import React, {createContext, useContext, useState} from 'react';

const CartContext = createContext();
    export function CartProvider({children})
    {
        const[cart, setCart] = useState([]);
      function addToCart(product) {
        setCart([...cart, product]);
      }  
      function removeFromCart(indexToRemove) {
        setCart(cart.filter((item, index) =>
        index !== indexToRemove));
      }
    return (
        <CartContext.Provider value = {{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}