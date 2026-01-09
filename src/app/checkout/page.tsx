"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function CheckoutPage() {
  type CartItem = {
    id: string;
    name: string;
    price: number;
    qty: number;
  };

  const [cart, setCart] = useState<CartItem[]>([]);

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postal: "",
    country: "",
    note: "",
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(stored);
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + tax + shipping;

  function handleInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  }

  const router = useRouter();

  function placeOrder() {
    if (!customer.name || !customer.email || !customer.address) {
      setShowError(true);
      return;
    }

    setShowSuccess(true);
    localStorage.removeItem("cart");
    setCart([]);

    setTimeout(() => {
      router.push("/");
    }, 800);
  }

  return (
    <div
      className="min-h-screen bg-no-repeat bg-bottom"
      style={{
        backgroundImage: `url('/assets/images/beige.webp')`,
        backgroundSize: "100%",
      }}
    >
      <main className="container-page section">
        <div className="mb-12">
          <p className="text-sm tracking-wider font-light text-[#7a4b47] mb-3">
            Checkout
          </p>
          <h1 className="text-5xl font-light leading-tight text-[#4a2e2b] mb-2">
            Complete Your Order
          </h1>
          <p className="text-lg font-light text-[#5e3a37]">
            Pay with Cash on Delivery
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-12">
            {/* Customer Information */}
            <div className="card p-8 bg-white/80 backdrop-blur-sm">
              <h2 className="text-2xl font-light text-[#4a2e2b] mb-8">
                Shipping Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="name"
                  value={customer.name}
                  onChange={handleInput}
                  placeholder="Full Name*"
                  className="input-field"
                />
                <input
                  name="email"
                  value={customer.email}
                  onChange={handleInput}
                  placeholder="Email Address*"
                  className="input-field"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <input
                  name="address"
                  value={customer.address}
                  onChange={handleInput}
                  placeholder="Street Address*"
                  className="input-field"
                />
                <input
                  name="city"
                  value={customer.city}
                  onChange={handleInput}
                  placeholder="City"
                  className="input-field"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <input
                  name="postal"
                  value={customer.postal}
                  onChange={handleInput}
                  placeholder="Postal Code"
                  className="input-field"
                />
                <input
                  name="country"
                  value={customer.country}
                  onChange={handleInput}
                  placeholder="Country"
                  className="input-field"
                />
              </div>

              <textarea
                name="note"
                value={customer.note}
                onChange={handleInput}
                placeholder="Order Notes (optional)"
                className="input-field mt-6 h-28"
              />
            </div>

            {/* Payment Method Section (COD ONLY) */}
            <div className="card p-8 bg-white/80 backdrop-blur-sm">
              <h2 className="text-2xl font-light text-[#4a2e2b] mb-3">
                Payment Method
              </h2>
              <p className="text-[#6d5b57] text-sm leading-relaxed">
                Cash on Delivery is selected for this order. You will pay when
                the package arrives at your doorstep.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE SUMMARY */}
          <div className="lg:col-span-1">
            <div className="card p-8 sticky top-20 bg-white/80 backdrop-blur-sm">
              <h2 className="text-2xl font-light text-[#4a2e2b] mb-8">
                Order Summary
              </h2>

              {cart.length === 0 ? (
                <p className="text-neutral-500 mb-8">Your cart is empty.</p>
              ) : (
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="text-[#5e3a37] font-light">
                        {item.name} x {item.qty}
                      </span>
                      <span className="text-[#4a2e2b] font-light">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-4 pb-8 border-b border-neutral-200">
                <div className="flex justify-between">
                  <span className="text-[#5e3a37] font-light">Subtotal</span>
                  <span className="text-[#4a2e2b] font-light">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#5e3a37] font-light">Tax (8%)</span>
                  <span className="text-[#4a2e2b] font-light">
                    ${tax.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#5e3a37] font-light">Shipping</span>
                  <span className="text-[#4a2e2b] font-light">
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center py-8">
                <span className="text-lg font-light text-[#4a2e2b]">Total</span>
                <span className="text-3xl font-light text-[#7a4b47]">
                  ${total.toFixed(2)}
                </span>
              </div>

              <button
                onClick={placeOrder}
                className="w-full px-7 py-3 rounded-full bg-[#7a4b47] text-[#f9ece9] font-medium shadow-md shadow-[#7a4b47]/30 hover:bg-[#673d3a] transition"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* Error Dialog */}
      <Dialog open={showError} onOpenChange={setShowError}>
        <DialogContent className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#eadfdb] shadow-xl p-8">
          <DialogHeader>
            <DialogTitle className="text-[#7a4b47] font-medium">
              Missing Information
            </DialogTitle>
            <DialogDescription className="text-[#4a2e2b] text-sm leading-relaxed mt-2">
              Please fill in all required fields to continue.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="bg-white/90 backdrop-blur-md rounded-2xl border border-[#eadfdb] shadow-xl p-8">
          <DialogHeader>
            <DialogTitle className="text-[#7a4b47] font-medium">
              Order Confirmed
            </DialogTitle>
            <DialogDescription className="text-[#4a2e2b] text-sm leading-relaxed mt-2">
              Your Cash on Delivery order has been placed. You will receive your
              package soon.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <style>{`
        .input-field {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          background: #fdf5f4;
          border: 1px solid #eadfdb;
          font-size: 15px;
          color: #4a2e2b;
          outline: none;
          transition: border 0.2s;
        }
        .input-field:focus {
          border-color: #7a4b47;
        }
      `}</style>
    </div>
  );
}
