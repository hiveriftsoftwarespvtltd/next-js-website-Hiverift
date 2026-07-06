"use client";

import { motion } from "motion/react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ShieldCheck, Database, Mail, Phone, MapPin, Fingerprint, Eye } from "lucide-react";

export default function PrivacyContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:h-[450px] overflow-hidden mt-20 md:mt-32 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2VjdXJpdHklMjBwcml2YWN5fGVufDB8fHx8MTczOTgzMDQwMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Privacy Policy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-900/90 to-slate-900/95"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-full mb-6 max-w-fit mx-auto">
              <Fingerprint size={16} className="text-emerald-400" />
              <span className="text-sm font-black text-emerald-400 tracking-widest uppercase">Data Protection</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
              Privacy <span className="text-emerald-400">Policy</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto font-medium">
              We respect your privacy. This policy explains exactly what data we collect and why.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-16">
            
            <div className="grid md:grid-cols-3 gap-8 pb-16 border-b border-slate-100">
              <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-[2rem]">
                <Eye className="text-emerald-600 mb-4" />
                <h4 className="font-black text-sm uppercase tracking-widest mb-2">Transparency</h4>
                <p className="text-xs text-gray-500 font-bold">We tell you exactly what we do with data.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-[2rem]">
                <Database className="text-emerald-600 mb-4" />
                <h4 className="font-black text-sm uppercase tracking-widest mb-2">Security</h4>
                <p className="text-xs text-gray-500 font-bold">Encrypted storage and secure servers.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-[2rem]">
                <ShieldCheck className="text-emerald-600 mb-4" />
                <h4 className="font-black text-sm uppercase tracking-widest mb-2">Compliance</h4>
                <p className="text-xs text-gray-500 font-bold">Aligned with India's DPDP Act 2023.</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed space-y-12">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">1. Who We Are</h3>
                <p>HiveRift is operated by KhatuShyam Technologies, a company registered in India, with its principal office at 3rd Floor, Right Portion House No. 8577 (New) / Plot No. XVI/6501 (Old), Ward No. XVI, New Rohtak Road, Karol Bagh, New Delhi – 110005. For privacy matters, contact: info@hiverift.com</p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">2. What Data We Collect</h3>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex gap-3 items-start"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span> <strong>Contact form data:</strong> Name, email, phone number, and project details.</li>
                  <li className="flex gap-3 items-start"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span> <strong>Cookies & analytics:</strong> Google Analytics data to understand visitor behavior.</li>
                  <li className="flex gap-3 items-start"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span> <strong>Marketing data:</strong> If you subscribe to our newsletter.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">3. How We Use Your Data</h3>
                <p>To respond to your enquiries, deliver our services, and improve our website. We do not sell, rent, or share your personal data with third parties for their marketing purposes.</p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">7. Your Rights</h3>
                <p>Under India's DPDP Act 2023, you have the right to access, correct, or delete your data. To exercise these rights, email: info@hiverift.com</p>
              </div>

              <div className="bg-slate-50 p-10 rounded-[2.5rem] mt-16 border border-slate-100">
                <h3 className="text-2xl font-black text-gray-900 mb-8">Contact Our Data Officer</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600"><Mail size={20}/></div>
                    <span className="font-bold text-gray-900">info@hiverift.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600"><Phone size={20}/></div>
                    <span className="font-bold text-gray-900">+91 8814930229</span>
                  </div>
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 flex-shrink-0"><MapPin size={20}/></div>
                    <span className="font-bold text-gray-900 leading-tight">3rd Floor, Right Portion House No. 8577 (New) / Plot No. XVI/6501 (Old), Ward No. XVI, New Rohtak Road, Karol Bagh, New Delhi – 110005, India</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
