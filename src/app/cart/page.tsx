"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, ArrowRight, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, totalItems } = useCart();

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-green-100 selection:text-green-900">
      <Header />

      <main className="pt-40 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-12 tracking-tight">
              Shopping Cart ({totalItems})
            </h1>

            {items.length === 0 ? (
              <div className="text-center py-24 border border-zinc-100 rounded-[2rem] bg-zinc-50/50">
                <div className="w-16 h-16 bg-green-50 text-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag size={24} />
                </div>
                <h2 className="text-2xl font-bold uppercase mb-3">Your Cart is Empty</h2>
                <p className="text-zinc-500 mb-8 max-w-sm mx-auto font-medium text-sm">
                  Looks like you haven't added any packs yet. Start nourishing your soil today!
                </p>
                <Link
                  href="/products"
                  className="inline-flex px-8 py-4 bg-zinc-900 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-green-800 transition"
                >
                  Shop Vermicompost
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Left Column: Cart Items */}
                <div className="lg:col-span-8 space-y-6">
                  <AnimatePresence initial={false}>
                    {items.map((item) => (
                      <motion.div
                        key={item.product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-6 p-6 border border-zinc-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition"
                      >
                        {/* Item Image */}
                        <div className="relative w-24 h-24 bg-zinc-50 rounded-xl overflow-hidden p-4 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-contain p-2"
                          />
                        </div>

                        {/* Item Information */}
                        <div className="flex-grow text-center sm:text-left space-y-1">
                          <Link 
                            href={`/products/${item.product.id}`}
                            className="font-bold text-lg text-zinc-900 hover:text-green-800 uppercase tracking-tight transition"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
                            ₹{item.product.price} / pack
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center border border-zinc-200 rounded-xl bg-zinc-50 overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-3 py-2 hover:bg-zinc-100 font-bold transition text-zinc-600"
                          >
                            -
                          </button>
                          <span className="px-4 font-bold text-xs text-zinc-800 select-none">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-3 py-2 hover:bg-zinc-100 font-bold transition text-zinc-600"
                          >
                            +
                          </button>
                        </div>

                        {/* Total Price & Delete Button */}
                        <div className="flex items-center gap-6 flex-shrink-0 justify-between w-full sm:w-auto">
                          <div className="text-right sm:text-left">
                            <span className="text-[10px] font-bold tracking-widest text-zinc-400 block uppercase">
                              Subtotal
                            </span>
                            <span className="font-bold text-zinc-900">
                              ₹{item.product.price * item.quantity}
                            </span>
                          </div>
                          
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="p-3 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Right Column: Order Summary */}
                <div className="lg:col-span-4 bg-zinc-50 border border-zinc-100 p-8 rounded-[2rem] space-y-8">
                  <h3 className="text-xl font-black uppercase text-zinc-900 tracking-tight">
                    Order Summary
                  </h3>

                  <div className="space-y-4 text-sm font-medium">
                    <div className="flex justify-between text-zinc-500">
                      <span>Subtotal</span>
                      <span className="text-zinc-900 font-bold">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-zinc-500">
                      <span>Shipping</span>
                      <span className="text-green-700 font-bold uppercase tracking-widest text-xs">Free</span>
                    </div>
                    <div className="flex justify-between text-zinc-500">
                      <span>Estimated Tax</span>
                      <span className="text-zinc-900 font-bold">₹0</span>
                    </div>
                    
                    <div className="pt-4 border-t border-zinc-200 flex justify-between text-base font-bold text-zinc-900">
                      <span>Total Amount</span>
                      <span className="text-lg text-green-950 font-black">₹{subtotal}</span>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    className="w-full inline-flex items-center justify-center gap-3 bg-zinc-900 text-white py-4 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-green-800 transition shadow-lg shadow-zinc-100"
                  >
                    Proceed to Checkout <ArrowRight size={16} />
                  </Link>

                  <div className="text-center">
                    <Link
                      href="/products"
                      className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
