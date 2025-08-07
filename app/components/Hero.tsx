"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ContactForm } from "./ui/contact-form";
import Link from "next/link";

export function Hero() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-subtle">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with <span className="text-bizzie-accent">Bizzie</span> Today
            </h1>
          </div>
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <p className="text-lg mb-8 leading-relaxed">
              Take control of your financial health with Bizzie, the ultimate
              profit coach for home-service businesses. Streamline your
              operations and maximize your profits effortlessly.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button asChild variant="primary" className="btn-primary rounded-lg">
                <Link href="/pricing">
                  Get Started
                </Link>
              </Button>
              <Button asChild variant="secondary" className="btn-secondary rounded-lg">
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
