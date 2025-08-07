"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight, RelumeIcon } from "relume-icons";

export function Features() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-light-accent">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Transform Your Business with Powerful Financial Management
              Features
            </h2>
          </div>
          <div>
            <p className="text-lg">
              Bizzie helps you keep track of your equipment inventories
              effortlessly. With our intuitive interface, you can manage your
              tools and resources efficiently. Say goodbye to lost equipment and
              hello to streamlined operations.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-5 md:mb-6">
              <RelumeIcon className="size-12 text-scheme-text" />
            </div>
            <h3 className="text-xl font-bold mb-3 md:mb-4">
              Easily Manage Your Recurring Bills and Wage Expenses
            </h3>
            <p>
              Stay on top of your finances with automated tracking of all
              expenses.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                iconRight={<ChevronRight />}
                variant="link"
                size="link"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <RelumeIcon className="size-12 text-scheme-text" />
            </div>
            <h3 className="text-xl font-bold mb-3 md:mb-4">
              Visualize Your Operational Outlays in Real-Time for Better
              Decision Making
            </h3>
            <p>
              Get instant insights into your spending and profit margins at a
              glance.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                iconRight={<ChevronRight />}
                variant="link"
                size="link"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <RelumeIcon className="size-12 text-scheme-text" />
            </div>
            <h3 className="text-xl font-bold mb-3 md:mb-4">
              Optimize Your Pricing Strategies with Data-Driven Insights
            </h3>
            <p>
              Use our tools to model pricing scenarios that maximize your
              profits.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button
                iconRight={<ChevronRight />}
                variant="link"
                size="link"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
