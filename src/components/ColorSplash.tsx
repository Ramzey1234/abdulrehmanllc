"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ColorSplash() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center justify-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 animate-gradient-slow opacity-90" />

      {/* Subtle Noise Texture for Texture/Premium Feel */}
      <div className="absolute inset-0 opacity-[0.15] bg-[url('/assets/noise.png')] pointer-events-none" />

      <div className="container-page relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-white text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 text-white/80"
          >
            New Collection
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif mb-6 leading-tight"
          >
            Live in <br />
            <span className="italic opacity-90">Technicolor</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 font-light max-w-md mx-auto md:mx-0 mb-8 leading-relaxed"
          >
            Discover our boldest pieces yet. Saturated hues and vibrant forms
            designed to wake up your sanctuary.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="px-8 py-4 bg-white text-fuchsia-600 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl hover:bg-white/90 transition-all"
          >
            Explore Variations
          </motion.button>
        </div>

        {/* Visual Composition */}
        <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
          {/* Main Floating Image */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative z-20 w-64 md:w-80 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
          >
            <Image
              src="/assets/images/perfume.png" // Using the colorful perfume bottle
              alt="Vibrant Perfume"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Secondary Floating Element (Glass Card) */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="absolute -left-4 md:left-10 bottom-10 z-30 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg max-w-[200px]"
          >
            <p className="text-white font-serif text-2xl mb-1">“Bold.”</p>
            <p className="text-white/70 text-xs uppercase tracking-wider">
              Summer Edition
            </p>
          </motion.div>

          {/* Background Decorative Blob/Shape */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute z-10 w-[400px] h-[400px] border border-white/10 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
