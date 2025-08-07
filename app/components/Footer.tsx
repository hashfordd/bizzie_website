"use client";

import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "relume-icons";

export function Footer() {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 footer-enhanced">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                  alt="Bizzie Logo"
                  className="h-8 w-auto transition-opacity duration-200 hover:opacity-80"
                />
              </a>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="text-small mb-1 font-semibold text-bizzie-300">Address:</p>
              <p className="text-small mb-5 md:mb-6 text-bizzie-200">
                Melbourne, Victoria
              </p>
              <p className="text-small mb-1 font-semibold text-bizzie-300">Contact:</p>
              <a
                href="tel:0498958232"
                className="text-small block underline text-bizzie-200 hover:text-bizzie-100 transition-colors"
              >
                0498 958 232
              </a>
              <a
                href="mailto:admin@bizzieapp.com"
                className="text-small block underline text-bizzie-200 hover:text-bizzie-100 transition-colors"
              >
                admin@bizzieapp.com
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="#" className="hover:scale-110 transition-transform">
                <FacebookLogo className="size-6 text-bizzie-300 hover:text-white transition-colors duration-200" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <InstagramLogo className="size-6 text-bizzie-300 hover:text-white transition-colors duration-200" />
              </a>

              <a href="#" className="hover:scale-110 transition-transform">
                <LinkedinLogo className="size-6 text-bizzie-300 hover:text-white transition-colors duration-200" />
              </a>

            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="text-small py-2 font-semibold">
                <a href="/about">About Us</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="/features">Features</a>
              </li>

              <li className="text-small py-2 font-semibold">
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
            <ul>
              <li className="text-small py-2 font-semibold">
                <a href="/support">Support Center</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="/faq">FAQs</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="/careers">Careers</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="/terms">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-scheme-border" />
        <div className="text-small flex flex-col-reverse items-start justify-between pt-6 pb-4 md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-8 md:mt-0">© 2024 Bizzie. All rights reserved.</p>
          <ul className="text-small grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li className="underline">
              <a href="/terms">Terms of Service</a>
            </li>
            <li className="underline">
              <a href="/cookies">Cookie Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
