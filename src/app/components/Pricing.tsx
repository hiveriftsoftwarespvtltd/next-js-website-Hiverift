"use client";

import { motion } from "motion/react";
import { Check, Info } from "lucide-react";
import { useState } from "react";
import { LeadPopup } from "./LeadPopup";

const websitePricing = [
  {
    title: "Starter",
    price: 44999,
    gst: 8099,
    total: 53098,
    description: "Local shops, solo founders",
    features: ["Up to 5 Pages", "Template-Based Website", "Mobile Optimisation", "Basic SEO Setup", "1 Month Support", "2 Rounds Revisions"],
    popular: false
  },
  {
    title: "Business Pro",
    price: 59999,
    gst:10799,
    total: 70798,
    description: "Startups, SMEs",
    features: ["Up to 15 Pages", "Custom Design", "Mobile Optimisation", "Advanced SEO Setup", "WordPress Integration", "3 Months Support", "5 Rounds Revisions"],
    popular: true,
    badge: "Most Enquired"
  },
  {
    title: "Growth",
    price: 149999,
    gst: 26999,
    total: 176998,
    description: "Growing companies",
    features:["Up to 30 Pages", "Custom + CMS", "Full Technical SEO", "E-commerce Ready", "Headless CMS Option", "6 Months Support", "Unlimited Revisions"],
    popular: false
  }
];

const marketingPricing = [
  { service: "Starter", price: "7,999", gst: "1,440", total: "9,439", seo: "5 pages", keywords: "10", blog: "1/mo", social: "1 platform, 6 posts", ads: "-", meta: "-", report: "Basic", manager: "Shared", contract: "3 months" },
  { service: "Growth", price: "14,999", gst: "2,700", total: "17,699", seo: "15 pages", keywords: "25", blog: "2/mo", social: "2 platforms, 12 posts", ads: "Up to Rs. 20K spend", meta: "-", report: "Standard", manager: "Shared", contract: "3 months" },
  { service: "Scale", price: "24,999", gst: "4,500", total: "29,499", seo: "25 pages", keywords: "50", blog: "4/mo", social: "3 platforms, 18 posts", ads: "Up to Rs. 50K spend", meta: "Included", report: "Full dashboard", manager: "Dedicated", contract: "6 months" },
  { service: "Dominate", price: "39,999", gst: "7,200", total: "47,199", seo: "Unlimited", keywords: "100+", blog: "8/mo", social: "4 platforms, 24 posts", ads: "Up to Rs. 1.5L spend", meta: "Included + A/B", report: "Executive + insights", manager: "Senior strategist", contract: "6 months" },
];

