import React from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection({ heroImage }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Norwegian fjord landscape with snow-capped mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-blue-400" />
            <span className="text-blue-400 font-body text-xs tracking-[0.25em] uppercase font-medium">
              Grade 8 Science Project
            </span>
          </div>

          <h1 className="font-body font-black text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6">
            Scandinavian<br />
            <span className="text-blue-400">Watershed</span><br />
            Project
          </h1>

          <p className="text-white/65 font-body text-lg leading-relaxed max-w-lg mb-10">
            Exploring how water shapes the Nordic landscape, from mountain peaks to fjord basins, through a hands-on 3D model demonstration.
          </p>

          <div className="flex items-center gap-2 text-white/35 font-body text-xs tracking-[0.2em] uppercase">
            <span>Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}