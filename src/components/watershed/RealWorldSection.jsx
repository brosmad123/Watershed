import React from "react";
import { Droplets, Fish, Shield } from "lucide-react";

const connections = [
  {
    icon: Droplets,
    title: "Drinking Water",
    description: "Watersheds are the source of drinking water for millions of people. In Scandinavia, pristine mountain watersheds supply some of the cleanest tap water in the world.",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: Fish,
    title: "Wildlife and Ecosystems",
    description: "Healthy watersheds support salmon runs, bird migration, and entire forest ecosystems. When a watershed is polluted, every species in the chain is affected.",
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
  {
    icon: Shield,
    title: "Flood Control",
    description: "Natural watershed features like wetlands and forests absorb excess water. When these are destroyed by development, flooding becomes far more dangerous and unpredictable.",
    iconColor: "text-slate-300",
    bgColor: "bg-slate-400/10",
  },
];

export default function RealWorldSection({ fjordImage, lakeImage }) {
  return (
    <section id="realworld" className="py-24 md:py-36 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-emerald-400" />
          <span className="text-emerald-400 font-body text-xs tracking-[0.25em] uppercase font-medium">Section 05</span>
        </div>
        <h2 className="font-body font-black text-3xl md:text-5xl text-foreground tracking-tight mb-4">
          Real World Connection
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mb-16">
          Our model was inspired by real Scandinavian watersheds. The dramatic fjords of Norway and the vast lake systems of Sweden are places where water has shaped both the land and human civilization for thousands of years.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          <div>
            <div className="rounded-2xl overflow-hidden border border-border aspect-video">
              <img
                src={fjordImage}
                alt="Norwegian fjord with mountains and waterfalls"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2.5 text-sm font-body text-muted-foreground">
              Norway's fjords, carved by glaciers and fed by mountain watersheds
            </p>
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden border border-border aspect-video">
              <img
                src={lakeImage}
                alt="Swedish boreal forest lake"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2.5 text-sm font-body text-muted-foreground">
              Sweden's lake systems, natural reservoirs of the boreal watershed
            </p>
          </div>
        </div>

        <h3 className="font-body font-bold text-xl text-foreground mb-2">Why Watersheds Matter</h3>
        <p className="text-muted-foreground font-body text-sm mb-8">Every community depends on the health of its local watershed.</p>

        <div className="grid md:grid-cols-3 gap-4">
          {connections.map((c) => (
            <div
              key={c.title}
              className="bg-card border border-border rounded-2xl p-7 hover:border-emerald-400/30 transition-colors"
            >
              <div className={`w-9 h-9 rounded-xl ${c.bgColor} flex items-center justify-center mb-4`}>
                <c.icon className={`w-4 h-4 ${c.iconColor}`} />
              </div>
              <h3 className="font-body font-bold text-base text-foreground mb-2">{c.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}