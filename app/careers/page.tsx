import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ui/contact-form";

interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export default function CareersPage() {
  const jobListings: JobListing[] = [
    {
      id: "1",
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Join our engineering team to build the next generation of financial management tools for home-service businesses. You'll work on both frontend and backend systems using modern technologies.",
      requirements: [
        "5+ years of full-stack development experience",
        "Proficiency in React, TypeScript, and Node.js",
        "Experience with cloud platforms (AWS preferred)",
        "Knowledge of financial software or business tools",
        "Strong problem-solving and communication skills"
      ],
      benefits: [
        "Competitive salary with equity package",
        "Comprehensive health, dental, and vision insurance",
        "Flexible work arrangements and unlimited PTO",
        "Professional development budget",
        "Latest tech equipment and tools"
      ]
    },
    {
      id: "2", 
      title: "Product Designer",
      department: "Design",
      location: "Remote / New York",
      type: "Full-time",
      description: "Shape the user experience of Bizzie by designing intuitive interfaces that make complex financial concepts accessible to everyday business owners.",
      requirements: [
        "3+ years of product design experience",
        "Proficiency in Figma, Sketch, or similar tools",
        "Experience with user research and testing",
        "Understanding of design systems and accessibility",
        "Portfolio showcasing web and mobile designs"
      ],
      benefits: [
        "Competitive salary with equity package",
        "Design conference and workshop budget",
        "Latest design tools and software",
        "Collaborative and creative work environment",
        "Direct impact on product direction"
      ]
    },
    {
      id: "3",
      title: "Customer Success Manager", 
      department: "Customer Success",
      location: "Austin, TX",
      type: "Full-time",
      description: "Help our customers achieve success with Bizzie by providing expert guidance, training, and support throughout their journey with our platform.",
      requirements: [
        "2+ years in customer success or account management",
        "Experience with SaaS products and customer onboarding",
        "Strong communication and relationship-building skills",
        "Understanding of small business operations",
        "Problem-solving mindset with attention to detail"
      ],
      benefits: [
        "Base salary plus performance bonuses",
        "Customer success certification programs",
        "Travel opportunities to meet customers",
        "Career growth into leadership roles",
        "Direct customer impact and feedback"
      ]
    }
  ];

  const benefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Work-Life Balance", 
      description: "Flexible schedules, remote work, and unlimited PTO",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Professional Growth",
      description: "Learning budget, mentorship, and career development",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z" />
        </svg>
      )
    },
    {
      title: "Equity & Compensation",
      description: "Competitive salary with equity in a growing company",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const values = [
    {
      title: "Customer First",
      description: "We build everything with our customers' success in mind, making decisions that truly help small business owners thrive."
    },
    {
      title: "Simplicity",
      description: "We believe complex problems deserve simple solutions. We strip away the unnecessary to focus on what matters most."
    },
    {
      title: "Transparency",
      description: "Open communication, honest feedback, and clear expectations drive everything we do, both internally and with customers."
    },
    {
      title: "Growth Mindset",
      description: "We embrace challenges as opportunities to learn, improve, and push the boundaries of what's possible."
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="pt-16 md:pt-18">
        {/* Hero Section */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Join the <span className="text-bizzie-600">Bizzie</span> Team
              </h1>
              <p className="text-lg mb-8 leading-relaxed">
                Help us transform how home-service businesses manage their finances. 
                Build innovative solutions, work with amazing people, and make a real impact on small business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ContactForm 
                  triggerText="Apply Today" 
                  title="Apply to Join Bizzie"
                  description="Ready to make an impact? Tell us about yourself and which position interests you most."
                  variant="bizzie"
                  size="lg"
                />
                <a 
                  href="#open-positions" 
                  className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg transition-colors"
                >
                  View Open Positions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work at Bizzie */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Work at Bizzie?
              </h2>
              <p className="text-lg leading-relaxed">
                We're building the future of financial management for small businesses. 
                Join a team that values innovation, collaboration, and making a meaningful difference.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-bizzie-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-light-accent">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Values
              </h2>
              <p className="text-lg leading-relaxed">
                These core values guide how we work, make decisions, and treat each other every day.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white dark:bg-bizzie-800 rounded-xl p-8 shadow-soft border border-bizzie-200 dark:border-bizzie-700">
                  <h3 className="text-xl font-bold mb-4">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Open Positions
              </h2>
              <p className="text-lg leading-relaxed">
                We're always looking for talented individuals who share our passion for helping small businesses succeed.
              </p>
            </div>
            <div className="space-y-8">
              {jobListings.map((job) => (
                <div key={job.id} className="bg-white dark:bg-bizzie-800 rounded-xl p-8 shadow-soft-lg border border-bizzie-200 dark:border-bizzie-700">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm mb-4">
                        <span className="px-3 py-1 bg-bizzie-100 dark:bg-bizzie-700 text-bizzie-800 dark:text-bizzie-200 rounded-full">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 bg-bizzie-100 dark:bg-bizzie-700 text-bizzie-800 dark:text-bizzie-200 rounded-full">
                          {job.location}
                        </span>
                        <span className="px-3 py-1 bg-bizzie-100 dark:bg-bizzie-700 text-bizzie-800 dark:text-bizzie-200 rounded-full">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ContactForm 
                      triggerText="Apply Now" 
                      title={`Apply for ${job.title}`}
                      description={`Interested in joining our ${job.department} team? Tell us why you'd be a great fit for this role.`}
                      variant="bizzie"
                      size="sm"
                    />
                  </div>
                  
                  <p className="text-lg mb-6 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-bizzie-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold mb-4">What We Offer</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-bizzie-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-[5%] py-16 md:py-24 lg:py-28 section-bg-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See the Perfect Role?
              </h2>
              <p className="text-lg mb-8 leading-relaxed">
                We're always interested in meeting talented people who are passionate about our mission. 
                Send us your resume and let us know how you'd like to contribute to Bizzie's success.
              </p>
              <ContactForm 
                triggerText="Get in Touch" 
                title="Tell Us About Yourself"
                description="Even if we don't have an open position that fits your background perfectly, we'd love to hear from you and discuss potential opportunities."
                variant="bizzie"
                size="lg"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
