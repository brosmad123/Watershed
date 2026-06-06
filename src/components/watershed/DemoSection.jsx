import React from "react";

const timeline = [
  {
    step: "01",
    title: "Water Poured at the Peak",
    description: "We slowly poured water at the top of the model mountain, simulating rainfall at the highest elevation of the watershed.",
  },
  {
    step: "02",
    title: "Gravity Takes Over",
    description: "The water immediately began flowing downhill, carving paths along the slopes, just like real tributaries forming after heavy rain.",
  },
  {
    step: "03",
    title: "Collection in the Basin",
    description: "All the water converged at the bottom of the model, pooling in the fjord-like basin. This demonstrated the drainage basin concept perfectly.",
  },
  {
    step: "04",
    title: "Houses Begin to Collapse",
    description: "As water levels rose and flow intensified, the miniature Scandinavian houses started to break apart and collapse, a powerful visual of how real floods destroy communities.",
  },
  {
    step: "05",
    title: "Total Flood Impact",
    description: "By the end, several houses had been swept away entirely, showing why proper flood management and watershed protection are critical for communities near waterways.",
  },
];

export default function DemoSection({ demoImage }) {
  return (
    <section id="demo" className="py-24 md:py-36 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-blue-400" />
          <span className="text-blue-400 font-body text-xs tracking-[0.25em] uppercase font-medium">Section 03</span>
        </div>
        <h2 className="font-body font-black text-3xl md:text-5xl text-foreground tracking-tight mb-4">
          The Water Demonstration
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mb-16">
          The most dramatic part of our project was watching water carve its path and witnessing the impact of flooding on our miniature community.
        </p>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src={demoImage}
                alt="Water flowing through a landscape demonstrating flooding"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-3 bg-blue-400/8 border border-blue-400/20 rounded-xl px-4 py-3">
              <p className="text-xs font-body text-blue-400 font-medium">
                Live demonstration, water flows from peak to basin
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-0">
            {timeline.map((item, i) => (
              <div
                key={item.step}
                className="relative pl-10 pb-8 border-l border-border last:border-l-transparent last:pb-0"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-7 h-7 rounded-full bg-card border-2 border-blue-400 flex items-center justify-center">
                  <span className="text-[10px] font-body font-bold text-blue-400">{item.step}</span>
                </div>
                <h3 className="font-body font-bold text-base text-foreground mb-1.5">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}