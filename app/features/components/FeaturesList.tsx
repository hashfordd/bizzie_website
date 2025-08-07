"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight } from "relume-icons";
import { ContactForm } from "../../components/ui/contact-form";
import Link from "next/link";

export function FeaturesList() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Simplified</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
              Experience Seamless Financial Management with Bizzie
            </h1>
            <p className="text-medium mb-6 md:mb-8">
              Bizzie transforms bookkeeping into a streamlined process. Our
              unified expense dashboard offers real-time insights into all
              operational costs.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Real-Time Insights
                </h6>
                <p>
                  Visualize your expenses and make informed decisions
                  effortlessly.
                </p>
              </div>
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Effortless Tracking
                </h6>
                <p>Capture every cost and allocate resources effectively.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button asChild variant="secondary" className="btn-secondary rounded-lg">
                <Link href="/features">
                  Learn More
                </Link>
              </Button>
              <ContactForm 
                triggerText="Sign Up" 
                title="Experience Seamless Management"
                description="Get started with Bizzie's unified expense dashboard and real-time insights."
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
