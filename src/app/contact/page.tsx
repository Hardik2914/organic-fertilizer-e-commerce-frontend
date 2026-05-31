"use client";

import React, { useState, useEffect, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

function ContactForm() {
  const searchParams = useSearchParams();
  const productName = searchParams.get("product");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (productName) {
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry regarding ${productName}`,
        message: `Hello Erganic Farms team, I am interested in inquiring about the ${productName}. Please share details regarding delivery timelines, bulk pricing options, and shipping details. Thank you!`,
      }));
    }
  }, [productName]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    toast.success("Sending your message...");

    // Mock API request
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your message has been sent successfully. We will get back to you shortly.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full bg-white border border-zinc-200 focus:border-green-800 py-3 px-4 rounded-lg focus:outline-none transition text-sm"
            placeholder="Your Name"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full bg-white border border-zinc-200 focus:border-green-800 py-3 px-4 rounded-lg focus:outline-none transition text-sm"
            placeholder="Your Email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full bg-white border border-zinc-200 focus:border-green-800 py-3 px-4 rounded-lg focus:outline-none transition text-sm"
          placeholder="How can we help?"
        />
      </div>

      <div className="space-y-2">
        <label className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Your Message *</label>
        <textarea
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleInputChange}
          className="w-full bg-white border border-zinc-200 focus:border-green-800 py-3 px-4 rounded-lg focus:outline-none transition text-sm resize-none"
          placeholder="Write your message here..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-green-800 text-white py-4 rounded-xl font-bold uppercase tracking-wider text-xs transition disabled:opacity-50"
      >
        <Send size={14} /> {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-green-100 selection:text-green-900">
      <Header />

      <main className="pt-40 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            
            {/* Header section */}
            <div className="text-center mb-20">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-green-700 block mb-4">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-zinc-900">
                Contact Us
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Contact details */}
              <div className="lg:col-span-5 space-y-10">
                <div className="space-y-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-950">
                    Let's cultivate a green partnership
                  </h3>
                  <p className="text-zinc-500 font-medium text-sm leading-relaxed">
                    Have questions about our vermicompost, need custom bulk packaging recommendations for your farm, or interested in consultancy services? Write to us or call our farm office.
                  </p>
                </div>

                <div className="space-y-8 pt-4">
                  
                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-zinc-50 border text-zinc-700 rounded-xl flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Office & Farm Address</h4>
                      <p className="text-sm text-zinc-800 font-semibold leading-relaxed">
                        Coming soon
                        <br />
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-zinc-50 border text-zinc-700 rounded-xl flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Email Address</h4>
                      <a href="mailto:support@erganicfarms.com" className="text-sm text-green-800 hover:text-green-950 font-bold transition">
                        coming soon
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-zinc-50 border text-zinc-700 rounded-xl flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Phone Number</h4>
                      <a href="tel:+919876543210" className="text-sm text-zinc-800 font-semibold hover:text-green-800 transition">
                        NA
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Contact form with Suspense wrapper */}
              <div className="lg:col-span-7 bg-zinc-50 border border-zinc-100 p-8 md:p-12 rounded-[2.5rem]">
                <Suspense fallback={<div className="text-sm text-zinc-400 font-bold uppercase tracking-widest">Loading Form...</div>}>
                  <ContactForm />
                </Suspense>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
