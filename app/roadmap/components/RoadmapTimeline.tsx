"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { ChevronRight } from "relume-icons";
import Link from "next/link";

interface TimelineItem {
  id: string;
  period: string;
  status: 'completed' | 'in-progress' | 'planned';
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export function RoadmapTimeline() {
  const timelineItems: TimelineItem[] = [
    {
      id: "q4-2024",
      period: "Q4 2024",
      status: "completed",
      title: "Foundation & Core Features",
      description: "Established the core infrastructure for Bizzie with essential financial management tools.",
      features: [
        "Basic expense tracking",
        "Invoice generation", 
        "Customer management",
        "Initial dashboard"
      ],
      ctaText: "View Features",
      ctaLink: "/features"
    },
    {
      id: "q1-2025",
      period: "Q1 2025",
      status: "in-progress",
      title: "Advanced Analytics & Reporting",
      description: "Powerful business intelligence tools to help you understand your financial performance.",
      features: [
        "Profit margin analysis",
        "Cash flow forecasting",
        "Custom report builder",
        "Performance dashboards"
      ],
      ctaText: "Join Beta",
      ctaLink: "/contact"
    },
    {
      id: "q2-2025",
      period: "Q2 2025",
      status: "planned",
      title: "Mobile App & Field Management",
      description: "Take your business management on the go with our mobile application.",
      features: [
        "Mobile expense tracking",
        "Field service management",
        "Real-time sync",
        "Offline capabilities"
      ],
      ctaText: "Get Early Access",
      ctaLink: "/contact"
    },
    {
      id: "q3-2025",
      period: "Q3 2025",
      status: "planned",
      title: "Integrations & Automation",
      description: "Connect with your favorite tools and automate repetitive tasks.",
      features: [
        "QuickBooks integration",
        "Payment gateway sync",
        "Automated workflows",
        "API access"
      ],
      ctaText: "Learn More",
      ctaLink: "/features"
    },
    {
      id: "q4-2025",
      period: "Q4 2025",
      status: "planned",
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence for predictive analytics and smart recommendations.",
      features: [
        "Predictive forecasting",
        "Smart recommendations",
        "Automated insights",
        "Performance optimization"
      ],
      ctaText: "Stay Updated",
      ctaLink: "/contact"
    }
  ];

  const getStatusIcon = (status: TimelineItem['status']) => {
    switch (status) {
      case 'completed':
        return (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        );
      case 'in-progress':
        return (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        );
      case 'planned':
        return (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getStatusColor = (status: TimelineItem['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-bizzie-600';
      case 'planned':
        return 'bg-bizzie-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusBadgeStyles = (status: TimelineItem['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
      case 'in-progress':
        return 'bg-bizzie-100 text-bizzie-800 dark:bg-bizzie-700 dark:text-bizzie-100';
      case 'planned':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100';
    }
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-light-accent">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-bizzie-900 dark:text-white mb-4">
            Our Product Roadmap
          </h2>
          <p className="text-center text-lg text-bizzie-700 dark:text-bizzie-200 max-w-2xl mx-auto">
            Follow our journey as we build the future of financial management for home-service businesses.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 md:space-y-12">
          {timelineItems.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Timeline line */}
              {index < timelineItems.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-bizzie-200 dark:bg-bizzie-600"></div>
              )}
              
              {/* Timeline item */}
              <div className="flex gap-6">
                {/* Status icon */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getStatusColor(item.status)} z-10`}>
                  {getStatusIcon(item.status)}
                </div>
                
                {/* Content */}
                <div className="bg-white dark:bg-bizzie-800 rounded-xl p-6 shadow-soft-lg flex-1 border border-bizzie-200 dark:border-bizzie-700">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeStyles(item.status)}`}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1).replace('-', ' ')}
                        </span>
                        <span className="text-sm font-semibold text-bizzie-600 dark:text-bizzie-300">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-bizzie-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-bizzie-700 dark:text-bizzie-200 mb-4">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-bizzie-900 dark:text-white mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-bizzie-700 dark:text-bizzie-200">
                          <svg className="w-4 h-4 text-bizzie-600 dark:text-bizzie-300 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button asChild variant="primary" className="btn-primary rounded-lg">
                    <Link href={item.ctaLink}>
                      {item.ctaText}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-16 pt-8 border-t border-bizzie-200 dark:border-bizzie-700">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <span className="text-bizzie-700 dark:text-bizzie-200">Completed</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-bizzie-600 rounded-full mr-2"></div>
              <span className="text-bizzie-700 dark:text-bizzie-200">In Progress</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-bizzie-400 rounded-full mr-2"></div>
              <span className="text-bizzie-700 dark:text-bizzie-200">Planned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}