export function Pricing() {
  const [activeTab, setActiveTab] = useState<"website" | "marketing" | "apps">("website");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    setIsPopupOpen(true);
  };

  return (
    <section className="py-5 md:py-15  lg:py-15 bg-slate-50 relative overflow-hidden">
      <LeadPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        selectedPlan={selectedPlan} 
      />
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 tracking-tight">
            Transparent <span className="text-emerald-600">Pricing</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 md:mb-10 text-base md:text-lg px-4">
            All prices are in Indian Rupees (INR). GST at 18% is applicable on all services.
          </p>

          {/* Tabs Control - Mobile Scrollable */}
          <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar mb-10 pb-2 px-2">
            <div className="flex bg-white p-1 rounded-2xl shadow-lg border border-gray-100 whitespace-nowrap">
              {["website", "marketing", "apps"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-4 md:px-8 py-2.5 md:py-3 rounded-xl text-xs md:text-sm font-bold transition-all ${
                    activeTab === tab 
                      ? "bg-emerald-600 text-white shadow-lg" 
                      : "text-gray-500 hover:text-emerald-600"
                  }`}
                >
                  {tab === "website" ? "Websites" : tab === "marketing" ? "Growth Plans" : "Apps & Software"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {activeTab === "website" && (
          <>
            {/* Website Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-12">
              {websitePricing.map((plan) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative bg-white rounded-2xl p-6 md:p-10 shadow-xl border-2 transition-all duration-500 hover:scale-[1.01] ${
                    plan.popular ? "border-emerald-500 ring-4 ring-emerald-500/5" : "border-gray-100"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-1.5 rounded-full text-xs font-bold shadow-xl">
                      {plan.badge}
                    </div>
                  )}
                  
                  <div className="mb-6 md:mb-8 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                    <p className="text-gray-500 text-xs md:text-sm font-medium">{plan.description}</p>
                  </div>

                  <div className="mb-8 p-8 bg-emerald-50/30 rounded-[2.5rem] border border-emerald-100/50 text-center relative overflow-hidden group/price">
                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-emerald-200/20 rounded-full blur-2xl group-hover/price:scale-150 transition-transform duration-700"></div>
                    
                    <div className="flex flex-col items-center">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-xl font-bold text-emerald-600">₹</span>
                        <span className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter">{plan.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-xs md:text-sm text-gray-600 font-medium">
                        <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-emerald-600" strokeWidth={3} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => handleSelectPlan(`Web Design: ${plan.title}`)}
                    className={`w-full py-4 rounded-xl md:rounded-2xl font-bold transition-all shadow-md ${
                    plan.popular ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-gray-900 text-white hover:bg-black"
                  }`}>
                    Select Plan
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Bottom Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-2">
              <div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col justify-between shadow-2xl">
                <div>
                  <h2 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">Enterprise</h2>
                  <p className="text-gray-400 text-[10px] md:text-xs font-bold mb-6">Corporates & Scaling Systems</p>
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-8 tracking-tight">Custom Quote</div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex gap-3 text-xs text-gray-300 font-medium"><Check size={16} className="text-emerald-400" /> Unlimited & Scaling</li>
                    <li className="flex gap-3 text-xs text-gray-300 font-medium"><Check size={16} className="text-emerald-400" /> Dedicated Resources</li>
                    <li className="flex gap-3 text-xs text-gray-300 font-medium"><Check size={16} className="text-emerald-400" /> 24/7 Priority Support</li>
                  </ul>
                </div>
                <button 
                  onClick={() => handleSelectPlan("Enterprise Solution")}
                  className="w-full py-4 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 shadow-lg"
                >
                  Contact Sales
                </button>
              </div>

              {/* Milestones Card */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl flex flex-col">
                <div className="flex items-center gap-3 mb-6 text-gray-900 font-bold text-lg">
                  <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                    <Info size={18} className="text-emerald-600" />
                  </div>
                  <h4>Milestones</h4>
                </div>
                <ul className="space-y-4 text-xs md:text-sm text-gray-600 font-medium">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 shadow-sm"></div>
                    <div><span className="text-gray-900 font-bold">50% Advance:</span> On project kickoff</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 shadow-sm"></div>
                    <div><span className="text-gray-900 font-bold">25% Midway:</span> Design approval</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 shadow-sm"></div>
                    <div><span className="text-gray-900 font-bold">25% Final:</span> Before handover</div>
                  </li>
                </ul>
              </div>

              {/* Taxation Card */}
              <div className="bg-emerald-50/20 p-8 rounded-2xl border border-emerald-100 shadow-xl flex flex-col">
                <div className="flex items-center gap-3 mb-6 text-gray-900 font-bold text-lg">
                  <div className="w-8 h-8 bg-emerald-100/50 rounded-lg flex items-center justify-center">
                    <Info size={18} className="text-emerald-600" />
                  </div>
                  <h4>Taxation</h4>
                </div>
                <div className="space-y-6">
                  <p className="text-[10px] md:text-xs text-gray-600 font-medium leading-relaxed">
                    Compliant with Indian GST laws.
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-sm">
                      <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Domestic (Delhi)</p>
                      <p className="text-xs font-bold text-gray-800">CGST 9% + SGST 9%</p>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-sm">
                      <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Inter-state (India)</p>
                      <p className="text-xs font-bold text-gray-800">IGST 18%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "marketing" && (
           <div className="max-w-7xl mx-auto space-y-4">
             {/* Desktop Table */}
             <div className="hidden md:block overflow-x-auto pb-8 px-2">
               <table className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                 <thead className="bg-gray-900 text-white">
                   <tr>
                      {marketingPricing.map(p => (
                        <th key={p.service} className="p-6 text-center group/th">
                          <div className="text-base font-black tracking-tight text-white mb-2">{p.service}</div>
                          <div className="inline-block px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                            <div className="text-emerald-400 text-sm font-black">₹{p.price}/mo</div>
                          </div>
                        </th>
                      ))}
                   </tr>
                 </thead>
                 <tbody className="text-sm font-medium">
                   <tr className="border-b border-gray-50 transition-colors hover:bg-slate-50"><td className="p-4 pl-6">SEO (Pages)</td>{marketingPricing.map(p => <td key={p.service} className="p-4 text-center text-gray-600">{p.seo}</td>)}</tr>
                   <tr className="border-b border-gray-50 transition-colors hover:bg-slate-50"><td className="p-4 pl-6">Keywords</td>{marketingPricing.map(p => <td key={p.service} className="p-4 text-center text-gray-600">{p.keywords}</td>)}</tr>
                   <tr className="border-b border-gray-50 transition-colors hover:bg-slate-50"><td className="p-4 pl-6">Blogs</td>{marketingPricing.map(p => <td key={p.service} className="p-4 text-center text-gray-600">{p.blog}</td>)}</tr>
                   <tr className="border-b border-gray-50 transition-colors hover:bg-slate-50"><td className="p-4 pl-6">Social Media</td>{marketingPricing.map(p => <td key={p.service} className="p-4 text-center text-gray-600">{p.social}</td>)}</tr>
                   <tr className="border-b border-gray-50 transition-colors hover:bg-slate-50"><td className="p-4 pl-6">Google Ads</td>{marketingPricing.map(p => <td key={p.service} className="p-4 text-center text-gray-600">{p.ads}</td>)}</tr>
                   <tr className="border-b border-gray-50 transition-colors hover:bg-slate-50"><td className="p-4 pl-6">Meta Ads</td>{marketingPricing.map(p => <td key={p.service} className="p-4 text-center text-gray-600">{p.meta}</td>)}</tr>
                   <tr className="border-b border-gray-50 transition-colors hover:bg-slate-50"><td className="p-4 pl-6">Report Type</td>{marketingPricing.map(p => <td key={p.service} className="p-4 text-center text-gray-600">{p.report}</td>)}</tr>
                   <tr className="border-b border-gray-50 transition-colors hover:bg-slate-50"><td className="p-4 pl-6">Min. Contract</td>{marketingPricing.map(p => <td key={p.service} className="p-4 text-center text-gray-600">{p.contract}</td>)}</tr>
                 </tbody>
               </table>
             </div>

             {/* Mobile Cards */}
             <div className="md:hidden space-y-6 px-2">
               {marketingPricing.map((item) => (
                 <div key={item.service} className="bg-white rounded-2xl p-6 shadow-xl border border-emerald-100">
                   <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                     <h3 className="text-xl font-bold text-emerald-600 uppercase tracking-wider">{item.service}</h3>
                     <span className="bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full text-xs">Growth</span>
                   </div>
                   <div className="mb-6">
                       <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Base Rate</p>
                       <p className="text-2xl font-black text-emerald-700 tracking-tight">₹{item.price}/mo</p>
                   </div>
                   <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-gray-100">
                     <div className="flex justify-between text-xs font-semibold"><span className="text-gray-400">SEO Audit:</span> <span className="text-gray-700">{item.seo}</span></div>
                     <div className="flex justify-between text-xs font-semibold"><span className="text-gray-400">Keywords:</span> <span className="text-gray-700">{item.keywords}</span></div>
                     <div className="flex justify-between text-xs font-semibold"><span className="text-gray-400">Content/Blog:</span> <span className="text-gray-700">{item.blog}</span></div>
                     <div className="flex justify-between text-xs font-semibold"><span className="text-gray-400">Social Ads:</span> <span className="text-gray-700">{item.social}</span></div>
                     <div className="flex justify-between text-xs font-semibold"><span className="text-gray-400">Google Ads:</span> <span className="text-gray-700">{item.ads}</span></div>
                     <div className="flex justify-between text-xs font-semibold"><span className="text-gray-400">Reporting:</span> <span className="text-gray-700">{item.report}</span></div>
                     <div className="flex justify-between text-xs font-semibold"><span className="text-emerald-700">Contract:</span> <span className="text-emerald-700 font-bold">{item.contract}</span></div>
                   </div>
                   <button onClick={() => handleSelectPlan(`Marketing: ${item.service}`)} className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold text-sm">Grow Now</button>
                 </div>
               ))}
             </div>
           </div>
        )}

        {activeTab === "apps" && (
           <div className="max-w-7xl mx-auto space-y-6">
             {/* Desktop Table */}
             <div className="hidden md:block overflow-x-auto pb-8 px-2">
               <table className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                 <thead className="bg-emerald-600 text-white text-center">
                   <tr>
                     <th className="p-6 text-left font-bold uppercase tracking-widest text-[10px]">Solution Type</th>
                     <th className="p-8 bg-emerald-700 font-bold uppercase tracking-widest text-xs text-center">Starting Rate <br/> <span className="text-[8px] tracking-[0.2em]">(Excl. GST)</span></th>
                   </tr>
                 </thead>
                 <tbody className="text-sm text-center font-medium">
                   {[
                     { type: "Business / Portfolio Website", price: "14,999" },
                     { type: "E-commerce (Woo/Shopify)", price: "24,999" },
                     { type: "Custom Web Application", price: "49,999" },
                     { type: "Android OR iOS App (Single)", price: "59,999" },
                     { type: "Android + iOS App (Cross)", price: "99,999" },
                     { type: "Custom CRM / ERP System", price: "1,49,999" },
                     { type: "AI Chatbot / Automation", price: "39,999" },
                     { type: "Cloud Setup & DevOps", price: "19,999" }
                   ].map((row, idx) => (
                     <tr key={idx} className="border-b border-gray-50 transition-colors hover:bg-slate-50">
                       <td className="p-4 pl-6 text-left font-bold text-gray-900">{row.type}</td>
                       <td className="p-4 font-bold text-emerald-700">₹{row.price}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>

             {/* Mobile Cards (Full 8 items) */}
             <div className="md:hidden space-y-4 px-2">
               {[
                 { type: "Business / Portfolio Website", price: "14,999" },
                 { type: "E-commerce (Woo/Shopify)", price: "24,999" },
                 { type: "Custom Web Application", price: "49,999" },
                 { type: "Android OR iOS App (Single)", price: "59,999" },
                 { type: "Android + iOS App (Cross)", price: "99,999" },
                 { type: "Custom CRM / ERP System", price: "1,49,999" },
                 { type: "AI Chatbot / Automation", price: "39,999" },
                 { type: "Cloud Setup & DevOps", price: "19,999" }
               ].map((item, idx) => (
                 <div key={idx} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 flex flex-col gap-3">
                   <h3 className="text-sm font-bold text-gray-900 border-b border-gray-50 pb-2">{item.type}</h3>
                   <div className="flex justify-between items-end">
                     <div>
                       <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tight mb-1">Base Starting Rate</p>
                       <p className="text-xl font-black text-emerald-700 tracking-tighter">₹{item.price}</p>
                     </div>
                   </div>
                   <button onClick={() => handleSelectPlan(`Solution: ${item.type}`)} className="mt-2 py-3 bg-emerald-600 text-white rounded-lg text-xs font-bold shadow-md shadow-emerald-200 uppercase tracking-widest">Enquire Now</button>
                 </div>
               ))}
             </div>
           </div>
        )}
      </div>
    </section>
  );
}