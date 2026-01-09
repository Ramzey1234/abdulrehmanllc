"use client";

import { motion } from "framer-motion";
import { Sparkles, Globe, Leaf } from "lucide-react";

const features = [
  {
    title: "Curated Aesthetics",
    description:
      "Every piece is hand-picked for unique beauty and timeless appeal.",
    icon: Sparkles,
    color: "bg-rose-100 text-rose-600",
  },
  {
    title: "Global Inspiration",
    description: "Designs sourced from artisans and studios around the world.",
    icon: Globe,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Eco-Conscious",
    description: "Sustainable materials and ethical practices at our core.",
    icon: Leaf,
    color: "bg-emerald-100 text-emerald-600",
  },
];

export function VibrantWelcome() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#fff5f5] via-[#fff0f0] to-[#f8f4ff]">
      {/* Decorative colored blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-page relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-[#2f2423] mb-6 leading-tight"
          >
            Welcome to <span className="text-[#a35e58] italic">Idrees</span>.
            <br />
            Where style meets soul.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-600 leading-relaxed font-light"
          >
            We believe your home should tell your story. Explore our collection
            of thoughtful objects designed to elevate your everyday rituals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/60 backdrop-blur-md border border-white/50 p-8 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl ${feature.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-medium text-[#2f2423] mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
