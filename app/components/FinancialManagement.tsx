"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight } from "relume-icons";
import { ContactForm } from "./ui/contact-form";
import Link from "next/link";

export function FinancialManagement() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-neutral">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-small">Simplify</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-5 font-bold md:mb-6">
              Your Financial Management Made Effortless
            </h1>
            <p className="text-lg">
              Bizzie's unified expense dashboard transforms your bookkeeping
              experience. Gain real-time visibility into your costs and uncover
              actionable insights to boost your profitability.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button asChild variant="secondary" className="btn-secondary rounded-lg">
                <Link href="/features">
                  Learn More
                </Link>
              </Button>
              <ContactForm 
                triggerText="Join Waitlist" 
                title="Join the Bizzie Waitlist"
                description="Get early access to Bizzie's financial management tools for home-service businesses."
                variant="bizzie"
                size="md"
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
