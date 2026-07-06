"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Check,
  Sparkles,
  Zap,
  HelpCircle,
  ArrowRight,
  Plus,
  ChevronDown
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const websitePackages = [
  {
    name: "Starter",
    price: "44,999",
    gst: "8,099",
    total: "53,098",
    tagline: "Perfect for Small Businesses",
    features: [
      "Up to 5 Pages",
      "Template Design",
      "Mobile-First Responsive",
      "Basic SEO Setup",
      "SSL + Security",
      "1 Month Support",
      "2 Rounds of Revisions",
      "1–2 Weeks Delivery"
    ],
    highlight: false,
    mostEnquired: false
  },
  {
    name: "Business Pro",
    price: "59,999",
    gst: "10,799",
    total: "70,798",
    tagline: "The Best Value for Growth",
    features: [
      "Up to 15 Pages",
      "Custom Design",
      "Mobile-First Responsive",
      "Advanced SEO Setup",
      "E-Commerce Integration",
      "Blog / CMS Setup",
      "SSL + Security",
      "3 Months Support",
      "5 Rounds of Revisions",
      "3–5 Weeks Delivery"
    ],
    highlight: true,
    mostEnquired: true
  },
  {
    name: "Growth",
    price: "149,999",
    gst: "26,999",
    total: "176,998",
    tagline: "For Established Enterprises",
    features: [
      "Up to 30 Pages",
      "Custom Design + CMS",
      "Full Technical SEO",
      "Full Store Capabilities",
      "Blog / CMS Integration",
      "SSL + Advanced Security",
      "6 Months Support",
      "Unlimited Revisions",
      "5–8 Weeks Delivery"
    ],
    highlight: false,
    mostEnquired: false
  }
];

const marketingPlans = [
  {
    name: "Starter",
    monthly: "7,999",
    total: "9,439",
    features: ["5 Page SEO", "10 Keywords", "1 Blog/mo", "1 Platform Social", "Basic Report", "3 Month Contract"]
  },
  {
    name: "Growth",
    monthly: "14,999",
    total: "17,699",
    features: ["15 Page SEO", "25 Keywords", "2 Blogs/mo", "2 Platforms Social", "Google Ads up to Rs.20K", "Standard Report"]
  },
  {
    name: "Scale",
    monthly: "24,999",
    total: "29,499",
    features: ["25 Page SEO", "50 Keywords", "4 Blogs/mo", "3 Platforms Social", "Google Ads up to Rs.50K", "Meta Ads + Targeting", "Full Report"]
  },
  {
    name: "Dominate",
    monthly: "39,999",
    total: "47,199",
    features: ["Unlimited SEO", "100+ Keywords", "8 Blogs/mo", "4 Platforms Social", "Google Ads up to Rs.1.5L", "Meta Ads + A/B Testing", "Executive Report"]
  }
];

const otherServices = [
  { service: "E-Commerce Website", base: "24,999", gst: "4,500", total: "29,499" },
  { service: "Custom Web Application", base: "49,999", gst: "9,000", total: "58,999" },
  { service: "Android / iOS App (Single)", base: "59,999", gst: "10,800", total: "70,799" },
  { service: "Android + iOS App (Cross)", base: "99,999", gst: "18,000", total: "1,17,999" },
  { service: "Custom CRM / ERP", base: "1,49,999", gst: "27,000", total: "1,76,999" },
  { service: "UI/UX Design", base: "9,999", gst: "1,800", total: "11,799" },
];

const faqs = [
  { q: "Is GST included in the displayed price?", a: "No. All prices shown are exclusive of GST. GST at 18% is added on top and shown separately on your invoice  as required by Indian GST law." },
  { q: "What are your payment terms?", a: "We collect 50% before starting. The balance is due on delivery. For projects above Rs. 1 lakh, we use milestone billing: 50% start, 25% mid, 25% on go-live." },
  { q: "Do you offer EMI or instalment plans?", a: "For projects above Rs. 50,000, we can discuss a milestone-based payment structure. Contact us to discuss your requirement." },
  { q: "Can I upgrade my package later?", a: "Yes. You can upgrade from Starter to Business Pro at any time. The cost difference is adjusted and a new timeline is agreed." },
  { q: "Is there a free trial for marketing retainers?", a: "We don't offer free trials, but we do offer a free 30-minute strategy session where we audit your current digital presence and give you actionable recommendations  no commitment required." },
];

