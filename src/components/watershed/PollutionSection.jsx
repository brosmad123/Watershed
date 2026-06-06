import React from "react";
import { FlaskConical, Droplets, AlertTriangle } from "lucide-react";

const points = [
  {
    icon: FlaskConical,
    title: "The Experiment",
    description: "We added drops of food colouring to the water before pouring it over our model. The dye represented pollutants like pesticides, oil, or chemicals that enter a watershed from farms, roads, and factories.",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: Droplets,
    title: "What We Observed",
    description: "The coloured water spread rapidly through the entire watershed model. It flowed down the mountain, through every channel and stream path, and eventually stained the entire basin. There was no way to contain it once it entered the system.",
    iconColor: "text-violet-400",
    bgColor: "bg-violet-400/10",
  },
  {
    icon: AlertTriangle,
    title: "The Lesson",
    description: "Just like in our model, real pollution does not stay in one place. A single source of contamination can affect an entire watershed, poisoning drinking water, harming wildlife, and damaging ecosystems far downstream from where it started.",
    iconColor: "text-red-400",
    bgColor: "bg-red-400/10",
  },
];

export default function PollutionSection({ pollutionImage }) {
  return (
    <section id="pollution" className="py-24 md:py-36 px-6 md:px-16 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-violet-400" />
          <span className="text-violet-400 font-body text-xs tracking-[0.25em] uppercase font-medium">Section 04</span>
        </div>
        <h2 className="font-body font-black text-3xl md:text-5xl text-foreground tracking-tight mb-4">
          Pollution Simulation
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mb-16">
          Using simple food colouring, we demonstrated how pollutants travel through an entire watershed, revealing the invisible danger that threatens water systems.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className={`flex-shrink-0 w-9 h-9 rounded-xl ${p.bgColor} flex items-center justify-center mt-0.5`}>
                  <p.icon className={`w-4 h-4 ${p.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-body font-bold text-base text-foreground mb-1.5">{p.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src={pollutionImage}
                alt="Coloured water spreading through water to simulate pollution spreading"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              <div className="h-2.5 w-2.5 rounded-full bg-violet-500" />
              <div className="h-2.5 w-2.5 rounded-full bg-indigo-400" />
              <span className="text-xs font-body text-muted-foreground ml-1">
                Dye colours used to trace pollution pathways
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}