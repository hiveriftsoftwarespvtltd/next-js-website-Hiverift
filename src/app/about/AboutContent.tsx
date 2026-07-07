"use client";

import { motion } from "motion/react";
import { Award, Users, Target, Zap, CheckCircle2, TrendingUp, Globe, Heart } from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

import teamImage from "@/assets/team.png";

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Image Background - Properly Aligned */}
      <section className="relative min-h-[400px] md:h-[550px] overflow-hidden mt-20 md:mt-32 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA4ODEyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="HiveRift Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/85 to-slate-900/95"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 px-4 py-2 rounded-full text-[10px] md:text-xs font-bold mb-6 uppercase tracking-widest backdrop-blur-sm">
              Digital Excellence
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.2]">
              About HiveRift <span className="text-emerald-500  decoration-emerald-500/30 underline-offset-8">Building Digital Excellence</span> Since 2019
            </h1>
            <p className="text-lg md:text-2xl text-white/95 leading-relaxed max-w-4xl font-medium">
              We are a team of developers, designers, marketers, and strategists united by one goal: to help businesses across India and the world grow through the power of technology.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Main Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Who We <span className="text-emerald-600">Are</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                HiveRift is a leading digital solutions company helping businesses leverage technology to achieve sustainable growth and competitive advantage in today's digital economy.
              </p>
            </motion.div>

            {/* Story Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="/our-story.png"
                    alt="Our Story"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                  Our <span className="text-emerald-600">Story</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                  <p>
                    <span className="text-emerald-600 font-bold">HiveRift</span> was built with a simple mission: to make innovative technology accessible to businesses of every size. What started as a passionate team with a shared vision has grown into a trusted digital partner for startups, growing businesses, and established enterprises alike.
                  </p>
                  <p>
                    Working with clients across Delhi, Mumbai, Bangalore, and beyond, we recognized a common challenge finding a technology partner that truly understands business goals, budgets, and long term growth. HiveRift was created to bridge that gap by delivering scalable, high-quality digital solutions tailored to each client's unique needs.
                  </p>
                  <p>
                    Today, HiveRift is a full service digital agency with a team of <span className="text-gray-900 font-bold">50+ professionals</span>, offices in New Delhi, the USA, and Canada, and a growing client base across 10+ countries. From strategy and design to development and digital transformation, we help businesses turn ideas into impactful digital experiences.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Numbers / Milestones Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-24">
              {[
                { label: "Founded", value: "2019", desc: "Started as KhatuShyam Technologies" },
                { label: "Projects Delivered", value: "250+", desc: "Websites, apps, software, and marketing campaigns" },
                { label: "Team Members", value: "50+", desc: "Developers, designers, marketers, and strategists" },
                { label: "Client Retention", value: "99%", desc: "Clients who come back for their next project" },
                { label: "Countries Served", value: "10+", desc: "India, USA, Canada, UK, UAE, and more" },
                { label: "Average Growth Rate", value: "111%", desc: "Average business growth for our clients" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center hover:border-emerald-500 transition-all group"
                >
                  <div className="text-3xl font-black text-emerald-600 mb-1">{stat.value}</div>
                  <div className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-tight">{stat.label}</div>
                  <div className="text-[11px] leading-tight font-bold text-gray-500 capitalize tracking-tight group-hover:text-gray-700 transition-colors">
                    {stat.desc}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid lg:grid-cols-2 gap-12 mb-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-10 shadow-xl border-2 border-emerald-100"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-6">
                  <Target size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower businesses across India and the world with innovative technology solutions that drive real growth, improve efficiency, and create lasting competitive advantage at a price point that makes sense for the Indian market.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-10 shadow-xl border-2 border-teal-100"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl mb-6">
                  <TrendingUp size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be India's most trusted digital transformation partner known not just for the quality of our work, but for the long-term success of every client we serve.
                </p>
              </motion.div>
            </div>

            {/* 3T Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our 3T <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Pillars</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Talent. Tailored. Trust The foundation of everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-emerald-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">TALENT</h3>
                <p className="text-emerald-600 font-bold mb-3 tracking-tight">Skilled People, Measurable Outcomes</p>
                <p className="text-gray-700 leading-relaxed">
                  Our team brings years of real-world experience in web development, mobile apps, AI, digital marketing, and business strategy. We hire for passion as much as skill.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-teal-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Zap size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">TAILORED</h3>
                <p className="text-teal-600 font-bold mb-3 tracking-tight">Built for Your Business, Not a Template</p>
                <p className="text-gray-700 leading-relaxed">
                  We do not believe in copy-paste solutions. Every project starts with understanding your business, your customers, and your goals then we build from there.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-cyan-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">TRUST</h3>
                <p className="text-cyan-600 font-bold mb-3 tracking-tight">Transparent, Reliable, Long-Term</p>
                <p className="text-gray-700 leading-relaxed">
                  We communicate clearly, deliver on time, and never hide behind fine print. Over 99% of our clients return for their next project and that says everything.
                </p>
              </motion.div>
            </div>

            {/* Team Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Our Team
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  The Talent Behind Our Success
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our strength lies in our people. From seasoned developers and creative designers to strategic thinkers and digital marketing experts, every team member brings specialized skills and a passion for innovation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Together, we form a dynamic force dedicated to solving complex challenges, exceeding expectations, and building lasting partnerships with every client we serve.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border-2 border-emerald-200">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
                    <div className="text-gray-700 font-semibold">Team Members</div>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-200">
                    <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
                    <div className="text-gray-700 font-semibold">Technologies</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={teamImage.src}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-emerald-600 px-6 py-3 rounded-full font-bold">
                      <Users size={20} />
                      <span>Expert Team</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Core Values Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Core <span className="text-emerald-600">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                These aren't just buzzwords—they're the principles that guide every decision we make
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {[
                {
                  icon: Target,
                  title: "Purpose-Driven",
                  description: "We come to work every day focused on your success. Technology is just the means your growth is the mission.",
                },
                {
                  icon: Users,
                  title: "Better Together",
                  description: "We collaborate closely with every client, treating your team as an extension of ours.",
                },
                {
                  icon: Award,
                  title: "Always Raising the Bar",
                  description: "Good enough is never enough. We review, refine, and improve on every project, every sprint.",
                },
                {
                  icon: Heart,
                  title: "You Come First",
                  description: "Your priorities become our priorities. If something is not working, we fix it proactively, not reactively.",
                },
                {
                  icon: Globe,
                  title: "Thinking Globally, Acting Locally",
                  description: "We bring global delivery standards to the Indian market, with pricing and support that works for Indian businesses.",
                },
                {
                  icon: CheckCircle2,
                  title: "Future-Focused",
                  description: "We're constantly learning and staying ahead so you always get solutions that are relevant and powerful.",
                },
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Innovation Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                      <ImageWithFallback
                        src="/driven1.png"
                        alt="Development Team"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
                      <ImageWithFallback
                        src="/driven2.png"
                        alt="Modern Workspace"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
                      <ImageWithFallback
                        src="/driven3.png"
                        alt="Professional Team Member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                      <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center p-6">
                        <div className="text-center text-white">
                          <div className="text-5xl font-bold mb-2">111%</div>
                          <div className="text-lg">Average Growth Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Innovation & Technology
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Driven by Innovation
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At HiveRift, we believe innovation isn't just about adopting the latest technology it's about understanding how to apply it in ways that truly matter to your business.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  From AI-powered solutions to custom software development, we combine cutting-edge tools with strategic thinking to create solutions that drive real results.
                </p>

                <div className="space-y-4">
                  {[
                    "Cutting-edge technology stack",
                    "Agile development methodology",
                    "Continuous learning & improvement",
                    "Client-focused innovation",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={16} className="text-white" />
                      </div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
