"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Plus,
  Trash2,
  Save,
  Sparkles,
  Image as ImageIcon,
  FileText,
  Upload,
  Eye,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import Swal from "sweetalert2";
import { BlogPost } from "@/app/data/blogData";
import { getImageUrl } from "@/app/actions/adminActions";

interface BlogFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (blogData: any) => Promise<void>;
  initialData?: BlogPost | null;
}

export function BlogFormModal({
  isOpen,
  onClose,
  onSave,
  initialData
}: BlogFormModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    category: "Web Development",
    desc: "",
    readTime: "4 min read",
    author: "HiveRift Team",
    authorRole: "Tech & Strategy",
    image: "",
    intro: "",
    keyTakeaways: ["High performance web architecture", "10x ROI in conversion rates"],
    sections: [
      { heading: "1. Core Advantages", text: "Detailed explanation of core advantages and metrics." }
    ],
    quote: "",
    conclusion: "Contact HiveRift for custom solutions."
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setImageFile(null);
    if (initialData) {
      const initialImg = typeof initialData.image === "string" ? initialData.image : "";
      setFormData({
        title: initialData.title || "",
        category: initialData.category || "Web Development",
        desc: initialData.desc || "",
        readTime: initialData.readTime || "4 min read",
        author: initialData.author || "HiveRift Team",
        authorRole: initialData.authorRole || "Tech & Strategy",
        image: initialImg,
        intro: initialData.content?.intro || initialData.desc || "",
        keyTakeaways: initialData.content?.keyTakeaways?.length
          ? initialData.content.keyTakeaways
          : ["Key takeaway 1"],
        sections: initialData.content?.sections?.length
          ? initialData.content.sections
          : [{ heading: "1. Key Point", text: "Details here" }],
        quote: initialData.content?.quote || "",
        conclusion: initialData.content?.conclusion || ""
      });
      setPreviewUrl(initialImg ? getImageUrl(initialImg) : "");
    } else {
      setFormData({
        title: "",
        category: "Web Development",
        desc: "",
        readTime: "4 min read",
        author: "HiveRift Team",
        authorRole: "Tech & Strategy",
        image: "",
        intro: "",
        keyTakeaways: ["Key Takeaway 1", "Key Takeaway 2"],
        sections: [{ heading: "1. Main Topic", text: "Write section details here..." }],
        quote: "",
        conclusion: ""
      });
      setPreviewUrl("");
    }
  }, [initialData, isOpen]);

  // Handle Image Selection & Live Preview
  useEffect(() => {
    if (imageFile) {
      const url = URL.createObjectURL(imageFile);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else if (formData.image && typeof formData.image === "string") {
      setPreviewUrl(getImageUrl(formData.image));
    }
  }, [imageFile, formData.image]);

  // Key Takeaways Actions
  const handleTakeawayChange = (index: number, value: string) => {
    const updated = [...formData.keyTakeaways];
    updated[index] = value;
    setFormData({ ...formData, keyTakeaways: updated });
  };

  const addTakeaway = () => {
    setFormData({
      ...formData,
      keyTakeaways: [...formData.keyTakeaways, "New Key Takeaway"]
    });
  };

  const removeTakeaway = (index: number) => {
    setFormData({
      ...formData,
      keyTakeaways: formData.keyTakeaways.filter((_, i) => i !== index)
    });
  };

  // Sections Actions
  const handleSectionChange = (
    index: number,
    field: "heading" | "text",
    value: string
  ) => {
    const updated = [...formData.sections];
    updated[index][field] = value;
    setFormData({ ...formData, sections: updated });
  };

  const addSection = () => {
    setFormData({
      ...formData,
      sections: [
        ...formData.sections,
        {
          heading: `${formData.sections.length + 1}. New Heading`,
          text: "Section content..."
        }
      ]
    });
  };

  const removeSection = (index: number) => {
    setFormData({
      ...formData,
      sections: formData.sections.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.desc.trim()) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Title and Short Description are required."
      });
      return;
    }

    if (!imageFile && !formData.image && !initialData) {
      Swal.fire({
        icon: "error",
        title: "Image Required",
        text: "Please select an image file to upload."
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const data = new FormData();
      data.append("title", formData.title.trim());
      data.append("category", formData.category);
      data.append("desc", formData.desc.trim());
      data.append("readTime", formData.readTime.trim());
      data.append("author", formData.author.trim());
      data.append("authorRole", formData.authorRole.trim());

      const contentObj = {
        intro: formData.intro.trim() || formData.desc.trim(),
        keyTakeaways: formData.keyTakeaways.filter((k) => k.trim().length > 0),
        sections: formData.sections,
        quote: formData.quote.trim(),
        conclusion: formData.conclusion.trim()
      };

      data.append("content", JSON.stringify(contentObj));

      // Append image ONLY if valid file or non-empty string URL
      if (imageFile) {
        data.append("image", imageFile);
      } else if (typeof formData.image === "string" && formData.image.trim()) {
        data.append("image", formData.image.trim());
      }

      await onSave(data);
      onClose();
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message || "Failed to save blog post."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div suppressHydrationWarning className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-all"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col z-10 border border-slate-200"
          >
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 px-6 sm:px-8 py-5 flex items-center justify-between text-white shrink-0 relative overflow-hidden border-b border-emerald-500/20">
              <div className="flex items-center gap-3.5 relative z-10">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 flex items-center justify-center font-black text-emerald-400 shadow-inner shrink-0">
                  <FileText size={22} />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center gap-2">
                    {initialData ? "Edit Article" : "Create New Article"}
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold uppercase tracking-wider border border-emerald-500/30">
                      NestJS Backend
                    </span>
                  </h2>
                  <p className="text-xs text-slate-300 font-medium">
                    Customize content details, sub-sections, and live cover image preview.
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shrink-0 border border-white/10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form Scroll Area */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 bg-slate-50/50">

              {/* SECTION 1: Cover Image & Live Preview */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <ImageIcon size={16} className="text-emerald-600" />
                    Cover Image & Live Preview *
                  </label>
                  {previewUrl && (
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/60 flex items-center gap-1">
                      <Eye size={12} /> Preview Active
                    </span>
                  )}
                </div>

                <div className="grid sm:grid-cols-12 gap-5 items-center">
                  {/* Left Dropzone File Picker */}
                  <div className={`${previewUrl ? "sm:col-span-6" : "sm:col-span-12"} transition-all`}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                      className="hidden"
                      id="blog-image-file-input"
                    />
                    <label
                      htmlFor="blog-image-file-input"
                      className="w-full min-h-[160px] p-6 rounded-2xl border-2 border-dashed border-slate-300 hover:border-emerald-500 bg-slate-50/80 hover:bg-emerald-50/30 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 group-hover:border-emerald-300 text-emerald-600 flex items-center justify-center mb-3 shadow-xs transition-transform group-hover:scale-110">
                        <Upload size={22} />
                      </div>
                      <span className="text-xs font-black text-slate-800 group-hover:text-emerald-700">
                        {imageFile ? imageFile.name : previewUrl ? "Click to Replace Cover Image" : "Upload High Quality Cover Image"}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400 mt-1">
                        PNG, JPG, JPEG or WEBP (Max 5MB)
                      </span>
                    </label>
                  </div>

                  {/* Right Live Image Preview Card */}
                  {previewUrl && (
                    <div className="sm:col-span-6 space-y-2">
                      <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md group">
                        <img
                          key={previewUrl}
                          src={previewUrl}
                          alt="Cover Preview"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (!target.src.includes("unsplash.com")) {
                              target.src =
                                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-3">
                          <div className="text-[10px] font-black text-white uppercase tracking-wider truncate flex items-center gap-1.5">
                            <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                            {imageFile ? `Selected: ${imageFile.name}` : "Current Cover Image"}
                          </div>
                        </div>
                      </div>
                      {imageFile && (
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 px-1">
                          <span>Size: {(imageFile.size / 1024 / 1024).toFixed(2)} MB</span>
                          <button
                            type="button"
                            onClick={() => setImageFile(null)}
                            className="text-rose-600 hover:text-rose-700 font-black flex items-center gap-1"
                          >
                            <Trash2 size={13} /> Remove Selected File
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* SECTION 2: General Article Info */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <FileText size={16} className="text-emerald-600" />
                  Article Header Info
                </h3>

                {/* Title & Category */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-2 space-y-1.5">
                    <label className="text-xs font-black text-slate-700">Article Title *</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                      placeholder="e.g. Why Your Rs. 5,000 Website Is Costing You More..."
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-700">Category *</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:border-emerald-500 outline-none transition-all bg-white"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="SEO">SEO</option>
                      <option value="Mobile Apps">Mobile Apps</option>
                      <option value="Business Growth">Business Growth</option>
                      <option value="Tech & AI">Tech & AI</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-700">Short Summary / Description *</label>
                  <textarea
                    rows={2}
                    required
                    value={formData.desc}
                    onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all resize-none"
                    placeholder="Brief summary that appears on the card preview..."
                  />
                </div>

                {/* Author, Role, Read Time */}
                <div className="grid sm:grid-cols-3 gap-4 pt-1">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-700">Author Name</label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-700">Author Role</label>
                    <input
                      type="text"
                      value={formData.authorRole}
                      onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-700">Read Time</label>
                    <input
                      type="text"
                      value={formData.readTime}
                      onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 3: Rich Article Content */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <Sparkles size={16} className="text-emerald-600" />
                  Article Detail Content & Sections
                </h3>

                {/* Intro Paragraph */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-700">Introduction Paragraph</label>
                  <textarea
                    rows={3}
                    value={formData.intro}
                    onChange={(e) => setFormData({ ...formData, intro: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:border-emerald-500 outline-none transition-all resize-none"
                    placeholder="Opening introduction paragraph for article page..."
                  />
                </div>

                {/* Key Takeaways Box */}
                <div className="space-y-3 bg-emerald-50/40 p-4 rounded-2xl border border-emerald-100">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-black uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-emerald-600" />
                      Key Takeaways List
                    </label>
                    <button
                      type="button"
                      onClick={addTakeaway}
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-black text-xs flex items-center gap-1 shadow-xs transition-all"
                    >
                      <Plus size={13} /> Add Item
                    </button>
                  </div>

                  <div className="space-y-2">
                    {formData.keyTakeaways.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => handleTakeawayChange(idx, e.target.value)}
                          className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white text-slate-900 focus:border-emerald-500 outline-none"
                          placeholder={`Key Takeaway #${idx + 1}`}
                        />
                        {formData.keyTakeaways.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeTakeaway(idx)}
                            className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors shrink-0"
                            title="Remove"
                          >
                            <Trash2 size={15} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-Sections Headings */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-black uppercase tracking-wider text-slate-900">
                      Sub-Sections & Detailed Paragraphs
                    </label>
                    <button
                      type="button"
                      onClick={addSection}
                      className="px-3.5 py-1.5 bg-slate-900 hover:bg-emerald-600 text-white rounded-xl font-black text-xs flex items-center gap-1 transition-all"
                    >
                      <Plus size={13} /> Add Sub-Section
                    </button>
                  </div>

                  <div className="space-y-3.5">
                    {formData.sections.map((sec, idx) => (
                      <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3 relative">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/60">
                            Section #{idx + 1}
                          </span>
                          {formData.sections.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeSection(idx)}
                              className="text-rose-500 hover:bg-rose-100/60 p-1 rounded-lg transition-colors text-xs font-bold flex items-center gap-1"
                            >
                              <Trash2 size={13} /> Remove
                            </button>
                          )}
                        </div>

                        <input
                          type="text"
                          value={sec.heading}
                          onChange={(e) => handleSectionChange(idx, "heading", e.target.value)}
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-black text-slate-900 bg-white focus:border-emerald-500 outline-none"
                          placeholder="Section Heading Title..."
                        />

                        <textarea
                          rows={3}
                          value={sec.text}
                          onChange={(e) => handleSectionChange(idx, "text", e.target.value)}
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-white focus:border-emerald-500 outline-none resize-none"
                          placeholder="Detailed section content text..."
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote & Conclusion */}
                <div className="grid md:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-700">Featured Quote Callout (Optional)</label>
                    <textarea
                      rows={2}
                      value={formData.quote}
                      onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:border-emerald-500 outline-none resize-none"
                      placeholder="e.g. High performance code yields 10x long-term ROI..."
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-700">Conclusion Paragraph</label>
                    <textarea
                      rows={2}
                      value={formData.conclusion}
                      onChange={(e) => setFormData({ ...formData, conclusion: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:border-emerald-500 outline-none resize-none"
                      placeholder="Final takeaways or call to action..."
                    />
                  </div>
                </div>

              </div>

              {/* Submit / Action Bar */}
              <div className="pt-3 flex items-center justify-end gap-3 shrink-0">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl border border-slate-300 font-black text-xs text-slate-700 hover:bg-slate-200/80 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center gap-2 shadow-lg shadow-emerald-200 transition-all disabled:opacity-50"
                >
                  <Save size={16} />
                  {isSubmitting ? "Saving & Uploading..." : initialData ? "Update Blog Post" : "Publish Blog Post"}
                </button>
              </div>

            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
