"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  CheckCircle2,
  Quote,
  Sparkles,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Search,
  Mail,
  Phone,
  Users,
  ChevronRight,
  Rocket
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { FAQ } from "@/app/components/FAQ";
import { BlogPost, blogPosts } from "@/app/data/blogData";
import { getBlogByIdFromApi } from "@/app/actions/adminActions";

interface BlogDetailContentProps {
  post: BlogPost;
}

export default function BlogDetailContent({ post }: BlogDetailContentProps) {
  const [currentPost, setCurrentPost] = useState<BlogPost>(post);
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getBlogByIdFromApi(String(post.id)).then((data) => {
      if (data) setCurrentPost(data);
    });
  }, [post.id]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  // Find previous and next posts
  const currentIndex = blogPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Other related posts excluding current
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Header />

      {/* Main Container */}
      <main className="pt-28 md:pt-36 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500 mb-8 max-w-6xl mx-auto">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-emerald-600 transition-colors">
              Blog
            </Link>
            <ChevronRight size={12} />
            <span className="text-emerald-600 font-black">{currentPost.category}</span>
          </nav>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Category Pill */}
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-widest rounded-full mb-4">
                {currentPost.category}
              </span>

              {/* Main Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] mb-6 tracking-tight">
                {currentPost.title}
              </h1>

              {/* Sub-description */}
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto mb-8">
                {currentPost.desc}
              </p>

              {/* Author & Meta Info Bar */}
              <div className="flex flex-wrap items-center justify-center gap-6 py-4 border-y border-slate-200 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center shadow-md">
                    {currentPost.author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="font-black text-slate-900 leading-tight">{currentPost.author}</div>
                    <div className="text-xs text-slate-500 font-bold">{currentPost.authorRole}</div>
                  </div>
                </div>

                <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

                <div className="flex items-center gap-2 text-slate-500 font-bold">
                  <Calendar size={16} className="text-emerald-600" />
                  <span>{currentPost.date}</span>
                </div>

                <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

                <div className="flex items-center gap-2 text-slate-500 font-bold">
                  <Clock size={16} className="text-emerald-600" />
                  <span>{currentPost.readTime}</span>
                </div>
              </div>
            </motion.div>
          </header>

          {/* Featured Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white"
          >
            <div className="relative aspect-[16/9] w-full">
              <img
                src={currentPost.image}
                alt={currentPost.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* Content & Sidebar Grid */}
          <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            
            {/* Left Column: Article Body */}
            <article className="lg:col-span-8 bg-white p-6 sm:p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
              
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 text-lg sm:text-xl font-medium leading-relaxed mb-8 first-letter:text-5xl first-letter:font-black first-letter:text-emerald-600 first-letter:mr-3 first-letter:float-left">
                  {currentPost.content.intro}
                </p>

                {/* Key Takeaways Box */}
                <div className="my-10 p-6 sm:p-8 bg-gradient-to-br from-emerald-50 to-slate-50 border border-emerald-200/80 rounded-3xl relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-4 text-emerald-700 font-black text-lg">
                    <Sparkles size={22} className="text-emerald-600" />
                    <span>Key Takeaways</span>
                  </div>
                  <ul className="space-y-3">
                    {currentPost.content.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 font-bold text-sm sm:text-base">
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Main Article Sections */}
                <div className="space-y-10 my-10">
                  {currentPost.content.sections.map((sec, idx) => (
                    <div key={idx} className="space-y-3">
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        {sec.heading}
                      </h2>
                      <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
                        {sec.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Blockquote Callout */}
                {currentPost.content.quote && (
                  <div className="my-10 p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden shadow-xl">
                    <Quote size={48} className="text-emerald-500/20 absolute top-4 right-4" />
                    <p className="text-lg sm:text-xl font-bold italic leading-relaxed text-emerald-100 relative z-10">
                      "{currentPost.content.quote}"
                    </p>
                    <div className="mt-4 text-xs font-black uppercase tracking-widest text-emerald-400">
                      — HiveRift Strategy Take
                    </div>
                  </div>
                )}

                {/* Conclusion */}
                <div className="mt-10 p-8 bg-slate-50 rounded-3xl border border-slate-200">
                  <h3 className="text-xl font-black text-slate-900 mb-3">Conclusion</h3>
                  <p className="text-slate-600 font-semibold text-base sm:text-lg leading-relaxed">
                    {currentPost.content.conclusion}
                  </p>
                </div>
              </div>

              {/* Share & Bookmarking Section */}
              <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-900">
                    Share Post:
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                    >
                      <Facebook size={16} />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                    >
                      <MessageCircle size={16} />
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyLink}
                  className="px-4 py-2 bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 font-bold text-xs rounded-xl transition-all flex items-center gap-2 border border-slate-200"
                >
                  <Share2 size={14} />
                  {copied ? "Link Copied!" : "Copy Link"}
                </button>
              </div>

              {/* Prev / Next Article Links */}
              <div className="mt-12 grid sm:grid-cols-2 gap-4 pt-8 border-t border-slate-100">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.id}`}
                    className="p-5 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all group text-left"
                  >
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                      <ArrowLeft size={12} /> Previous Article
                    </div>
                    <div className="text-sm font-black text-slate-900 group-hover:text-emerald-700 line-clamp-1">
                      {prevPost.title}
                    </div>
                  </Link>
                ) : <div />}

                {nextPost ? (
                  <Link
                    href={`/blog/${nextPost.id}`}
                    className="p-5 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all group text-right"
                  >
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center justify-end gap-1">
                      Next Article <ArrowRight size={12} />
                    </div>
                    <div className="text-sm font-black text-slate-900 group-hover:text-emerald-700 line-clamp-1">
                      {nextPost.title}
                    </div>
                  </Link>
                ) : <div />}
              </div>
            </article>

            {/* Right Column: Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Author Card Widget */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200/80 shadow-sm text-center">
                <div className="w-20 h-20 bg-emerald-600 text-white font-black text-2xl rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-100">
                  {currentPost.author.charAt(0)}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-1">{currentPost.author}</h3>
                <p className="text-xs font-bold text-emerald-600 mb-4">{currentPost.authorRole}</p>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Sharing actionable insights on software engineering, digital strategy, and scaling tech products.
                </p>
              </div>

              {/* Recent Articles Widget */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200/80 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 mb-6 tracking-tight">Recent Articles</h3>
                <div className="space-y-5">
                  {relatedPosts.map((rPost) => (
                    <Link
                      key={rPost.id}
                      href={`/blog/${rPost.id}`}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                        <img
                          src={rPost.image}
                          alt={rPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-900 line-clamp-2 leading-snug group-hover:text-emerald-600 transition-colors">
                          {rPost.title}
                        </h4>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                          {rPost.date}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Widget */}
              <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-8 rounded-[2.5rem] relative overflow-hidden shadow-xl">
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-black uppercase tracking-widest">
                    <Mail size={14} /> Newsletter
                  </div>
                  <h3 className="text-xl font-black leading-snug">Get Weekly Tech & Marketing Insights</h3>
                  <p className="text-xs text-slate-300 font-medium">
                    No spam. Just high-impact strategies delivered straight to your inbox.
                  </p>
                  <div className="space-y-3 pt-2">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-white placeholder:text-slate-400 outline-none focus:border-emerald-400 transition-all"
                    />
                    <button className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Consultation CTA Widget */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200/80 shadow-sm space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                    <Users size={20} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">Need Custom Tech?</h3>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Let HiveRift design & build high-converting web apps, mobile solutions, or AI workflows.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-3.5 bg-slate-900 hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Schedule Free Call</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </aside>
          </div>

          {/* Related Articles Bottom Grid */}
          <section className="mt-24 pt-16 border-t border-slate-200">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                    Related <span className="text-emerald-600">Articles</span>
                  </h2>
                  <p className="text-slate-500 text-sm font-bold mt-1">Explore more insights from our team</p>
                </div>
                <Link
                  href="/blog"
                  className="px-6 py-3 bg-white border border-slate-200 hover:border-emerald-500 text-slate-900 hover:text-emerald-600 font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-sm flex items-center gap-2"
                >
                  View All Blogs <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.id}
                    href={`/blog/${rPost.id}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={rPost.image}
                        alt={rPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-lg text-[10px] font-black text-emerald-600 uppercase tracking-widest shadow-sm">
                        {rPost.category}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                      <div>
                        <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                          {rPost.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium line-clamp-2 mt-2">
                          {rPost.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                        <span>{rPost.date}</span>
                        <span className="text-emerald-600 font-black group-hover:translate-x-1 transition-transform flex items-center gap-1">
                          Read <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
