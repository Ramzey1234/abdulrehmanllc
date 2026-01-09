"use client";

import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { dynamicCategories, categoryLabels } from "@/components/Products";

const sortOptions = [
  { value: "default", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

export function FloatingSidebar() {
  const router = useRouter();
  const params = useSearchParams();

  const [sort, setSort] = useState<string>("default");
  const [category, setCategory] = useState<string>("all");

  useEffect(() => {
    const urlSort = params.get("sort") || "default";
    const urlCategory = params.get("category") || "all";
    setSort(urlSort);
    setCategory(urlCategory);
  }, [params]);

  const updateQuery = useCallback(
    (key: string, value: string) => {
      const page = params.get("page") || "1";
      const newSort = key === "sort" ? value : sort;
      const newCategory = key === "category" ? value : category;

      router.push(
        `/shop?page=${page}&sort=${newSort}&category=${newCategory}`,
        {
          scroll: false,
        }
      );
    },
    [params, sort, category, router]
  );

  const handleSortChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setSort(value);
      updateQuery("sort", value);
    },
    [updateQuery]
  );

  const handleCategoryChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setCategory(value);
      updateQuery("category", value);
    },
    [updateQuery]
  );

  const handleReset = useCallback(() => {
    setSort("default");
    setCategory("all");
    router.push("/shop?page=1&sort=default&category=all", { scroll: false });
  }, [router]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="hidden lg:block fixed left-10 top-[25vh] z-50 w-72"
    >
      <div className="w-full p-8 rounded-3xl backdrop-blur-md bg-white/40 border border-white/50 shadow-2xl hover:shadow-lg transition-all duration-300 hover:bg-white/50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-light text-[#3a2f2d] tracking-tight">
            Refine
          </h3>
          <button
            onClick={handleReset}
            className="text-xs font-medium text-[#7a4b47] hover:text-[#673d3a] transition hover:underline"
            title="Reset filters"
          >
            Reset
          </button>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-[#e8dcd7] via-[#e8dcd7] to-transparent mb-6" />
        <div className="mb-8">
          <label className="block mb-3 text-sm font-medium text-[#5b4b49]">
            Sort By
          </label>
          <select
            value={sort}
            onChange={handleSortChange}
            className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#e7d8d4] text-[#3a2f2d] text-sm font-light focus:outline-none focus:border-[#7a4b47] focus:ring-2 focus:ring-[#7a4b47]/20 transition"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-[#e8dcd7] via-[#e8dcd7] to-transparent mb-6" />
        <div>
          <label className="block mb-3 text-sm font-medium text-[#5b4b49]">
            Category
          </label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#e7d8d4] text-[#3a2f2d] text-sm font-light focus:outline-none focus:border-[#7a4b47] focus:ring-2 focus:ring-[#7a4b47]/20 transition cursor-pointer"
          >
            <option value="all">All Products</option>
            {dynamicCategories.map((cat) => (
              <option key={cat} value={cat}>
                {categoryLabels[cat] || cat}
              </option>
            ))}
          </select>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-[#e8dcd7] via-[#e8dcd7] to-transparent my-6" />
        <div className="space-y-2">
          <p className="text-xs text-[#6a5854] font-light leading-relaxed">
            {" "}
            Free shipping on orders over $50
          </p>
          <p className="text-xs text-[#6a5854] font-light leading-relaxed">
            {" "}
            30-day returns on all items
          </p>
          <p className="text-xs italic text-[#7a4b47] leading-relaxed mt-3 pt-3 border-t border-[#e8dcd7]">
            &quot;Find what feels like home.&quot;
          </p>
        </div>
      </div>
    </motion.div>
  );
}
