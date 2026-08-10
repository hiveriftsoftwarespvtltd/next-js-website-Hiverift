"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Plus, Trash2, Save, Sparkles, Image as ImageIcon, FileText, Upload } from "lucide-react";
import Swal from "sweetalert2";
import { BlogPost } from "@/app/data/blogData";

interface BlogFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (blogData: any) => Promise<void>;
  initialData?: BlogPost | null;
}

export function BlogFormModal({ isOpen, onClose, onSave, initialData }: BlogFormModalProps) {
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setImageFile(null);
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        category: initialData.category || "Web Development",
        desc: initialData.desc || "",
        readTime: initialData.readTime || "4 min read",
        author: initialData.author || "HiveRift Team",
        authorRole: initialData.authorRole || "Tech & Strategy",
        image: initialData.image || "",
        intro: initialData.content?.intro || initialData.desc || "",
        keyTakeaways: initialData.content?.keyTakeaways?.length ? initialData.content.keyTakeaways : ["Key takeaway 1"],
        sections: initialData.content?.sections?.length ? initialData.content.sections : [{ heading: "1. Key Point", text: "Details here" }],
        quote: initialData.content?.quote || "",
        conclusion: initialData.content?.conclusion || ""
      });
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
    }
  }, [initialData, isOpen]);

  // Key Takeaways Actions
  const handleTakeawayChange = (index: number, value: string) => {
    const updated = [...formData.keyTakeaways];
    updated[index] = value;
    setFormData({ ...formData, keyTakeaways: updated });
  };

  const addTakeaway = () => {
    setFormData({ ...formData, keyTakeaways: [...formData.keyTakeaways, "New Key Takeaway"] });
  };

  const removeTakeaway = (index: number) => {
    setFormData({
      ...formData,
      keyTakeaways: formData.keyTakeaways.filter((_, i) => i !== index)
    });
  };

  // Sections Actions
  const handleSectionChange = (index: number, field: "heading" | "text", value: string) => {
    const updated = [...formData.sections];
    updated[index][field] = value;
    setFormData({ ...formData, sections: updated });
  };

  const addSection = () => {
    setFormData({
      ...formData,
      sections: [...formData.sections, { heading: `${formData.sections.length + 1}. New Heading`, text: "Section content..." }]
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
      Swal.fire({ icon: "error", title: "Validation Error", text: "Title and Short Description are required." });
      return;
    }

    if (!imageFile && !formData.image && !initialData) {
      Swal.fire({ icon: "error", title: "Image Required", text: "Please select an image file to upload." });
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
        keyTakeaways: formData.keyTakeaways.filter(k => k.trim().length > 0),
        sections: formData.sections,
        quote: formData.quote.trim(),
        conclusion: formData.conclusion.trim()
      };

      data.append("content", JSON.stringify(contentObj));

      if (imageFile) {
        data.append("image", imageFile);
      } else if (formData.image) {
        data.append("image", formData.image);
      }

      await onSave(data);
      onClose();
    } catch (err: any) {
      Swal.fire({ icon: "error", title: "Error", text: err.message || "Failed to save blog post." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div suppressHydrationWarning className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10 border border-slate-200"
          >
            {/* Modal Header */}
            <div className="bg-slate-900 px-6 py-5 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center font-black text-sm">
                  <FileText size={18} />
                </div>
                <div>
                  <h2 className="text-lg font-black tracking-tight">
                    {initialData ? "Edit Blog Article" : "Create New Blog Article"}
                  </h2>
                  <p className="text-xs text-slate-400 font-bold">Fill in the fields below and upload cover image file.</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form Scroll Area */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6 overflow-y-auto flex-1">
              
              {/* Row 1: Title & Category */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700">Article Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-bold focus:border-emerald-500 outline-none transition-all"
                    placeholder="e.g. Why Your Rs. 5,000 Website Is Costing You More..."
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-bold focus:border-emerald-500 outline-none transition-all bg-white"
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

              {/* Row 2: Short Description */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700">Short Summary / Description *</label>
                <textarea
                  rows={2}
                  required
                  value={formData.desc}
                  onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:border-emerald-500 outline-none transition-all resize-none"
                  placeholder="Brief summary that appears on the card..."
                />
              </div>

              {/* Row 3: Author, Role, Read Time, Image Upload File */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700">Author Name</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold focus:border-emerald-500 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700">Author Role</label>
                  <input
                    type="text"
                    value={formData.authorRole}
                    onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold focus:border-emerald-500 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700">Read Time</label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold focus:border-emerald-500 outline-none transition-all"
                  />
                </div>

                {/* File Upload for Image */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700">Cover Image File *</label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                      className="hidden"
                      id="blog-image-file"
                    />
                    <label
                      htmlFor="blog-image-file"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-500 flex items-center gap-2 cursor-pointer transition-all font-bold text-slate-700 text-xs truncate"
                    >
                      <Upload size={16} className="text-emerald-600 shrink-0" />
                      {imageFile ? imageFile.name : formData.image ? "Change Image" : "Upload File"}
                    </label>
                  </div>
                </div>
              </div>

              {/* Article Content: Intro & Key Takeaways */}
              <div className="pt-4 border-t border-slate-200 space-y-4">
                <h3 className="text-sm font-black uppercase tracking-widest text-emerald-700 flex items-center gap-2">
                  <Sparkles size={16} /> Article Detail Content
                </h3>

                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700">Introduction Paragraph</label>
                  <textarea
                    rows={3}
                    value={formData.intro}
                    onChange={(e) => setFormData({ ...formData, intro: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium focus:border-emerald-500 outline-none transition-all resize-none"
                    placeholder="Opening introduction paragraph..."
                  />
                </div>

                {/* Key Takeaways Dynamic List */}
                <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-black uppercase tracking-wider text-slate-700">Key Takeaways</label>
                    <button
                      type="button"
                      onClick={addTakeaway}
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-black text-xs flex items-center gap-1"
                    >
                      <Plus size={14} /> Add Takeaway
                    </button>
                  </div>

                  {formData.keyTakeaways.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleTakeawayChange(idx, e.target.value)}
                        className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white"
                      />
                      {formData.keyTakeaways.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeTakeaway(idx)}
                          className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Dynamic Sections */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-black uppercase tracking-wider text-slate-700">Sub-Sections & Content Headings</label>
                    <button
                      type="button"
                      onClick={addSection}
                      className="px-3 py-1 bg-slate-900 hover:bg-emerald-600 text-white rounded-lg font-black text-xs flex items-center gap-1"
                    >
                      <Plus size={14} /> Add Section
                    </button>
                  </div>

                  {formData.sections.map((sec, idx) => (
                    <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-white space-y-3 relative">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-emerald-600">Section {idx + 1}</span>
                        {formData.sections.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeSection(idx)}
                            className="p-1 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors text-xs font-bold flex items-center gap-1"
                          >
                            <Trash2 size={14} /> Remove
                          </button>
                        )}
                      </div>

                      <input
                        type="text"
                        value={sec.heading}
                        onChange={(e) => handleSectionChange(idx, "heading", e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-black"
                        placeholder="Sub-heading title..."
                      />

                      <textarea
                        rows={3}
                        value={sec.text}
                        onChange={(e) => handleSectionChange(idx, "text", e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium resize-none"
                        placeholder="Section detailed text..."
                      />
                    </div>
                  ))}
                </div>

                {/* Quote & Conclusion */}
                <div className="grid md:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase tracking-wider text-slate-700">Quote Callout (Optional)</label>
                    <textarea
                      rows={2}
                      value={formData.quote}
                      onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium resize-none"
                      placeholder="Featured quote..."
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase tracking-wider text-slate-700">Conclusion</label>
                    <textarea
                      rows={2}
                      value={formData.conclusion}
                      onChange={(e) => setFormData({ ...formData, conclusion: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium resize-none"
                      placeholder="Final takeaways..."
                    />
                  </div>
                </div>

              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl border border-slate-300 font-black text-xs text-slate-700 hover:bg-slate-100 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center gap-2 shadow-lg shadow-emerald-200 transition-all disabled:opacity-50"
                >
                  <Save size={16} />
                  {isSubmitting ? "Uploading & Saving..." : initialData ? "Update Article" : "Publish Article"}
                </button>
              </div>

            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
