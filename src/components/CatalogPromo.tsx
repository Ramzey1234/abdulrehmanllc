"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const mosaic = [
  "/assets/images/linen.webp",
  "/assets/images/bottle.jpg",
  "/assets/images/perfume.png",
  "/assets/images/soap.webp",
  "/assets/images/serum.webp",
  "/assets/images/hero.jpg",
];

export default function CatalogPromo() {
  return (
    <section className="w-full">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f9efece0] via-[#fffaf9cc] to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl "
            >
              <p className="text-sm text-[#7a4b47] font-semibold tracking-wide">
                Explore the Collection
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-[#3c2f2d] leading-tight">
                Handcrafted essentials, curated rituals
              </h2>
              <p className="mt-4 text-sm text-[#5b4b49] font-light max-w-xl">
                Discover tdddl range of our premium ritual products —
                thoughtfully sourced ingredients, timeless packaging, and
                slow-formulated blends designed for everyday ceremony.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="inline-flex items-center px-5 py-3 rounded-xl bg-[#7a4b47] text-white text-sm font-medium shadow hover:bg-[#673d3a] transition"
                >
                  View Full Collection
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-4 py-3 rounded-xl bg-white/10 text-[#3c2f2d] text-sm font-medium border border-white/8 hover:bg-white/12 transition"
                >
                  Learn Our Process
                </Link>
              </div>

              <ul className="mt-6 space-y-2 text-xs text-[#6a5854] font-light">
                <li>— Free shipping over $50</li>
                <li>— Ethically sourced ingredients</li>
                <li>— 30-day returns</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="w-full"
            >
              <div className="grid grid-cols-3 grid-rows-3 gap-3 lg:gap-4 items-stretch">
                {mosaic.map((src, i) => (
                  <motion.div
                    key={src}
                    whileHover={{ scale: 1.03 }}
                    className={`rounded-2xl overflow-hidden aspect-[4/5] ${
                      i === 5 ? "col-span-2 row-span-2 aspect-auto" : ""
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Catalog image ${i + 1}`}
                      width={500}
                      height={625}
                      className="w-full h-full object-cover block"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      priority={false}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
