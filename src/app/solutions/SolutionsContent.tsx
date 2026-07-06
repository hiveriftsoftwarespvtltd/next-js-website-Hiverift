"use client";

import { motion } from "motion/react";
import {
  Building2,
  Heart,
  GraduationCap,
  Factory,
  ShoppingCart,
  Plane,
  Shield,
  Landmark,
  Users,
  Layers,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  Rocket,
  Code,
  X,
  ShoppingBag
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import Link from "next/link";

const industrySolutions = [
  {
    id: "finance",
    name: "Banking & Financial Services",
    icon: Landmark,
    problem: "Outdated systems, poor mobile experience, compliance gaps",
    solution: "Core banking modernisation, mobile banking apps, fraud detection, compliance dashboards",
    color: "from-emerald-500 to-teal-500",
    image: "https://i.pinimg.com/736x/74/d1/32/74d1320b80747acd0234b7a458ebe1e2.jpg",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: Heart,
    problem: "Disconnected patient records, no digital booking, poor communication",
    solution: "Telemedicine platforms, ABDM-compliant apps, patient portals, appointment systems",
    color: "from-emerald-600 to-teal-600",
    image: "https://i.pinimg.com/1200x/24/83/de/2483dec64055ddcf8baa5e2760543d48.jpg",
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    icon: ShoppingCart,
    problem: "Low online visibility, poor mobile shopping, high cart abandonment",
    solution: "Omnichannel e-commerce, mobile shopping apps, personalisation engines, analytics",
    color: "from-teal-500 to-emerald-500",
    image: "https://i.pinimg.com/736x/d9/c9/ca/d9c9ca3071f052121f8c70ccd8b0e89b.jpg",
  },
  {
    id: "education",
    name: "Education & E-Learning",
    icon: GraduationCap,
    problem: "No digital learning infrastructure, poor student engagement",
    solution: "LMS platforms, live class systems, student portals, assessment tools, mobile apps",
    color: "from-teal-600 to-emerald-600",
    image: "https://i.pinimg.com/736x/00/d7/29/00d7294e25073d9d1899e4f52e014b32.jpg",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    problem: "Manual tracking, supply chain gaps, no real-time visibility",
    solution: "IoT-enabled MES systems, supply chain dashboards, ERP integration, predictive maintenance",
    color: "from-emerald-500 to-teal-500",
    image: "https://i.pinimg.com/1200x/23/55/87/2355876d4d8ca2d753b72aaee06f6a19.jpg",
  },
  {
    id: "hospitality",
    name: "Travel & Hospitality",
    icon: Plane,
    problem: "Outdated booking systems, no loyalty programme, poor reviews",
    solution: "Booking platforms, guest apps, CRM, review management, loyalty systems",
    color: "from-emerald-600 to-teal-600",
    image: "https://i.pinimg.com/736x/ba/18/27/ba1827c7d0547371f27c8f379188d925.jpg",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: Building2,
    problem: "No lead capture, poor listing management, low online presence",
    solution: "Property listing platforms, CRM, virtual tour integration, lead nurturing automation",
    color: "from-teal-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbW9kZXJuJTIwYnVpbGRpbmclMjBhcGFydG1lbnR8ZW58MXx8fHwxNzA4OTEyNDAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "food-restaurant",
    name: "Food & Restaurant",
    icon: ShoppingBag,
    problem: "Low online orders, no loyalty, poor delivery management",
    solution: "Online ordering systems, delivery app integration, loyalty programmes, POS integration",
    color: "from-teal-600 to-emerald-600",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwbW9kZXJufGVufDF8fHx8MTcwODkxMjQwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    icon: Layers,
    problem: "Route inefficiency, poor tracking, high operational costs",
    solution: "AI route optimisation, real-time tracking, warehouse management, customer portals",
    color: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjBzaGlwcGluZ3xlbnwxfHx8fDE3MDg5MTI0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "insurance",
    name: "Insurance",
    icon: Shield,
    problem: "Complex claims, low digital adoption, poor customer service",
    solution: "Policy management portals, claims automation, chatbot support, mobile apps",
    color: "from-emerald-600 to-teal-600",
    image: "https://images.unsplash.com/photo-1681505526188-b05e68c77582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGNvbnRyYWN0fGVufDF8fHx8MTc3MDg5MjQwMnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const solutionApproaches = [
  {
    icon: Target,
    title: "Discovery & Strategy",
    description: "We start by understanding your business challenges, goals, and requirements through comprehensive discovery sessions.",
    steps: ["Business analysis", "Requirements gathering", "Stakeholder interviews", "Market research"],
  },
  {
    icon: Layers,
    title: "Custom Design",
    description: "Our team designs tailored solutions that address your specific needs while ensuring scalability and future growth.",
    steps: ["Solution architecture", "UI/UX design", "Technology selection", "Proof of concept"],
  },
  {
    icon: Code,
    title: "Development & Integration",
    description: "We build robust solutions using best practices, with seamless integration into your existing systems and workflows.",
    steps: ["Agile development", "API integration", "Quality assurance", "Security implementation"],
  },
  {
    icon: Rocket,
    title: "Deployment & Support",
    description: "We ensure smooth deployment and provide ongoing support to guarantee long-term success and continuous improvement.",
    steps: ["Deployment planning", "User training", "Performance monitoring", "Continuous optimization"],
  },
];

export default function SolutionsContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden mt-20 md:mt-32">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNvbHV0aW9ucyUyMHRlYW0lMjBzdHJhdGVneXxlbnwwfHx8fDE3Mzk4MzA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-teal-900/90 to-slate-900/95"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 h-full relative z-10 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <Sparkles size={16} className="text-emerald-400" />
              <span className="text-sm font-semibold text-white tracking-wide uppercase">
                Industry Expertise
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Industry-Specific <span className="text-emerald-400">Digital Solutions</span> <br className="hidden lg:block" /> for Every Sector
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium">
              We do not build generic solutions. Every industry has its own rules, regulations, customer behaviour, and operational challenges. Our solutions are built with that context from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions - GRID UPDATE */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={`/industries/${industry.id}`} className="block h-full transition-transform hover:-translate-y-2 duration-500">
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:border-emerald-500">
                    <div className="relative h-44 overflow-hidden">
                      <ImageWithFallback
                        src={industry.image}
                        alt={industry.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-40 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl shadow-xl flex items-center justify-center text-emerald-600">
                        <industry.icon size={24} />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors line-clamp-1">
                        {industry.name}
                      </h3>

                      <div className="space-y-4 flex-grow">
                        <div>
                          <div className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                            <X size={12} />
                            Problem We Solve
                          </div>
                          <p className="text-gray-600 text-xs leading-relaxed font-medium line-clamp-2">
                            {industry.problem}
                          </p>
                        </div>

                        <div>
                          <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                            <CheckCircle2 size={12} />
                            Solution We Deliver
                          </div>
                          <p className="text-gray-900 text-xs leading-relaxed font-bold line-clamp-2">
                            {industry.solution}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between text-emerald-600 text-sm font-bold group/btn">
                          <span>Explore</span>
                          <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3T Pillars Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-24"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">3T Approach</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-bold leading-relaxed">
              Every solution we deliver is built on our three foundational pillars
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "TALENT",
                description: "Expert teams with deep industry knowledge and technical expertise deliver solutions that drive measurable business outcomes.",
                features: ["Industry specialists", "Certified professionals", "Cross-functional teams", "Continuous learning"],
              },
              {
                icon: Layers,
                title: "TAILORED",
                description: "Custom-built solutions designed specifically for your business needs, challenges, and growth objectives.",
                features: ["Custom development", "Flexible architecture", "Scalable solutions", "Future-ready design"],
              },
              {
                icon: Award,
                title: "TRUST",
                description: "Transparent communication, reliable delivery, and long-term partnerships built on mutual success.",
                features: ["Transparent processes", "On-time delivery", "Quality assurance", "Ongoing support"],
              },
            ].map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-emerald-500"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{pillar.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6 text-center">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Approach */}
      <section className="py-24 lg:py-32 bg-white border-t border-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-24"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
              Our Solution <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Methodology</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-bold leading-relaxed">
              A proven approach that ensures successful delivery and long-term value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {solutionApproaches.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <motion.div
                  key={approach.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-4 mt-2">
                      <Icon size={24} className="text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{approach.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{approach.description}</p>
                    <ul className="space-y-1.5">
                      {approach.steps.map((step, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
