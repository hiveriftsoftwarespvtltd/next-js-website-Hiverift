"use client";

import Link from "next/link";
import { useParams,  useRouter } from "next/navigation";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { motion } from "motion/react";
import { industriesData } from "@/app/data/industries";
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Shield, 
  Zap,
  ShoppingBag,
  ArrowLeft,
  Settings,
  Globe,
  Database,
  Plane,
  Building2,
  Phone,
  Truck,
  FileText,
  Sparkles
} from "lucide-react";

const techLogos: Record<string, string> = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "AWS": "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "HL7/FHIR": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/HL7-FHIR_logo.svg/512px-HL7-FHIR_logo.svg.png",
  "WebRTC": "https://www.vectorlogo.zone/logos/webrtc/webrtc-icon.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Shopify": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",
  "Stripe": "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
  "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "Blockchain": "https://www.vectorlogo.zone/logos/ethereum/ethereum-icon.svg",
  "AI/ML": "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
};

export default function IndustryDetailClient() {
  const { industryId } = useParams();
  const router = useRouter();

  const id = Array.isArray(industryId) ? industryId[0] : (industryId as string);
  const industry = id ? (industriesData as any)[id] : null;

  if (!industry) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex flex-col items-center justify-center h-[70vh] px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              Page <span className="text-emerald-600">Not Found</span>
            </h1>
            <p className="text-gray-600 mb-10 text-lg md:text-xl">The industry detail page you're looking for was not found.</p>
            <Link
              href="/"
              className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-xl inline-flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
            <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={industry.heroImage} 
            alt={industry.title}
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          {/* Screenshot style gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-emerald-900/40 transform-gpu"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Badge like in screenshot */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 rounded-full mb-8">
              <Sparkles size={14} className="text-emerald-400" />
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">
                Industry Excellence
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-none"
            >
              HiveRift <br/>
              <span className="relative inline-block mt-2">
                <span className="text-emerald-500">{industry.title}</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-emerald-500/30 rounded-full -z-10"></span>
                <span className="absolute -bottom-1 left-0 w-3/4 h-1 bg-emerald-500 rounded-full"></span>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed font-bold opacity-90"
            >
              {industry.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex gap-4"
            >
              <Link href="/contact" className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-black hover:bg-emerald-500 transition-all shadow-xl">
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solutions Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Challenges Pillar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
                  Core <span className="text-emerald-600">Challenges</span>
                </h2>
                <div className="w-20 h-2 bg-emerald-600 rounded-full"></div>
                <p className="text-gray-600 text-lg font-medium">Navigating industry bottlenecks requires deep expertise and smart tech.</p>
              </div>

              <div className="grid gap-6">
                {industry.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6 group hover:border-emerald-200 hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors">
                      <Settings className="text-emerald-600 group-hover:text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{challenge}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Our Solutions Pillar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
                  HiveRift <span className="text-emerald-600">Solutions</span>
                </h2>
                <div className="w-20 h-2 bg-emerald-600 rounded-full"></div>
                <p className="text-gray-600 text-lg font-medium">Strategic digital roadmaps tailored for sustainable growth.</p>
              </div>

              <div className="grid gap-6">
                {industry.solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <div
                      key={index}
                      className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl hover:border-emerald-200 transition-all group"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                          <Icon size={24} />
                        </div>
                        <h3 className="text-xl font-black text-gray-900">{solution.title}</h3>
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed">{solution.description}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-black text-white mb-16 underline underline-offset-8 decoration-emerald-500"
          >
            Strategic <span className="text-emerald-400">Benefits</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industry.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-md p-8 rounded-3xl border border-gray-700 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-500">
                  <CheckCircle2 size={28} className="text-emerald-400 group-hover:text-white" />
                </div>
                <p className="text-white font-bold text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technolgies & CTA */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-10 tracking-tight uppercase">Tech Stack We Use</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-20">
              {industry.technologies.map((tech) => (
                <span key={tech} className="flex items-center gap-3 px-6 py-3 bg-white text-gray-700 rounded-2xl font-bold text-sm border border-gray-100 hover:border-emerald-500 hover:text-emerald-700 transition-all shadow-sm group">
                  {techLogos[tech] && (
                    <img 
                      src={techLogos[tech]} 
                      alt={tech} 
                      className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
                    />
                  )}
                  {tech}
                </span>
              ))}
            </div>

            <div className="bg-emerald-600 p-8 md:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-tight leading-tight">Ready to Transform Your {industry.title} Operations?</h3>
                  <p className="text-emerald-50 font-medium opacity-90">Let's build a scalable digital future together.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-white text-emerald-700 rounded-xl font-black text-sm hover:scale-105 transition-transform shadow-lg">
                    Free Consultation
                  </Link>
                  <Link href="/contact" className="px-8 py-4 bg-emerald-800/30 backdrop-blur-sm border border-white/20 text-white rounded-xl font-black text-sm hover:bg-emerald-800 transition-colors">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
