import { Suspense } from "react";
import { ShopPageContent } from "./ShopPageContent";
import { Footer } from "@/components/CTASection";

export default function ShopPage() {
  return (
    <div
      className="bg-no-repeat bg-bottom"
      style={{
        backgroundImage: `url('/assets/images/beige.webp')`,
        backgroundSize: "100%",
      }}
    >
      <Suspense>
        <ShopPageContent />
        <Footer />
      </Suspense>
    </div>
  );
}
