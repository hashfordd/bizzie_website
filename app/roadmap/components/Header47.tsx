"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Roadmap</p>
            <h1 className="heading-h1 font-bold">Our Future Vision</h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="text-medium">
              At Bizzie, our mission is to empower home-service businesses to
              enhance profitability through insightful data analysis. Each
              upcoming feature is designed to align with this vision, ensuring
              that our users can make informed decisions that drive success.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Learn More">Learn More</Button>
              <Button title="Join Us" variant="secondary">
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
