"use client";

import { Button } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ChevronRight } from "relume-icons";

const Circle = () => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["start center", "start start"],
  });
  const backgroundColor = {
    backgroundColor: useTransform(
      scrollYProgress,
      [0, 0.5],
      ["var(--color-neutral)", "var(--color-scheme-text)"],
    ),
  };
  return (
    <div className="absolute flex h-full w-8 items-start justify-center md:-ml-24 md:w-24 lg:-ml-32 lg:w-32">
      <motion.div
        ref={circleRef}
        style={backgroundColor}
        className="z-20 mt-7 size-4 rounded-full shadow-[0_0_0_8px_var(--color-scheme-background)] md:mt-8"
      />
    </div>
  );
};

export function Timeline1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="relative grid auto-cols-fr grid-cols-1 items-start justify-center gap-6 sm:gap-12 md:grid-cols-2 md:gap-24 lg:gap-32">
          <div className="relative top-0 z-10 md:sticky md:top-20 md:z-auto md:pr-4">
            <p className="mb-3 font-semibold md:mb-4">Journey</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
              The Contractor's Journey with Bizzie
            </h1>
            <p className="text-medium">
              Follow the journey of a contractor using Bizzie. From tracking
              expenses to optimizing service pricing, see how Bizzie transforms
              operations.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn" variant="secondary">
                Learn
              </Button>
              <Button
                title="Explore"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Explore
              </Button>
            </div>
          </div>
          <div className="absolute z-0 flex h-full w-8 flex-col items-center justify-self-start [grid-area:2/1/3/2] md:z-auto md:justify-self-center md:[grid-area:auto]">
            <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-scheme-background to-transparent" />
            <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-scheme-text" />
            <div className="h-full w-[3px] bg-scheme-text/20" />
            <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-scheme-background" />
            <div className="absolute top-[-50vh] h-[50vh] w-full bg-scheme-background" />
          </div>
          <div className="grid auto-cols-fr gap-x-12 gap-y-8 sm:gap-y-12 md:gap-x-20 md:gap-y-20">
            <div className="relative">
              <Circle />
              <div className="mt-4 ml-12 flex flex-col md:ml-0">
                <h2 className="heading-h3 mb-3 font-bold md:mb-4">Day 1</h2>
                <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                  Start Tracking Expenses
                </h3>
                <p>
                  On the first day, the contractor logs all expenses using
                  Bizzie. This initial step sets the foundation for better
                  financial management.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Next" variant="secondary">
                    Next
                  </Button>
                  <Button
                    title="View"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="mt-4 ml-12 flex flex-col md:ml-0">
                <h2 className="heading-h3 mb-3 font-bold md:mb-4">Week 2</h2>
                <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                  Refine Service Pricing
                </h3>
                <p>
                  By the second week, the contractor uses Bizzie to analyze
                  service pricing. Adjustments are made based on real-time data
                  and insights.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Continue" variant="secondary">
                    Continue
                  </Button>
                  <Button
                    title="Update"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="mt-4 ml-12 flex flex-col md:ml-0">
                <h2 className="heading-h3 mb-3 font-bold md:mb-4">Month 1</h2>
                <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                  Analyze Profitability
                </h3>
                <p>
                  At the end of the first month, the contractor reviews
                  profitability reports. This analysis reveals trends and areas
                  for improvement.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Review" variant="secondary">
                    Review
                  </Button>
                  <Button
                    title="Check"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Check
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="mt-4 ml-12 flex flex-col md:ml-0">
                <h2 className="heading-h3 mb-3 font-bold md:mb-4">Quarter 1</h2>
                <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                  Optimize Operations
                </h3>
                <p>
                  By the end of the first quarter, the contractor has
                  streamlined operations. Continuous adjustments lead to
                  increased efficiency and profitability.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Finish" variant="secondary">
                    Finish
                  </Button>
                  <Button
                    title="Done"
                    variant="link"
                    size="link"
                    iconRight={<ChevronRight className="text-scheme-text" />}
                  >
                    Done
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
