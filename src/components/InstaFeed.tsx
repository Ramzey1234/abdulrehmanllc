"use client";

import React from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";

const instaImages = [
  "/assets/images/candle.jpg",
  "/assets/images/bottle.jpg",
  "/assets/images/eye.jpg",
  "/assets/images/frame.jpg",
  "/assets/images/ratan.avif",
  "/assets/images/linen.webp",
];

export function InstaFeed() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container-page flex flex-col items-center mb-10">
        <Instagram className="w-8 h-8 text-[#7a4b47] mb-4" />
        <h2 className="text-3xl font-light text-[#4a2e2b] mb-2">@LLCStore</h2>
        <p className="text-neutral-500">
          Follow us for daily inspiration and exclusive offers.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full">
        {instaImages.map((src, idx) => (
          <div
            key={idx}
            className="relative aspect-square group overflow-hidden cursor-pointer"
          >
            <Image
              src={src}
              alt="Instagram post"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Instagram className="text-white w-8 h-8" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
