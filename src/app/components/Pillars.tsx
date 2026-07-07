"use client";

import { motion } from "motion/react";
import { Users, Zap, Award } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "TALENT",
    subtitle: "Skilled People, Measurable Outcomes",
    desc: "Our team brings years of real-world experience in web development, mobile apps, AI, digital marketing, and business strategy. We hire for passion as much as skill.",
    color: "emerald"
  },
  {
    icon: Zap,
    title: "TAILORED",
    subtitle: "Built for Your Business, Not a Template",
    desc: "We do not believe in copy-paste solutions. Every project starts with understanding your business, your customers, and your goals then we build from there.",
    color: "teal"
  },
  {
    icon: Award,
    title: "TRUST",
    subtitle: "Transparent, Reliable, Long-Term",
    desc: "We communicate clearly, deliver on time, and never hide behind fine print. Over 99% of our clients return for their next project and that says everything.",
    color: "cyan"
  }
];

export function Pillars() {
  return (
    <section id="pillars" className="py-5 md:py-10 lg:py-15 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Our 3T <span className="text-emerald-600">Pillars</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium max-w-3xl mx-auto">
            Talent. Tailored. Trust The foundation of everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 ${
                pillar.color === 'emerald' ? 'border-emerald-500' : 
                pillar.color === 'teal' ? 'border-teal-500' : 'border-cyan-500'
              } group`}
            >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-300 ${
                  pillar.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : 
                  pillar.color === 'teal' ? 'bg-teal-50 text-teal-600' : 'bg-cyan-50 text-cyan-600'
                }`}>
                  <pillar.icon size={32} />
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-widest">{pillar.title}</h3>
                
                <p className={`font-bold mb-4 tracking-tight text-lg ${
                  pillar.color === 'emerald' ? 'text-emerald-600' : 
                  pillar.color === 'teal' ? 'text-teal-600' : 'text-cyan-600'
                }`}>
                  {pillar.subtitle}
                </p>
                
                <p className="text-gray-500 font-medium leading-relaxed text-base">
                  {pillar.desc}
                </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}