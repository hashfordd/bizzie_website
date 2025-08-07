"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout4() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Empower</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
              Unlock Your Business’s Full Potential Today
            </h1>
            <p className="text-medium mb-6 md:mb-8">
              Bizzie transforms chaos into confidence, allowing contractors to
              manage their finances effortlessly. With real-time insights and
              intuitive tools, you can make informed decisions that drive
              profitability.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Transform Chaos
                </h6>
                <p>
                  Streamline your operations and regain control over your
                  financial health.
                </p>
              </div>
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Avoid Surprises
                </h6>
                <p>
                  Identify cost-saving opportunities and prevent unexpected
                  expenses from impacting your bottom line.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Start" variant="secondary">
                Start
              </Button>
              <Button
                title="Learn More"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
