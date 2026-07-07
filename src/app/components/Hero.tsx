"use client";


import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Award,
  BarChart3,
  Phone,
  HelpCircle,
  Target,
  Trophy
} from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Link from "next/link";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-screen pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24">
          {/* Left Side - Content (Order 2 on mobile, Order 1 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1"
          >


            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 "
            >
              Grow Your Business <br />
              With <span className="text-emerald-600">High Converting</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Website Development
              </span>
            </motion.h1>

            {/* Description / Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold leading-relaxed max-w-2xl">
                Get a <span className="text-emerald-600  decoration-emerald-200 underline-offset-4">High Converting</span> website <br className="hidden sm:block" />
                with result driven marketing.
              </p>

              {/* Features Checklist */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                {[
                  "No Hidden Cost",
                  "SEO Optimized",
                  "Mobile Friendly"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm sm:text-base font-bold text-gray-600">
                    <CheckCircle2 className="text-emerald-500" size={18} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 sm:pt-6"
            >
              <Button
                asChild
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-7 text-lg font-black rounded-full shadow-xl shadow-emerald-200 hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto"
              >
                <Link href="/contact">
                   Free Consultation
                  <ArrowRight className="mt-1 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>

              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-7 text-lg font-black rounded-full transition-all w-full sm:w-auto"
                >
                  View Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Mockup Image (Order 1 on mobile, Order 2 on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-2xl lg:max-w-3xl">
              {/* Floating 100% Free Badge */}
             

              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(16,185,129,0.2)] border-8 border-white bg-white">
                <ImageWithFallback
                  src="/hero_hiverift_mockup.png"
                  alt="Digital Marketing Mockup"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-400/20 rounded-full blur-[100px] -z-10"></div>
            </div>
          </motion.div>
        </div>

        {/* Quick Answers Section (AEO Optimized) - Full Width Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-2 md:mt-4 pb-8"
        >
          <div className="py-6 md:py-10">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight"
              >
                Quick <span className="text-emerald-600">Answers</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-500 max-w-2xl mx-auto font-medium text-base md:text-lg leading-relaxed"
              >
                Expert insights for instant clarity on your business growth and digital transformation.
              </motion.p>
              <div className="mt-4 flex justify-center">
                <span className="text-[10px] text-emerald-600 font-black uppercase tracking-[0.3em] bg-emerald-50 px-4 py-1 rounded-full border border-emerald-100">AEO Optimized Knowledge Base</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  q: "What is digital marketing?",
                  a: "Digital marketing is the process of promoting your business online using SEO, social media, and ads to generate leads and sales.",
                  icon: HelpCircle,
                  href: "/q/what-is-digital-marketing"
                },
                {
                  q: "Why is a website important?",
                  a: "A website builds trust, increases visibility, and helps convert visitors into paying customers for your business.",
                  icon: TrendingUp,
                  href: "/q/why-website-important"
                },
                {
                  q: "How can you help my business?",
                  a: "We create a website, drive targeted traffic, and generate quality leads using proven strategies that deliver results.",
                  icon: Users,
                  href: "/q/how-can-we-help"
                },
                {
                  q: "How long does it take to see results?",
                  a: "SEO takes 3-6 months for strong results, while paid ads can start generating leads and sales within days.",
                  icon: Target,
                  href: "/q/results-timeline"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 group flex flex-col h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50/50 rounded-bl-[4rem] -mr-8 -mt-8 group-hover:bg-emerald-100 transition-colors duration-500"></div>

                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <item.icon size={28} />
                  </div>

                  <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">{item.q}</h3>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed mb-6 flex-grow">{item.a}</p>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-black text-emerald-600 uppercase tracking-widest group/link mt-auto"
                  >
                    Read More
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}