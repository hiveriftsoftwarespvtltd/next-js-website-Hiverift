"use client";

import { motion } from "motion/react";
import { useState } from "react";
import {
  Building2,
  TrendingUp,
  Heart,
  GraduationCap,
  Zap,
  Radio,
  ShoppingBag,
  Factory,
  ShoppingCart,
  Plane,
  Shield,
  Landmark,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const industries = [
  {
    name: "Banking & Financial Services",
    icon: Building2,
    description: "Transform financial operations with secure, scalable digital solutions",
    details: "We help banks and financial institutions modernize their infrastructure, enhance customer experience, and comply with regulatory requirements.",
    solutions: [
      "Core Banking Systems",
      "Mobile Banking Apps",
      "Payment Gateway Integration",
      "Fraud Detection & Prevention",
      "Customer Portals & Dashboards",
      "Compliance & Risk Management",
    ],
    benefits: [
      "Enhanced security and data protection",
      "Improved customer engagement",
      "Streamlined operations and reduced costs",
      "Real-time transaction processing",
    ],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "Capital Markets",
    icon: TrendingUp,
    description: "Advanced trading platforms and analytics for market leaders",
    details: "Empower traders and analysts with cutting-edge technology for real-time market insights, algorithmic trading, and portfolio management.",
    solutions: [
      "Trading Platforms & Dashboards",
      "Market Data Analytics",
      "Portfolio Management Systems",
      "Risk Assessment Tools",
      "Algorithmic Trading Solutions",
      "Compliance & Reporting",
    ],
    benefits: [
      "Real-time market data processing",
      "Advanced analytics and insights",
      "Automated trading capabilities",
      "Regulatory compliance assurance",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "Healthcare & Life Sciences",
    icon: Heart,
    description: "Innovative healthcare solutions for better patient outcomes",
    details: "Build HIPAA-compliant systems that improve patient care, streamline operations, and enable data-driven medical decisions.",
    solutions: [
      "Electronic Health Records (EHR)",
      "Telemedicine Platforms",
      "Patient Management Systems",
      "Medical Imaging Solutions",
      "Healthcare Analytics",
      "Clinical Trial Management",
    ],
    benefits: [
      "HIPAA-compliant security",
      "Improved patient care coordination",
      "Reduced administrative burden",
      "Data-driven clinical decisions",
    ],
    gradient: "from-red-500 to-pink-600",
  },
  {
    name: "Education & E-Learning",
    icon: GraduationCap,
    description: "Digital learning platforms that inspire and engage",
    details: "Create interactive, accessible learning experiences that scale globally and adapt to individual student needs.",
    solutions: [
      "Learning Management Systems (LMS)",
      "Virtual Classroom Platforms",
      "Student Information Systems",
      "Interactive Content Creation",
      "Assessment & Grading Tools",
      "Mobile Learning Apps",
    ],
    benefits: [
      "Personalized learning experiences",
      "Scalable global reach",
      "Real-time progress tracking",
      "Enhanced student engagement",
    ],
    gradient: "from-purple-500 to-violet-600",
  },
  {
    name: "Energy & Utilities",
    icon: Zap,
    description: "Smart solutions for sustainable energy management",
    details: "Optimize energy distribution, reduce waste, and implement renewable energy solutions with intelligent automation.",
    solutions: [
      "Smart Grid Management",
      "Energy Consumption Analytics",
      "Asset Management Systems",
      "Predictive Maintenance",
      "Renewable Energy Integration",
      "Customer Billing & Portal",
    ],
    benefits: [
      "Optimized energy distribution",
      "Reduced operational costs",
      "Environmental sustainability",
      "Predictive maintenance capabilities",
    ],
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    name: "Communications & Media",
    icon: Radio,
    description: "Content delivery and audience engagement platforms",
    details: "Build scalable content management systems, streaming platforms, and audience analytics for modern media companies.",
    solutions: [
      "Content Management Systems",
      "Video Streaming Platforms",
      "Audience Analytics",
      "Digital Asset Management",
      "Broadcasting Automation",
      "Ad Management Systems",
    ],
    benefits: [
      "Seamless content delivery",
      "Enhanced audience insights",
      "Multi-platform distribution",
      "Monetization optimization",
    ],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Consumer Goods",
    icon: ShoppingBag,
    description: "Supply chain and customer experience optimization",
    details: "Enhance product lifecycle management, supply chain visibility, and direct-to-consumer channels.",
    solutions: [
      "Supply Chain Management",
      "Inventory Optimization",
      "Product Lifecycle Management",
      "Customer Engagement Platforms",
      "Quality Control Systems",
      "Distribution Management",
    ],
    benefits: [
      "Improved supply chain efficiency",
      "Better inventory management",
      "Enhanced customer loyalty",
      "Faster time-to-market",
    ],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    description: "Industry 4.0 solutions for smart manufacturing",
    details: "Implement IoT, automation, and analytics to optimize production, reduce downtime, and improve quality.",
    solutions: [
      "Manufacturing Execution Systems",
      "IoT & Sensor Integration",
      "Predictive Maintenance",
      "Quality Management Systems",
      "Production Planning & Scheduling",
      "Warehouse Management",
    ],
    benefits: [
      "Increased production efficiency",
      "Reduced equipment downtime",
      "Enhanced product quality",
      "Real-time visibility",
    ],
    gradient: "from-gray-600 to-slate-700",
  },
  {
    name: "Retail & E-Commerce",
    icon: ShoppingCart,
    description: "Omnichannel retail experiences that drive sales",
    details: "Create seamless shopping experiences across online and offline channels with personalized recommendations and efficient operations.",
    solutions: [
      "E-Commerce Platforms",
      "Point of Sale (POS) Systems",
      "Inventory Management",
      "Customer Loyalty Programs",
      "Personalization Engines",
      "Order Management Systems",
    ],
    benefits: [
      "Seamless omnichannel experience",
      "Personalized customer journeys",
      "Optimized inventory levels",
      "Increased conversion rates",
    ],
    gradient: "from-emerald-500 to-green-600",
  },
  {
    name: "Travel & Hospitality",
    icon: Plane,
    description: "Connected experiences for modern travelers",
    details: "Build booking platforms, guest management systems, and personalized travel experiences that delight customers.",
    solutions: [
      "Booking & Reservation Systems",
      "Property Management Systems",
      "Customer Relationship Management",
      "Revenue Management",
      "Mobile Check-in Solutions",
      "Guest Experience Platforms",
    ],
    benefits: [
      "Streamlined booking processes",
      "Enhanced guest satisfaction",
      "Dynamic pricing optimization",
      "Operational efficiency",
    ],
    gradient: "from-sky-500 to-blue-600",
  },
  {
    name: "Insurance",
    icon: Shield,
    description: "Digital transformation for insurance providers",
    details: "Modernize policy management, claims processing, and customer service with AI-powered automation and analytics.",
    solutions: [
      "Policy Management Systems",
      "Claims Processing Automation",
      "Underwriting Platforms",
      "Customer Portals",
      "Risk Assessment Tools",
      "Agent Management Systems",
    ],
    benefits: [
      "Faster claims processing",
      "Improved risk assessment",
      "Enhanced customer experience",
      "Reduced operational costs",
    ],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    name: "Public Services",
    icon: Landmark,
    description: "Citizen-centric digital government solutions",
    details: "Enable efficient public service delivery through digital platforms that improve accessibility and transparency.",
    solutions: [
      "Citizen Portals",
      "Document Management Systems",
      "Public Service Automation",
      "Geographic Information Systems",
      "Permit & Licensing Systems",
      "Emergency Response Systems",
    ],
    benefits: [
      "Improved citizen accessibility",
      "Transparent processes",
      "Reduced administrative burden",
      "Enhanced service delivery",
    ],
    gradient: "from-teal-500 to-cyan-600",
  },
];

export function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  return (
    <section id="industries" className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-100/40 to-emerald-100/40 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-4 md:mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse"></div>
            <span className="text-xs md:text-sm font-semibold text-emerald-700 tracking-wide uppercase">
              Industry Expertise
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Industries We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Serve
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Delivering tailored, industry-specific solutions that address unique challenges and drive measurable results across 12+ sectors worldwide
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Industry Cards - Left Side */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
                {industries.map((industry, index) => {
                  const Icon = industry.icon;
                  return (
                    <motion.div
                      key={industry.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      onClick={() => setSelectedIndustry(index)}
                      className={`cursor-pointer group transition-all duration-300 ${selectedIndustry === index
                          ? "scale-105"
                          : "hover:scale-102"
                        }`}
                    >
                      <div
                        className={`bg-white rounded-xl md:rounded-2xl p-3 md:p-4 border-2 transition-all duration-300 ${selectedIndustry === index
                            ? "border-emerald-500 shadow-lg shadow-emerald-500/20"
                            : "border-gray-200 hover:border-emerald-300 hover:shadow-md"
                          }`}
                      >
                        <div className="flex items-center gap-2 md:gap-3">
                          <div
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-br ${industry.gradient}`}
                          >
                            <Icon size={20} className="text-white md:hidden" strokeWidth={2.5} />
                            <Icon size={24} className="text-white hidden md:block" strokeWidth={2.5} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 text-xs md:text-sm leading-tight">
                              {industry.name}
                            </h4>
                          </div>
                          <ChevronRight
                            size={16}
                            className={`text-gray-400 transition-all duration-300 md:hidden ${selectedIndustry === index
                                ? "text-emerald-500 rotate-90"
                                : "group-hover:text-emerald-500 group-hover:translate-x-1"
                              }`}
                          />
                          <ChevronRight
                            size={20}
                            className={`text-gray-400 transition-all duration-300 hidden md:block ${selectedIndustry === index
                                ? "text-emerald-500 rotate-90"
                                : "group-hover:text-emerald-500 group-hover:translate-x-1"
                              }`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Detailed Information - Right Side */}
            <div className="lg:col-span-2">
              <motion.div
                key={selectedIndustry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border-2 border-emerald-200 shadow-2xl shadow-emerald-500/10 lg:sticky lg:top-24"
              >
                {/* Header */}
                <div className="mb-6 md:mb-8">
                  <div
                    className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl mb-4 bg-gradient-to-br ${industries[selectedIndustry].gradient}`}
                  >
                    {(() => {
                      const Icon = industries[selectedIndustry].icon;
                      return <Icon size={28} className="text-white" strokeWidth={2.5} />;
                    })()}
                    <span className="text-white font-bold text-lg">
                      {industries[selectedIndustry].name}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {industries[selectedIndustry].description}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {industries[selectedIndustry].details}
                  </p>
                </div>

                {/* Solutions */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                    Our Solutions
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {industries[selectedIndustry].solutions.map((solution, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors duration-200"
                      >
                        <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-800 font-medium text-sm">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full"></div>
                    Key Benefits
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {industries[selectedIndustry].benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-3 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-gray-800 font-medium text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-sm">
                      Ready to transform your {industries[selectedIndustry].name.toLowerCase()} business?
                    </p>
                    <a
                      href="/contact"
                      className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center gap-2"
                    >
                      Get Started
                      <ChevronRight size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}