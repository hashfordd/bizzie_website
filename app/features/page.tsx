import React from "react";
import { Navbar } from "../components/Navbar";
import { FeaturesHero } from "./components/FeaturesHero";
import { FeaturesList } from "./components/FeaturesList";
import { FeaturesOverview } from "./components/FeaturesOverview";
import { FeaturesBenefits } from "./components/FeaturesBenefits";
import { FeaturesServices } from "./components/FeaturesServices";
import { FeaturesAdvanced } from "./components/FeaturesAdvanced";
import { FeaturesIntegration } from "./components/FeaturesIntegration";
import { FeaturesComparison } from "./components/FeaturesComparison";
import { FeaturesTestimonials } from "./components/FeaturesTestimonials";
import { FeaturesCallToAction } from "./components/FeaturesCallToAction";
import { Footer } from "../components/Footer";

export default function FeaturesPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 md:pt-18">
        <FeaturesHero />
      </div>
      <FeaturesList />
      <FeaturesOverview />
      <FeaturesBenefits />
      <FeaturesServices />
      <FeaturesAdvanced />
      <FeaturesIntegration />
      <FeaturesComparison />
      <FeaturesTestimonials />
      <FeaturesCallToAction />
      <Footer />
    </div>
  );
}
