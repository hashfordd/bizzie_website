"use client";

import React from "react";
import { RelumeIcon } from "relume-icons";

export function PricingTools() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h3 className="heading-h3 mb-5 font-bold md:mb-6">
              Empower Your Pricing Strategy with Bizzie’s Advanced Tools and
              Insights
            </h3>
            <p className="text-medium mb-5 md:mb-6">
              Bizzie offers innovative pricing model tools that enable
              contractors to define, test, and refine their service rates
              effortlessly. With automated job costing, you can compare actual
              expenses against estimates, ensuring profitability on every
              project.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <RelumeIcon className="size-6 text-scheme-text" />
                </div>
                <p>Define your service rates with precision and confidence.</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <RelumeIcon className="size-6 text-scheme-text" />
                </div>
                <p>Test pricing scenarios to maximize your profit margins.</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <RelumeIcon className="size-6 text-scheme-text" />
                </div>
                <p>Refine your rates based on real-time data insights.</p>
              </li>
            </ul>
          </div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
