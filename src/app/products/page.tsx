"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Products() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />

      <main className="pt-40 pb-32">
        <div className="container mx-auto px-6">

          {/* OUR PRODUCTS SECTION */}
          <div className="mb-20 text-center">
            <p className="uppercase tracking-[0.4em] text-green-700 text-xs mb-4">
              Erganic Farms
            </p>
            <h1 className="text-5xl md:text-7xl font-black uppercase">
              Our Products
            </h1>
          </div>

          {/* Responsive Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
