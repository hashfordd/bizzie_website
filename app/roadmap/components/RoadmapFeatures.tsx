"use client";

import React from "react";
import { RelumeIcon } from "relume-icons";

export function RoadmapFeatures() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h3 className="heading-h3 mb-5 font-bold md:mb-6">
              Our Vision: Empowering Home-Service Businesses to Maximize Profit
              with Data Insights
            </h3>
            <p className="text-medium mb-5 md:mb-6">
              At Bizzie, our mission is to help home-service businesses thrive
              by providing actionable insights that enhance profitability. We
              aim to reduce churn by 5% and increase trial-to-paid conversion
              rates through innovative features.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <RelumeIcon className="size-6 text-scheme-text" />
                </div>
                <p>Advanced Analytics for Informed Decision-Making</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <RelumeIcon className="size-6 text-scheme-text" />
                </div>
                <p>Mobile Enhancements for On-the-Go Expense Tracking</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <RelumeIcon className="size-6 text-scheme-text" />
                </div>
                <p>Integrations to Streamline Your Workflow</p>
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
