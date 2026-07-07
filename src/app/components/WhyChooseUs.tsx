"use client";

import { motion } from "motion/react";
import { Target, Shield, Zap, Award, Handshake, CircleDollarSign } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "ROI-Focused Solutions",
    description: "Every project is measured by results traffic, leads, conversions, and revenue. We don't just build; we grow your business.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Fast & Agile Delivery",
    description: "Our sprint-based development process means you see progress every week, not just at the end. Most websites live in 2–4 weeks.",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "SSL, daily backups, malware protection, and enterprise-grade hosting are standard on every project we deliver.",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "Proven in India & Globally",
    description: "5+ years, 387+ clients, 98% success rate. From Delhi startups to global enterprises we have delivered it all.",
    gradient: "from-teal-600 to-emerald-600",
  },
  {
    icon: Handshake,
    title: "Dedicated Support",
    description: "A real person answers your call. Every client gets a dedicated account manager who knows your project inside out.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: CircleDollarSign,
    title: "Transparent Pricing",
    description: "No hidden charges. No surprise invoices. What we quote is what you pay with GST clearly stated upfront.",
    gradient: "from-emerald-600 to-teal-600",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-5 md:py-10 lg:py-15 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-teal-100/40 to-cyan-100/40 rounded-full blur-3xl -z-10"></div>

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
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">387+ Businesses</span> Choose HiveRift
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We combine technical expertise with business strategy to deliver solutions that actually grow your revenue not just look good.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-gray-100 hover:border-emerald-200 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-bl-full rounded-tr-2xl md:rounded-tr-3xl transition-all duration-500 group-hover:opacity-10`}></div>

                  {/* Icon Container */}
                  <div className="relative mb-4 md:mb-6">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl group-hover:shadow-emerald-500/40`}>
                      <Icon size={24} className="text-white md:hidden" strokeWidth={2.5} />
                      <Icon size={28} className="text-white hidden md:block" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-600 leading-relaxed md:line-clamp-3 group-hover:line-clamp-none transition-all">
                    {feature.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl md:rounded-b-3xl`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}