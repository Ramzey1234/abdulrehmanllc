"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const featuredItems = [
  {
    type: "Fragrance",
    title: "The Signature Scent",
    img: "/assets/images/perfume.png",
    colSpan: "md:col-span-6 lg:col-span-7",
    bg: "bg-[#8c6b65]", // Rosy Brown - Rich but muted
    textColor: "text-[#f2e6e1]",
    btnColor: "bg-[#f2e6e1] text-[#8c6b65]",
  },
  {
    type: "Decor",
    title: "Sculptural Form",
    img: "/assets/images/vase.avif",
    colSpan: "md:col-span-6 lg:col-span-5",
    bg: "bg-[#dcbdb9]", // Dustier Rose - Lighter complement
    textColor: "text-[#2f2423]",
    btnColor: "bg-[#2f2423] text-[#f2e6e1]",
  },
];

export function SensoryMosaic() {
  return (
    <section className="py-12 bg-white">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {featuredItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`relative rounded-[2rem] overflow-hidden group ${item.colSpan} ${item.bg}`}
            >
              {/* Product Image - Floating Effect */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full max-w-[300px] max-h-[400px] shadow-2xl rounded-2xl overflow-hidden"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Text Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 flex flex-col items-start justify-end bg-gradient-to-t from-black/20 to-transparent h-full pointer-events-none">
                <div className="pointer-events-auto">
                  <span
                    className={`text-xs font-bold tracking-[0.2em] uppercase mb-2 block opacity-80 ${item.textColor}`}
                  >
                    {item.type}
                  </span>
                  <h3
                    className={`text-3xl md:text-5xl font-serif mb-6 leading-tight ${item.textColor}`}
                  >
                    {item.title}
                  </h3>
                  <Link
                    href="/shop"
                    className={`inline-block px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all ${item.btnColor}`}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
