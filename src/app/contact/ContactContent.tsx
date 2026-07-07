"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
  User,
  Building2,
  Globe,
  Award,
  Zap,
  Landmark,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { submitContactForm } from "@/app/actions/contactActions";

const offices = [
  {
    country: "India (HQ)",
    address: "3rd Floor, Right Portion House No. 8577 (New) / Plot No. XVI/6501 (Old), Ward No. XVI, New Rohtak Road, Karol Bagh, New Delhi – 110005",
    flag: "🇮🇳",
    icon: Building2,
    label: "Headquarters"
  },
  {
    country: "USA - Michigan",
    address: "1234 East Grand River Avenue, Suite 250, Lansing, MI 48906, USA",
    flag: "🇺🇸",
    icon: Landmark,
    label: "United States Office"
  },
  {
    country: "Canada - Ontario",
    address: "265 Freure Drive, Cambridge, ON N1S 0C1, Canada",
    flag: "🇨🇦",
    icon: Globe,
    label: "Canada Office"
  },
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) {
      Swal.fire({ icon: 'error', title: 'Name Required', text: 'Please enter your full name.', confirmButtonColor: "#10b981" });
      setIsSubmitting(false);
      return;
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      Swal.fire({ icon: 'error', title: 'Invalid Email', text: 'Please enter a valid email address.', confirmButtonColor: "#10b981" });
      setIsSubmitting(false);
      return;
    }
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      Swal.fire({ icon: 'error', title: 'Invalid Phone', text: 'Please enter a valid 10-digit phone number.', confirmButtonColor: "#10b981" });
      setIsSubmitting(false);
      return;
    }
    if (!formData.service) {
      Swal.fire({ icon: 'error', title: 'Service Required', text: 'Please select a service.', confirmButtonColor: "#10b981" });
      setIsSubmitting(false);
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      Swal.fire({ icon: 'error', title: 'Details Required', text: 'Please provide at least 10 characters for project details.', confirmButtonColor: "#10b981" });
      setIsSubmitting(false);
      return;
    }

    try {
      const data = new FormData();
      data.append("name", formData.name.trim());
      data.append("email", formData.email.trim());
      data.append("phone", formData.phone.trim());
      data.append("company", formData.company.trim());
      data.append("service", formData.service);
      data.append("message", formData.message.trim());

      const result = await submitContactForm(data);

      if (result.success) {
        // Redirection to thank you page
        router.push("/thank-you");

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Server Error: Could not send message.");
      }
    } catch (error: any) {
      Swal.fire({
        title: "Submission Failed",
        text: error.message || "Could not connect to the server. Please try again later.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:h-[450px] overflow-hidden mt-20 md:mt-32 flex items-center pt-24 pb-12 md:py-0">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwdXMlMjBidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzM5ODMwNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact Us"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-full mb-6 max-w-fit">
              <Sparkles size={16} className="text-emerald-400" />
              <span className="text-sm font-black text-emerald-400 tracking-widest uppercase">
                Get In Touch
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
              Let's Build Something <span className="text-emerald-400">Great Together</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl font-medium">
              Share your project with us, and we’ll get back within 24 hours with a clear strategy and transparent pricing. No pressure, just honest guidance.            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
              {/* Process Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-4 space-y-12"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-xl mb-6">
                    <Zap size={18} className="text-emerald-600" />
                    <span className="text-sm font-black text-emerald-600 uppercase tracking-widest">The HiveRift Journey</span>
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight">What Happens After <br /> You Contact Us?</h2>

                  <div className="space-y-10 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-100">
                    {[
                      { step: 1, stage: "Initial Contact", desc: "Our Manager reaches out within 24 hours via call, email, or WhatsApp." },
                      { step: 2, stage: "Consultation", desc: "A free session to understand your goals, budget, and timeline." },
                      { step: 3, stage: "Proposal & Quote", desc: "Detailed project proposal with transparent pricing." },
                      { step: 4, stage: "Project Kickoff", desc: "Sign the agreement, collect payment, and begin work." },
                    ].map((item) => (
                      <div key={item.step} className="relative pl-16">
                        <div className="absolute left-0 w-12 h-12 bg-white rounded-2xl shadow-lg border border-emerald-100 flex items-center justify-center text-xl font-black text-emerald-600 z-10 transition-transform hover:scale-110">
                          {item.step}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{item.stage}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Trust Card */}
                <div className="bg-emerald-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                  <div className="relative z-10">
                    <p className="text-xl font-bold mb-4 italic leading-relaxed">"The goal of transforming businesses with cutting-edge technology is what fuels our efforts."</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-black text-sm">HR</div>
                      <div>
                        <p className="font-bold text-sm">Founder & CEO</p>
                        <p className="text-emerald-100 text-[10px]">HiveRift Delhi HQ</p>
                      </div>
                    </div>
                  </div>
                  <Sparkles size={120} className="absolute -bottom-10 -right-10 text-white/10" />
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-8 bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl p-6 md:p-12 border border-gray-100 relative"
              >
                <div className="absolute top-0 right-6 md:right-10 w-12 h-12 md:w-20 md:h-20 bg-emerald-500 rounded-b-2xl md:rounded-b-3xl flex items-center justify-center text-white shadow-xl">
                  <Send className="w-6 h-6 md:w-8 md:h-8" />
                </div>

                <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">Request a Quote</h2>
                <p className="text-sm md:text-base text-gray-500 mb-6 md:mb-10 font-medium">Fill out the form and our team will get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all shadow-sm font-bold" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all shadow-sm font-bold" placeholder="Enter your email " />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all shadow-sm font-bold" placeholder="Enter your number" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Company Name</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all shadow-sm font-bold" placeholder="Your Company Name" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Service Interested In *</label>
                    <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm font-bold">
                      <option value="">Select a service</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Custom Software / ERP / CRM">Custom Software / ERP / CRM</option>
                      <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                      <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                      <option value="AI & Machine Learning">AI & Machine Learning</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Cloud & DevOps">Cloud & DevOps</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest ml-1 flex justify-between">
                      <span>Project Details *</span>
                      <span className={`text-[10px] font-bold ${formData.message.length >= 10 ? 'text-emerald-600' : 'text-gray-400'}`}>
                        {formData.message.length} / 500 characters
                      </span>
                    </label>
                    <textarea name="message" id="message" value={formData.message} onChange={handleChange} required rows={4} maxLength={500} className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all shadow-sm font-bold resize-none" placeholder="Tell us more about your project goals..."></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full py-4 md:py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl md:rounded-2xl font-black text-lg md:text-xl shadow-xl hover:shadow-emerald-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 disabled:opacity-50">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <ArrowRight size={20} />}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Office Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* India HQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-emerald-300 transition-all group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-5xl">🇮🇳</div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900">India (HQ)</h3>
                    <p className="text-emerald-600 font-bold uppercase text-[10px] tracking-widest">Headquarters</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Call Us</p>
                      <a href="tel:+918814930229" className="text-base font-bold text-gray-900 hover:text-emerald-600 transition-colors">+91 88149 30229</a>
                      <p className="text-[10px] text-emerald-600 flex items-center gap-1 font-bold">
                        <CheckCircle2 size={10} /> WhatsApp Available
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Visit Us</p>
                      <p className="text-sm text-gray-700 font-bold leading-relaxed">3rd Floor, Right Portion House No. 8577 (New) / Plot No. XVI/6501 (Old), Ward No. XVI, New Rohtak Road, Karol Bagh, New Delhi – 110005</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Email Us</p>
                      <a href="mailto:info@hiverift.com" className="text-sm text-gray-900 font-bold hover:text-emerald-600">info@hiverift.com</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* USA Office */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-emerald-300 transition-all group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-5xl">🇺🇸</div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900">USA Office</h3>
                    <p className="text-emerald-600 font-bold uppercase text-[10px] tracking-widest">United States</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Call Us</p>
                      <a href="tel:+19728337525" className="text-base font-bold text-gray-900 hover:text-emerald-600 transition-colors">+1 972 833 7525</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Visit Us</p>
                      <p className="text-sm text-gray-700 font-bold leading-relaxed">1234 E Grand River Ave, Lansing, MI 48906</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Inquiries</p>
                      <a href="mailto:info@hiverift.com" className="text-sm text-gray-900 font-bold hover:text-emerald-600">info@hiverift.com</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Canada Office */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-emerald-300 transition-all group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-5xl">🇨🇦</div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900">Canada Office</h3>
                    <p className="text-emerald-600 font-bold uppercase text-[10px] tracking-widest">Ontario</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Visit Us</p>
                      <p className="text-sm text-gray-700 font-bold leading-relaxed">265 Freure Drive, Cambridge, ON N1S 0C1</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Global Support</p>
                      <a href="mailto:info@hiverift.com" className="text-sm text-gray-900 font-bold hover:text-emerald-600">info@hiverift.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <Globe size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Region</p>
                      <p className="text-sm text-gray-900 font-bold">North America</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="pb-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <User size={40} className="text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Founder & CEO</h3>
                  <p className="text-lg text-emerald-600 font-semibold">HiveRift</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-l-4 border-emerald-500">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At HiveRift, each client is our top priority. We ensure that every interaction with us is satisfying and meets your expectations. We welcome your valuable feedback and suggestions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  You can forward your concerns to{" "}
                  <a href="mailto:ceo@hiverift.com" className="text-emerald-600 font-semibold hover:underline">
                    info@hiverift.com
                  </a>{" "}
                  at any time and expect a prompt response. We are committed to providing you with our best services at all times.
                </p>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-emerald-200">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle2 size={20} />
                    <span className="font-semibold">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle2 size={20} />
                    <span className="font-semibold">Prompt Response</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle2 size={20} />
                    <span className="font-semibold">Client-Focused</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
