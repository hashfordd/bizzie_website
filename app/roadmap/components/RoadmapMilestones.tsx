"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight, RelumeIcon } from "relume-icons";

export function RoadmapMilestones() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="heading-h3 font-bold">
              Empower Your Business with Our Advanced Analytics and Insights
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <RelumeIcon className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h5 mb-5 font-bold md:mb-6">
              Enhance Your Workflow with Mobile Enhancements for On-the-Go
              Management
            </h3>
            <p>
              Unlock powerful data insights that drive profitability and
              efficiency.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                iconRight={<ChevronRight className="text-scheme-text" />}
                variant="link"
                size="link"
              >
                Explore
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <RelumeIcon className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h5 mb-5 font-bold md:mb-6">
              Streamline Operations with Seamless Integrations for Your Business
              Tools
            </h3>
            <p>
              Connect your favorite tools for a cohesive and efficient workflow.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                iconRight={<ChevronRight className="text-scheme-text" />}
                variant="link"
                size="link"
              >
                Integrate
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <RelumeIcon className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h5 mb-5 font-bold md:mb-6">
              Stay Ahead with Real-Time Updates and Feature Enhancements
            </h3>
            <p>
              Receive timely updates on new features that enhance your
              experience.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                iconRight={<ChevronRight className="text-scheme-text" />}
                variant="link"
                size="link"
              >
                Join
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
