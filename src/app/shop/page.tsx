import { Suspense } from "react";
import { ShopPageContent } from "./ShopPageContent";
import { Footer } from "@/components/CTASection";

export default function ShopPage() {
  return (
    <div className="bg-no-repeat bg-bottom">
      <Suspense>
        <ShopPageContent />
        <Footer />
      </Suspense>
    </div>
  );
}

