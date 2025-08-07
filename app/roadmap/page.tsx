import React from "react";
import { Navbar } from "../components/Navbar";
import { RoadmapHero } from "./components/RoadmapHero";
import { RoadmapOverview } from "./components/RoadmapOverview";
import { RoadmapFeatures } from "./components/RoadmapFeatures";
import { RoadmapBenefits } from "./components/RoadmapBenefits";
import { RoadmapMilestones } from "./components/RoadmapMilestones";
import { RoadmapTimeline } from "./components/RoadmapTimeline";
import { RoadmapCallToAction } from "./components/RoadmapCallToAction";
import { Footer } from "../components/Footer";

export default function RoadmapPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 md:pt-18">
        <RoadmapHero />
      </div>
      <RoadmapOverview />
      <RoadmapFeatures />
      <RoadmapBenefits />
      <RoadmapMilestones />
      <RoadmapTimeline />
      <RoadmapCallToAction />
      <Footer />
    </div>
  );
}
