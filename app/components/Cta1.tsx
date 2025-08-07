"use client";

import React from "react";
import { ContactForm } from "./ui/contact-form";
import { Button } from "./ui/button";
import Link from "next/link";

export function Cta1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-accent">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="animate-slide-up">
            <h2 className="heading-h2 mb-5 font-bold md:mb-6 text-foreground">
              Unlock Your Business <span className="text-primary">Potential</span>
            </h2>
            <p className="text-medium text-muted-foreground">
              Experience the power of Bizzie—your partner in achieving financial
              clarity and business growth.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <ContactForm 
                triggerText="Start Today" 
                title="Ready to Get Started?"
                description="Join thousands of businesses already transforming their operations with Bizzie."
                variant="bizzie"
                size="lg"
              />
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">
                  View Demo
                </Link>
              </Button>
            </div>
          </div>
          <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="image-enhanced w-full object-cover animate-float"
              alt="Bizzie success story"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
