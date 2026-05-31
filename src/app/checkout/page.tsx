"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zip.trim()) {
      newErrors.zip = "ZIP code is required";
    } else if (!/^\d{5,6}$/.test(formData.zip)) {
      newErrors.zip = "ZIP code must be 5 or 6 digits";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,12}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    // Success Action
    toast.success("Processing your order...");
    
    // Simulate slight delay for processing
    setTimeout(() => {
      clearCart();
      router.push("/checkout/success");
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between">
        <Header />
        <main className="pt-40 pb-32 flex-grow flex flex-col items-center justify-center">
          <div className="text-center max-w-md px-6">
            <h1 className="text-4xl font-black uppercase mb-4">No Items in Cart</h1>
            <p className="text-zinc-500 mb-8 font-medium">Please add items to your shopping cart before checking out.</p>
            <Link href="/products" className="inline-flex px-8 py-4 bg-zinc-900 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-green-800 transition">
              View Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-green-100 selection:text-green-900">
      <Header />

      <main className="pt-40 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Header / Back to Cart */}
            <Link 
              href="/cart" 
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-green-800 transition mb-12"
            >
              <ArrowLeft size={16} /> Back to cart
            </Link>

            <h1 className="text-4xl md:text-5xl font-black uppercase mb-12 tracking-tight">
              Checkout
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Checkout Form */}
              <div className="lg:col-span-7">
                <form onSubmit={handlePlaceOrder} className="space-y-10">
                  
                  {/* Shipping Address Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-black uppercase text-zinc-900 tracking-tight pb-3 border-b">
                      Shipping Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full bg-zinc-50 border-b-2 py-3 px-4 rounded-lg focus:outline-none focus:bg-white transition text-sm ${
                            errors.name ? "border-red-500 focus:border-red-500" : "border-zinc-200 focus:border-green-800"
                          }`}
                          placeholder="e.g. John Doe"
                        />
                        {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full bg-zinc-50 border-b-2 py-3 px-4 rounded-lg focus:outline-none focus:bg-white transition text-sm ${
                            errors.email ? "border-red-500 focus:border-red-500" : "border-zinc-200 focus:border-green-800"
                          }`}
                          placeholder="e.g. john@example.com"
                        />
                        {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Address line</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className={`w-full bg-zinc-50 border-b-2 py-3 px-4 rounded-lg focus:outline-none focus:bg-white transition text-sm ${
                          errors.address ? "border-red-500 focus:border-red-500" : "border-zinc-200 focus:border-green-800"
                        }`}
                        placeholder="House No, Street name, Locality"
                      />
                      {errors.address && <p className="text-xs text-red-500 font-medium">{errors.address}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={`w-full bg-zinc-50 border-b-2 py-3 px-4 rounded-lg focus:outline-none focus:bg-white transition text-sm ${
                            errors.city ? "border-red-500 focus:border-red-500" : "border-zinc-200 focus:border-green-800"
                          }`}
                          placeholder="e.g. Mumbai"
                        />
                        {errors.city && <p className="text-xs text-red-500 font-medium">{errors.city}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className={`w-full bg-zinc-50 border-b-2 py-3 px-4 rounded-lg focus:outline-none focus:bg-white transition text-sm ${
                            errors.state ? "border-red-500 focus:border-red-500" : "border-zinc-200 focus:border-green-800"
                          }`}
                          placeholder="e.g. Maharashtra"
                        />
                        {errors.state && <p className="text-xs text-red-500 font-medium">{errors.state}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">ZIP Code</label>
                        <input
                          type="text"
                          name="zip"
                          value={formData.zip}
                          onChange={handleInputChange}
                          className={`w-full bg-zinc-50 border-b-2 py-3 px-4 rounded-lg focus:outline-none focus:bg-white transition text-sm ${
                            errors.zip ? "border-red-500 focus:border-red-500" : "border-zinc-200 focus:border-green-800"
                          }`}
                          placeholder="e.g. 400001"
                        />
                        {errors.zip && <p className="text-xs text-red-500 font-medium">{errors.zip}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Phone number</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full bg-zinc-50 border-b-2 py-3 px-4 rounded-lg focus:outline-none focus:bg-white transition text-sm ${
                          errors.phone ? "border-red-500 focus:border-red-500" : "border-zinc-200 focus:border-green-800"
                        }`}
                        placeholder="e.g. 9876543210"
                      />
                      {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Payment Info Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-black uppercase text-zinc-900 tracking-tight pb-3 border-b">
                      Payment Method
                    </h3>
                    
                    <div className="border border-green-800 bg-green-50/20 p-6 rounded-2xl flex items-center gap-4">
                      <div className="p-3 bg-green-50 text-green-800 rounded-xl">
                        <CreditCard size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-900 mb-1">
                          Cash on Delivery (COD) / Pay on Delivery
                        </h4>
                        <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                          Pay directly with cash or UPI at the time of delivery. Safe and hassle-free.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 border-t border-zinc-100">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 bg-zinc-900 text-white py-5 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-green-800 transition shadow-lg shadow-zinc-100"
                    >
                      <ShieldCheck size={18} /> Place Order (₹{subtotal})
                    </button>
                  </div>

                </form>
              </div>

              {/* Right Column: Checkout Summary */}
              <div className="lg:col-span-5 bg-zinc-50 border border-zinc-100 p-8 rounded-[2rem] space-y-8">
                <h3 className="text-xl font-black uppercase text-zinc-900 tracking-tight">
                  Your Order
                </h3>

                {/* Cart Items List */}
                <div className="divide-y divide-zinc-200 max-h-80 overflow-y-auto pr-2 space-y-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-4 pt-4 first:pt-0">
                      <div className="relative w-12 h-12 bg-white rounded-lg border border-zinc-100 overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-sm text-zinc-900 uppercase tracking-tight line-clamp-1">
                          {item.product.name}
                        </h4>
                        <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="font-bold text-sm text-zinc-900">
                          ₹{item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="pt-6 border-t border-zinc-200 space-y-4 text-sm font-medium">
                  <div className="flex justify-between text-zinc-500">
                    <span>Subtotal</span>
                    <span className="text-zinc-900 font-bold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-zinc-500">
                    <span>Shipping</span>
                    <span className="text-green-700 font-bold uppercase tracking-widest text-xs">Free</span>
                  </div>
                  <div className="flex justify-between text-zinc-500">
                    <span>Tax</span>
                    <span className="text-zinc-900 font-bold">₹0</span>
                  </div>
                  <div className="pt-4 border-t border-zinc-200 flex justify-between text-base font-bold text-zinc-900">
                    <span>Total Amount</span>
                    <span className="text-lg text-green-950 font-black">₹{subtotal}</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
