import React from "react";

const vocabTerms = [
  {
    term: "Ridge",
    definition: "The highest point of land that separates two watersheds. Water flows in opposite directions on each side.",
    tag: "Elevation",
    color: "text-blue-400 border-l-blue-400 bg-blue-400/5",
  },
  {
    term: "Divide",
    definition: "The boundary line along the ridge that determines which watershed receives the rainfall.",
    tag: "Boundary",
    color: "text-blue-400 border-l-blue-400 bg-blue-400/5",
  },
  {
    term: "Tributaries",
    definition: "Smaller streams and rivers that flow into a larger river, carrying water downhill from the ridge.",
    tag: "Flow",
    color: "text-emerald-400 border-l-emerald-400 bg-emerald-400/5",
  },
  {
    term: "Runoff",
    definition: "Water that flows over the land surface instead of soaking into the ground, picking up pollutants along the way.",
    tag: "Movement",
    color: "text-emerald-400 border-l-emerald-400 bg-emerald-400/5",
  },
  {
    term: "Infiltration",
    definition: "The process of water soaking into the soil and becoming groundwater, filtering naturally through rock and earth.",
    tag: "Absorption",
    color: "text-slate-400 border-l-slate-400 bg-slate-400/5",
  },
  {
    term: "Drainage Basin",
    definition: "The entire area of land where all water drains to a single point, the mouth of the river or a lake.",
    tag: "System",
    color: "text-slate-400 border-l-slate-400 bg-slate-400/5",
  },
];

export default function WatershedSection({ watershedImage }) {
  return (
    <section id="watershed" className="py-24 md:py-36 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-blue-400" />
          <span className="text-blue-400 font-body text-xs tracking-[0.25em] uppercase font-medium">Section 01</span>
        </div>
        <h2 className="font-body font-black text-3xl md:text-5xl text-foreground tracking-tight mb-4">
          What is a Watershed?
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mb-16">
          A watershed is an area of land where all the water that falls as rain or snow drains downhill into a single body of water, like a river, lake, or fjord. Think of it as a giant natural funnel carved into the earth.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src={watershedImage}
                alt="Mountain landscape showing watershed drainage"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-card/90 backdrop-blur-sm border border-border rounded-xl px-4 py-2">
              <span className="text-xs font-body text-muted-foreground">Watershed anatomy</span>
            </div>
          </div>

          <div className="space-y-3">
            {vocabTerms.map((item) => (
              <div
                key={item.term}
                className={`border-l-2 pl-4 py-3 rounded-r-xl ${item.color}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-body font-bold text-base text-foreground">{item.term}</h3>
                  <span className={`text-[10px] font-body font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full bg-current/10 ${item.color.split(" ")[0]}`}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}