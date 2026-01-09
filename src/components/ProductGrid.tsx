"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Autoplay } from "./AutoSlider";
import { products } from "./Products";

export default function ProductGrid() {
  const [, setCurrent] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 4.5, spacing: 24 },
    breakpoints: {
      "(max-width: 1280px)": { slides: { perView: 4, spacing: 20 } },
      "(max-width: 1024px)": { slides: { perView: 3, spacing: 18 } },
      "(max-width: 768px)": { slides: { perView: 2.4, spacing: 16 } },
      "(max-width: 640px)": { slides: { perView: 1.6, spacing: 14 } },
    },
    created(sl) {
      Autoplay(sl, 1200);
    },
    slideChanged(sl) {
      setCurrent(sl.track.details.rel);
    },
  });

  return (
    <section className="w-full bg-gradient-to-br from-[#f0fdf4] via-[#f7fee7] to-[#dcfce7] py-20 border-y border-[#d1fae5]/60">
      <div className="container-page">
        <div className="flex items-center justify-between mb-10 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold tracking-[0.2em] text-[#059669] uppercase">
              Fresh Arrivals
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#064e3b]">
              Nature's Finest
            </h2>
          </div>

          <a
            href="/shop"
            className="shrink-0 group px-7 py-3 rounded-full bg-[#064e3b] text-[#ecfdf5] text-sm font-medium tracking-wide
            shadow-lg hover:bg-[#065f46] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
          >
            <span>View All</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          {/* soft edge fades so ends feel elegant */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 sm:w-14 bg-gradient-to-r from-[#f0fdf4] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 sm:w-14 bg-gradient-to-l from-[#f0fdf4] to-transparent z-10" />

          <div ref={sliderRef} className="keen-slider">
            {products.map((p) => {
              return (
                <Link
                  key={p.id}
                  href={p.link}
                  target={p.link.startsWith("http") ? "_blank" : undefined}
                  className={[
                    "keen-slider__slide group rounded-3xl overflow-hidden bg-white border border-[#a7f3d0]",
                    "transition-all duration-500 ease-[cubic-bezier(0.25,0.4,0.25,1)]",
                    "shadow-[0_4px_20px_rgba(0,0,0,0.02)]",
                    "hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] hover:-translate-y-1 block",
                  ].join(" ")}
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 70vw, (max-width: 768px) 45vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />

                    {/* hover actions, very light */}
                    <div className="absolute bottom-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                      <button className="h-8 w-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-xs text-[#059669] shadow-sm hover:bg-[#ecfdf5]">
                        🛒
                      </button>
                      <button className="h-8 w-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-xs text-[#059669] shadow-sm hover:bg-[#ecfdf5]">
                        ❤
                      </button>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <p className="text-[14px] sm:text-[15px] font-semibold text-[#064e3b] leading-snug line-clamp-2">
                      {p.name}
                    </p>
                    <p className="mt-2 text-[15px] sm:text-[16px] font-medium text-[#059669]">
                      ${p.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => slider.current?.prev()}
            className="absolute left-4 top-1/2 -translate-y-1/2
            bg-white/80 backdrop-blur-md border border-white/50 rounded-full
            shadow-sm w-11 h-11 flex items-center justify-center text-[#064e3b]
            hover:bg-white hover:scale-110 hover:shadow-lg transition-all duration-300 z-10"
          >
            ←
          </button>

          <button
            onClick={() => slider.current?.next()}
            className="absolute right-4 top-1/2 -translate-y-1/2
            bg-white/80 backdrop-blur-md border border-white/50 rounded-full
            shadow-sm w-11 h-11 flex items-center justify-center text-[#064e3b]
            hover:bg-white hover:scale-110 hover:shadow-lg transition-all duration-300 z-10"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
