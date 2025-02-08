
"use client"; // Next.js 14 ke liye zaroori hai agar state use kar rahe ho

import { createContext, useState, useEffect, useContext } from "react";

// Product type define karna zaroori hai (TypeScript)
interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  slug: string;
  image: { asset: { url: string } };
  category: string;
  discountPercent: number;
  new: boolean;
  colors: string[];
  sizes: string[];
  quantity: number; 
}


interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  incrementQuantity: (slug: string) => void;  // Function for incrementing quantity
  decrementQuantity: (slug: string) => void;  // Function for decrementing quantity
}

// Context create karo
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Cart localStorage me save karo
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Add to Cart Function
  const addToCart = (product: Product) => {
    setCart((prevCart) =>{
      const existingProduct = prevCart.find(item => item.slug === product.slug);
      if (existingProduct) {
        // If product exists, increase quantity
        return prevCart.map(item => 
          item.slug === product.slug 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If product doesn't exist, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove from Cart Function
 const removeFromCart = (slug: string) => {
  setCart((prevCart) => prevCart.filter((item) => item.slug !== slug));
};

const incrementQuantity = (slug: string) => {
  setCart((prevCart) => 
    prevCart.map(item => 
      item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decrementQuantity = (slug: string) => {
  setCart((prevCart) => 
    prevCart.map(item => 
      item.slug === slug && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    )
  );
};


  // Empty Cart Function
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart,incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook for Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
