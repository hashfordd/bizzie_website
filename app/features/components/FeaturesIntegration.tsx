"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight, RelumeIcon } from "relume-icons";
import { ContactForm } from "../../components/ui/contact-form";
import Link from "next/link";

export function FeaturesIntegration() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Dashboard</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
              Your Metrics, Your Way: Customizable Dashboard
            </h1>
            <p className="text-medium mb-5 md:mb-6">
              Experience the power of a responsive dashboard that adapts to your
              needs. Customize widgets to track revenue, costs, profit, and
              pending jobs effortlessly.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <RelumeIcon className="size-6 text-scheme-text" />
                </div>
                <span>Access key metrics on desktop and mobile devices.</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <RelumeIcon className="size-6 text-scheme-text" />
                </div>
                <span>Stay informed with real-time financial insights.</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <RelumeIcon className="size-6 text-scheme-text" />
                </div>
                <span>Make data-driven decisions anytime, anywhere.</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button asChild variant="secondary" className="btn-secondary rounded-lg">
                <Link href="/features">
                  Learn More
                </Link>
              </Button>
              <ContactForm 
                triggerText="Sign Up" 
                title="Get Started with Integrations"
                description="Connect your existing tools with Bizzie for seamless workflow automation."
                variant="ghost"
                size="sm"
              />
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
