"use client";

import { products, type Product } from "@/components/Products";
import Image from "next/image";
import { useEffect, useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  img: string;
  qty: number;
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [qtyInCart, setQtyInCart] = useState(0);

  // Find product first
  const product: Product | undefined = products.find((p) => p.id === params.id);

  const p: Product = product ?? {
    id: "",
    name: "",
    price: 0,
    img: "",
    blurb: "",
    link: "",
    category: "beauty-self-care",
    rating: 0,
    reviews: 0,
  };

  useEffect(() => {
    if (!product) return;
    if (typeof window === "undefined") return;

    const raw = localStorage.getItem("cart");
    const cart: CartItem[] = raw ? JSON.parse(raw) : [];

    const existing = cart.find((item) => item.id === p.id);
    setQtyInCart(existing ? existing.qty : 0);
  }, [product, p.id]);

  function addToCart() {
    const raw = localStorage.getItem("cart");
    const cart: CartItem[] = raw ? JSON.parse(raw) : [];

    const existing = cart.find((item) => item.id === p.id);

    if (existing) {
      existing.qty += 1;
      setQtyInCart(existing.qty);
    } else {
      cart.push({
        id: p.id,
        name: p.name,
        price: p.price,
        img: p.img,
        qty: 1,
      });
      setQtyInCart(1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Now return the "not found" message AFTER hooks, safe for React
  if (!product) {
    return (
      <div className="container-page py-32 text-center text-[#3f2f2d]">
        Product not found.
      </div>
    );
  }

  return (
    <section className="pt-28 pb-32 bg-[linear-gradient(to_bottom,#f7efed,#f2e6e1,#efe1dd)] relative">
      <div
        className="
          absolute inset-0 opacity-10
          bg-[url('/assets/images/paper-texture.png')]
          bg-repeat pointer-events-none
        "
      />

      <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="relative w-full h-[500px] rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-[#e7d7d3]">
            <Image src={p.img} alt={p.name} fill className="object-cover" />
          </div>

          <div>
            <h1 className="text-4xl font-semibold text-[#3f2f2d] leading-tight tracking-tight">
              {p.name}
            </h1>

            <p className="mt-4 text-lg text-[#6a5854] leading-relaxed max-w-xl">
              {p.blurb}
            </p>

            <p className="mt-6 text-3xl font-medium text-[#3c302e]">
              ${p.price}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={addToCart}
                className="
                  px-8 py-3 rounded-full
                  bg-[#7a4b47] text-white
                  hover:bg-[#6a3f3b]
                  transition-colors
                  shadow-md shadow-[#7a4b47]/30
                  text-sm font-medium tracking-wide
                "
              >
                {qtyInCart > 0 ? `Add to Cart (${qtyInCart})` : "Add to Cart"}
              </button>

              {/* {p.amazonLink && (
                <a
                  href={p.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-8 py-3 rounded-full
                    border border-[#7a4b47] text-[#7a4b47]
                    hover:bg-[#7a4b47] hover:text-white
                    transition-colors
                    text-sm font-medium tracking-wide
                    flex items-center justify-center
                  "
                >
                  Buy on Amazon
                </a>
              )} */}
            </div>

            <div className="h-[1px] w-full bg-[#e5d6d1] my-10"></div>

            <div className="text-[#6d5b57] leading-relaxed space-y-4 max-w-xl">
              <p>
                This piece is crafted for those who appreciate quiet luxury.
                Every detail is designed to elevate your daily ritual without
                adding noise. Clean formulas, warm tactile textures, and a sense
                of gentle indulgence in every use.
              </p>

              <p>
                Our curation emphasizes softness, grounding scents, and
                comfort-focused formulations. Whether it is part of your morning
                routine or an evening wind-down moment, it settles into your
                life like something familiar.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-2xl font-semibold text-[#3f2f2d] mb-8">
            You may also like
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {products
              .filter((prod) => prod.id !== p.id)
              .slice(0, 3)
              .map((rec) => (
                <a
                  href={`/product/${rec.id}`}
                  key={rec.id}
                  className="
                    group block rounded-[28px] overflow-hidden
                    bg-white border border-[#eadfdb]
                    shadow-sm hover:shadow-md transition-all
                  "
                >
                  <div className="h-56 w-full relative overflow-hidden">
                    <Image
                      src={rec.img}
                      alt={rec.name}
                      fill
                      className="object-cover group-hover:scale-[1.06] transition-transform"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg text-[#3f2f2d]">{rec.name}</h3>
                    <p className="mt-1 text-[#6a5854] text-sm">${rec.price}</p>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
