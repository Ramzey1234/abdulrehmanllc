"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Curated Kitchen",
    subtitle: "Elevate your home",
    img: "https://images.unsplash.com/photo-1520970627878-360d5bfa74d0?w=1080",
    link: "/shop?category=home-kitchen",
    theme: "from-amber-200/20 to-amber-100/20",
  },
  {
    title: "Self Rituals",
    subtitle: "Beauty in the everyday",
    img: "https://images.unsplash.com/photo-1600428853876-fb5a850b444f?auto=format&fit=crop&q=80&w=1080",
    link: "/shop?category=beauty-self-care",
    theme: "from-rose-200/20 to-rose-100/20",
  },
  {
    title: "Office Essentials",
    subtitle: "Focus and flow",
    img: "https://images.unsplash.com/photo-1588619461332-4458db9fa127?w=1080",
    link: "/shop?category=office-products",
    theme: "from-blue-200/20 to-blue-100/20",
  },
];

export function VisualCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2f2423] mb-4">
            Shop by Mood
          </h2>
          <p className="text-neutral-500 font-light">
            Explore our collections designed for mindful living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Link
              key={cat.title}
              href={cat.link}
              className="group relative block h-[500px] overflow-hidden rounded-2xl"
            >
              {/* Background with slight gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${cat.theme} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10`}
              />

              {/* Image */}
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Text Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-white bg-gradient-to-t from-black/50 via-transparent to-transparent">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <p className="text-sm font-medium tracking-widest uppercase mb-2 opacity-90">
                    {cat.subtitle}
                  </p>
                  <h3 className="text-3xl font-serif">{cat.title}</h3>
                </motion.div>

                {/* Reveal Arrow on Hover */}
                <div className="h-0 overflow-hidden group-hover:h-8 transition-all duration-500 ease-out">
                  <p className="mt-4 text-sm font-bold tracking-wider uppercase flex items-center gap-2">
                    Explore <span className="text-xl">→</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