function FAQItem({ q, a, defaultOpen = false }: { q: string, a: string, defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 ${isOpen ? "border-emerald-500 shadow-emerald-100 shadow-lg" : "border-gray-100"}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left"
      >
        <h4 className="text-lg font-black text-gray-900 flex gap-4">
          <HelpCircle className={`text-emerald-500 flex-shrink-0 transition-transform ${isOpen ? "rotate-12" : ""}`} /> {q}
        </h4>
        <ChevronDown className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-emerald-600" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 font-medium leading-relaxed px-6 pb-8 md:px-8 md:pb-10 pl-16 md:pl-20 border-t border-slate-50 pt-6">
          {a}
        </p>
      </motion.div>
    </div>
  );
}

export default function PricingContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] md:h-[500px] overflow-hidden mt-20 md:mt-32 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBsYW5uaW5nJTIwZ3Jvd3RofZW58MHx8fHwxNzM5ODMwNDEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Transparent Pricing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-900/90 to-slate-900/95"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-full mb-6">
              <Zap size={16} className="text-emerald-400" />
              <span className="text-sm font-black text-emerald-400 tracking-widest uppercase">
                Transparent Pricing
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
              Honest Pricing. <span className="text-emerald-400">No Surprises.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl font-medium">
              All prices are listed in INR. An 18% GST is added separately to every invoice as per Indian tax regulations, with complete transparency and no hidden charges.            </p>
          </motion.div>
        </div>
      </section>

      {/* Website Packages */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Website Development <span className="text-emerald-600">Packages</span></h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {websitePackages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 md:p-10 shadow-2xl border-2 transition-all ${pkg.highlight ? "border-emerald-500 lg:scale-105 z-10 my-4 lg:my-0" : "border-gray-50 hover:border-emerald-200"}`}
              >
                {pkg.mostEnquired && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-black tracking-widest uppercase shadow-xl flex items-center gap-2">
                    <Sparkles size={14} /> Most Enquired
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-500 font-medium text-sm">{pkg.tagline}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-gray-900 font-black text-3xl">₹{pkg.price}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex gap-3 text-sm font-medium text-gray-600">
                      <div className="w-5 h-5 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      {feat}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 ${pkg.highlight ? "bg-emerald-600 text-white shadow-emerald-200 shadow-xl hover:bg-emerald-700" : "bg-slate-50 text-gray-900 hover:bg-slate-100"}`}
                >
                  Get Started <ArrowRight size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Retainers */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Digital Marketing <span className="text-emerald-600">& SEO</span></h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Monthly Performance Plans</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingPlans.map((plan, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all">
                <h3 className="text-xl font-black text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Base Rate</div>
                  <div className="text-2xl font-black text-emerald-600">₹{plan.monthly}/mo</div>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((f, fi) => (
                    <div key={fi} className="flex gap-2 text-xs font-semibold text-gray-600">
                      <Plus size={14} className="text-emerald-500" /> {f}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="block text-center py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors">Select Plan</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Price List */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">Other Services <span className="text-emerald-600">Quick Reference</span></h2>
            <div className="space-y-4">
              {/* Table Headers - Hidden on very small mobile */}
              <div className="hidden md:grid grid-cols-2 border-b-2 border-slate-100 pb-4 mb-4">
                <div className="font-black text-gray-400 uppercase text-[10px] tracking-widest">Service</div>
                <div className="font-black text-gray-400 uppercase text-[10px] tracking-widest text-right">Starting Rate (Excl. GST)</div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-slate-50">
                {otherServices.map((s, idx) => (
                  <div key={idx} className="py-4 md:grid md:grid-cols-2 items-center group hover:bg-emerald-50/30 transition-colors">
                    <div className="font-bold text-gray-900 md:text-base text-sm mb-1 md:mb-0">{s.service}</div>
                    <div className="flex items-center justify-between md:contents">
                      <div className="md:hidden text-[10px] font-black text-gray-300 uppercase tracking-widest mt-1">Base Starting Rate</div>
                      <div className="font-black text-emerald-600 text-right md:text-base text-sm mt-1 md:mt-0">₹{s.base}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
              <p className="text-emerald-800 font-bold mb-4">Don't see what you need? We build custom!</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-xl font-black hover:bg-emerald-700 transition-colors">
                Contact for Custom Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">Pricing <span className="text-emerald-600">FAQs</span></h2>
          <div className="space-y-4">
            {faqs.map((f, idx) => (
              <FAQItem key={idx} q={f.q} a={f.a} defaultOpen={idx === 0} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
