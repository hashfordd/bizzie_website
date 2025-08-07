"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface TimelineItem {
  id: string;
  period: string;
  quarter: string;
  year: string;
  status: 'completed' | 'in-progress' | 'planned';
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  completionPercentage?: number;
}

export function RoadmapTimeline() {
  const [selectedItem, setSelectedItem] = useState(1); // Start with Q1 2025 (in-progress)
  
  const timelineItems: TimelineItem[] = [
    {
      id: "q4-2024",
      period: "Q4 2024",
      quarter: "Q4",
      year: "2024",
      status: "completed",
      title: "Foundation & Core Features",
      description: "Established the core infrastructure for Bizzie with essential financial management tools and user experience fundamentals.",
      features: [
        "Basic expense tracking system",
        "Invoice generation & management", 
        "Customer relationship management",
        "Initial financial dashboard"
      ],
      ctaText: "View Features",
      ctaLink: "/features",
      completionPercentage: 100
    },
    {
      id: "q1-2025",
      period: "Q1 2025",
      quarter: "Q1",
      year: "2025",
      status: "in-progress",
      title: "Advanced Analytics & Reporting",
      description: "Powerful business intelligence tools to help you understand your financial performance with actionable insights and predictive capabilities.",
      features: [
        "Profit margin analysis & trends",
        "Cash flow forecasting models",
        "Custom report builder",
        "Performance dashboards",
        "Automated insights & alerts"
      ],
      ctaText: "Join Beta",
      ctaLink: "/contact",
      completionPercentage: 65
    },
    {
      id: "q2-2025",
      period: "Q2 2025",
      quarter: "Q2",
      year: "2025",
      status: "planned",
      title: "Mobile App & Field Management",
      description: "Take your business management on the go with our comprehensive mobile application and field service management tools.",
      features: [
        "Native mobile expense tracking",
        "Field service management",
        "Real-time synchronization",
        "Offline capabilities",
        "GPS-based job tracking"
      ],
      ctaText: "Get Early Access",
      ctaLink: "/contact"
    },
    {
      id: "q3-2025",
      period: "Q3 2025",
      quarter: "Q3",
      year: "2025",
      status: "planned",
      title: "Integrations & Automation",
      description: "Seamlessly connect with your favorite tools and automate repetitive tasks to streamline your entire business workflow.",
      features: [
        "QuickBooks & Xero integration",
        "Payment gateway synchronization",
        "Automated workflow engine",
        "REST API access",
        "Third-party app marketplace"
      ],
      ctaText: "Learn More",
      ctaLink: "/features"
    },
    {
      id: "q4-2025",
      period: "Q4 2025",
      quarter: "Q4",
      year: "2025",
      status: "planned",
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence for predictive analytics, smart recommendations, and intelligent business optimization.",
      features: [
        "Predictive financial forecasting",
        "AI-driven recommendations",
        "Automated pattern recognition",
        "Performance optimization suggestions",
        "Natural language queries"
      ],
      ctaText: "Stay Updated",
      ctaLink: "/contact"
    }
  ];

  const getStatusConfig = (status: TimelineItem['status']) => {
    switch (status) {
      case 'completed':
        return {
          dotColor: 'bg-emerald-500 border-emerald-300',
          dotSize: 'w-4 h-4',
          isActive: true
        };
      case 'in-progress':
        return {
          dotColor: 'bg-blue-500 border-blue-300',
          dotSize: 'w-5 h-5',
          isActive: true
        };
      case 'planned':
        return {
          dotColor: 'bg-gray-300 border-gray-200 dark:bg-gray-600 dark:border-gray-500',
          dotSize: 'w-4 h-4',
          isActive: false
        };
      default:
        return {
          dotColor: 'bg-gray-300 border-gray-200',
          dotSize: 'w-4 h-4',
          isActive: false
        };
    }
  };

  return (
    <section className="roadmap-timeline-light py-16 md:py-24 bg-blue-50/30 dark:bg-gray-900">
      <div className="container max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Product Roadmap
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Follow our journey as we build the future of financial management for home-service businesses.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-600"></div>
          
          {/* Progress Line */}
          <motion.div
            className="absolute top-4 left-0 h-0.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-gray-200"
            initial={{ width: 0 }}
            animate={{ width: `${((selectedItem + 1) / timelineItems.length) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          ></motion.div>

          {/* Timeline Checkpoints */}
          <div className="relative flex justify-between items-center">
            {timelineItems.map((item, index) => {
              const config = getStatusConfig(item.status);
              const isSelected = selectedItem === index;
              
              return (
                <motion.div
                  key={item.id}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => setSelectedItem(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Checkpoint Dot */}
                  <motion.div
                    className={`${config.dotSize} rounded-full border-4 border-white dark:border-gray-900 ${config.dotColor} shadow-lg z-10 relative`}
                    animate={{
                      scale: isSelected ? 1.4 : 1,
                      boxShadow: isSelected 
                        ? "0 8px 25px rgba(0,0,0,0.15)" 
                        : "0 4px 10px rgba(0,0,0,0.1)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Inner dot for selected state */}
                    {isSelected && (
                      <motion.div
                        className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.div>
                  
                  {/* Quarter Label */}
                  <div className="mt-4 text-center">
                    <div className={`text-sm font-bold transition-colors duration-200 ${
                      isSelected 
                        ? 'text-gray-900 dark:text-white' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {item.quarter}
                    </div>
                    <div className={`text-xs transition-colors duration-200 ${
                      isSelected 
                        ? 'text-gray-600 dark:text-gray-300' 
                        : 'text-gray-400 dark:text-gray-500'
                    }`}>
                      {item.year}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Selected Content */}
        <motion.div
          key={selectedItem}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="timeline-content bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-700 shadow-sm">
            
            {/* Status and Period */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${getStatusConfig(timelineItems[selectedItem].status).dotColor.split(' ')[0]}`}></div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  timelineItems[selectedItem].status === 'completed' 
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                    : timelineItems[selectedItem].status === 'in-progress'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                }`}>
                  {timelineItems[selectedItem].status === 'in-progress' ? 'In Progress' : 
                   timelineItems[selectedItem].status === 'completed' ? 'Completed' : 'Planned'}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {timelineItems[selectedItem].period}
              </span>
            </div>

            {/* Title and Description */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {timelineItems[selectedItem].title}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {timelineItems[selectedItem].description}
            </p>

            {/* Progress Bar for in-progress items */}
            {timelineItems[selectedItem].status === 'in-progress' && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Development Progress</span>
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                    {timelineItems[selectedItem].completionPercentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${timelineItems[selectedItem].completionPercentage}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            )}

            {/* Features and CTA */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Features</h4>
                <div className="space-y-3">
                  {timelineItems[selectedItem].features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + featureIndex * 0.05 }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <div className="flex flex-col justify-center">
                <Link
                  href={timelineItems[selectedItem].ctaLink}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {timelineItems[selectedItem].ctaText}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Hint */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Click on any checkpoint above to explore that milestone
          </p>
        </div>
      </div>
    </section>
  );
}