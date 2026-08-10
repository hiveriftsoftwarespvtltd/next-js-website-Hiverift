"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { 
  User, 
  Phone, 
  Mail, 
  Briefcase, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Plus,
  Minus,
  MessageCircle,
  BarChart3,
  Users2,
  Trophy
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Swal from "sweetalert2";
import { submitContactForm } from "@/app/actions/contactActions";

const services = [
  "Website Development",
  "Mobile App Development",
  "Custom Software / ERP / CRM",
  "Digital Marketing & SEO",
  "E-Commerce Solutions",
  "AI & Machine Learning",
  "UI/UX Design",
  "Cloud & DevOps",
  "General Consultation"
];

const faqs = [
  { q: "How fast will I get a quote?", a: "Our team typically reviews your requirements and provides a detailed quote within 24 hours of submission." },
  { q: "Is the consultation really free?", a: "Yes! Our initial consultation is 100% free with no obligation to sign. We want to understand your vision first." },
  { q: "Do you sign NDAs?", a: "Absolutely. We prioritize your intellectual property and are happy to sign an NDA before discussing project details." },
  { q: "What is your pricing model?", a: "We offer flexible pricing including fixed-cost projects, hourly rates, and retainer-based models depending on your needs." }
];

const stats = [
  { icon: BarChart3, value: "150+", label: "Projects Delivered" },
  { icon: Users2, value: "98%", label: "Client Satisfaction" },
  { icon: Trophy, value: "12+", label: "Industry Awards" },
  { icon: Globe, value: "15+", label: "Global Presence" }
];

export default function LandingContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const data = new FormData();
      data.append("name", formData.name.trim());
      data.append("phone", formData.phone.trim());
      data.append("email", formData.email.trim());
      data.append("service", formData.service);
      data.append("message", `Landing Consultation Request for ${formData.service || 'Services'}`);

      const result = await submitContactForm(data);
      if (result.success) {
        Swal.fire({
          title: "Inquiry Sent!",
          text: "Your request has been submitted. Our team will contact you shortly.",
          icon: "success",
          confirmButtonColor: "#10b981",
        });
        setFormData({ name: "", phone: "", email: "", service: "" });
      } else {
        throw new Error(result.message || "Failed to send inquiry.");
      }
    } catch (err: any) {
      Swal.fire({
        title: "Submission Error",
        text: err.message || "Something went wrong.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 border border-emerald-200 shadow-sm">
              <Sparkles size={16} className="animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider">Trusted by 500+ Businesses</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1]">
              Transform Your Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 italic">Digital Reality</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Get a premium consultation and custom quote for your next big project. Our experts deliver state-of-the-art solutions tailored to your business goals.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {[
                { icon: ShieldCheck, title: "Secure & Reliable", desc: "Enterprise-grade security standards" },
                { icon: Zap, title: "Fast Delivery", desc: "Agile methodology for quick turnaround" },
                { icon: Globe, title: "Global Expertise", desc: "Serving clients across 15+ countries" },
                { icon: CheckCircle2, title: "24/7 Support", desc: "Round-the-clock technical assistance" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-200 transition-colors group">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-400/20 blur-3xl rounded-full animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-teal-400/20 blur-3xl rounded-full animate-blob animation-delay-2000"></div>

            <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_32px_64px_-16px_rgba(16,185,129,0.15)] rounded-[2.5rem] p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-[5rem]"></div>
              
              <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-900 mb-2">Request a Quote</h2>
                <p className="text-slate-500 font-medium">Fill out the details below and we'll be in touch.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={20} />
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full pl-12 pr-6 py-4 bg-slate-50/50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Contact Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={20} />
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="w-full pl-12 pr-6 py-4 bg-slate-50/50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email ID</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={20} />
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-6 py-4 bg-slate-50/50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Select Service</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={20} />
                    <select 
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full pl-12 pr-12 py-4 bg-slate-50/50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-bold text-slate-900 appearance-none bg-no-repeat bg-[right_1.5rem_center] bg-[length:1rem_1rem]"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2310b981' stroke-width='3'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")` }}
                    >
                      <option value="" disabled>Choose a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-black text-xl shadow-[0_20px_40px_-12px_rgba(16,185,129,0.4)] hover:shadow-[0_20px_40px_-12px_rgba(16,185,129,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Get My Quote</span>
                      <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                
                <p className="text-center text-xs text-slate-400 font-bold tracking-tight">
                  <ShieldCheck size={12} className="inline mr-1" /> Your data is protected by industry-standard encryption.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Success Metrics Section */}
      <section className="py-20 bg-emerald-900 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-800 rounded-2xl text-emerald-400 mb-4 shadow-xl">
                  <stat.icon size={32} />
                </div>
                <h3 className="text-4xl font-black text-white">{stat.value}</h3>
                <p className="text-emerald-300 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">Everything you need to know about starting your project with HiveRift.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 hover:border-emerald-200 transition-all cursor-pointer"
              >
                <div className="flex justify-between items-center gap-4">
                  <h4 className="text-lg font-black text-slate-900">{faq.q}</h4>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm border border-slate-100">
                    <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                  </div>
                </div>
                <p className="mt-4 text-slate-600 font-medium leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="pb-24 pt-12">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-emerald-200">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">Ready to Kickstart Your <br /> Next Project?</h2>
              <p className="text-xl text-emerald-50 font-medium opacity-90">Join hundreds of successful businesses that trust HiveRift for their digital transformation.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="px-10 py-5 bg-white text-emerald-700 rounded-2xl font-black text-xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                >
                  <MessageCircle size={24} />
                  Start Conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
