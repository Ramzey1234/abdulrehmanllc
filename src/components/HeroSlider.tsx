"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const heroSlides = [
  {
    id: 1,
    image: "/assets/images/hero.jpg", // Fallback/Default
    title: "Elevate your glow.",
    subtitle: "Luxury skincare for the modern soul.",
    color: "text-[#4a2e2b]",
    bgOverlay: "from-rose-200/40 via-rose-100/25",
  },
  {
    id: 2,
    image: "/assets/images/beige.webp", // Placeholder, ideally replace with real images
    title: "Timeless Aesthetics.",
    subtitle: "Curated home decor that speaks volumes.",
    color: "text-[#2b3a4a]",
    bgOverlay: "from-blue-100/40 via-slate-100/25",
  },
  {
    id: 3,
    image: "/assets/images/hero.jpg", // Reusing for demo
    title: "Pure Essence.",
    subtitle: "Fragrances that define your presence.",
    color: "text-[#3a4a2b]",
    bgOverlay: "from-green-100/40 via-emerald-100/25",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-neutral-100">
      <div ref={sliderRef} className="keen-slider h-full w-full">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={cn(
              "keen-slider__slide relative w-full h-full flex items-center justify-center",
              "transition-opacity duration-700"
            )}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={idx === 0}
              className="object-cover"
            />
            {/* Overlay */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-r to-transparent z-10",
                slide.bgOverlay
              )}
            />
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] z-10" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
              <span
                className={cn(
                  "uppercase tracking-[0.2em] text-sm font-medium opacity-0 translate-y-4 transition-all duration-700 delay-300",
                  currentSlide === idx && "opacity-100 translate-y-0",
                  slide.color
                )}
              >
                New Collection
              </span>
              <h1
                className={cn(
                  "text-5xl md:text-7xl lg:text-8xl font-light tracking-tight opacity-0 translate-y-8 transition-all duration-700 delay-500",
                  currentSlide === idx && "opacity-100 translate-y-0",
                  slide.color
                )}
              >
                {slide.title}
              </h1>
              <p
                className={cn(
                  "text-lg md:text-2xl font-light max-w-xl opacity-0 translate-y-4 transition-all duration-700 delay-700",
                  currentSlide === idx && "opacity-100 translate-y-0",
                  slide.color
                )}
              >
                {slide.subtitle}
              </p>
              <div
                className={cn(
                  "mt-4 opacity-0 scale-95 transition-all duration-700 delay-1000",
                  currentSlide === idx && "opacity-100 scale-100"
                )}
              >
                <Link
                  href="/shop"
                  className="px-8 py-4 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      {loaded && instanceRef.current && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={cn(
                  "w-3 h-3 rounded-full border border-neutral-800/50 transition-all duration-300",
                  currentSlide === idx
                    ? "bg-neutral-800 w-8"
                    : "bg-transparent hover:bg-neutral-800/20"
                )}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
