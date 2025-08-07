"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ContactForm } from "../../components/ui/contact-form";
import Link from "next/link";

export function PricingCallToAction() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-medium-accent">
      <div className="container grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <h2 className="heading-h3 mb-3 font-bold md:mb-4">
              Unlock Your Business Potential
            </h2>
            <p className="text-medium">
              Start your free trial today and boost profits!
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
          <ContactForm 
            triggerText="Sign Up" 
            title="Start Your Free Trial"
            description="Ready to transform your business? Let's get you started with Bizzie today."
            variant="bizzie"
            size="md"
          />
          <Button asChild variant="secondary" className="btn-secondary rounded-lg">
            <Link href="/features">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
