"use client";

import React from "react";
import Link from "next/link";

const categories = [
  "Perfumes",
  "Wall Art",
  "Mirrors",
  "Vases",
  "Candles",
  "Furniture",
  "Lighting",
  "Textiles",
  "Ceramics",
  "Botanicals",
];

export function CategoryMarquee() {
  return (
    <section className="w-full py-8 bg-neutral-50 border-y border-neutral-200 overflow-hidden">
      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
          {/* Double the list for seamless loop */}
          {[...categories, ...categories, ...categories].map((cat, idx) => (
            <Link
              key={`${cat}-${idx}`}
              href={`/shop?category=${cat.toLowerCase()}`}
              className="text-3xl md:text-5xl font-light text-neutral-300 hover:text-neutral-900 transition-colors duration-300 cursor-pointer uppercase tracking-tighter"
            >
              {cat}
            </Link>
          ))}
        </div>

        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-12 items-center ml-12">
          {[...categories, ...categories, ...categories].map((cat, idx) => (
            <Link
              key={`${cat}-${idx}-2`}
              href={`/shop?category=${cat.toLowerCase()}`}
              className="text-3xl md:text-5xl font-light text-neutral-300 hover:text-neutral-900 transition-colors duration-300 cursor-pointer uppercase tracking-tighter"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
