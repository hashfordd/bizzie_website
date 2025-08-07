"use client";

import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from "relume-icons";

export function Footer3() {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 bg-sage-900 text-sage-100">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                  alt="Logo image"
                  className="inline-block"
                />
              </a>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="text-small mb-1 font-semibold text-sage-300">Address:</p>
              <p className="text-small mb-5 md:mb-6 text-sage-200">
                Level 1, 12 Sample St, Sydney NSW 2000
              </p>
              <p className="text-small mb-1 font-semibold text-sage-300">Contact:</p>
              <a
                href="tel:1800 123 4567"
                className="text-small block underline text-sage-200 hover:text-sage-100 transition-colors"
              >
                1800 123 4567
              </a>
              <a
                href="mailto:info@bizzie.io"
                className="text-small block underline text-sage-200 hover:text-sage-100 transition-colors"
              >
                info@bizzie.io
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="#" className="hover:scale-110 transition-transform">
                <FacebookLogo className="size-6 text-sage-400 hover:text-sage-300" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <InstagramLogo className="size-6 text-sage-400 hover:text-sage-300" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <XLogo className="size-6 p-0.5 text-sage-400 hover:text-sage-300" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <LinkedinLogo className="size-6 text-sage-400 hover:text-sage-300" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <YoutubeLogo className="size-6 text-sage-400 hover:text-sage-300" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="text-small py-2 font-semibold">
                <a href="#">About Us</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">Services</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">Testimonials</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">Blog</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <ul>
              <li className="text-small py-2 font-semibold">
                <a href="#">Support Center</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">FAQs</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">Careers</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-scheme-border" />
        <div className="text-small flex flex-col-reverse items-start justify-between pt-6 pb-4 md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-8 md:mt-0">© 2024 Relume. All rights reserved.</p>
          <ul className="text-small grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="underline">
              <a href="#">Terms of Service</a>
            </li>
            <li className="underline">
              <a href="#">Cookie Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
