"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Smartphone,
  Code,
  Brain,
  Database,
  TrendingUp,
  ShoppingCart,
  Palette,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description: "High-performance, scalable web applications built for global brands using Next.js, React, and enterprise CMS platforms.",
    features: [
      "Custom Web Applications",
      "Next.js & React",
      "Enterprise CMS Integration",
    ],
    category: "Development",
    highlighted: true,
  },
  {
    id: "mobile-development",
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native iOS & Android and React Native hybrid apps designed to redefine user engagement and drive app store growth.",
    features: [
      "iOS & Android Native",
      "React Native Solutions",
      "App Store Strategy",
    ],
    category: "Development",
    highlighted: false,
  },
  {
    id: "software-development",
    icon: Code,
    title: "Software Engineering",
    description: "Complex ERP & CRM solutions, legacy system modernisation, and custom workflow design tailored for automation and ROI.",
    features: [
      "Process Automation",
      "Legacy Modernisation",
      "Custom Workflow Design",
    ],
    category: "Development",
    highlighted: false,
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Transform raw data into predictive power with custom ML models, NLP systems, and intelligent analytics built for your business.",
    features: [
      "Predictive Analytics",
      "Custom ML Models",
      "NLP & Vision Systems",
    ],
    category: "AI & Data",
    highlighted: false,
  },
  {
    id: "data-annotation",
    icon: Database,
    title: "Data Annotation",
    description: "High-precision training data with 99%+ label accuracy image & video tagging, QA validation, and structured datasets for next-gen AI.",
    features: [
      "99%+ Label Accuracy",
      "Image & Video Tagging",
      "QA Validation Cycles",
    ],
    category: "AI & Data",
    highlighted: false,
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Results-driven SEO, high-ROI PPC campaigns, and growth marketing strategies that scale your brand visibility and revenue.",
    features: [
      "Data-backed SEO",
      "High-ROI PPC Campaigns",
      "Growth Marketing Maps",
    ],
    category: "Marketing",
    highlighted: true,
  },
];

const categories = ["All Services", "Development", "AI & Data", "Marketing"];

export function Services() {
  const [activeCategory, setActiveCategory] = useState("All Services");

  const filteredServices =
    activeCategory === "All Services"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <section id="services" className="py-10 bg-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full mb-3">
            <Sparkles size={12} className="text-emerald-500" />
            <span className="text-[9px] font-black text-emerald-700 uppercase tracking-[0.2em]">
              Excellence in Execution
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter leading-tight">
            Our <span className="text-emerald-600">Services</span>
          </h2>

          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            End-to-end digital solutions from web development and AI to marketing and mobile apps.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-2xl font-black text-sm transition-all duration-300 border ${activeCategory === category
                ? "bg-emerald-600 text-white border-emerald-600 shadow-xl shadow-emerald-600/20"
                : "bg-white text-gray-400 border-gray-100 hover:border-emerald-200 hover:text-emerald-600"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <div className="relative h-full p-6 rounded-[2rem] bg-white border border-gray-100 shadow-xl hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 group-hover:-translate-y-1">
                    {/* Icon Container */}
                    <div className="mb-4">
                      <div className="inline-flex p-4 bg-emerald-50 rounded-2xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                        <Icon size={24} strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-black text-gray-900 mb-1 tracking-tight group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-gray-500 font-medium leading-relaxed mb-3">
                      {service.description}
                    </p>

                    {/* Feature Dots */}
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                          <CheckCircle2 size={18} className="text-emerald-500" strokeWidth={3} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Simple Bottom Link */}
                    <Link href={`/services/${service.id}`} className="inline-flex items-center gap-2 text-emerald-600 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all">
                      Explore {service.title} <ArrowRight size={16} />
                    </Link>

                    {/* Highlighted Badge */}
                    {service.highlighted && (
                      <div className="absolute top-8 right-8">
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider rounded-lg border border-emerald-100">
                          Most Enquired
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-8"
        >
          <Link href="/services" className="px-10 py-5 bg-gray-900 text-white rounded-full font-black text-sm hover:bg-emerald-600 transition-all shadow-2xl flex-inline items-center gap-3">
            Explore All 20+ Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}