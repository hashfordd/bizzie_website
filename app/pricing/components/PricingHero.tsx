"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function PricingHero() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 section-bg-subtle">
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold md:mb-4 text-small">Flexible</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-5 font-bold md:mb-6">
            Affordable Pricing Plans
          </h1>
          <p className="text-lg">
            Discover how Bizzie's pricing options empower your business to
            thrive with confidence and clarity.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Learn More">Learn More</Button>
            <Button title="Sign Up" variant="secondary-alt">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
