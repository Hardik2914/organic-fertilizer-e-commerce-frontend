"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Sprout, ArrowRight } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-green-100 selection:text-green-900">
      <Header />

      <main className="pt-40 pb-32 flex-grow flex flex-col items-center justify-center min-h-[75vh]">
        <div className="container mx-auto px-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl w-full text-center border border-zinc-100 bg-zinc-50/50 p-12 md:p-16 rounded-[3rem] shadow-sm"
          >
            {/* Success icon animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              className="w-20 h-20 bg-green-50 text-green-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"
            >
              <CheckCircle size={40} className="stroke-[1.5]" />
            </motion.div>

            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-green-700 block mb-3">
              Order Confirmed
            </span>
            <h1 className="text-3xl md:text-4xl font-black uppercase text-zinc-900 tracking-tight mb-6">
              Thank You for Your Order!
            </h1>
            
            <p className="text-zinc-500 font-medium text-sm leading-relaxed mb-10 max-w-sm mx-auto">
              Your order has been successfully placed. We are preparing your premium vermicompost pack and will dispatch it shortly. A confirmation has been sent to your email.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-green-800 transition"
              >
                Shop More Packs
              </Link>
              
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-zinc-200 bg-white text-zinc-800 px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-zinc-50 transition"
              >
                Back to Home <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
