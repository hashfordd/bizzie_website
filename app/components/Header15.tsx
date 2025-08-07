"use client";

import React from "react";
import { ContactForm } from "./ui/contact-form";
import { Button } from "./ui/button";
import Link from "next/link";

export function Header15() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-subtle">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <div className="animate-slide-up">
            <h1 className="heading-h1 font-bold text-foreground mb-6">
              Transform Your Business with <span className="text-primary">Bizzie</span> Today
            </h1>
          </div>
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <p className="text-medium text-muted-foreground mb-8">
              Take control of your financial health with Bizzie, the ultimate
              profit coach for home-service businesses. Streamline your
              operations and maximize your profits effortlessly.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <ContactForm 
                triggerText="Get Started" 
                title="Start Your Bizzie Journey"
                description="Ready to transform your business? Let's discuss how Bizzie can help you achieve your financial goals."
                variant="bizzie"
                size="lg"
              />
              <Button asChild variant="outline" size="lg">
                <Link href="/features">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="image-enhanced w-full object-cover"
            alt="Bizzie dashboard preview"
          />
        </div>
      </div>
    </section>
  );
}
