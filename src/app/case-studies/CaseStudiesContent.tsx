"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight, TrendingUp, Users, Award, Clock, CheckCircle2, Sparkles,
  Code, Target, Rocket, Globe, Search, Zap, X, ChevronDown, Plus, Minus,
  MessageCircle, BarChart3, PieChart, ShieldCheck, Mail, Building2, MapPin,
  Trophy, ExternalLink, ChevronRight, PlayCircle
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

// --- Types ---
interface CaseStudy {
  id: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  image: string;
  gradient: string;
  metrics: { label: string; value: string; icon: any; color?: string }[];
  technologies: string[];
  challenge: string;
  solution: string;
  delivered: string[];
  results: string[];
  investment: string;
  // Detailed View Dynamic Data
  detailTitle: string | React.ReactNode;
  detailSubtitle: string;
  problemDescription: string;
  resultsIntro: string;
  successHighlightTitle: string;
  successHighlightDesc: string;
  quickAnswers?: { q: string; a: string }[];
  clientOverview?: {
    industry: string;
    location: string;
    businessType: string;
    duration: string;
    services: string;
  };
  problems?: string[];
  strategySteps?: { title: string; desc: string; icon: any; color: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
  faqs?: { q: string; a: string }[];
}

// --- Data ---
const caseStudies: CaseStudy[] = [
  {
    id: "legal-consultancy-delhi",
    title: "Delhi Legal Consultancy Brand Website + SEO",
    category: "Professional Services",
    industry: "Legal",
    description: "Transformed a 15+ year old offline consultancy into a digital leader, ranking #1 for high-intent keywords in Delhi NCR.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhbmN5JTIwbGF3JTIwb2ZmaWNlfGVufDF8fHx8MTcwODkxMjQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-emerald-600 to-teal-600",
    metrics: [
      { label: "Increase in Traffic", value: "300%", icon: TrendingUp, color: "text-emerald-600" },
      { label: "More Leads", value: "5X", icon: Users, color: "text-emerald-500" },
      { label: "Return on Investment", value: "3X", icon: Award, color: "text-teal-600" },
      { label: "Time Taken", value: "60 Days", icon: Clock, color: "text-emerald-400" },
    ],
    technologies: ["WordPress", "SEO", "Google My Business", "Google Ads"],
    challenge: "A Delhi legal consultancy with 15+ years of experience had no digital presence. Referrals were their only source of clients.",
    solution: "Built a professional 8-page website, optimised for legal services keywords in Delhi and NCR.",
    delivered: ["8-page website", "On-page SEO", "GMB optimisation", "Google Ads"],
    results: ["1,200 visits/month", "#1 ranking for 8 keywords", "22 leads in 3 months"],
    investment: "Professional Retainer",
    detailTitle: <>How We Generated <span className="text-emerald-400">5X More Leads</span> for a Legal Consultancy in 60 Days</>,
    detailSubtitle: "See how our data-driven SEO and brand strategy helped a traditional legal firm dominate the Delhi NCR market.",
    problemDescription: "The firm had zero online visibility, allowing younger competitors to capture 90% of the digital lead volume in the region.",
    resultsIntro: "In just two months, we established a dominant search presence and a consistent lead generation engine.",
    successHighlightTitle: "5X More Leads In Just 60 Days!",
    successHighlightDesc: "The campaign transformed their offline reputation into a high-converting digital asset.",
    quickAnswers: [
      { q: "What is this case study about?", a: "Digitizing a legacy legal consultancy and ranking them #1 for high-value corporate legal keywords." },
      { q: "What strategy did we use?", a: "A mix of aggressive local SEO, technical website optimization, and targeted Google Ads." },
      { q: "What were the results?", a: "Traffic increased by 300% and lead volume grew from zero to a consistent 20+ per month." }
    ],
    clientOverview: {
      industry: "Legal Services",
      location: "New Delhi, India",
      businessType: "Legacy Consultancy",
      duration: "60 Days",
      services: "SEO, Web Design, GMB & Ads"
    },
    problems: [
      "Zero organic traffic and search visibility",
      "No digital footprint for a 15-year old firm",
      "High competition from modern legal startups",
      "Complete reliance on offline referrals"
    ],
    strategySteps: [
      { title: "SEO Audit", desc: "Analyzing competitor gaps in the Delhi legal market.", icon: Search, color: "bg-emerald-600" },
      { title: "Brand Website", desc: "Building a high-authority 8-page professional site.", icon: Code, color: "bg-teal-600" },
      { title: "GMB Dominance", desc: "Optimizing local listings for neighborhood search.", icon: Globe, color: "bg-emerald-500" },
      { title: "Targeted Ads", desc: "Running high-intent legal service campaigns.", icon: Target, color: "bg-teal-500" },
      { title: "Lead Engine", desc: "Implementing automated booking and tracking.", icon: Zap, color: "bg-emerald-700" }
    ],
    testimonial: {
      quote: "HiveRift took our 15-year old offline practice and made us the #1 corporate lawyers on Google in Delhi. The ROI has been incredible.",
      author: "Adv. Rajesh Kumar",
      role: "Senior Partner",
      image: "https://i.pravatar.cc/150?u=legal1"
    },
    faqs: [
      { q: "How long did it take to see results?", a: "We saw the first high-value corporate lead within 15 days of launching the optimized site." },
      { q: "How did you increase the traffic?", a: "By targeting 'Money-Keywords' that corporate clients use when looking for consultancy." },
      { q: "Is this strategy scalable?", a: "Yes, we are currently expanding their reach to the entire NCR region including Noida and Gurgaon." },
      { q: "How do you maintain the SEO rankings after the initial campaign?", a: "We provide ongoing maintenance that includes regular content updates, technical SEO audits, and continuous keyword monitoring to ensure the firm stays ahead of new competitors in the Delhi market." }
    ]
  },
  {
    id: "jaipur-handicrafts-ecommerce",
    title: "Jaipur Handicrafts Brand E-Commerce Website",
    category: "Retail & E-Commerce",
    industry: "Handicrafts",
    description: "Enabled a local handicrafts business to reach customers across India with a tailored e-commerce infrastructure.",
    image: "https://images.unsplash.com/photo-1590073844006-33379778ae09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoYW5kaWNyYWZ0cyUyMHNob3B8ZW58MXx8fHwxNzA4OTEyNDAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-teal-500 to-emerald-500",
    metrics: [
      { label: "Increase in Traffic", value: "450%", icon: TrendingUp, color: "text-emerald-600" },
      { label: "Monthly Orders", value: "340+", icon: Users, color: "text-emerald-500" },
      { label: "Return on Investment", value: "4X", icon: Award, color: "text-teal-600" },
      { label: "Time Taken", value: "90 Days", icon: Clock, color: "text-emerald-400" },
    ],
    technologies: ["WooCommerce", "Razorpay", "Stripe", "Instagram Shopping", "FB Shop"],
    challenge: "A family-run handicrafts business in Jaipur was selling exclusively at local fairs. They had no way to reach the global market.",
    solution: "Built a high-performance WooCommerce store with global payment integrations and social commerce sync.",
    delivered: ["Custom Store", "Payment Gateway", "Social Sync", "SEO Catalog"],
    results: ["340+ orders/mo", "Rs. 6.3L revenue", "Global shipping active"],
    investment: "E-Commerce Package",
    detailTitle: <>Scaling a <span className="text-emerald-400">Handicrafts Legacy</span> to a National E-Commerce Brand</>,
    detailSubtitle: "See how we transformed a local Jaipur artisan shop into a high-growth D2C brand shipping nationwide.",
    problemDescription: "The business was limited to physical exhibitions and local walk-ins, with no digital catalog or payment collection system.",
    resultsIntro: "Within 90 days, the brand went from zero online presence to processing hundreds of orders every month.",
    successHighlightTitle: "450% Traffic Growth!",
    successHighlightDesc: "The new store reached customers in 22+ Indian states in the first three months alone.",
    quickAnswers: [
      { q: "What is this case study about?", a: "Digitizing a traditional handicrafts business and building a robust e-commerce engine." },
      { q: "What strategy did we use?", a: "Combining a mobile-first UI with heavy social media integration and local-to-global payment setups." },
      { q: "What were the results?", a: "Consistent monthly revenue of Rs. 6L+ and a repeat customer rate of 42%." }
    ],
    clientOverview: {
      industry: "E-commerce",
      location: "Jaipur, India",
      businessType: "Artisan Retail",
      duration: "90 Days",
      services: "D2C Web Development & Marketing"
    },
    problems: [
      "Limited to local fairs and walk-in sales",
      "Manual order and inventory tracking errors",
      "Unable to accept digital/international payments",
      "Zero social media brand identity"
    ],
    strategySteps: [
      { title: "Store Setup", desc: "Developing a robust, high-speed WooCommerce engine.", icon: Code, color: "bg-emerald-600" },
      { title: "Catalog SEO", desc: "Optimizing 200+ product listings for search intent.", icon: Search, color: "bg-teal-600" },
      { title: "Social Sync", desc: "Integrating Instagram and FB Shops for direct sales.", icon: Globe, color: "bg-emerald-500" },
      { title: "Global Payments", desc: "Setting up Razorpay and Stripe for seamless checkout.", icon: ShieldCheck, color: "bg-teal-500" },
      { title: "Launch Ads", desc: "Driving high-conversion traffic via Facebook Ads.", icon: Rocket, color: "bg-emerald-700" }
    ],
    testimonial: {
      quote: "HiveRift didn't just build a website; they built our digital future. We are now shipping our products across India and to the US.",
      author: "Priya Sharma",
      role: "Founder, Jaipur Artisans",
      image: "https://i.pravatar.cc/150?u=jaipur"
    },
    faqs: [
      { q: "How did you handle the transition from local fairs to a national e-commerce platform?", a: "We mapped out their entire product catalog and built a high-performance WooCommerce store that integrated seamlessly with their existing logistics, allowing them to reach customers across 22+ states." },
      { q: "What was the most challenging part of this project?", a: "The primary challenge was digitizing a traditional, physical-only inventory and setting up a secure, multi-currency payment gateway that could handle global transactions while maintaining the brand's artisan feel." },
      { q: "How do you ensure social media sales are tracked correctly?", a: "We implemented Facebook and Instagram Shop sync, which allows for direct purchase tracking through pixel data, giving the client full visibility into which social posts were driving the most revenue." },
      { q: "Can the e-commerce store handle international shipping and customs?", a: "Yes, the platform is integrated with global shipping partners that automatically calculate international rates and provide documentation for customs, enabling smooth delivery to customers in the US and Europe." }
    ]
  },
  {
    id: "pune-realestate-crm",
    title: "Pune-Based Real Estate Firm Custom CRM",
    category: "Real Estate",
    industry: "Real Estate",
    description: "Automated lead management for a mid-sized firm, reducing response time from 4 hours to just 8 minutes.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbW9kZXJuJTIwYnVpbGRpbmclMjBhcGFydG1lbnR8ZW58MXx8fHwxNzA4OTEyNDAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-emerald-500 to-teal-500",
    metrics: [
      { label: "Response Speed", value: "96%", icon: TrendingUp, color: "text-emerald-600" },
      { label: "Lead Conversion", value: "3X", icon: Users, color: "text-emerald-500" },
      { label: "Addl. Revenue", value: "Rs. 38L", icon: Award, color: "text-teal-600" },
      { label: "Time Taken", value: "120 Days", icon: Clock, color: "text-emerald-400" },
    ],
    technologies: ["React", "Node.js", "WhatsApp API", "PostgreSQL", "Analytics"],
    challenge: "Leads were falling through the cracks due to manual Excel tracking and slow follow-ups.",
    solution: "A custom CRM with WhatsApp API integration for instant lead capture and automated response.",
    delivered: ["Custom CRM", "WhatsApp API", "Lead Scoring", "Analytics"],
    results: ["Response time under 8 mins", "3x conversion rate", "Team productivity up 40%"],
    investment: "Custom CRM Development",
    detailTitle: <>Reducing <span className="text-emerald-400">Lead Leakage</span> by 96% for a Real Estate Firm</>,
    detailSubtitle: "How automated CRM and WhatsApp integration transformed a chaotic sales process into a closure machine.",
    problemDescription: "A firm in Pune was losing nearly 40% of their digital leads due to a 4+ hour manual response delay.",
    resultsIntro: "The custom-built engine now captures, scores, and initiates contact with new leads in under 8 minutes.",
    successHighlightTitle: "Rs. 38L Addl. Revenue!",
    successHighlightDesc: "Faster response times directly resulted in higher closure rates and a massive boost in team productivity.",
    quickAnswers: [
      { q: "What is this case study about?", a: "Automation of the real estate sales funnel to ensure zero lead leakage." },
      { q: "What strategy did we use?", a: "Building a custom SaaS-style CRM with real-time API integrations and lead scoring." },
      { q: "What were the results?", a: "Response time dropped by 96%, and lead conversion rate tripled." }
    ],
    clientOverview: {
      industry: "Real Estate",
      location: "Pune, India",
      businessType: "Brokerage Firm",
      duration: "120 Days",
      services: "Custom SaaS Development"
    },
    problems: [
      "Leads lost in manual Excel entry sheets",
      "Agent response times exceeding 4 hours",
      "No system to prioritize 'hot' leads",
      "High drop-off rate during follow-up stages"
    ],
    strategySteps: [
      { title: "CRM Engine", desc: "Developing a custom lead database and dashboard.", icon: Code, color: "bg-emerald-600" },
      { title: "WhatsApp API", desc: "Automating instant greetings to every new lead.", icon: MessageCircle, color: "bg-teal-600" },
      { title: "Lead Scoring", desc: "Categorizing leads by budget and urgency.", icon: Target, color: "bg-emerald-500" },
      { title: "Sales Board", desc: "Real-time task tracking for the sales team.", icon: Zap, color: "bg-teal-500" },
      { title: "ROI Dash", desc: "Tracking cost-per-lead vs final closing revenue.", icon: BarChart3, color: "bg-emerald-700" }
    ],
    testimonial: {
      quote: "The CRM HiveRift built changed how we sell. We don't lose leads anymore, and the automated WhatsApp is a total game changer.",
      author: "Vikram Deshmukh",
      role: "Managing Director",
      image: "https://i.pravatar.cc/150?u=pune"
    },
    faqs: [
      { q: "How long did it take to build and deploy the custom CRM?", a: "The entire process, from initial audit to final deployment and team training, took 120 days, with the core automated WhatsApp features going live in the first 45 days." },
      { q: "How does the WhatsApp integration actually help sales agents?", a: "It removes the delay between lead capture and first contact. Agents no longer have to manually type messages; the system initiates a personalized greeting instantly, keeping the lead engaged while it's 'hot'." },
      { q: "Can this system handle leads from multiple platforms like Facebook and Google?", a: "Absolutely. We built the CRM with a centralized API that aggregates leads from all sources website forms, Facebook Ads, and Google Ads into a single, scored dashboard for the team." },
      { q: "Is the CRM accessible on mobile devices for agents on the field?", a: "Absolutely. The CRM is built with a mobile-first responsive design, and the WhatsApp integration allows agents to manage leads and respond to queries directly from their phones while visiting sites." }
    ]
  },
  {
    id: "ludhiana-garments-erp",
    title: "Ludhiana Garments Manufacturer Custom ERP",
    category: "Manufacturing",
    industry: "Garments",
    description: "Modernized a production unit with 120+ employees, reducing inventory wastage by 52% through real-time tracking.",
    image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFjdG9yeSUyMGFwcGFyZWwlMjBtYW51ZmFjdHVyaW5nfGVufDB8fHx8MTczOTgzMDQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-teal-600 to-emerald-600",
    metrics: [
      { label: "Efficiency", value: "+38%", icon: TrendingUp, color: "text-emerald-600" },
      { label: "Waste Reduction", value: "52%", icon: Target, color: "text-emerald-500" },
      { label: "Payroll Speed", value: "97%", icon: Clock, color: "text-teal-600" },
    ],
    technologies: ["React", "Python", "PostgreSQL", "Cloud Hosting", "Mobile App"],
    challenge: "A garment unit in Ludhiana was running on Tally and WhatsApp groups. They had no real-time visibility on production or material stock, causing delays.",
    solution: "Designed a cloud ERP covering production, inventory, HR, and payroll, with a mobile dashboard for management accessible 24/7.",
    delivered: [
      "Cloud ERP (React + Python)",
      "Production planning module",
      "Inventory & procurement module",
      "HR, attendance & payroll module",
      "Mobile app for supervisors",
    ],
    results: [
      "Production efficiency up by 38%",
      "Material wastage reduced by half",
      "Order fulfilment 4 days faster",
      "Payroll from 3 days to 2 hours",
    ],
    investment: "Custom ERP (Rs. 3,20,000) + 12-Month AMC",
    detailTitle: <>Reducing <span className="text-emerald-400">Inventory Wastage by 52%</span> for a Ludhiana Garment Unit</>,
    detailSubtitle: "Discover how a custom cloud ERP transformed a traditional manufacturing unit into a data-driven production powerhouse.",
    problemDescription: "The production unit was struggling with manual inventory tracking via Tally and WhatsApp, leading to significant material wastage and production delays.",
    resultsIntro: "Our custom ERP solution provided real-time visibility across all production stages, resulting in a dramatic increase in efficiency and wastage reduction.",
    successHighlightTitle: "52% Less Material Waste!",
    successHighlightDesc: "Real-time tracking enabled the team to optimize material usage and eliminate inventory leaks.",
    quickAnswers: [
      { q: "What is this case study about?", a: "Digitizing a large-scale garment manufacturing unit in Ludhiana with a custom ERP." },
      { q: "What strategy did we use?", a: "Implementing a cloud-native ERP with dedicated modules for production, HR, and inventory." },
      { q: "What were the results?", a: "38% increase in efficiency and payroll processing time reduced from 3 days to 2 hours." }
    ],
    clientOverview: {
      industry: "Garment Manufacturing",
      location: "Ludhiana, Punjab",
      businessType: "Production Unit (120+ Employees)",
      duration: "180 Days",
      services: "Custom ERP & Mobile App"
    },
    problems: [
      "No real-time production visibility",
      "Manual inventory tracking errors",
      "Inefficient payroll processing",
      "Reliance on fragmented WhatsApp groups"
    ],
    strategySteps: [
      { title: "Audit & Design", desc: "Mapping existing manual production workflows.", icon: Search, color: "bg-emerald-600" },
      { title: "Core ERP Build", desc: "Developing the React-Python cloud infrastructure.", icon: Code, color: "bg-teal-600" },
      { title: "Inventory Sync", desc: "Setting up real-time material tracking modules.", icon: Zap, color: "bg-emerald-500" },
      { title: "HR & Payroll", desc: "Automating attendance and payroll processing.", icon: Users, color: "bg-teal-500" },
      { title: "Mobile Launch", desc: "Deploying supervisor apps for on-floor tracking.", icon: Rocket, color: "bg-emerald-700" }
    ],
    testimonial: {
      quote: "The ERP HiveRift built for us has brought a level of transparency we never thought possible in our factory. Our wastage is down, and efficiency is at an all-time high.",
      author: "Mr. Amit Singh",
      role: "Director, Garments Unit",
      image: "https://i.pravatar.cc/150?u=ludhiana"
    },
    faqs: [
      { q: "Can the ERP handle custom production workflows?", a: "Yes, the system was built from the ground up to match the specific stages of garment manufacturing, from cutting to final packing." },
      { q: "Is the data secure on the cloud?", a: "Absolutely. We used enterprise-grade encryption and secure cloud hosting to ensure all production and payroll data is protected." },
      { q: "How long did the training take?", a: "We conducted intensive on-site training for 15 days to ensure the staff was comfortable using the new digital modules." },
      { q: "Does it support mobile reporting?", a: "Yes, supervisors have a dedicated mobile app to log production data and check inventory levels in real-time." }
    ]
  },
  {
    id: "mumbai-edtech-app",
    title: "Mumbai EdTech Startup Student Learning App",
    category: "Education & E-Learning",
    industry: "Education",
    description: "Built a mobile-first learning ecosystem that boosted course completion rates from 19% to 78% in 3 months.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMHRlY2hub2xvZ3klMjBsZWFybmluZ3xlbnwxfHx8fDE3MDg5MTI0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-emerald-500 to-teal-500",
    metrics: [
      { label: "Active Users", value: "8,400", icon: Users, color: "text-emerald-600" },
      { label: "Completion Rate", value: "78%", icon: CheckCircle2, color: "text-emerald-500" },
      { label: "Revenue/mo", value: "Rs. 12.6L", icon: Award, color: "text-teal-600" },
    ],
    technologies: ["React Native", "Zoom API", "Razorpay", "Node.js", "AWS"],
    challenge: "An EdTech startup was using YouTube and WhatsApp to distribute content. Students had no tracking, and completion rates were below 20%.",
    solution: "Developed a cross-platform React Native app with modules, live classes, progress tracking, and parent dashboards.",
    delivered: [
      "React Native app (Android + iOS)",
      "Live class integration (Zoom)",
      "Quiz & assignment engine",
      "Razorpay subscription billing",
      "Full Store deployment",
    ],
    results: [
      "Active users up to 8,400 in 3 months",
      "Completion rates improved by 4x",
      "Rs. 12.6L monthly recurring revenue",
      "4.7/5 app store rating",
    ],
    investment: "App Package (Rs. 1,17,999) + 6-Month Support",
    detailTitle: <>Scaling Course Completion to <span className="text-emerald-400">78%</span> with a Mobile-First Learning Ecosystem</>,
    detailSubtitle: "How we helped a Mumbai startup move from fragmented WhatsApp learning to a professional React Native ecosystem.",
    problemDescription: "Students were losing interest due to the lack of structure and progress tracking in a YouTube/WhatsApp based learning model.",
    resultsIntro: "The launch of the dedicated app transformed the student experience, leading to a 4x increase in course completion rates.",
    successHighlightTitle: "4.7/5 App Store Rating!",
    successHighlightDesc: "The app became the primary driver for student engagement and recurring revenue growth.",
    quickAnswers: [
      { q: "What is this case study about?", a: "Building a comprehensive EdTech platform for a Mumbai-based startup." },
      { q: "What strategy did we use?", a: "Developing a high-performance React Native app with integrated live classes and subscription billing." },
      { q: "What were the results?", a: "8,400+ active users and Rs. 12.6L monthly recurring revenue within 3 months." }
    ],
    clientOverview: {
      industry: "EdTech",
      location: "Mumbai, India",
      businessType: "E-Learning Startup",
      duration: "120 Days",
      services: "Mobile App & Backend Development"
    },
    problems: [
      "Fragmented learning experience",
      "Lack of student progress tracking",
      "Manual subscription management",
      "Low course completion rates (19%)"
    ],
    strategySteps: [
      { title: "UX Strategy", desc: "Designing an engaging, mobile-first learning flow.", icon: Target, color: "bg-emerald-600" },
      { title: "App Dev", desc: "Building the React Native core for iOS & Android.", icon: Code, color: "bg-teal-600" },
      { title: "Live Classes", desc: "Integrating Zoom API for seamless live sessions.", icon: PlayCircle, color: "bg-emerald-500" },
      { title: "Billing Engine", desc: "Setting up Razorpay for automated subscriptions.", icon: ShieldCheck, color: "bg-teal-500" },
      { title: "Growth Analytics", desc: "Tracking student behavior to optimize engagement.", icon: BarChart3, color: "bg-emerald-700" }
    ],
    testimonial: {
      quote: "HiveRift's expertise in mobile development gave us a world-class app. Our students love the interface, and our revenue has stabilized with the new billing system.",
      author: "Anjali Mehta",
      role: "Founder, EdTech Startup",
      image: "https://i.pravatar.cc/150?u=mumbai"
    },
    faqs: [
      { q: "Does the app support offline viewing?", a: "Yes, students can download modules to watch later, ensuring learning continues even with poor internet connectivity." },
      { q: "How are live classes managed?", a: "The app integrates directly with Zoom, so students can join classes with one tap without leaving the learning environment." },
      { q: "Can parents track progress?", a: "Yes, we built a dedicated parent dashboard to monitor quiz scores and overall course completion." },
      { q: "Is the platform scalable?", a: "The backend is hosted on AWS with auto-scaling, allowing it to handle thousands of concurrent live students effortlessly." }
    ]
  },
  {
    id: "surat-diamond-merchant",
    title: "Surat Diamond Merchant Luxury Digital Showroom",
    category: "Luxury & Retail",
    industry: "Luxury",
    description: "Digitized a high-value inventory for international buyers, securing Rs. 1.2Cr estimated pipeline in 90 days.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBkaWFtb25kfGVufDF8fHx8MTcwODkxMjQwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-teal-600 to-emerald-600",
    metrics: [
      { label: "International", value: "4 Countries", icon: Globe, color: "text-emerald-600" },
      { label: "Est. Pipeline", value: "Rs. 1.2Cr", icon: TrendingUp, color: "text-emerald-500" },
      { label: "Inventory", value: "100%", icon: CheckCircle2, color: "text-teal-600" },
    ],
    technologies: ["Next.js", "Private Vault API", "HD Image Zoom", "WhatsApp VIP"],
    challenge: "A diamond house in Surat wanted to showcase high-value inventory to international buyers without sending low-quality WhatsApp photos and security risks.",
    solution: "Built a high-end luxury website with a private viewing vault, HD zoom for diamond certificates, and inquiry-to-WhatsApp automation for VIP clients.",
    delivered: [
      "Luxury custom website",
      "Private inventory vault",
      "HD diamond certificate viewer",
      "WhatsApp VIP integration",
      "Global high-end SEO",
    ],
    results: [
      "14 high-value inquiries in month 1",
      "International clients from 4 countries",
      "100% cloud-synced secure inventory",
      "Estimated Rs. 1.2Cr pipeline in 3 months",
    ],
    investment: "Luxury Pro Website (Rs. 89,999) + Maintenance Retainer",
    detailTitle: <>Generating a <span className="text-emerald-400">Rs. 1.2Cr Pipeline</span> for a Luxury Diamond Merchant</>,
    detailSubtitle: "See how we digitized a high-value diamond inventory into a secure, global digital showroom.",
    problemDescription: "The merchant was limited by physical visits and insecure photo sharing, hindering growth in the international market.",
    resultsIntro: "The new luxury showroom established instant trust with global buyers, resulting in high-value international inquiries.",
    successHighlightTitle: "Rs. 1.2Cr Estimated Pipeline!",
    successHighlightDesc: "Digital transformation secured high-value leads from 4 different countries in just 90 days.",
    quickAnswers: [
      { q: "What is this case study about?", a: "Digitizing a luxury diamond business for the global market." },
      { q: "What strategy did we use?", a: "Creating a secure 'Private Vault' experience with HD asset viewing and VIP WhatsApp automation." },
      { q: "What were the results?", a: "International expansion to 4 countries and 14 high-value inquiries in the first month." }
    ],
    clientOverview: {
      industry: "Gems & Jewelry",
      location: "Surat, Gujarat",
      businessType: "Diamond Export & Retail",
      duration: "90 Days",
      services: "Luxury Web Design & VIP Automation"
    },
    problems: [
      "Insecure sharing of high-value assets",
      "Poor digital brand perception",
      "Limited reach to international buyers",
      "Manual inventory updates across channels"
    ],
    strategySteps: [
      { title: "Luxury Brand", desc: "Designing a high-end, visual-first digital presence.", icon: Sparkles, color: "bg-emerald-600" },
      { title: "Secure Vault", desc: "Building a private viewing area for VIP clients.", icon: ShieldCheck, color: "bg-teal-600" },
      { title: "HD Asset Zoom", desc: "Implementing ultra-high-res viewers for clarity.", icon: Search, color: "bg-emerald-500" },
      { title: "VIP WhatsApp", desc: "Automating high-touch concierge interactions.", icon: MessageCircle, color: "bg-teal-500" },
      { title: "Global SEO", desc: "Targeting high-net-worth buyers internationally.", icon: Globe, color: "bg-emerald-700" }
    ],
    testimonial: {
      quote: "HiveRift understood the nuances of luxury. Our new website reflects our brand perfectly, and the private vault has been a huge hit with our international clients.",
      author: "Smit Patel",
      role: "Managing Director",
      image: "https://i.pravatar.cc/150?u=surat"
    },
    faqs: [
      { q: "How is the inventory kept secure?", a: "We implemented a two-factor authentication vault for high-value items, ensuring only verified buyers can see the detailed specs." },
      { q: "Can buyers see GIA/IGI certificates?", a: "Yes, we built a dedicated HD viewer that allows buyers to zoom into every detail of the certificates." },
      { q: "Is the website optimized for mobile?", a: "Luxury buyers are always on the move, so we prioritized a mobile-first VIP experience that feels like a native app." },
      { q: "How do you handle international inquiries?", a: "Inquiries are routed through a VIP WhatsApp automation that instantly notifies the sales team for a high-touch response." }
    ]
  }
];


// --- Sub-components for Detailed View ---

const DetailedSectionHeader = ({ badge, title, subtitle, center = false }: { badge: string, title: string, subtitle: string, center?: boolean }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    <div className={`inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full mb-4 ${center ? 'mx-auto' : ''}`}>
      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">{badge}</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
      {title}
    </h2>
    <p className="text-gray-500 font-medium text-sm max-w-2xl mx-auto leading-relaxed">
      {subtitle}
    </p>
  </div>
);

const MiniAreaChart = () => (
  <svg viewBox="0 0 100 40" className="w-full h-12 mt-4 overflow-visible">
    <defs>
      <linearGradient id="miniChartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#10b981", stopOpacity: 0.3 }} />
        <stop offset="100%" style={{ stopColor: "#10b981", stopOpacity: 0 }} />
      </linearGradient>
    </defs>
    <path
      d="M0,35 Q10,32 20,34 T40,25 T60,28 T80,10 T100,15 L100,40 L0,40 Z"
      fill="url(#miniChartGrad)"
    />
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      d="M0,35 Q10,32 20,34 T40,25 T60,28 T80,10 T100,15"
      fill="none"
      stroke="#10b981"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <motion.circle
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2 }}
      cx="100" cy="15" r="2.5" fill="#10b981"
    />
  </svg>
);

