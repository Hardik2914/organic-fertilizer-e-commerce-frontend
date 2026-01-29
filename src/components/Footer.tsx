import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Facebook, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Brand & About */}
            <div className="md:col-span-4">
              <Link href="/" className="inline-block mb-10 group">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/303dbf0b-474d-4bc9-acc6-ea926004f8ee/WhatsApp-Image-2026-01-29-at-7.09.22-PM-1769709098802.jpeg?width=800&height=800&resize=contain"
                  alt="Erganic Farms Logo"
                  width={200}
                  height={150}
                  className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-10 max-w-sm">
              Erganic Farms is a leading manufacturer of organic fertilisers, specialising in high-grade vermicompost. We combine natural processes with modern manufacturing standards to support healthier soils and higher yields.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center hover:bg-green-800 hover:text-white hover:border-green-800 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Shop All", "Our Story", "The Process", "Sustainability", "Journal"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm font-bold text-zinc-900 hover:text-green-700 transition-colors flex items-center group">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8">Support</h4>
            <ul className="space-y-4">
              {["Help Center", "Shipping", "Returns", "Contact Us", "Wholesale"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm font-bold text-zinc-900 hover:text-green-700 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8">Newsletter</h4>
            <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
              Join our community for the latest in organic farming and exclusive offers.
            </p>
            <form className="relative group">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-zinc-50 border-b-2 border-zinc-100 py-4 px-0 focus:outline-none focus:border-green-800 transition-all text-[10px] font-bold tracking-widest uppercase placeholder:text-zinc-400"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-4 text-zinc-400 hover:text-green-800 transition-colors"
              >
                <ArrowUpRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-16 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            © 2026 ERGANIC FARMS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link key={item} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-green-800 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
