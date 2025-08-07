import React from "react";
import { Navbar } from "../components/Navbar";
import { PricingHero } from "./components/PricingHero";
import { PricingPlans } from "./components/PricingPlans";
import { PricingFeatures } from "./components/PricingFeatures";
import { PricingTestimonials } from "./components/PricingTestimonials";
import { PricingCallToAction } from "./components/PricingCallToAction";
import { Footer } from "../components/Footer";

export default function PricingPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-16 md:pt-18">
        <PricingHero />
      </div>
      <PricingPlans />
      <PricingFeatures />
      <PricingTestimonials />
      <PricingCallToAction />
      <Footer />
    </div>
  );
}
