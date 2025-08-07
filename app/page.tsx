"use client";

import React from "react";
import { Navbar2 } from "./components/Navbar2";
import { Header15 } from "./components/Header15";
import { Layout1 } from "./components/Layout1";
import { Layout246 } from "./components/Layout246";
import { Layout18 } from "./components/Layout18";
import { Layout4 } from "./components/Layout4";
import { Timeline1 } from "./components/Timeline1";
import { Cta1 } from "./components/Cta1";
import { Footer3 } from "./components/Footer3";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function Page() {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen">
      <Navbar2 />
      <Header15 />
      <div className="animate-on-scroll">
        <Layout1 />
      </div>
      <div className="animate-on-scroll">
        <Layout246 />
      </div>
      <div className="animate-on-scroll">
        <Layout18 />
      </div>
      <div className="animate-on-scroll">
        <Layout4 />
      </div>
      <div className="animate-on-scroll">
        <Timeline1 />
      </div>
      <div className="animate-on-scroll">
        <Cta1 />
      </div>
      <Footer3 />
    </div>
  );
}