// --- Detailed View Component ---
const StudyDetailView = ({ study, onBack }: { study: CaseStudy, onBack: () => void }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen font-sans"
    >
      <Header />

      {/* 1. Hero Section - Dark Emerald Theme */}
      <section className="pt-44 md:pt-48 pb-24 bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#0f172a] relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMG1vZGVybiUyMG9mZmljZXxlbnwwfHx8fDE3NDA1MTA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Background Overlay"
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-400/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 z-0" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4 z-0" />

        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          {/* Breadcrumbs - Light */}
          <nav className="flex items-center gap-2 text-[10px] font-bold text-emerald-400/80 uppercase tracking-widest mb-12">
            <Link href="/" className="hover:text-emerald-300 transition-colors">Home</Link>
            <ChevronRight size={10} />
            <button onClick={onBack} className="hover:text-emerald-300 transition-colors uppercase">Case Studies</button>
            <ChevronRight size={10} />
            <span className="text-white">{study.title.split(" — ")[0]}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-6 pt-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em]">Industry Expertise</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                  {study.detailTitle}
                </h1>

                <p className="text-lg text-white/70 font-medium leading-relaxed mb-8 max-w-xl">
                  {study.detailSubtitle}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Link href="/contact" className="px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold text-base flex items-center gap-3 hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-900/40 group">
                    Get Free Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/services" className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white border-2 border-white/20 rounded-2xl font-bold text-base hover:bg-white/10 transition-all">
                    View Services
                  </Link>
                </div>

                <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-black text-white mb-1">200+</div>
                    <div className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">Global Clients</div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <div className="text-2xl font-black text-white mb-1">99%</div>
                    <div className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">Success Rate</div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <div className="flex items-center gap-1 text-yellow-400 mb-1">
                      {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} size={12} fill="currentColor" />)}
                    </div>
                    <div className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">Top Rated Agency</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Dashboard Card - Glassmorphism */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/10 shadow-2xl relative overflow-hidden"
              >
                {/* Internal Card Background Glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]" />

                <div className="relative z-10">
                  <div className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] mb-8 border-b border-white/10 pb-4">Real-time Performance Metrics</div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {study.metrics.map((m, i) => {
                      const Icon = m.icon;
                      return (
                        <div key={i} className="bg-white/5 p-5 rounded-3xl border border-white/10 group hover:bg-white/10 transition-colors">
                          <div className={`w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center mb-3 text-emerald-400 group-hover:scale-110 transition-transform`}>
                            <Icon size={20} />
                          </div>
                          <div className="text-2xl font-black text-white mb-1">{m.value}</div>
                          <div className="text-[9px] font-bold text-white/50 uppercase tracking-widest">{m.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="bg-emerald-950/50 p-5 rounded-[2rem] border border-emerald-500/20">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Growth Curve</div>
                      <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-bold">
                        <TrendingUp size={12} /> +84% Increase
                      </div>
                    </div>
                    <div className="h-32 w-full">
                      <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id="chartGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "#10b981", stopOpacity: 0.4 }} />
                            <stop offset="100%" style={{ stopColor: "#10b981", stopOpacity: 0 }} />
                          </linearGradient>
                          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                          </filter>
                        </defs>

                        {/* Background Grid Lines */}
                        {[20, 50, 80, 110].map(y => (
                          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="white" strokeOpacity="0.05" strokeWidth="1" />
                        ))}

                        <path
                          d="M0,100 L50,85 L100,90 L150,70 L200,80 L250,55 L300,60 L350,35 L400,15 V120 H0 Z"
                          fill="url(#chartGradDark)"
                        />

                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          d="M0,100 L50,85 L100,90 L150,70 L200,80 L250,55 L300,60 L350,35 L400,15"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="4"
                          strokeLinecap="round"
                          filter="url(#glow)"
                        />

                        {/* Data Points */}
                        {[
                          [0, 100], [50, 85], [100, 90], [150, 70],
                          [200, 80], [250, 55], [300, 60], [350, 35], [400, 15]
                        ].map(([x, y], i) => (
                          <motion.circle
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5 + (i * 0.05) }}
                            cx={x} cy={y} r="3.5"
                            fill="#10b981"
                            stroke="#064e3b"
                            strokeWidth="2"
                          />
                        ))}

                        {/* Peak Pulse */}
                        <circle cx="400" cy="15" r="8" fill="#10b981" fillOpacity="0.3" className="animate-ping" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Answer Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-12">
          <DetailedSectionHeader
            badge="AEO Optimized"
            title="Quick Answer "
            subtitle="Get instant answers to the most searched questions about this case study."
            center
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {study.quickAnswers?.map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                  <MessageCircle size={20} />
                </div>
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4 leading-tight">{item.q}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed px-4">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Client Overview Bar */}
      <section className="py-0 relative z-20">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden -mt-10 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-gray-100">
              {[
                { label: "Industry", val: study.clientOverview?.industry, icon: Building2 },
                { label: "Location", val: study.clientOverview?.location, icon: MapPin },
                { label: "Business Type", val: study.clientOverview?.businessType, icon: Rocket },
                { label: "Project Duration", val: study.clientOverview?.duration, icon: Clock },
                { label: "Services Used", val: study.clientOverview?.services, icon: Target },
              ].map((item, i) => (
                <div key={i} className="p-6 flex items-center gap-4">
                  <div className="text-emerald-600 bg-emerald-50 p-2 rounded-lg"><item.icon size={18} /></div>
                  <div>
                    <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-[11px] font-black text-gray-900 leading-tight">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Problem Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-black text-gray-900 mb-4">The Problem</h2>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                {study.problemDescription}
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {study.problems?.map((p, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 flex-shrink-0">
                      <X size={14} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-gray-700">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Strategy Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-12">
          <DetailedSectionHeader
            badge="Our Strategy"
            title="Our Strategy"
            subtitle="We created a complete roadmap to overcome challenges and achieve measurable growth."
            center
          />
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 max-w-6xl mx-auto relative px-10">
            {/* Connecting Arrows Background */}
            <div className="absolute top-10 left-32 right-32 h-0.5 border-t-2 border-dashed border-gray-200 hidden md:block" />

            {study.strategySteps?.map((step, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center relative z-10">
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center text-white shadow-xl mb-6 border-4 border-white`}>
                  <step.icon size={32} />
                  {/* Arrow for next step */}
                  {i < (study.strategySteps?.length || 0) - 1 && (
                    <div className="absolute left-[calc(100%-20px)] top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-20">
                      <ArrowRight size={24} className="text-gray-300" />
                    </div>
                  )}
                </div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Step {i + 1}</div>
                <h4 className="text-xs font-black text-gray-900 uppercase tracking-tight mb-2 max-w-[140px]">{step.title}</h4>
                <p className="text-[10px] text-gray-500 font-medium max-w-[140px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Results Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-12">
          <DetailedSectionHeader
            badge="Performance"
            title="Results Achieved"
            subtitle=""
            center
          />
          <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto items-stretch">
            {/* Text Intro */}
            <div className="col-span-12 lg:col-span-2 flex items-center">
              <p className="text-sm font-bold text-gray-500 leading-relaxed">
                {study.resultsIntro}
              </p>
            </div>

            {/* Metric Boxes */}
            {study.metrics.map((m, i) => (
              <div key={i} className="col-span-6 md:col-span-3 lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.03)] text-center flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-black text-gray-900 mb-1">{m.value}</div>
                  <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-4">{m.label}</div>
                </div>
                <MiniAreaChart />
                <div className="mt-4 flex justify-center text-emerald-500">
                  {i === 3 ? <Clock size={16} /> : <TrendingUp size={16} />}
                </div>
              </div>
            ))}

            {/* Emerald Success Box */}
            <div className="col-span-12 lg:col-span-2 bg-emerald-600 p-6 rounded-2xl text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div>
                <div className="text-sm font-black uppercase mb-3 leading-tight">{study.successHighlightTitle}</div>
                <p className="text-[10px] font-bold opacity-80 leading-relaxed">{study.successHighlightDesc}</p>
              </div>
              <div className="flex justify-end mt-4"><Trophy size={32} className="text-yellow-400" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why & Testimonial Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Why it Worked */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-8">Why It Worked?</h2>
              <div className="space-y-4">
                {[
                  "Focused on the right keywords and audience",
                  "High-quality infrastructure and optimization",
                  "Targeted campaigns with high-converting funnels",
                  "Continuous data-driven monitoring"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white flex-shrink-0">
                      <CheckCircle2 size={12} />
                    </div>
                    <span className="text-sm font-bold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="relative">
              <div className="text-emerald-600 mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16H4C4 11.584 7.584 8 12 8V11.2C9.8 11.2 8 13 8 15.2V16ZM20 16H16C16 11.584 19.584 8 24 8V11.2C21.8 11.2 20 13 20 15.2V16Z" fill="currentColor" fillOpacity="0.2" />
                  <path d="M8 16H12.8V24H4.8V16H8ZM20 16H24.8V24H16.8V16H20Z" fill="currentColor" />
                </svg>
              </div>
              <p className="text-xl text-gray-900 font-bold leading-relaxed mb-8 italic">
                "{study.testimonial?.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-black text-lg shadow-sm border border-emerald-200">
                  {study.testimonial?.author?.charAt(0)}
                </div>
                <div>
                  <div className="font-black text-gray-900 text-sm">{study.testimonial?.author}</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{study.testimonial?.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-12">
          <DetailedSectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about this case study and our process."
            center
          />
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 lg:gap-6">
            {study.faqs?.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div
                  className={`border-2 transition-all duration-300 rounded-2xl overflow-hidden ${openFaq === i ? "border-emerald-600 bg-emerald-50/20" : "border-gray-100 bg-white hover:border-emerald-200"
                    }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className={`text-sm font-black transition-colors ${openFaq === i ? "text-emerald-700" : "text-gray-900"}`}>
                      {faq.q}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === i ? "bg-emerald-600 text-white rotate-180" : "bg-gray-50 text-emerald-600"
                      }`}>
                      {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-96" : "max-h-0"
                      }`}
                  >
                    <div className="px-6 pb-6 text-sm font-bold text-gray-500 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-16 mb-20 px-4 w-full">
        <div className="w-full">
          <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900 rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">Want Similar Results For Your Business?</h2>
                <p className="text-lg opacity-80 font-medium">Let's create a custom strategy to grow your traffic, leads, and sales.</p>
              </div>
              <div className="flex-shrink-0 flex items-center gap-10">
                <Link
                  href="/contact" className="px-10 py-5 bg-white text-emerald-900 rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-2 group">

                  Get Free Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="hidden lg:block relative">
                  <Rocket size={80} className="text-white/20 -rotate-45" />
                  <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />
                </div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

// --- Main Page Component ---
export default function CaseStudiesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedStudyId = searchParams.get("id");

  const setSelectedStudyId = (id: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (id) {
      params.set("id", id);
    } else {
      params.delete("id");
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [selectedStudyId]);

  const selectedStudy = caseStudies.find(s => s.id === selectedStudyId);

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {!selectedStudyId ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Header />

            {/* HERO SECTION - User Original */}
            <section className="relative h-[600px] overflow-hidden mt-20 flex items-center">
              <div className="absolute inset-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNlbGVicmF0aW9uJTIwdGVhbSUyMHN1Y2Nlc3N8ZW58MHx8fHwxNzM5ODMwNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Case Studies Success"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-900/90 to-slate-900/95"></div>
              </div>

              <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-4xl">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-full mb-6"
                  >
                    <Sparkles size={16} className="text-emerald-400" />
                    <span className="text-sm font-black text-emerald-400 tracking-widest uppercase">
                      Success Stories
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl md:text-4xl lg:text-6xl font-black text-white mb-6 leading-[1.1]"
                  >
                    Proven <span className="text-emerald-400">Impact</span> <br />
                    Beyond Code
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mb-12 font-medium"
                  >
                    Discover how HiveRift transforms ambitious business goals into measurable digital success through tailored technology and strategic execution.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                  >
                    {[
                      { label: "Successful Projects", value: "250+" },
                      { label: "Global Reach", value: "10+ Countries" },
                      { label: "Client Retention", value: "99%" },
                      { label: "Average Growth", value: "111%" },
                    ].map((stat, i) => (
                      <div key={i} className="border-l-2 border-emerald-500/50 pl-4">
                        <div className="text-3xl font-black text-white">{stat.value}</div>
                        <div className="text-xs text-white/60 font-bold uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </section>

            {/* GRID SECTION - User Original */}
            <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                  {caseStudies.map((study, index) => (
                    <motion.div
                      key={study.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col group">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <ImageWithFallback
                            src={study.image}
                            alt={study.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-50 group-hover:opacity-40 transition-opacity duration-300`}></div>

                          {/* Category Badge */}
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-gray-700 uppercase tracking-tight">
                              {study.industry}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-1">
                            {study.title}
                          </h3>
                          <p className="text-[11px] text-emerald-600 font-bold mb-2 uppercase tracking-wide">{study.category}</p>
                          <p className="text-gray-600 leading-relaxed mb-5 line-clamp-2">
                            {study.description}
                          </p>

                          {/* Metrics Bar */}
                          <div className="grid grid-cols-3 gap-2 mb-5">
                            {study.metrics.slice(0, 3).map((metric, idx) => {
                              const Icon = metric.icon;
                              return (
                                <div key={idx} className="text-center p-2 bg-slate-50 rounded-xl border border-slate-100">
                                  <div className="flex items-center justify-center mb-1">
                                    <Icon size={12} className="text-emerald-600" />
                                  </div>
                                  <div className="text-sm font-bold text-gray-900">{metric.value}</div>
                                  <div className="text-[9px] text-gray-500 font-medium truncate">{metric.label}</div>
                                </div>
                              );
                            })}
                          </div>

                          <button
                            onClick={() => setSelectedStudyId(study.id)}
                            className="flex items-center justify-between cursor-pointer text-emerald-600 font-semibold hover:text-emerald-700 transition-colors mt-auto"
                          >
                            <span>View Full Case Study</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA SECTION - User Original */}
            <section className="py-20 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900">
              <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center max-w-4xl mx-auto"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Create Your Success Story?
                  </h2>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Let's discuss how we can help transform your business with innovative digital solutions tailored to your unique needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-900 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                      <span>Start Your Project</span>
                      <ArrowRight size={20} />
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                    >
                      <span>Explore Our Services</span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </section>

            <Footer />
          </motion.div>
        ) : (
          <StudyDetailView
            key="detail"
            study={selectedStudy!}
            onBack={() => setSelectedStudyId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
