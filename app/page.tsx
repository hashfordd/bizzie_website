"use client";

import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FinancialManagement } from "./components/FinancialManagement";
import { Features } from "./components/Features";
import { PricingTools } from "./components/PricingTools";
import { BusinessPotential } from "./components/BusinessPotential";
import { Timeline } from "./components/Timeline";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function Page() {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-18">
        <Hero />
      </div>
      <div className="animate-on-scroll">
        <FinancialManagement />
      </div>
      <div className="animate-on-scroll">
        <Features />
      </div>
      <div className="animate-on-scroll">
        <PricingTools />
      </div>
      <div className="animate-on-scroll">
        <BusinessPotential />
      </div>
      <div className="animate-on-scroll">
        <Timeline />
      </div>
      <div className="animate-on-scroll">
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}
