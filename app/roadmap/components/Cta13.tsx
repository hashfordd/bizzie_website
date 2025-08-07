"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta13() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <div>
          <h1 className="heading-h2 font-bold">Stay Updated on Our Progress</h1>
        </div>
        <div>
          <p className="text-medium">
            Join our community to be the first to know about exciting new
            features and enhancements. Your feedback is invaluable in shaping
            the future of Bizzie.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Join">Join</Button>
            <Button title="Feedback" variant="secondary">
              Feedback
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
