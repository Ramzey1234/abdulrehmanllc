import Link from "next/link";

export function HeroBusiness() {
  return (
    <section className="relative w-full h-[60vh] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/banner.jpg')" }}
      />

      {/* Soft cosmetic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/40 via-emerald-100/25 to-transparent" />

      {/* Content */}
      <div className="relative w-full h-full flex items-center">
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 pl-10 md:pl-20 lg:pl-28 py-6 max-w-2xl">
          {/* Tagline */}
          <p className="text-sm tracking-wider font-light text-[#059669]">
            Beauty begins here
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#064e3b] drop-shadow-sm">
            Elevate your glow with luxury care.
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed font-light text-[#065f46] max-w-xl">
            Discover skincare crafted to nourish, hydrate, and leave your skin
            luminous. Pure ingredients, gentle formulas, effortless beauty.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-1">
            <Link
              href="/shop"
              className="px-7 py-3 rounded-full bg-[#059669] text-[#ecfdf5] font-medium shadow-md shadow-[#059669]/30 hover:bg-[#047857] transition"
            >
              Shop now
            </Link>

            <Link
              href="/about"
              className="px-7 py-3 rounded-full border border-[#059669] text-[#064e3b] bg-[#ecfdf5]/70 backdrop-blur-sm hover:bg-[#d1fae5] hover:text-[#047857] transition"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
