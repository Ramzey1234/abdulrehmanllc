"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: "scent",
    title: "The Scent",
    subtitle: "Signature Fragrances",
    img: "/assets/images/perfume.png", // Assuming this is the bottle image
    color: "bg-[#e8dcd9]",
    textColor: "text-[#7a4b47]",
    desc: "Notes of amber, jasmine, and quiet mornings.",
  },
  {
    id: "touch",
    title: "The Touch",
    subtitle: "Handcrafted Ceramics",
    img: "/assets/images/vase.avif",
    color: "bg-[#d8c4c0]",
    textColor: "text-[#5e403d]",
    desc: "Textures that ground you in the present moment.",
  },
  {
    id: "light",
    title: "The Light",
    subtitle: "Ambient Illumination",
    img: "/assets/images/candle.jpg", // Need to verify if this exists, if not fallback to something else or just text
    fallbackImg: "/assets/images/lavendar.jpg", // Fallback
    color: "bg-[#f2e6e1]",
    textColor: "text-[#8c7a76]",
    desc: "Warmth that transforms your space into a sanctuary.",
  },
  {
    id: "life",
    title: "The Life",
    subtitle: "Botanical Elements",
    img: "/assets/images/lavendar.jpg",
    color: "bg-[#e2d5d1]",
    textColor: "text-[#6a5854]",
    desc: "Bringing the outside in, with intention.",
  },
];

export function InteractiveGrid() {
  const [activeItem, setActiveItem] = useState("scent");

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-page">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-[#7a4b47] uppercase mb-4">
            Discover
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2f2423]">
            Curated Dimensions
          </h2>
        </div>

        {/* The Grid - Desktop: Horizontal Accordion, Mobile: Vertical Grid */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] gap-4">
          {items.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActiveItem(item.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                  isActive
                    ? "lg:flex-[3] h-[500px] lg:h-auto"
                    : "lg:flex-[1] h-[120px] lg:h-auto"
                } ${item.color}`}
              >
                {/* Background Image (faded) */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className={`object-cover transition-transform duration-1000 ${
                      isActive ? "scale-100 opacity-20" : "scale-110 opacity-10"
                    }`}
                  />
                </div>

                {/* Content Container */}
                <div className="relative z-10 w-full h-full p-8 flex flex-col justify-between">
                  {/* Top: Title (Vertical when collapsed on Desktop, Standard on active or mobile) */}
                  <div
                    className={`transition-all duration-500 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "lg:opacity-70 lg:rotate-[-90deg] lg:origin-top-left lg:translate-y-[80px] lg:translate-x-[-10px] opacity-100"
                    }`}
                  >
                    <h3
                      className={`text-2xl md:text-3xl font-serif whitespace-nowrap ${item.textColor}`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Bottom: Revealed Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-md"
                      >
                        <p className="text-sm font-bold tracking-widest uppercase mb-2 opacity-60">
                          {item.subtitle}
                        </p>
                        <p
                          className={`text-xl md:text-2xl ${item.textColor} font-light leading-snug mb-8`}
                        >
                          {item.desc}
                        </p>
                        <button className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-sm font-medium hover:bg-white/40 transition-colors">
                          Explore Collection
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Icon/Indicator when inactive (Desktop) */}
                  {!isActive && (
                    <div className="hidden lg:flex absolute bottom-8 left-8 w-10 h-10 rounded-full bg-white/10 items-center justify-center">
                      <span className="text-xl">→</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
