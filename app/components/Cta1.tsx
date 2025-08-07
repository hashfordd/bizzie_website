"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-accent">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="animate-slide-up">
            <h2 className="heading-h2 mb-5 font-bold md:mb-6 text-sage-900">
              Unlock Your Business <span className="text-sage-600">Potential</span>
            </h2>
            <p className="text-medium text-sage-700">
              Experience the power of Bizzie—your partner in achieving financial
              clarity and business growth.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button className="btn-primary" title="Start">Start</Button>
              <Button className="btn-secondary" title="Demo" variant="secondary">
                Demo
              </Button>
            </div>
          </div>
          <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="image-enhanced w-full object-cover animate-float"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
