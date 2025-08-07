"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight, RelumeIcon } from "relume-icons";

export function FeaturesOverview() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4 text-small">Features</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Empower Your Business with Essential Tools
              </h2>
            </div>
            <div>
              <p className="text-lg">
                Bizzie provides home-service businesses with the tools they need
                to thrive. From tracking equipment inventories to managing
                expenses, our platform ensures you have a clear view of your
                financial health. Experience seamless bookkeeping and actionable
                insights that lead to smarter decisions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="text-xl font-bold mb-5 md:mb-6">
                Track Equipment Inventories with Ease
              </h3>
              <p>Stay organized and efficient by monitoring your equipment.</p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="text-xl font-bold mb-5 md:mb-6">
                Log Recurring Bills and Wage Expenses Effortlessly
              </h3>
              <p>Keep your finances in check with automated logging.</p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <RelumeIcon className="size-12 text-scheme-text" />
              </div>
              <h3 className="text-xl font-bold mb-5 md:mb-6">
                Visualize Operational Outlays in Real-Time
              </h3>
              <p>Get instant insights into your spending and profits.</p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary">Learn More</Button>
            <Button
              iconRight={<ChevronRight className="text-scheme-text" />}
              variant="link"
              size="link"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
