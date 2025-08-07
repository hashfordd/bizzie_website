"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Check } from "relume-icons";

export function Pricing21() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Pricing</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">Pricing Plan</h1>
          <p className="text-medium">
            Choose the best plan for your business needs
          </p>
        </div>
        <div className="w-full">
          <div className="sticky top-0 grid grid-cols-3 border-b border-scheme-border bg-scheme-background md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div className="hidden md:block" />
            <div className="flex h-full flex-col justify-between border-0 border-scheme-border px-2 py-4 sm:px-4 sm:py-6 md:border-l lg:px-6 lg:py-8">
              <div>
                <h2 className="heading-h6 font-bold">Basic</h2>
                <div className="my-3 md:my-4">
                  <p className="heading-h1 font-bold">$19</p>
                  <p className="font-bold">Per month</p>
                </div>
                <p>Ideal for solo contractors</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Get started"
                  className="w-full px-3 py-1 whitespace-normal sm:px-4 sm:py-3"
                >
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border-l border-scheme-border px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
              <div>
                <h2 className="heading-h6 font-bold">Business</h2>
                <div className="my-3 md:my-4">
                  <p className="heading-h1 font-bold">$29</p>
                  <p className="font-bold">Per month</p>
                </div>
                <p>Perfect for small teams</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Get started"
                  className="w-full px-3 py-1 whitespace-normal sm:px-4 sm:py-3"
                >
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border-l border-scheme-border px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
              <div>
                <h2 className="heading-h6 font-bold">Enterprise</h2>
                <div className="my-3 md:my-4">
                  <p className="heading-h1 font-bold">$49</p>
                  <p className="font-bold">Per month</p>
                </div>
                <p>For growing businesses</p>
              </div>
              <div className="mt-6 md:mt-8">
                <Button
                  title="Get started"
                  className="w-full px-3 py-1 whitespace-normal sm:px-4 sm:py-3"
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
          <div className="border-b border-scheme-border py-5">
            <h3 className="heading-h6 font-bold">Feature Category</h3>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              User Accounts Management
            </p>
            <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
              10
            </div>
            <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
              25
            </div>
            <div className="flex items-center justify-center border-0 border-scheme-border px-4 py-4 text-center font-semibold md:border-l md:px-6">
              Unlimited
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Job Costing Tools
            </p>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Financial Reporting Features
            </p>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Mobile App Access
            </p>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Customer Support
            </p>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
          </div>
          <div className="border-b border-scheme-border py-5">
            <h3 className="heading-h6 font-bold">Feature Category</h3>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Invoicing Capabilities
            </p>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              10
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              25
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              Unlimited
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Expense Tracking
            </p>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Service Pricing Tools
            </p>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Customizable Dashboard
            </p>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Data Analytics
            </p>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
          </div>
          <div className="border-b border-scheme-border py-5">
            <h3 className="heading-h6 font-bold">Feature Category</h3>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Performance Metrics
            </p>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              10
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              25
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              Unlimited
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Integration Options
            </p>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Cloud Storage
            </p>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Security Features
            </p>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              User-Friendly Interface
            </p>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
