"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useState } from "react";
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
  image: string;
}

export function RoadmapTimeline() {
  const [selectedItem, setSelectedItem] = useState("q1-2025");

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
      ctaLink: "/features",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
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
      ctaLink: "/pricing",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    },
    {
      id: "q2-2025",
      period: "Q2 2025",
      status: "planned",
      title: "Mobile App & Field Management",
      description: "Take Bizzie on the go with our mobile app designed for field workers and managers.",
      features: [
        "iOS & Android apps",
        "Offline functionality",
        "Job site check-ins",
        "Photo attachments"
      ],
      ctaText: "Request Early Access",
      ctaLink: "#",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    },
    {
      id: "q3-2025",
      period: "Q3 2025",
      status: "planned",
      title: "Integrations & Automation",
      description: "Connect Bizzie with your existing tools and automate repetitive tasks.",
      features: [
        "QuickBooks integration",
        "Bank account sync",
        "Automated invoicing",
        "API access"
      ],
      ctaText: "Stay Updated",
      ctaLink: "#",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    },
    {
      id: "q4-2025",
      period: "Q4 2025",
      status: "planned",
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence to get personalized recommendations for your business.",
      features: [
        "Predictive analytics",
        "Smart cost optimization",
        "Automated categorization",
        "Business health scoring"
      ],
      ctaText: "Learn More",
      ctaLink: "#",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
    }
  ];

  const getStatusIcon = (status: TimelineItem['status']) => {
    switch (status) {
      case 'completed':
        return (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        );
      case 'in-progress':
        return (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        );
      case 'planned':
        return (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
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
        return 'bg-gray-300';
    }
  };

  const selectedItemData = timelineItems.find(item => item.id === selectedItem) || timelineItems[1];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-light-accent">
      <div className="container">
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 font-bold md:mb-6 text-bizzie-900 leading-tight">
            Our Product <span className="text-bizzie-600">Roadmap</span>
          </h2>
          <p className="text-lg text-bizzie-700 max-w-2xl mx-auto leading-relaxed">
            Follow our journey as we build the future of financial management for home-service businesses.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="relative mb-16">
          {/* Progress Line */}
          <div className="absolute top-8 left-0 w-full h-1 bg-bizzie-200 rounded-full">
            <div 
              className="h-full bg-bizzie-600 rounded-full transition-all duration-500"
              style={{ 
                width: `${((timelineItems.findIndex(item => item.id === selectedItem) + 1) / timelineItems.length) * 100}%` 
              }}
            />
          </div>

          {/* Timeline Items */}
          <div className="flex justify-between items-center relative">
            {timelineItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item.id)}
                className={`flex flex-col items-center group transition-all duration-300 ${
                  selectedItem === item.id ? 'transform scale-110' : 'hover:scale-105'
                }`}
              >
                {/* Circle */}
                <div 
                  className={`w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-300 ${
                    selectedItem === item.id 
                      ? getStatusColor(item.status) + ' ring-4 ring-bizzie-200' 
                      : getStatusColor(item.status) + ' opacity-60'
                  }`}
                >
                  {getStatusIcon(item.status)}
                </div>
                
                {/* Label */}
                <div className="mt-4 text-center">
                  <p className={`font-semibold text-sm transition-colors duration-300 ${
                    selectedItem === item.id ? 'text-bizzie-900' : 'text-bizzie-600'
                  }`}>
                    {item.period}
                  </p>
                  <p className={`text-xs mt-1 capitalize transition-colors duration-300 ${
                    selectedItem === item.id ? 'text-bizzie-700' : 'text-bizzie-500'
                  }`}>
                    {item.status.replace('-', ' ')}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Item Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                selectedItemData.status === 'completed' ? 'bg-green-100 text-green-800' :
                selectedItemData.status === 'in-progress' ? 'bg-bizzie-100 text-bizzie-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {getStatusIcon(selectedItemData.status)}
                <span className="ml-2 capitalize">{selectedItemData.status.replace('-', ' ')}</span>
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-bizzie-900 mb-4">
              {selectedItemData.title}
            </h3>

            <p className="text-lg text-bizzie-700 mb-6 leading-relaxed">
              {selectedItemData.description}
            </p>

            <div className="mb-8">
              <h4 className="font-semibold text-bizzie-900 mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {selectedItemData.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-bizzie-700">
                    <svg className="w-5 h-5 text-bizzie-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="primary" className="btn-primary rounded-lg">
                <Link href={selectedItemData.ctaLink}>
                  {selectedItemData.ctaText}
                </Link>
              </Button>
              <Button asChild variant="link" size="link">
                <Link href="/features" className="inline-flex items-center text-bizzie-600 hover:text-bizzie-700">
                  View All Features
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={selectedItemData.image}
                alt={`${selectedItemData.title} preview`}
                className="w-full rounded-xl shadow-soft-lg border border-bizzie-200"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bizzie-900/20 to-transparent rounded-xl" />
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-16 pt-8 border-t border-bizzie-200">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-bizzie-700">Completed</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-bizzie-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-bizzie-700">In Progress</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-bizzie-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-bizzie-700">Planned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}