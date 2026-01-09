"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import React, { useMemo, useCallback } from "react";
import { products as productsData } from "@/components/Products";
import { FloatingSidebar } from "@/components/FloatingSidebar";
import Link from "next/link";
import Image from "next/image";

const PAGE_SIZE = 12;

function fetchProducts(page: number, sort: string, category: string) {
  let list = [...productsData];

  if (category !== "all") {
    list = list.filter((p) => p.category === category);
  }

  if (sort === "price-low") {
    list.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-high") {
    list.sort((a, b) => b.price - a.price);
  }

  const total = list.length;
  const start = (page - 1) * PAGE_SIZE;
  const products = list.slice(start, start + PAGE_SIZE);

  return { products, total };
}

export function ShopPageContent() {
  const params = useSearchParams();
  const router = useRouter();

  const page = Number(params.get("page")) || 1;
  const sort = params.get("sort") || "default";
  const category = params.get("category") || "all";

  const [data, setData] = React.useState<{
    products: typeof productsData;
    total: number;
  } | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  // Memoize data to prevent unnecessary recalculations
  const memoizedData = useMemo(() => {
    return fetchProducts(page, sort, category);
  }, [page, sort, category]);

  React.useEffect(() => {
    setIsLoading(true);
    // Simulate minimal delay for smooth UX
    const timer = setTimeout(() => {
      setData(memoizedData);
      setIsLoading(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [memoizedData]);

  const totalPages = data ? Math.ceil(data.total / PAGE_SIZE) : 1;

  const changePage = useCallback(
    (p: number) => {
      router.push(`/shop?page=${p}&sort=${sort}&category=${category}`);
    },
    [sort, category, router]
  );

  const handleSortChange = useCallback(
    (newSort: string) => {
      router.push(`/shop?page=1&sort=${newSort}&category=${category}`);
    },
    [category, router] // include sort
  );

  return (
    <section className="relative bg-gradient-to-b from-[#fffbfb] via-[#fdf4f2] to-[#f7e8e6] overflow-hidden">
      <FloatingSidebar />

      {/* Premium vignette - enhanced */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,75,71,0.04),transparent_60%)] opacity-100" />

      {/* Luxury texture layer - enhanced */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(122, 75, 71, 0.1), transparent 50%)",
        }}
      />

      {/* Premium decorative blob elements - enriched */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#fcded6] to-[#f0c4bb] rounded-full blur-3xl opacity-30" />
      <div className="pointer-events-none absolute bottom-0 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-[#e8cfc8] to-[#e6bab4] rounded-full blur-3xl opacity-25" />

      {/* Hero Section - Enhanced */}
      <div
        className="w-full h-[50vh] md:h-[60vh] bg-cover bg-center relative flex justify-center items-center text-center rounded-b-[40px] overflow-hidden shadow-2xl"
        style={{ backgroundImage: "url('/assets/images/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5e7e2]/35 via-[#f0dcd8]/50 to-[#ebe5e0]/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-4xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5"
          >
            <p className="text-xs md:text-sm tracking-[0.15em] font-light text-[#7a4b47] uppercase">
              ✨ Premium Collection
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="text-6xl md:text-8xl font-light text-[#2f2423] leading-tight tracking-tight mb-6"
          >
            Curated Essentials
          </motion.h1>

          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d8c4c0]" />
            <span className="text-[#7a4b47]/40 text-lg">•</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d8c4c0]" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-[#5b4b49] leading-relaxed font-light max-w-2xl mx-auto"
          >
            Thoughtfully selected rituals designed to elevate your everyday
            moments with premium craftsmanship and timeless elegance.
          </motion.p>
        </div>
      </div>

      {/* Premium divider section */}
      <div className="w-full flex justify-center mt-32 mb-28">
        <div className="relative flex items-center gap-5 w-56">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#d8c4c0] to-transparent opacity-60" />
          <span className="text-[#7a4b47]/50 font-light text-lg tracking-wider">
            ✨
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#d8c4c0] to-transparent opacity-60" />
        </div>
      </div>

      <div className="container-page relative px-4 md:px-8 max-w-7xl mx-auto">
        {/* Premium atmospheric glow */}
        <div className="absolute -inset-x-20 top-0 h-80 bg-[radial-gradient(ellipse_150%_100%_at_center_top,rgba(245,228,223,0.4),transparent)] opacity-50 pointer-events-none blur-3xl" />

        <div className="relative z-10 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-5"
          >
            <p className="text-xs tracking-[0.15em] font-light text-[#7a4b47]/80 uppercase">
              Discover
            </p>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-light text-[#2f2423] mb-8 tracking-tight text-center">
            The Collection
          </h2>

          <p className="text-center text-[#6a5854] max-w-3xl mx-auto mb-16 text-lg font-light leading-relaxed">
            Meticulously curated essentials designed to elevate your daily
            rituals with premium craftsmanship and timeless elegance.
          </p>

          {/* Sort Controls - Enhanced */}
          <div className="flex justify-center gap-4 flex-wrap mb-12">
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => handleSortChange("default")}
              className={`px-6 py-2.5 rounded-full text-sm font-light transition duration-300 ${
                sort === "default"
                  ? "bg-gradient-to-r from-[#c08079] to-[#a35d55] text-white shadow-lg shadow-[#c08079]/40"
                  : "bg-white text-[#3f2f2d] border border-[#f0e6e4] hover:border-[#dcbdb9] hover:shadow-md"
              }`}
            >
              Featured
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => handleSortChange("price-low")}
              className={`px-6 py-2.5 rounded-full text-sm font-light transition duration-300 ${
                sort === "price-low"
                  ? "bg-gradient-to-r from-[#c08079] to-[#a35d55] text-white shadow-lg shadow-[#c08079]/40"
                  : "bg-white text-[#3f2f2d] border border-[#f0e6e4] hover:border-[#dcbdb9] hover:shadow-md"
              }`}
            >
              Price: Low → High
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => handleSortChange("price-high")}
              className={`px-6 py-2.5 rounded-full text-sm font-light transition duration-300 ${
                sort === "price-high"
                  ? "bg-gradient-to-r from-[#c08079] to-[#a35d55] text-white shadow-lg shadow-[#c08079]/40"
                  : "bg-white text-[#3f2f2d] border border-[#f0e6e4] hover:border-[#dcbdb9] hover:shadow-md"
              }`}
            >
              Price: High → Low
            </motion.button>
          </div>
        </div>

        {/* Product Grid */}
        {isLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <div
                key={i}
                className="rounded-[24px] overflow-hidden bg-white shadow-sm border border-[#e6d9d5] animate-pulse"
              >
                <div className="w-full aspect-[3/4] bg-neutral-200" />
                <div className="p-5 space-y-3">
                  <div className="h-3 bg-neutral-200 rounded-full w-1/3" />
                  <div className="h-5 bg-neutral-200 rounded-full w-3/4" />
                  <div className="h-4 bg-neutral-200 rounded-full w-1/2" />
                  <div className="pt-2 flex justify-between">
                    <div className="h-6 bg-neutral-200 rounded-full w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data?.products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative flex flex-col rounded-[24px] bg-white border border-[#f2e8e6] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(192,128,121,0.1)] hover:border-[#debcb8] transition-all duration-500 overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#faf5f4]">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 flex gap-2 justify-center pb-6 bg-gradient-to-t from-black/40 to-transparent">
                    <button className="flex-1 bg-white text-[#3f2f2d] hover:bg-[#f9ece9] py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-colors flex items-center justify-center gap-2">
                      <span>Add to Cart</span>
                    </button>
                    <button
                      className="h-10 w-10 bg-white/90 hover:bg-white text-[#3f2f2d] rounded-full flex items-center justify-center shadow-lg transition-colors"
                      aria-label="Quick View"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  </div>

                  {/* Badges */}
                  {i < 3 && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-[#f0e6e4] shadow-sm">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#7a4b47]">
                        Best Seller
                      </span>
                    </div>
                  )}
                </div>

                {/* Details Section */}
                <div className="flex flex-col flex-grow p-5">
                  <div className="mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#a38e8a]">
                      {p.category.replace("-", " ")}
                    </span>
                  </div>

                  <Link
                    href={`/product/${p.id}`}
                    className="block group-hover:text-[#a35d55] transition-colors duration-300"
                  >
                    <h3 className="text-base font-medium text-[#2f2423] leading-snug line-clamp-2 mb-2 min-h-[2.5em]">
                      {p.name}
                    </h3>
                  </Link>

                  {/* Rating Display - Dynamic */}
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-3 h-3 ${
                          star <= Math.round(p.rating)
                            ? "text-[#dcbdb9]"
                            : "text-gray-200"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <span className="text-xs text-[#a38e8a] ml-1">
                      ({p.reviews})
                    </span>
                  </div>

                  <p className="text-sm text-[#715f5b] line-clamp-2 mb-4 leading-relaxed opacity-80">
                    {p.blurb}
                  </p>

                  <div className="mt-auto pt-4 border-t border-[#f2e8e6] flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-[#a38e8a] uppercase font-medium">
                        Price
                      </span>
                      <span className="text-lg font-semibold text-[#3c302e]">
                        ${p.price.toFixed(2)}
                      </span>
                    </div>
                    <Link
                      href={`/product/${p.id}`}
                      className="text-xs font-bold uppercase tracking-wider text-[#a35d55] hover:text-[#7a4b47] transition-colors border-b border-[#a35d55]/30 hover:border-[#7a4b47] pb-0.5"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Content Features Section */}
        <div className="mt-32 grid md:grid-cols-3 gap-8 py-20 px-6 bg-gradient-to-br from-[#f9ece9]/30 to-[#f0dcd8]/20 rounded-3xl border border-[#e8dcd7]/40">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-full bg-[#f9ece9]">
                <span className="text-2xl">✨</span>
              </div>
            </div>
            <h4 className="text-lg font-light text-[#2f2423] mb-3">
              Handpicked
            </h4>
            <p className="text-sm text-[#6a5854] font-light leading-relaxed">
              Every item thoughtfully curated for quality and design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-full bg-[#f9ece9]">
                <span className="text-2xl">🌿</span>
              </div>
            </div>
            <h4 className="text-lg font-light text-[#2f2423] mb-3">
              Sustainable
            </h4>
            <p className="text-sm text-[#6a5854] font-light leading-relaxed">
              Ethically sourced with commitment to the environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-full bg-[#f9ece9]">
                <span className="text-2xl">💝</span>
              </div>
            </div>
            <h4 className="text-lg font-light text-[#2f2423] mb-3">
              Beautifully Packaged
            </h4>
            <p className="text-sm text-[#6a5854] font-light leading-relaxed">
              Premium presentation for an unforgettable unboxing.
            </p>
          </motion.div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-24 flex-wrap">
          {/* Previous Button */}
          <button
            onClick={() => changePage(Math.max(1, page - 1))}
            disabled={page === 1}
            className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
              page === 1
                ? "bg-neutral-100 text-neutral-400 border-neutral-200 cursor-not-allowed"
                : "bg-white text-[#3f2f2d] border-[#eadfdb] hover:bg-[#f0d7d2]"
            }`}
          >
            ← Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }).map((_, i) => {
            const num = i + 1;
            const active = num === page;
            const isVisible =
              Math.abs(num - page) <= 1 || num === 1 || num === totalPages;

            if (!isVisible) return null;
            if (Math.abs(num - page) === 2) {
              return (
                <span key={`dots-${i}`} className="px-2 py-2 text-[#6a5854]">
                  ...
                </span>
              );
            }

            return (
              <button
                key={num}
                onClick={() => changePage(num)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
                  active
                    ? "bg-[#7a4b47] text-white border-[#7a4b47] shadow-md shadow-[#7a4b47]/30"
                    : "bg-white text-[#3f2f2d] border-[#eadfdb] hover:bg-[#f0d7d2]"
                }`}
              >
                {num}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={() => changePage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
              page === totalPages
                ? "bg-neutral-100 text-neutral-400 border-neutral-200 cursor-not-allowed"
                : "bg-white text-[#3f2f2d] border-[#eadfdb] hover:bg-[#f0d7d2]"
            }`}
          >
            Next →
          </button>
        </div>

        {/* Results Info */}
        <p className="text-center text-[#6a5854] text-sm mt-12 font-light tracking-wide">
          Showing {(page - 1) * PAGE_SIZE + 1} to{" "}
          {Math.min(page * PAGE_SIZE, data?.total || 0)} of {data?.total || 0}{" "}
          curated pieces
        </p>

        {/* Premium divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d8c4c0] to-transparent mx-auto mt-8 mb-8" />

        {/* Premium footer note */}
        <div className="text-center mt-6 mb-20">
          <p className="text-xs text-[#7a4b47]/70 font-light tracking-[0.2em] uppercase">
            Crafted with intention • Delivered with care
          </p>
        </div>
      </div>
    </section>
  );
}
