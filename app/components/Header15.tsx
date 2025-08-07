"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header15() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="heading-h1 font-bold">
              Transform Your Business with Bizzie Today
            </h1>
          </div>
          <div>
            <p className="text-medium">
              Take control of your financial health with Bizzie, the ultimate
              profit coach for home-service businesses. Streamline your
              operations and maximize your profits effortlessly.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Start">Start</Button>
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
