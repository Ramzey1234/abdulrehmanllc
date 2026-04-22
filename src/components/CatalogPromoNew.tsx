import Image from "next/image";
import Link from "next/link";

const mosaic = [
  {
    src: "/assets/images/banner.jpg",
    alt: "Ceramic vessel on linen, ritual setup",
  },
  { src: "/assets/images/perfume.png", alt: "Signature perfume bottle" },
  { src: "/assets/images/linen.webp", alt: "Soft linen textures" },
  { src: "/assets/images/soap.webp", alt: "Handcrafted soap" },
  { src: "/assets/images/serum.webp", alt: "Nourishing face serum" },
  { src: "/assets/images/bottle.jpg", alt: "Apothecary bottle" },
];

export default function CatalogPromoNew() {
  return (
    <section className="w-full">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#e5e5e5_0%,transparent_35%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="p-6 lg:p-8 rounded-3xl backdrop-blur-md bg-white/5 border border-white/8 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#c5a059]/10 text-[#c5a059]">
                  New arrivals
                </span>
                <p className="text-xs text-[#404040] font-light">
                  Curated seasonal edit
                </p>
              </div>

              <h3 className="mt-4 text-3xl md:text-4xl font-semibold text-[#171717] leading-tight">
                Handcrafted essentials, curated rituals
              </h3>
              <p className="mt-3 text-sm text-[#404040] font-light max-w-xl">
                Explore the full collection of luxury goods — premium-selected
                blends, tactile textiles, and packaging designed to last.
                Small-batch, quality-focused, and made for daily elegance.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  aria-label="View full collection"
                  className="inline-flex items-center px-5 py-3 rounded-xl bg-[#c5a059] text-white text-sm font-medium shadow-sm hover:bg-[#d4af37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]/30 transition"
                >
                  View Full Collection
                </Link>

                <Link
                  href="/about"
                  aria-label="Learn about our process"
                  className="inline-flex items-center px-4 py-3 rounded-xl bg-transparent text-[#171717] text-sm font-medium border border-white/8 hover:bg-white/6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]/20 transition"
                >
                  Learn Our Process
                </Link>
              </div>

              <ul className="mt-6 space-y-2 text-xs text-[#404040] font-light">
                <li>Free shipping on orders over $50</li>
                <li>Premium quality materials</li>
                <li>30-day returns</li>
              </ul>
            </div>

            <div className="w-full">
              <div className="grid grid-cols-3 grid-rows-3 gap-3 lg:gap-4">
                {mosaic.map((item, i) => {
                  const isBig = i === 0; // highlight the first tile
                  return (
                    <div
                      key={item.src}
                      className={`${
                        isBig
                          ? "col-span-2 row-span-2 lg:aspect-[16/12]"
                          : "aspect-[4/5]"
                      } rounded-2xl overflow-hidden shadow-sm transition-transform duration-300 ease-out hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none`}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={isBig ? 900 : 420}
                        height={isBig ? 720 : 525}
                        className="w-full h-full object-cover block"
                        sizes={
                          isBig
                            ? "(max-width: 1024px) 70vw, 40vw"
                            : "(max-width: 1024px) 30vw, 20vw"
                        }
                        priority={false}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
