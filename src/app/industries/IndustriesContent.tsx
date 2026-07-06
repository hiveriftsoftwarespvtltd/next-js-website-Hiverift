"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  Stethoscope,
  ShoppingBag,
  GraduationCap,
  Factory,
  Home,
  Utensils,
  Plane,
  Truck,
  Shield,
  Scale,
  Landmark,
  Sparkles,
  Zap
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import Link from "next/link";

const industries = [
  {
    icon: Landmark,
    title: "Banking & Financial Services",
    headline: "Secure. Scalable. Compliant.",
    desc: "Technology that meets RBI guidelines and your customers' expectations.",
    pains: ["Outdated core systems slowing you down", "Poor mobile banking experience", "Manual KYC and compliance processes", "Fraud with no real-time detection"],
    solutions: ["Core banking modernisation", "Mobile banking apps (Android + iOS)", "Fraud detection with ML", "Compliance dashboards (RBI, SEBI)"],
    results: ["99.8% fraud detection rate", "50ms response time"]
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Life Sciences",
    headline: "Better Technology. Better Care.",
    desc: "Digital health solutions built for Indian healthcare providers ABDM ready.",
    pains: ["Paper-based patient records", "No digital appointment system", "Disconnected labs, doctors, pharmacies", "Poor patient communication"],
    solutions: ["Telemedicine platforms", "ABDM-compliant patient apps", "Appointment & queue management", "Lab report portals"],
    results: ["-70% patient wait time", "4.8/5 patient satisfaction"]
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    headline: "Sell More. Everywhere. Always.",
    desc: "From your first online store to a full omnichannel retail platform.",
    pains: ["Low online visibility", "High cart abandonment", "No loyalty programme", "Offline-only sales"],
    solutions: ["WooCommerce & Shopify stores", "Mobile shopping apps", "Razorpay / PayU / Stripe integration", "Inventory management"],
    results: ["+300% sales growth", "89% customer retention"]
  },
  {
    icon: GraduationCap,
    title: "Education & E-Learning",
    headline: "Teach Anyone. Anywhere. Anytime.",
    desc: "Learning platforms built for Indian educators from coaching centres to universities.",
    pains: ["No digital infrastructure", "Low student engagement", "No progress tracking", "Manual fee collection"],
    solutions: ["LMS platforms (Live + Recorded)", "Student & parent portals", "Assessment & quiz engines", "Razorpay fee integration"],
    results: ["92% course completion", "85% engagement rate"]
  },
  {
    icon: Factory,
    title: "Manufacturing",
    headline: "Smart Factory. Real Results.",
    desc: "IoT and ERP solutions that give manufacturers in India real-time control over every process.",
    pains: ["No visibility on production floor", "Manual inventory tracking", "Supply chain delays", "Unplanned downtime"],
    solutions: ["Custom ERP for manufacturing", "IoT sensor integration", "Supply chain dashboards", "Predictive maintenance"],
    results: ["+45% efficiency gain", "-60% unplanned downtime"]
  },
  {
    icon: Home,
    title: "Real Estate",
    headline: "More Leads. Faster Closings.",
    desc: "Digital tools that help Indian real estate businesses generate, manage, and close more deals.",
    pains: ["Leads lost in spreadsheets", "No follow-up system", "Poor listing management", "Zero digital presence"],
    solutions: ["Custom CRM for real estate", "Lead capture automation", "Automated WhatsApp follow-ups", "Property listing portals"],
    results: ["3x lead conversion rate", "-75% lead response time"]
  },
  {
    icon: Utensils,
    title: "Food & Restaurant",
    headline: "More Orders. More Loyalty. Less Chaos.",
    desc: "Digital solutions for restaurants, cloud kitchens, and food brands across India.",
    pains: ["Dependence on Zomato & Swiggy", "No direct online ordering", "No loyalty system", "Manual billing chaotic"],
    solutions: ["Direct ordering website", "Custom restaurant app", "POS integration", "Loyalty & offers management"],
    results: ["+180% online orders", "42% repeat order rate"]
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    headline: "Experiences Guests Remember.",
    desc: "Booking platforms, guest apps, and CRM systems for hotels and travel agencies in India.",
    pains: ["Outdated booking system", "No loyalty programme", "Scattered guest data", "OTA dependency"],
    solutions: ["Property management systems", "Direct booking website", "Guest mobile app", "CRM with guest profiles"],
    results: ["+65% direct bookings", "4.7/5 guest rating"]
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    headline: "Faster. Smarter. Cheaper.",
    desc: "AI-powered logistics technology for Indian businesses managing fleets and warehouses.",
    pains: ["No real-time tracking", "Inefficient route planning", "Manual warehouse management", "Customer complaints"],
    solutions: ["AI route optimisation", "Real-time GPS tracking portal", "Warehouse management system", "Automated notifications"],
    results: ["-40% delivery time", "$2M cost savings"]
  },
  {
    icon: Shield,
    title: "Insurance",
    headline: "Paperless. Faster. Trusted.",
    desc: "Digital transformation for insurance companies and brokers across India.",
    pains: ["Manual claims processing", "Low digital adoption", "Slow policy issuance", "Poor communication"],
    solutions: ["Online policy portal", "Claims automation system", "Agent mobile app", "Self-service chatbot"],
    results: ["-60% processing time", "35% renewal increase"]
  },
  {
    icon: Scale,
    title: "Professional Services",
    headline: "More Clients. More Credibility.",
    desc: "CRMs and automation for lawyers, CAs, and consultants in India.",
    pains: ["No professional presence", "Manual client follow-up", "Leads lost from referrals", "No booking system"],
    solutions: ["Professional service website", "Client portal", "Online appointment booking", "CRM with auto-followups"],
    results: ["22 leads/month", "11x marketing ROI"]
  },
  {
    icon: Building2,
    title: "Public Services & Govt",
    headline: "Citizen-First. Digital-Ready.",
    desc: "Modern digital platforms for government bodies and public sector organisations.",
    pains: ["Paper-based service delivery", "Long queues and wait times", "Poor citizen communication", "Opaque processes"],
    solutions: ["Citizen service portals", "Grievance management", "Document digitisation", "Notification systems"],
    results: ["-70% in-person visits", "4.2/5 satisfaction"]
  }
];

