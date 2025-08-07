"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ContactForm } from "./ui/contact-form";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-accent">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 font-bold md:mb-6 text-bizzie-900 leading-tight">
              Unlock Your Business <span className="text-bizzie-600">Potential</span>
            </h2>
            <p className="text-lg text-bizzie-700 leading-relaxed">
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
              <Button asChild variant="secondary" className="btn-secondary rounded-lg">
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
