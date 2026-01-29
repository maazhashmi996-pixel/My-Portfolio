"use client";

import { About } from "@/components/About";
import ContactForm from "@/components/ContactForm";
import { Projects } from "@/components/Project";
import { Hero } from "@/components/section/hero";


export default function Portfolio() {
  return (
    <main className="bg-[#020205] min-h-screen text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      {/* 1. Galaxy Hero Section */}
      <Hero />

      {/* 2. Biography Section */}
      <About />

      {/* 3. Projects Grid Component */}
      <Projects />

      {/* 4. Contact Form Component */}
      <ContactForm />

      {/* 5. Footer */}
      <footer className="py-24 text-center relative border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20" />
        <h4 className="text-gray-500 font-mono text-xs tracking-[0.5em] uppercase mb-4">Transmission End</h4>
        <p className="text-gray-400 text-sm">
          Handcrafted by <span className="text-white font-bold">Maaz Hashmi</span> © 2026
        </p>
      </footer>
    </main>
  );
}