export default function IndustriesContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[450px] md:h-[500px] overflow-hidden mt-20 md:mt-32 flex items-center py-12 md:py-0">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNrY3lzY3JhcGVyJTIwbW9kZXJufZW58MHx8fHwxNzM5ODMwNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Industries expertise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-900/90 to-slate-900/95"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-full mt-5 ">
              <Zap size={16} className="text-emerald-400" />
              <span className="text-sm font-black text-emerald-400 tracking-widest uppercase">
                Industry Specific Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              We Know Your Industry. <br /><span className="text-emerald-400">We've Worked in It.</span>
            </h1>

            <p className="text-xl text-white/90 max-w-2xl leading-relaxed mb-10 font-medium">
              Generic solutions don't solve specific problems. Every industry we serve gets a strategy that speaks directly to their unique business challenges and growth opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modern Stats Cards Section */}
      <section className="py-24 bg-white relative z-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "12+", label: "Target Sectors", desc: "Expertise across diverse industry verticals" },
              { val: "24h", label: "Response Time", desc: "Fastest turnaround for your requirements" },
              { val: "100%", label: "Govt Compliance", desc: "Always aligned with RBI & Indian Laws" },
              { val: "2026", label: "Future-Ready Tech", desc: "Next-gen stacks for sustainable growth" }
            ].map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 text-center hover:border-emerald-500 transition-all group"
              >
                <div className="text-4xl font-black text-emerald-600 mb-2">{s.val}</div>
                <div className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-tight">{s.label}</div>
                <div className="text-sm  leading-tight font-bold text-gray-400 uppercase tracking-tighter opacity-80 group-hover:opacity-100">
                  {s.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className=" bg-slate-50/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all group flex flex-col"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all mb-6">
                  <ind.icon size={28} />
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{ind.title}</h3>
                  <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">{ind.headline}</p>
                  <p className="text-base text-gray-500 font-medium leading-relaxed line-clamp-2">{ind.desc}</p>
                </div>

                <div className="space-y-6 flex-grow">
                  <div>
                    <h5 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span> Pains Solved
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {ind.pains.slice(0, 2).map((p, i) => (
                        <span key={i} className="text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{p}</span>
                      ))}
                      {ind.pains.length > 2 && <span className="text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">+{ind.pains.length - 2} more</span>}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-50 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {ind.results.slice(0, 1).map((r, i) => (
                      <div key={i} className="px-3 py-1.5 bg-emerald-50 rounded-lg text-[10px] font-black text-emerald-600 uppercase tracking-widest border border-emerald-100/50">
                        {r}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 text-emerald-600 font-black text-xs uppercase tracking-widest hover:gap-3 transition-all"
                    >
                      View Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-slate-50/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">Ready to <span className="text-emerald-600">Lead Your Sector?</span></h2>
            <p className="text-xl text-gray-600 font-medium mb-12">
              Let's build technology that actually understands your business challenges.
              Book a session with our industry specialists.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-emerald-600 hover:scale-105 transition-all shadow-xl"
            >
              Get Started Now <Sparkles size={24} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
