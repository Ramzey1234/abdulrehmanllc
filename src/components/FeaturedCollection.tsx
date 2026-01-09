"use client";

import Image from "next/image";
import Link from "next/link";
import { type Product } from "./Products";

// A component that displays a featured grid of products, distinct from the main grid
export const FeaturedCollection = ({
  products,
  title,
  subtitle,
}: {
  products: Product[];
  title: string;
  subtitle: string;
}) => {
  return (
    <section className="py-24 bg-[#faf8f6] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#f2e6e1]/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container-page relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#2f2423] mb-4">
            {title}
          </h2>
          <div className="h-px w-24 bg-[#d8c4c0] mx-auto mb-6" />
          <p className="text-[#6a5854] text-lg font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              href={product.link}
              key={product.id}
              className="group block relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#f0e6e4] shadow-sm transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(122,75,71,0.1)]">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlay Text */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end h-1/2">
                  <p className="text-white/90 text-sm font-medium uppercase tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {product.category}
                  </p>
                  <div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <span className="text-white text-lg font-medium">
                      {product.name}
                    </span>
                    <span className="text-white/90 font-bold">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/shop"
            className="inline-block px-10 py-4 bg-[#7a4b47] text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#6a3f3b] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Shop All Collections
          </Link>
        </div>
      </div>
    </section>
  );
};
