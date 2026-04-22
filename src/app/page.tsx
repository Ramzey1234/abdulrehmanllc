import dynamic from "next/dynamic";
import { HeroSlider } from "@/components/HeroSlider";
import { products } from "@/components/Products";

// Dynamic imports for below-the-fold content
const ProductGrid = dynamic(() => import("@/components/ProductGrid"), {
  loading: () => <div className="h-96" />, // Placeholder height to prevent layout shift
});
const RitualSection = dynamic(() =>
  import("@/components/FeatureRow").then((mod) => mod.RitualSection)
);
const Footer = dynamic(() =>
  import("@/components/CTASection").then((mod) => mod.Footer)
);
const AuraShowcase = dynamic(() =>
  import("@/components/AuraShowcase").then((mod) => mod.AuraShowcase)
);
const CatalogPromo = dynamic(() => import("@/components/CatalogPromoNew"));
const CategoryMarquee = dynamic(() =>
  import("@/components/CategoryMarquee").then((mod) => mod.CategoryMarquee)
);
const PromoBanner = dynamic(() =>
  import("@/components/PromoBanner").then((mod) => mod.PromoBanner)
);
const TestimonialSlider = dynamic(() =>
  import("@/components/TestimonialSlider").then((mod) => mod.TestimonialSlider)
);
const InstaFeed = dynamic(() =>
  import("@/components/InstaFeed").then((mod) => mod.InstaFeed)
);
const FeaturedCollection = dynamic(() =>
  import("@/components/FeaturedCollection").then(
    (mod) => mod.FeaturedCollection
  )
);
const JournalSection = dynamic(() =>
  import("@/components/JournalSection").then((mod) => mod.JournalSection)
);
const SensoryMosaic = dynamic(() =>
  import("@/components/SensoryMosaic").then((mod) => mod.SensoryMosaic)
);

export default function Page() {
  // Select specific products for the curated section (e.g., new aesthetic items)
  const curatedProducts = products
    .filter((p) => ["aesthetic", "home-decor"].includes(p.category))
    .slice(0, 3); // Pick 3 nice ones

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSlider />

      {/* NEW: Colorful Aesthetic Mosaic */}
      <SensoryMosaic />

      {/* Category Marquee - immediately adds movement */}
      <CategoryMarquee />

      {/* Intro Section - dense text/image combo */}
      <AuraShowcase />

      {/* First Promo Banner */}
      <PromoBanner
        title="Modern Luxury"
        subtitle="Discover the pinnacle of premium design. Hand-picked treasures that redefine your living space."
        ctaText="View Collection"
        variant="accent"
        href="/shop"
      />

      {/* NEW: Featured Collection - "Congestion" point 1 */}
      <FeaturedCollection
        title="Fresh Arrivals"
        subtitle="Explore our latest additions. Inspired by the elegance of timeless design."
        products={curatedProducts}
      />

      {/* Product Grid - "Congested" / Rich */}
      <ProductGrid />

      {/* Second Promo Banner - Dark contrast */}
      <PromoBanner
        title="Complimentary Shipping on Orders Over $150"
        subtitle="Experience luxury delivered to your doorstep. Worldwide shipping available."
        ctaText="Shop Details"
        variant="dark"
      />

      {/* Feature / Ritual Section */}
      <RitualSection />

      {/* Catalog Promo - Large visual block */}
      <CatalogPromo />

      {/* NEW: Journal Section - "Content" point 2 */}
      <JournalSection />

      {/* Testimonials - Social Proof */}
      <TestimonialSlider />

      {/* Instagram Feed - Visual richness */}
      <InstaFeed />

      {/* Footer */}
      <Footer />
    </div>
  );
}
