import React from "react";

const takeaways = [
  "A watershed connects everything. From the highest mountain ridge to the deepest fjord basin, it is all one connected system.",
  "Water follows gravity. It always flows downhill, and the shape of the land determines where it goes.",
  "Flooding is devastating. Our collapsing houses showed how communities near water are vulnerable to natural disasters.",
  "Pollution travels far. The food colouring proved that contamination in one area affects the entire watershed downstream.",
  "Watersheds need protection. Healthy forests, wetlands, and soil are nature's own flood defences and water filters.",
  "Science is hands-on. Building and testing a physical model taught us more than any textbook ever could.",
];

export default function LearnedSection() {
  return (
    <section id="learned" className="relative">
      <div className="h-24 bg-gradient-to-b from-background to-[#050A14]" />

      <div className="bg-[#050A14] text-white px-6 md:px-16 py-24 md:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-blue-400" />
            <span className="text-blue-400 font-body text-xs tracking-[0.25em] uppercase font-medium">Section 06</span>
          </div>
          <h2 className="font-body font-black text-3xl md:text-5xl text-white tracking-tight mb-4">
            What We Learned
          </h2>
          <p className="text-white/50 font-body text-lg leading-relaxed max-w-2xl mb-14">
            This project taught us that water is the thread that connects everything in our environment. Here are the key ideas we will carry with us.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-20">
            {takeaways.map((t, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-white/4 border border-white/8 rounded-2xl p-5"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full border border-blue-400/40 flex items-center justify-center mt-0.5">
                  <span className="text-[10px] font-body font-bold text-blue-400">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="text-white/75 font-body text-sm leading-relaxed pt-0.5">{t}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-white/8 pt-14 text-center max-w-xl mx-auto">
            <p className="text-white/40 font-body text-sm leading-relaxed mb-6">
              Building our Scandinavian watershed model was more than a school project. It was a reminder that the water flowing through our landscapes carries the story of everything it touches. Protecting our watersheds means protecting our future.
            </p>
            <div className="flex items-center justify-center gap-3 text-white/20">
              <div className="h-px w-14 bg-white/10" />
              <span className="font-body text-xs font-semibold tracking-widest uppercase">The Nordic Basin</span>
              <div className="h-px w-14 bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}