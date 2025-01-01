"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  id: number;
  heading: string;
  description: string;
  paragraph: string;
  img_url: string;
  size: string;
  price: string;
  
};

interface Iproducts {
  id: number;
  heading: string;
  price: string;
  img_url: string;
  description: string; 
  size: string;
  paragraph: string;
              
}

interface CartContextType {
  cart: Iproducts[]; 
  addToCart: (product: Iproducts) => void;
  removeFromCart: (itemId: number) => void;
  toggleFavorite: (itemId: number) => void;
  favorites: number[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider = ({ children }: { children: ReactNode }) => {
  
  const [cart, setCart] = useState<Iproducts[]>([]);
  
  const [favorites, setFavorites] = useState<number[]>([]);
  const addToCart = (item: Iproducts) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };
  const toggleFavorite = (itemId: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(itemId)
        ? prevFavorites.filter((id) => id !== itemId) 
        : [...prevFavorites, itemId] // Add to favorites
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, toggleFavorite, favorites }}>
      
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
