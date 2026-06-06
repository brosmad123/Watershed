import React from "react";
import Navigation from "../components/watershed/Navigation";
import HeroSection from "../components/watershed/HeroSection";
import WatershedSection from "../components/watershed/WatershedSection";
import ModelSection from "../components/watershed/ModelSection";
import DemoSection from "../components/watershed/DemoSection";
import PollutionSection from "../components/watershed/PollutionSection";
import RealWorldSection from "../components/watershed/RealWorldSection";
import LearnedSection from "../components/watershed/LearnedSection";

const images = {
  // Norwegian fjord hero
  hero: "https://images.unsplash.com/photo-1520769945061-0a448c463865?w=1600&q=80",
  // Aerial river/watershed from above
  watershed: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&q=80",
  // Miniature model houses / diorama
  model: "https://i.postimg.cc/yN3smzmS/60e94526-0aed-4d3b-a87d-5f2a1679c852.png",
  // Real flood water rushing / flooding street
  demo: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=900&q=80",
  // Industrial water pollution / chemical runoff in river
  pollution: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=900&q=80",
  // Geirangerfjord Norway
  fjord: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
  // Swedish boreal forest lake
  lake: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&q=80",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection heroImage={images.hero} />
      <WatershedSection watershedImage={images.watershed} />
      <ModelSection modelImage={images.model} />
      <DemoSection demoImage={images.demo} />
      <PollutionSection pollutionImage={images.pollution} />
      <RealWorldSection fjordImage={images.fjord} lakeImage={images.lake} />
      <LearnedSection />
    </div>
  );
}