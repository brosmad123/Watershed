import React from "react";
import { Box, Mountain, Home, Waves } from "lucide-react";

const features = [
  {
    icon: Box,
    title: "The Cube Structure",
    description: "Our model was built inside a transparent cube container, letting viewers see the watershed from every angle, just like studying a geological cross-section.",
  },
  {
    icon: Mountain,
    title: "The Mountain Peak",
    description: "A sculpted mountain at one end of the cube served as the highest point. All water poured at the top flows downhill by gravity, just like a real watershed.",
  },
  {
    icon: Home,
    title: "Scandinavian Houses",
    description: "Miniature Nordic-style houses were placed in the valley and along the slopes, representing communities that live near waterways and are vulnerable to flooding.",
  },
  {
    icon: Waves,
    title: "The Water Body",
    description: "At the base of the mountain, a small fjord-like basin collected all runoff water, demonstrating how a drainage basin gathers everything that flows downhill.",
  },
];

export default function ModelSection({ modelImage }) {
  return (
    <section id="model" className="py-24 md:py-36 px-6 md:px-16 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-emerald-400" />
          <span className="text-emerald-400 font-body text-xs tracking-[0.25em] uppercase font-medium">Section 02</span>
        </div>
        <h2 className="font-body font-black text-3xl md:text-5xl text-foreground tracking-tight mb-4">
          Our 3D Cube Model
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mb-16">
          We built a three-dimensional watershed model inside a cube-shaped container, recreating the entire journey of water from mountain peak to fjord basin.
        </p>

        <div className="relative mb-16 max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border">
            <img
              src={modelImage}
              alt="Landscape model representing a watershed with mountain and water basin"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="hidden md:flex absolute top-6 left-6 items-center gap-2">
            <div className="bg-black/70 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1.5">
              <span className="text-xs font-body text-white font-medium">Hand-sculpted peak</span>
            </div>
          </div>
          <div className="hidden md:flex absolute bottom-6 right-6 items-center gap-2">
            <div className="bg-black/70 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1.5">
              <span className="text-xs font-body text-white font-medium">Nordic cottages</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card border border-border rounded-2xl p-7 hover:border-emerald-400/30 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-400/10 flex items-center justify-center mb-4">
                <f.icon className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="font-body font-bold text-base text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}