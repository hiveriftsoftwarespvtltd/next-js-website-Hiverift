"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Filter,
  Edit3,
  Trash2,
  ExternalLink,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  FileText,
  Layers,
  Database
} from "lucide-react";
import Swal from "sweetalert2";
import { AdminSidebar } from "../components/AdminSidebar";
import { AdminHeader } from "../components/AdminHeader";
import { AdminGuard } from "../components/AdminGuard";
import { BlogFormModal } from "./components/BlogFormModal";
import { BlogPost } from "@/app/data/blogData";
import {
  getBlogsFromApi,
  getImageUrl,
  createBlogApi,
  updateBlogApi,
  deleteBlogApi,
  seedBlogsApi
} from "@/app/actions/adminActions";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const data = await getBlogsFromApi();
      setBlogs(data);
    } catch (err: any) {
      console.error("Failed to fetch blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSaveBlog = async (formData: FormData) => {
    try {
      if (editingBlog) {
        const targetId = String(editingBlog.id || (editingBlog as any)._id);
        await updateBlogApi(targetId, formData);
        Swal.fire({ icon: "success", title: "Updated!", text: "Blog post updated successfully." });
      } else {
        await createBlogApi(formData);
        Swal.fire({ icon: "success", title: "Created!", text: "New blog post published successfully." });
      }
      setIsModalOpen(false);
      setEditingBlog(null);
      await fetchBlogs();
    } catch (err: any) {
      Swal.fire({ icon: "error", title: "Error", text: err.message || "Failed to save blog." });
    }
  };

  const handleSeedBlogs = async () => {
    Swal.fire({
      title: "Seed Sample Blogs?",
      text: "This will add initial 6 articles to your NestJS database.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#10b981",
      confirmButtonText: "Yes, Seed Articles"
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await seedBlogsApi();
          Swal.fire({ icon: "success", title: "Seeded!", text: "Initial articles created successfully." });
          fetchBlogs();
        } catch (err: any) {
          Swal.fire({ icon: "error", title: "Seed Failed", text: err.message });
          setLoading(false);
        }
      }
    });
  };

  const handleDeleteBlog = (id: string, title: string) => {
    Swal.fire({
      title: "Delete Article?",
      text: `Are you sure you want to delete "${title}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Yes, Delete It"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteBlogApi(id);
          Swal.fire({ icon: "success", title: "Deleted!", text: "Article removed successfully." });
          fetchBlogs();
        } catch (err: any) {
          Swal.fire({ icon: "error", title: "Delete Failed", text: err.message });
        }
      }
    });
  };

  const categories = ["All", "Web Development", "Digital Marketing", "SEO", "Mobile Apps", "Business Growth", "Tech & AI"];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <AdminGuard>
      <div suppressHydrationWarning className="min-h-screen bg-slate-100 flex font-['Roboto',sans-serif]">
        {/* Sidebar */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-64 ml-0 flex flex-col min-w-0 transition-all duration-300">
          <AdminHeader
            title="Blog Management"
            subtitle="Create, edit, delete, and organize all website articles & content."
            onMenuClick={() => setIsMobileSidebarOpen(true)}
          />

          <main className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 flex-1">
            
            {/* Action Header & Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 font-black flex items-center justify-center shrink-0">
                  <FileText size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">{blogs.length}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Articles</div>
                </div>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 font-black flex items-center justify-center shrink-0">
                  <Layers size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">{categories.length - 1}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Categories</div>
                </div>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 font-black flex items-center justify-center shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">Active</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-center">
                <button
                  onClick={() => {
                    setEditingBlog(null);
                    setIsModalOpen(true);
                  }}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-emerald-200 transition-all"
                >
                  <Plus size={16} /> Add New Article
                </button>
                <button
                  onClick={handleSeedBlogs}
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
                >
                  <Database size={14} /> Seed Initial 6 Blogs
                </button>
              </div>
            </div>

            {/* Filters & Search Toolbar */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Category Filter Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-thin">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all shrink-0 ${
                        selectedCategory === cat
                          ? "bg-slate-900 text-white shadow-md"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Search Bar & Refresh */}
                <div className="flex items-center gap-3">
                  <div className="relative flex-1 sm:w-72">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search articles, authors..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs font-bold text-slate-800 outline-none focus:border-emerald-500 transition-all"
                    />
                    <Search size={16} className="absolute left-3.5 top-3 text-slate-400 pointer-events-none" />
                  </div>

                  <button
                    onClick={fetchBlogs}
                    className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors shrink-0"
                    title="Refresh List"
                  >
                    <RefreshCw size={16} className={loading ? "animate-spin text-emerald-600" : ""} />
                  </button>
                </div>
              </div>
            </div>

            {/* Blogs Table Area */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[650px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                      <th className="py-4 px-4 sm:px-6">Article Info</th>
                      <th className="py-4 px-4">Category</th>
                      <th className="py-4 px-4">Author</th>
                      <th className="py-4 px-4">Date</th>
                      <th className="py-4 px-4 sm:px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-bold">
                    {loading ? (
                      <tr>
                        <td colSpan={5} className="py-12 text-center text-slate-400">
                          <RefreshCw size={24} className="animate-spin text-emerald-500 mx-auto mb-2" />
                          Fetching articles from NestJS Backend...
                        </td>
                      </tr>
                    ) : filteredBlogs.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="py-12 text-center text-slate-400">
                          No articles found matching your query.
                        </td>
                      </tr>
                    ) : (
                      filteredBlogs.map((blog) => (
                        <tr key={String(blog.id || (blog as any)._id)} className="hover:bg-slate-50/80 transition-colors">
                          {/* Article Info */}
                          <td className="py-4 px-4 sm:px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                                <img
                                  key={String(blog.image || blog.id)}
                                  src={getImageUrl(blog.image)}
                                  alt={blog.title}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    if (!target.src.includes("unsplash.com")) {
                                      target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
                                    }
                                  }}
                                />
                              </div>
                              <div className="min-w-0 max-w-md">
                                <h3 className="font-black text-slate-900 text-sm line-clamp-1 hover:text-emerald-600 transition-colors">
                                  {blog.title}
                                </h3>
                                <p className="text-[11px] text-slate-400 line-clamp-1 font-medium">
                                  {blog.desc}
                                </p>
                              </div>
                            </div>
                          </td>

                          {/* Category */}
                          <td className="py-4 px-4">
                            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-wider rounded-lg border border-emerald-200/60 inline-block">
                              {blog.category}
                            </span>
                          </td>

                          {/* Author */}
                          <td className="py-4 px-4">
                            <div className="font-black text-slate-900">{blog.author}</div>
                            <div className="text-[10px] text-slate-400">{blog.authorRole}</div>
                          </td>

                          {/* Date */}
                          <td className="py-4 px-4 text-slate-500 font-semibold whitespace-nowrap">
                            {blog.date}
                          </td>

                          {/* Actions */}
                          <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap space-x-1.5 sm:space-x-2">
                            <Link
                              href={`/blog/${blog.id || (blog as any)._id}`}
                              target="_blank"
                              className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg inline-flex items-center transition-colors"
                              title="View on site"
                            >
                              <ExternalLink size={14} />
                            </Link>

                            <button
                              onClick={() => {
                                setEditingBlog(blog);
                                setIsModalOpen(true);
                              }}
                              className="p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg inline-flex items-center transition-colors"
                              title="Edit"
                            >
                              <Edit3 size={14} />
                            </button>

                            <button
                              onClick={() => handleDeleteBlog(String(blog.id || (blog as any)._id), blog.title)}
                              className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg inline-flex items-center transition-colors"
                              title="Delete"
                            >
                              <Trash2 size={14} />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </main>
        </div>

        {/* Blog Modal Form */}
        <BlogFormModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingBlog(null);
          }}
          initialData={editingBlog}
          onSave={handleSaveBlog}
        />
      </div>
    </AdminGuard>
  );
}
