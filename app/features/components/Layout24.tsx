"use client";

import React from "react";
import { RelumeIcon } from "relume-icons";

export function Layout24() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 md:mb-6">
              <RelumeIcon className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h3 mb-5 font-bold md:mb-6">
              Explore Our Dedicated Pages for Enhanced Business Management and
              Insights
            </h3>
            <p className="text-medium">
              Bizzie offers dedicated pages for Employees, Equipment, Expenses,
              and Services, allowing you to drill down into each area with ease.
              This streamlined approach ensures you have all the information you
              need at your fingertips to make informed decisions and optimize
              your operations.
            </p>
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
