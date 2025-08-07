"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight, RelumeIcon } from "relume-icons";

export function RoadmapBenefits() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-medium-accent">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 md:mb-6">
              <RelumeIcon className="size-20 text-scheme-text" />
            </div>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Your Voice Matters: Share Your Ideas
            </h2>
            <p className="text-medium">
              We value your input! Join our community to suggest features and
              sign up for beta access. Your feedback helps shape the future of
              Bizzie.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Submit" variant="secondary">
                Submit
              </Button>
              <Button
                title="Join"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Join
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
