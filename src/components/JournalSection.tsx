"use client";

import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "The Art of Slow Living",
    excerpt:
      "Why embracing a slower pace can transform your daily rituals and mental clarity.",
    date: "Dec 10, 2025",
    image: "/assets/images/bg.jpg", // Reusing existing beautiful image
    link: "#",
  },
  {
    id: 2,
    title: "Curating a Minimalist Space",
    excerpt:
      "Tips on decluttering not just your room, but your mind, through intentional design.",
    date: "Dec 05, 2025",
    image: "/assets/images/ratan.avif",
    link: "#",
  },
  {
    id: 3,
    title: "Self-Care Sunday Routine",
    excerpt: "Our favorite products for a restorative weekend reset.",
    date: "Nov 28, 2025",
    image: "/assets/images/mist.jpg",
    link: "#",
  },
];

export const JournalSection = () => {
  return (
    <section className="py-24 bg-white border-t border-[#f0e6e4]">
      <div className="container-page">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#a38e8a] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
              The Journal
            </span>
            <h2 className="text-4xl font-light text-[#2f2423]">
              Stories & Rituals
            </h2>
          </div>
          <Link
            href="#"
            className="hidden md:block text-[#7a4b47] hover:text-[#5b3633] border-b border-[#7a4b47]/30 hover:border-[#7a4b47] pb-1 transition-colors text-sm font-medium uppercase tracking-wide"
          >
            Read All Stories
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {articles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-[#f5f5f5] mb-6">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="space-y-3">
                <span className="text-xs text-[#a38e8a] font-medium tracking-wider">
                  {article.date}
                </span>
                <h3 className="text-xl font-medium text-[#2f2423] group-hover:text-[#7a4b47] transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-[#6a5854] text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="inline-block mt-2 text-xs font-bold uppercase tracking-wide text-[#7a4b47] border-b border-transparent group-hover:border-[#7a4b47] transition-all">
                  Read More
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden mt-10 text-center">
          <Link
            href="#"
            className="text-[#7a4b47] border-b border-[#7a4b47]/30 pb-1 text-sm font-bold uppercase"
          >
            Read All Stories
          </Link>
        </div>
      </div>
    </section>
  );
};
