"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Shop", href: "/products" },
    { name: "Our Story", href: "/about" },
    { name: "Process", href: "/#process" },
    { name: "Sustainability", href: "/#sustainability" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400/90 backdrop-blur-xl py-2 shadow-lg"
          : "bg-gradient-to-r from-orange-500/70 via-amber-400/60 to-yellow-300/50 py-4"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Left Links */}
        <div className="flex-1 hidden md:flex items-center gap-10">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-[10px] font-bold tracking-[0.25em] uppercase text-zinc-900 overflow-hidden"
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                {link.name}
              </span>
              <span className="absolute top-0 left-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-green-700">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 group">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/303dbf0b-474d-4bc9-acc6-ea926004f8ee/WhatsApp-Image-2026-01-29-at-7.09.22-PM-1769709098802.jpeg?width=800&height=800&resize=contain"
              alt="Erganic Farms Logo"
              width={200}
              height={150}
              priority
              className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </motion.div>
        </Link>

        {/* Right Links & Icons */}
        <div className="flex-1 flex items-center justify-end gap-8">
          <div className="hidden md:flex items-center gap-10 mr-10">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-[10px] font-bold tracking-[0.25em] uppercase text-zinc-900 overflow-hidden"
              >
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  {link.name}
                </span>
                <span className="absolute top-0 left-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-green-700">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-zinc-50 rounded-full transition-colors">
              <Search size={18} />
            </button>
            <button className="p-2 hover:bg-zinc-50 rounded-full transition-colors relative">
              <ShoppingBag size={18} />
              <span className="absolute top-1 right-1 bg-green-700 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold border-2 border-white">
                0
              </span>
            </button>
            <button
              className="md:hidden p-2 hover:bg-zinc-50 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-zinc-100 md:hidden shadow-xl"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-black uppercase hover:text-green-700 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
