"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Check, RelumeIcon } from "relume-icons";

export function PricingFeatures() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-light-accent">
      <div className="container">
        <div className="mb-8 w-full max-w-lg lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Affordable</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">Pricing Plans</h2>
          <p className="text-medium">
            Choose the right plan for your business and unlock powerful
            financial management tools.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <RelumeIcon className="size-8 text-scheme-text" />
              </div>
              <div>
                <h3 className="heading-h6 mb-3 font-bold md:mb-4">
                  Starter Plan
                </h3>
                <p>
                  Perfect for solo operators starting their journey towards
                  better financial control.
                </p>
              </div>
            </div>
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <RelumeIcon className="size-8 text-scheme-text" />
              </div>
              <div>
                <h3 className="heading-h6 mb-3 font-bold md:mb-4">
                  Professional Plan
                </h3>
                <p>
                  Designed for small teams looking to enhance their operational
                  efficiency and profitability.
                </p>
              </div>
            </div>
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <RelumeIcon className="size-8 text-scheme-text" />
              </div>
              <div>
                <h3 className="heading-h6 mb-3 font-bold md:mb-4">
                  Enterprise Plan
                </h3>
                <p>
                  Comprehensive features for larger businesses needing advanced
                  data insights and management tools.
                </p>
              </div>
            </div>
          </div>
          <div className="h-full px-6 py-8 md:p-8">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="heading-h5 mb-2 font-bold">Starter Plan</h4>
                <p>Ideal for beginners</p>
              </div>
              <h5 className="heading-h1 justify-self-end font-bold">$19/mo</h5>
            </div>
            <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
            <p>Includes:</p>
            <div className="mt-4 mb-8 grid grid-cols-1 gap-y-4 py-2 md:grid-cols-2 md:gap-x-6">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Expense tracking tools</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Basic reporting features</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Mobile access</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Customer support</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Job costing insights</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Service pricing models</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Data visualization tools</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Real-time updates</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>User-friendly interface</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <Check className="size-6 text-scheme-text" />
                </div>
                <p>Secure data storage</p>
              </div>
            </div>
            <div className="my-8 h-px w-full shrink-0 bg-scheme-border" />
            <div>
              <Button title="Get started" className="w-full">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
