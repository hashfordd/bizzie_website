"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta45() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start justify-start gap-6 p-8 md:grid-cols-[1fr_max-content] md:items-center md:justify-between md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:p-12 border border-scheme-border rounded-md bg-scheme-background">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <h3 className="heading-h3 mb-3 font-bold md:mb-4">
                Unlock Your Business Potential
              </h3>
              <p className="text-medium">
                Experience the power of Bizzie today!
              </p>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-center justify-start gap-4 md:w-auto md:justify-end">
            <Button title="Start">Start</Button>
            <Button title="Demo" variant="secondary">
              Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
