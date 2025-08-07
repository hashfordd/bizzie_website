"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Check } from "relume-icons";

export function PricingPlans() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white dark:bg-bizzie-900">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Pricing</p>
          <h1 className="heading-h2 mb-5 font-bold md:mb-6">Pricing Plan</h1>
          <p className="text-medium">
            Choose the best plan for your business needs
          </p>
        </div>
        <div className="w-full pricing-table">
          <div className="grid grid-cols-3 border-b border-scheme-border bg-scheme-background dark:bg-bizzie-800 md:grid-cols-[1.5fr_1fr_1fr_1fr] shadow-md">
            <div className="hidden md:block" />
            <div className="flex h-full flex-col justify-between border-0 border-scheme-border px-3 py-6 sm:px-5 sm:py-8 md:border-l lg:px-8 lg:py-10">
              <div className="text-center">
                <h2 className="text-xl font-bold mb-4 text-bizzie-900 dark:text-white">Basic</h2>
                <div className="mb-4">
                  <p className="text-3xl lg:text-4xl font-bold text-bizzie-600 dark:text-bizzie-300">$19</p>
                  <p className="text-sm font-medium text-bizzie-700 dark:text-bizzie-400 mt-1">Per month</p>
                </div>
                <p className="text-sm text-bizzie-600 dark:text-bizzie-400 mb-6">Ideal for solo contractors</p>
              </div>
              <div>
                <Button
                  title="Get started"
                  className="w-full px-4 py-3 btn-primary"
                >
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border-l border-scheme-border px-3 py-6 sm:px-5 sm:py-8 lg:px-8 lg:py-10">
              <div className="text-center">
                <h2 className="text-xl font-bold mb-4 text-bizzie-900 dark:text-white">Business</h2>
                <div className="mb-4">
                  <p className="text-3xl lg:text-4xl font-bold text-bizzie-600 dark:text-bizzie-300">$29</p>
                  <p className="text-sm font-medium text-bizzie-700 dark:text-bizzie-400 mt-1">Per month</p>
                </div>
                <p className="text-sm text-bizzie-600 dark:text-bizzie-400 mb-6">Perfect for small teams</p>
              </div>
              <div>
                <Button
                  title="Get started"
                  className="w-full px-4 py-3 btn-primary"
                >
                  Get started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border-l border-scheme-border px-3 py-6 sm:px-5 sm:py-8 lg:px-8 lg:py-10">
              <div className="text-center">
                <h2 className="text-xl font-bold mb-4 text-bizzie-900 dark:text-white">Enterprise</h2>
                <div className="mb-4">
                  <p className="text-3xl lg:text-4xl font-bold text-bizzie-600 dark:text-bizzie-300">$49</p>
                  <p className="text-sm font-medium text-bizzie-700 dark:text-bizzie-400 mt-1">Per month</p>
                </div>
                <p className="text-sm text-bizzie-600 dark:text-bizzie-400 mb-6">For growing businesses</p>
              </div>
              <div>
                <Button
                  title="Get started"
                  className="w-full px-4 py-3 btn-primary"
                >
                  Get started
                </Button>
              </div>
            </div>
          </div>
          <div className="border-b border-scheme-border py-5 bg-bizzie-50 dark:bg-bizzie-700 feature-category-header">
            <h3 className="heading-h6 font-bold px-4 md:px-6 text-bizzie-900 dark:text-white">Feature Category</h3>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border bg-white dark:bg-bizzie-800 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
          <div className="grid grid-cols-3 border-b border-scheme-border bg-white dark:bg-bizzie-800 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
          <div className="grid grid-cols-3 border-b border-scheme-border bg-white dark:bg-bizzie-800 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
          <div className="grid grid-cols-3 border-b border-scheme-border bg-white dark:bg-bizzie-800 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
          <div className="grid grid-cols-3 border-b border-scheme-border bg-white dark:bg-bizzie-800 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Customer Support
            </p>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
          </div>
          <div className="border-b border-scheme-border py-5 bg-bizzie-50 dark:bg-bizzie-700 feature-category-header">
            <h3 className="heading-h6 font-bold px-4 md:px-6 text-bizzie-900 dark:text-white">Feature Category</h3>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border bg-white dark:bg-bizzie-800 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
          <div className="grid grid-cols-3 border-b border-scheme-border bg-white dark:bg-bizzie-800 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
          <div className="grid grid-cols-3 border-b border-scheme-border bg-white dark:bg-bizzie-800 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
          <div className="grid grid-cols-3 border-b border-scheme-border bg-white dark:bg-bizzie-800 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
          <div className="grid grid-cols-3 border-b border-scheme-border bg-white dark:bg-bizzie-800 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <p className="col-span-3 row-span-1 border-b border-scheme-border py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
              Data Analytics
            </p>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6"></div>
            <div className="flex items-center justify-center border-l border-scheme-border px-4 py-4 text-center font-semibold md:px-6">
              <Check className="size-6 text-scheme-text" />
            </div>
          </div>
          <div className="border-b border-scheme-border py-5 bg-bizzie-50 dark:bg-bizzie-700 feature-category-header">
            <h3 className="heading-h6 font-bold px-4 md:px-6 text-bizzie-900 dark:text-white">Feature Category</h3>
          </div>
          <div className="grid grid-cols-3 border-b border-scheme-border bg-white dark:bg-bizzie-800 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
          <div className="grid grid-cols-3 border-b border-scheme-border bg-white dark:bg-bizzie-800 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
          <div className="grid grid-cols-3 border-b border-scheme-border bg-white dark:bg-bizzie-800 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
          <div className="grid grid-cols-3 border-b border-scheme-border bg-white dark:bg-bizzie-800 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
          <div className="grid grid-cols-3 border-b border-scheme-border bg-white dark:bg-bizzie-800 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
