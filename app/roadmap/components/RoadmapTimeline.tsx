"use client";

import { Button } from "@relume_io/relume-ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { ChevronRight } from "relume-icons";

const useTabAnimation = ({ tabs }: { tabs: any[] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const isTabActive = (index: number) => {
    const activeIndex = tabs.findIndex((tab) => tab.value === activeTab);
    return index <= activeIndex;
  };

  const progressWidth = () => {
    const activeIndex = tabs.findIndex((tab) => tab.value === activeTab);
    return `${(100 / (tabs.length * 2)) * (activeIndex * 2 + 1)}%`;
  };

  const circleClassName = (index: number) => {
    return `z-20 flex size-[0.9375rem] flex-none items-center justify-center rounded-full shadow-[0_0_0_8px_white] transition-colors duration-300 ${
      isTabActive(index) ? "bg-scheme-text" : "bg-scheme-text/20"
    }`;
  };

  const triggerClassName = (index: number) => {
    return `relative flex flex-1 flex-col items-center justify-center gap-2 border-0 px-0 transition-colors duration-300 data-[state=active]:bg-transparent ${
      isTabActive(index)
        ? "data-[state=active]:text-scheme-text"
        : "text-scheme-text/20"
    }`;
  };

  return {
    activeTab,
    setActiveTab,
    progressWidth,
    circleClassName,
    triggerClassName,
  };
};

export function RoadmapTimeline() {
  const tabAnimation = useTabAnimation({
    tabs: [
      {
        value: "tab-one",
        trigger: "Date",
        content: {
          date: "Date",
          heading: "Long heading is what you see here in this feature section",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 1",
          },
        },
      },
      {
        value: "tab-two",
        trigger: "Date",
        content: {
          date: "Date",
          heading: "Long heading is what you see here in this feature section",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 2",
          },
        },
      },
      {
        value: "tab-three",
        trigger: "Date",
        content: {
          date: "Date",
          heading: "Long heading is what you see here in this feature section",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 3",
          },
        },
      },
      {
        value: "tab-four",
        trigger: "Date",
        content: {
          date: "Date",
          heading: "Long heading is what you see here in this feature section",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 4",
          },
        },
      },
      {
        value: "tab-five",
        trigger: "Date",
        content: {
          date: "Date",
          heading: "Long heading is what you see here in this feature section",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <ChevronRight className="text-scheme-text" />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 5",
          },
        },
      },
    ],
  });
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative container">
        <div
          className="absolute bottom-[99px] z-10 h-[3px] bg-scheme-text transition-[width] duration-300 md:bottom-[58px]"
          style={{ width: tabAnimation.progressWidth() }}
        />
        <Tabs
          defaultValue="tab-one"
          onValueChange={tabAnimation.setActiveTab}
          className="relative flex flex-col"
        >
          <TabsContent
            value="tab-one"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="heading-h3 mb-3 font-bold md:mb-4">Q3</h3>
              <h4 className="heading-h4 mb-5 font-bold md:mb-6">
                Upcoming Features for Q3 2025: What to Expect
              </h4>
              <p className="text-medium">
                In Q3 2025, we will introduce advanced analytics tools. These
                features will empower users to make data-driven decisions with
                ease.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Explore" variant="secondary">
                  Explore
                </Button>
                <Button
                  title="Learn"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Learn
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="heading-h3 mb-3 font-bold md:mb-4">Q4</h3>
              <h4 className="heading-h4 mb-5 font-bold md:mb-6">
                Enhancements Coming in Q4 2025: Get Ready for More
              </h4>
              <p className="text-medium">
                Q4 2025 will focus on mobile enhancements for on-the-go access.
                Expect features that streamline your workflow directly from your
                device.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Join" variant="secondary">
                  Join
                </Button>
                <Button
                  title="Sign"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Sign
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 2"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="heading-h3 mb-3 font-bold md:mb-4">Beyond</h3>
              <h4 className="heading-h4 mb-5 font-bold md:mb-6">
                Future Features Beyond 2025: Our Vision for Growth
              </h4>
              <p className="text-medium">
                Looking ahead, we aim to integrate more third-party tools. This
                will enhance collaboration and efficiency for our users.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Discover" variant="secondary">
                  Discover
                </Button>
                <Button
                  title="Submit"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Submit
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 3"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-four"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="heading-h3 mb-3 font-bold md:mb-4">Q3</h3>
              <h4 className="heading-h4 mb-5 font-bold md:mb-6">
                Feature Updates for Q3: What’s New and Improved
              </h4>
              <p className="text-medium">
                In Q3, we will enhance our job costing dashboards. Users can
                expect more intuitive navigation and insights.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Explore" variant="secondary">
                  Explore
                </Button>
                <Button
                  title="Learn"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Learn
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 4"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-five"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="heading-h3 mb-3 font-bold md:mb-4">Q4</h3>
              <h4 className="heading-h4 mb-5 font-bold md:mb-6">
                Q4 Feature Rollout: Enhancements You Can Look Forward To
              </h4>
              <p className="text-medium">
                Expect significant updates in our mobile app for Q4. These will
                improve user experience and accessibility.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Join" variant="secondary">
                  Join
                </Button>
                <Button
                  title="Sign"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Sign
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 5"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsList className="relative mt-16 mb-12 ml-[-5vw] scrollbar-none flex w-screen items-center justify-start border-b border-b-transparent px-[5vw] md:mb-0 md:ml-0 md:w-auto md:justify-between md:px-0">
            <TabsTrigger
              value="tab-one"
              className={tabAnimation.triggerClassName(0)}
            >
              <div className="absolute top-3.5 left-0 z-20 h-[6px] w-16 bg-gradient-to-l from-transparent to-scheme-background" />
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-scheme-text/20" />
                <div className={tabAnimation.circleClassName(0)} />
                <div className="h-[3px] w-full bg-scheme-text/20" />
              </div>
              <span className="heading-h5 font-bold">Q4</span>
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className={tabAnimation.triggerClassName(1)}
            >
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-scheme-text/20" />
                <div className={tabAnimation.circleClassName(1)} />
                <div className="h-[3px] w-full bg-scheme-text/20" />
              </div>
              <span className="heading-h5 font-bold">Q4</span>
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className={tabAnimation.triggerClassName(2)}
            >
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-scheme-text/20" />
                <div className={tabAnimation.circleClassName(2)} />
                <div className="h-[3px] w-full bg-scheme-text/20" />
              </div>
              <span className="heading-h5 font-bold">Q4</span>
            </TabsTrigger>
            <TabsTrigger
              value="tab-four"
              className={tabAnimation.triggerClassName(3)}
            >
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-scheme-text/20" />
                <div className={tabAnimation.circleClassName(3)} />
                <div className="h-[3px] w-full bg-scheme-text/20" />
              </div>
              <span className="heading-h5 font-bold">Q4</span>
            </TabsTrigger>
            <TabsTrigger
              value="tab-five"
              className={tabAnimation.triggerClassName(4)}
            >
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-scheme-text/20" />
                <div className={tabAnimation.circleClassName(4)} />
                <div className="h-[3px] w-full bg-scheme-text/20" />
              </div>
              <span className="heading-h5 font-bold">Q4</span>
              <div className="absolute top-3.5 right-0 z-0 h-2 w-16 bg-gradient-to-r from-transparent to-scheme-background" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}
