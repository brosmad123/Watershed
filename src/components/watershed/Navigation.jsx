import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "home", label: "Summit", altitude: "2,100m" },
  { id: "watershed", label: "Ridge", altitude: "1,600m" },
  { id: "model", label: "Slope", altitude: "1,100m" },
  { id: "demo", label: "Valley", altitude: "600m" },
  { id: "pollution", label: "Basin", altitude: "200m" },
  { id: "realworld", label: "Shore", altitude: "50m" },
  { id: "learned", label: "Deep Water", altitude: "0m" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sidebarRef = useRef(null);
  const isDragging = useRef(false);
  const dragStartY = useRef(0);
  const dragStartProgress = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const scrollToProgress = (progress) => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: progress * docHeight, behavior: "smooth" });
  };

  const handleTrackClick = (e) => {
    if (!sidebarRef.current) return;
    const rect = sidebarRef.current.getBoundingClientRect();
    const relY = e.clientY - rect.top;
    const progress = Math.max(0, Math.min(1, relY / rect.height));
    scrollToProgress(progress);
  };

  const handleThumbMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
    dragStartY.current = e.clientY;
    dragStartProgress.current = scrollProgress;

    const onMouseMove = (e) => {
      if (!isDragging.current || !sidebarRef.current) return;
      const rect = sidebarRef.current.getBoundingClientRect();
      const delta = (e.clientY - dragStartY.current) / rect.height;
      const newProgress = Math.max(0, Math.min(1, dragStartProgress.current + delta));
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({ top: newProgress * docHeight });
    };

    const onMouseUp = () => {
      isDragging.current = false;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const thumbTop = `calc(${scrollProgress * 100}% - 20px)`;

  return (
    <>
      {/* Top Nav Bar - logo only */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between h-14">
          <span className="font-body font-black text-sm tracking-tight text-foreground">
            Nordic Basin
          </span>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-4">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-body font-medium transition-colors ${
                  activeSection === s.id ? "text-blue-400" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Right-side scroll wheel sidebar */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-end gap-4">
        {/* Section dots with labels */}
        <div className="flex flex-col items-end gap-3 mb-4">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="group flex items-center gap-3"
            >
              <div className="text-right">
                <div className={`text-xs font-body font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeSection === s.id ? "text-white" : "text-transparent group-hover:text-muted-foreground"
                }`}>
                  {s.label}
                </div>
                <div className={`text-[10px] font-body transition-all duration-200 whitespace-nowrap ${
                  activeSection === s.id ? "text-blue-400" : "text-transparent group-hover:text-blue-400/50"
                }`}>
                  {s.altitude}
                </div>
              </div>
              <div className={`rounded-full flex-shrink-0 transition-all duration-200 ${
                activeSection === s.id
                  ? "w-3 h-3 bg-blue-400 shadow-lg shadow-blue-400/60"
                  : "w-2 h-2 bg-white/20 group-hover:bg-white/50"
              }`} />
            </button>
          ))}
        </div>

        {/* Scroll track */}
        <div
          ref={sidebarRef}
          onClick={handleTrackClick}
          className="relative w-1 bg-white/10 rounded-full cursor-pointer"
          style={{ height: "160px" }}
        >
          {/* Track glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-400/20 to-blue-400/5" />

          {/* Thumb */}
          <div
            onMouseDown={handleThumbMouseDown}
            className="absolute left-1/2 -translate-x-1/2 w-3 h-10 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50 cursor-grab active:cursor-grabbing transition-all duration-75"
            style={{ top: thumbTop }}
          />
        </div>

        {/* Progress % */}
        <div className="text-[10px] font-body text-muted-foreground text-right w-full">
          {Math.round(scrollProgress * 100)}%
        </div>
      </div>
    </>
  );
}