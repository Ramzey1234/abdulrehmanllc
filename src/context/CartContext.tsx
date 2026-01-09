"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  img?: string;
  qty: number;
};

type CartContextValue = {
  cart: CartItem[];
  count: number;
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  setCart: (items: CartItem[]) => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCartState] = useState<CartItem[]>([]);

  // Initialize from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart") || "[]";
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) setCartState(parsed);
    } catch {
      // ignore
    }
  }, []);

  // Persist to localStorage when cart changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
      // dispatch a storage event for other windows
      window.dispatchEvent(new Event("cart:updated"));
    } catch {
      // ignore
    }
  }, [cart]);

  // Sync on external storage changes (other tabs)
  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key === "cart") {
        try {
          const parsed = e.newValue ? JSON.parse(e.newValue) : [];
          if (Array.isArray(parsed)) setCartState(parsed);
        } catch {}
      }
    }

    // custom event for same-window updates
    function onCartUpdated() {
      try {
        const raw = localStorage.getItem("cart") || "[]";
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setCartState(parsed);
      } catch {}
    }

    window.addEventListener("storage", onStorage);
    window.addEventListener("cart:updated", onCartUpdated);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("cart:updated", onCartUpdated);
    };
  }, []);

  function setCart(items: CartItem[]) {
    setCartState(items);
  }

  function addItem(item: Omit<CartItem, "qty">, qty = 1) {
    setCartState((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + qty } : p
        );
      }
      return [...prev, { ...item, qty }];
    });
  }

  function removeItem(id: string) {
    setCartState((prev) => prev.filter((p) => p.id !== id));
  }

  function clearCart() {
    setCartState([]);
  }

  const count = cart.reduce((s, it) => s + it.qty, 0);

  const value: CartContextValue = {
    cart,
    count,
    addItem,
    removeItem,
    clearCart,
    setCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
