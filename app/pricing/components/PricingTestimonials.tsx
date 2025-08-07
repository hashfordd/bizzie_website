"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";
import { StarFull } from "relume-icons";

const useCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index: number) => {
    return `relative mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-scheme-text" : "bg-scheme-text/20"
    }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function PricingTestimonials() {
  const carouselState = useCarousel();
  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <Carousel
          setApi={carouselState.setApi}
          opts={{ loop: true, align: "start" }}
          className="overflow-hidden"
        >
          <div className="relative pb-12 md:pb-16 lg:px-8">
            <CarouselContent className="ml-0">
              <CarouselItem className="pl-0 md:px-16 lg:px-6">
                <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center text-center">
                  <div className="mb-6 flex md:mb-8">
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                  </div>
                  <blockquote className="heading-h5 font-bold">
                    "Bizzie has transformed how we manage our costs. The pricing
                    plans are not only affordable but have significantly
                    improved our profitability."
                  </blockquote>
                  <div className="mt-6 flex w-full flex-col items-center gap-3 text-center md:mt-8 md:w-auto md:flex-row md:gap-5 md:text-left">
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Testimonial avatar 1"
                        className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                      />
                    </div>
                    <div className="mb-4 md:mb-0">
                      <p className="font-semibold">John Doe</p>
                      <p>Owner, Lawn Care</p>
                    </div>
                    <div className="hidden w-px self-stretch bg-scheme-border md:block" />
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                        alt="Webflow logo 1"
                        className="max-h-12"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-0 md:px-16 lg:px-6">
                <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center text-center">
                  <div className="mb-6 flex md:mb-8">
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                    <StarFull className="size-6 text-scheme-text" />
                  </div>
                  <blockquote className="heading-h5 font-bold">
                    "Bizzie has transformed how we manage our costs. The pricing
                    plans are not only affordable but have significantly
                    improved our profitability."
                  </blockquote>
                  <div className="mt-6 flex w-full flex-col items-center gap-3 text-center md:mt-8 md:w-auto md:flex-row md:gap-5 md:text-left">
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Testimonial avatar 1"
                        className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                      />
                    </div>
                    <div className="mb-4 md:mb-0">
                      <p className="font-semibold">John Doe</p>
                      <p>Owner, Lawn Care</p>
                    </div>
                    <div className="hidden w-px self-stretch bg-scheme-border md:block" />
                    <div>
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                        alt="Webflow logo 1"
                        className="max-h-12"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex md:size-14" />
            <CarouselNext className="hidden md:flex md:size-14" />
            <div className="absolute right-0 bottom-0 left-0 z-20 flex h-7 justify-center pt-2.5">
              <button
                onClick={carouselState.handleDotClick(0)}
                className={carouselState.dotClassName(0)}
              />
              <button
                onClick={carouselState.handleDotClick(1)}
                className={carouselState.dotClassName(1)}
              />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
