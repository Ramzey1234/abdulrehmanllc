"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CartPage() {
  type CartItem = {
    id: string;
    name: string;
    price: number;
    img: string;
    qty: number;
  };

  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(stored);
  }, []);

  function removeItem(id: string) {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  function updateQty(id: string, qty: number) {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty } : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + tax + shipping;

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const suggestedProducts = [
    { id: "4", name: "Meditation Mat", price: 24.99 },
    { id: "5", name: "Essential Oil Set", price: 39.99 },
    { id: "6", name: "Incense Bundle", price: 19.99 },
  ];

  return (
    <div
      className="bg-no-repeat bg-bottom min-h-screen"
      style={{
        backgroundImage: `url('/assets/images/beige.webp')`,
        backgroundSize: "100%",
      }}
    >
      <main className="container-page section">
        <div className="mb-12">
          <p className="text-sm tracking-wider font-light text-[#7a4b47] mb-3">
            Shopping Cart
          </p>
          <h1 className="text-5xl font-light leading-tight text-[#4a2e2b] mb-2">
            Your Cart
          </h1>
          <p className="text-lg font-light text-[#5e3a37]">
            You have <span className="font-medium">{totalItems} items</span> in
            your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CART ITEMS */}
          <div className="lg:col-span-2">
            <div className="card p-8 mb-8 bg-white/80 backdrop-blur-sm">
              <h2 className="text-2xl font-light text-[#4a2e2b] mb-8">
                Order Items
              </h2>

              {cart.length === 0 ? (
                <p className="text-neutral-500">Your cart is empty.</p>
              ) : (
                <ul>
                  {cart.map((item, idx) => (
                    <li
                      key={item.id}
                      className={`flex gap-6 items-start py-8 ${
                        idx !== cart.length - 1
                          ? "border-b border-neutral-200"
                          : ""
                      }`}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-[#f9ece9] to-[#f0dcd8] shadow-sm overflow-hidden">
                          <Image
                            src={item.img}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <p className="font-medium text-lg text-[#4a2e2b] mb-2">
                          {item.name}
                        </p>

                        <div className="flex items-center gap-6 text-sm text-[#7a4b47]">
                          <span className="font-light">
                            Qty:{" "}
                            <select
                              value={item.qty}
                              onChange={(e) =>
                                updateQty(item.id, Number(e.target.value))
                              }
                              className="border border-[#d8c4c0] rounded px-2 py-1 text-sm"
                            >
                              {[1, 2, 3, 4, 5].map((n) => (
                                <option key={n} value={n}>
                                  {n}
                                </option>
                              ))}
                            </select>
                          </span>

                          <span className="font-light">
                            ${item.price.toFixed(2)} each
                          </span>
                        </div>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <p className="font-medium text-lg text-[#4a2e2b] mb-3">
                          ${(item.price * item.qty).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-[#7a4b47] hover:text-[#673d3a] font-medium transition"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* SUGGESTED PRODUCTS */}
            <div>
              <h2 className="text-2xl font-light text-[#4a2e2b] mb-6">
                You Might Also Like
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {suggestedProducts.map((product) => (
                  <div key={product.id} className="group">
                    <div className="card p-6 text-center bg-white/80 backdrop-blur-sm mb-4 hover:shadow-xl transition">
                      <div className="bg-gradient-to-br from-[#f9ece9] to-[#f0dcd8] h-40 rounded-xl mb-4 group-hover:scale-105 transition"></div>

                      <p className="font-medium text-sm text-[#4a2e2b] mb-2">
                        {product.name}
                      </p>
                      <p className="text-sm font-light text-[#7a4b47] mb-4">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>

                    <button
                      className="w-full px-4 py-2 rounded-full border border-[#7a4b47] text-[#4a2e2b] bg-[#fdf5f4]/70 hover:bg-[#f9e5e1] text-xs font-medium transition"
                      onClick={() => {
                        const updated = [
                          ...cart,
                          { ...product, qty: 1, img: "/placeholder.jpg" },
                        ];
                        setCart(updated);
                        localStorage.setItem("cart", JSON.stringify(updated));
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <div className="lg:col-span-1">
            <div className="card p-8 sticky top-20 bg-white/80 backdrop-blur-sm">
              <h2 className="text-2xl font-light text-[#4a2e2b] mb-8">
                Order Summary
              </h2>

              <div className="space-y-4 pb-8 border-b border-neutral-200">
                <div className="flex justify-between">
                  <span className="font-light text-[#5e3a37]">Subtotal</span>
                  <span className="text-[#4a2e2b] font-light">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-light text-[#5e3a37]">Tax (8%)</span>
                  <span className="text-[#4a2e2b] font-light">
                    ${tax.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-light text-[#5e3a37]">Shipping</span>
                  <span className="text-[#4a2e2b] font-light">
                    {shipping === 0 ? (
                      <span className="text-[#7a4b47] font-medium">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center py-8 mb-8">
                <span className="text-lg font-light text-[#4a2e2b]">Total</span>
                <span className="text-3xl font-light text-[#7a4b47]">
                  ${total.toFixed(2)}
                </span>
              </div>

              <Link href="/checkout">
                <button className="w-full px-7 py-3 rounded-full bg-[#7a4b47] text-[#f9ece9] font-medium shadow-md shadow-[#7a4b47]/30 hover:bg-[#673d3a] transition mb-3">
                  Proceed to Checkout
                </button>
              </Link>

              <Link href="/" className="block">
                <button className="w-full px-7 py-3 rounded-full border border-[#7a4b47] text-[#4a2e2b] bg-[#fdf5f4]/70 hover:bg-[#f9e5e1] transition font-medium">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
