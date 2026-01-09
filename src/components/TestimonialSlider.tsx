"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Interior Designer",
    text: "The quality of the mirrors is absolutely stunning. They completely transformed my living room.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jessica K.",
    role: "Beauty Blogger",
    text: "I'm in love with the skincare line. It's gentle, effective, and the packaging is so chic.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily R.",
    role: "Home Stylist",
    text: "Fast shipping and incredible customer service. The vases are even more beautiful in person.",
    rating: 4,
  },
  {
    id: 4,
    name: "Amanda L.",
    role: "Verified Buyer",
    text: "A true luxury experience from start to finish. Highly recommend!",
    rating: 5,
  },
];

export function TestimonialSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 16 },
      },
    },
  });

  return (
    <section className="w-full py-20 bg-[#fdf5f4]">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[#4a2e2b] mb-4">
            Loved by our Community
          </h2>
          <p className="text-[#7a4b47] max-w-2xl mx-auto">
            Join thousands of happy customers who have elevated their lifestyle
            with our curated collection.
          </p>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="keen-slider__slide bg-white p-8 rounded-2xl shadow-sm border border-rose-100 flex flex-col gap-4"
            >
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < t.rating ? "currentColor" : "none"}
                    className={i < t.rating ? "" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-lg font-light text-neutral-700 italic">
                &quot;{t.text}&quot;
              </p>
              <div className="mt-auto pt-4 border-t border-rose-50">
                <p className="font-medium text-[#4a2e2b]">{t.name}</p>
                <p className="text-xs text-[#7a4b47] uppercase tracking-wider">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
