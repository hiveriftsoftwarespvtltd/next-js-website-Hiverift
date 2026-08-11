"use client";

import { useEffect, useState } from "react";
import { AdminGuard } from "../components/AdminGuard";
import { AdminSidebar } from "../components/AdminSidebar";
import { AdminHeader } from "../components/AdminHeader";
import { getContactSubmissions, deleteSubmission, updateSubmissionStatus } from "@/app/actions/contactActions";
import {
  Inbox,
  Search,
  RefreshCw,
  Trash2,
  Eye,
  Mail,
  Briefcase,
  Building,
  FileText,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Tag
} from "lucide-react";

interface SubmissionItem {
  _id: string;
  fullName?: string;
  name?: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message?: string;
  position?: string;
  portfolio?: string;
  coverLetter?: string;
  resume?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}

const ITEMS_PER_PAGE = 6;

export default function AdminInquiriesPage() {
  const [submissions, setSubmissions] = useState<SubmissionItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "contact" | "careers">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<SubmissionItem | null>(null);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const fetchSubmissions = async () => {
    setIsLoading(true);
    setStatusMessage(null);
    try {
      const res = await getContactSubmissions();
      if (res.success && Array.isArray(res.data)) {
        setSubmissions(res.data);
      } else {
        setSubmissions([]);
      }
    } catch (err) {
      console.error("Failed to load submissions:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      setSubmissions((prev) =>
        prev.map((item) => (item._id === id ? { ...item, status: newStatus } : item))
      );
      if (selectedItem?._id === id) {
        setSelectedItem((prev) => (prev ? { ...prev, status: newStatus } : null));
      }
      const res = await updateSubmissionStatus(id, newStatus);
      if (res.success) {
        setStatusMessage({ type: "success", text: `Status updated to '${newStatus}'.` });
      } else {
        setStatusMessage({ type: "error", text: res.message || "Failed to update status." });
        fetchSubmissions();
      }
    } catch (err: any) {
      setStatusMessage({ type: "error", text: err?.message || "Failed to update status." });
      fetchSubmissions();
    }
  };

  const handleDelete = async () => {
    if (!deleteTargetId) return;
    setIsDeleting(true);
    try {
      const res = await deleteSubmission(deleteTargetId);
      if (res.success) {
        setSubmissions((prev) => prev.filter((item) => item._id !== deleteTargetId));
        if (selectedItem?._id === deleteTargetId) {
          setSelectedItem(null);
        }
        setStatusMessage({ type: "success", text: "Submission deleted successfully." });
      } else {
        setStatusMessage({ type: "error", text: res.message || "Failed to delete submission." });
      }
    } catch (err: any) {
      setStatusMessage({ type: "error", text: err?.message || "Failed to delete submission." });
    } finally {
      setIsDeleting(false);
      setDeleteTargetId(null);
    }
  };

  // Determine submission type (Job Application vs Contact Inquiry)
  const isJobApp = (item: SubmissionItem) =>
    Boolean(item.position || item.portfolio || item.coverLetter || item.resume || item.fullName);

  // Filtered submissions
  const filteredSubmissions = submissions.filter((item) => {
    const isJob = isJobApp(item);
    if (activeTab === "contact" && isJob) return false;
    if (activeTab === "careers" && !isJob) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const nameStr = (item.fullName || item.name || "").toLowerCase();
    const emailStr = (item.email || "").toLowerCase();
    const phoneStr = (item.phone || "").toLowerCase();
    const serviceStr = (item.service || "").toLowerCase();
    const positionStr = (item.position || "").toLowerCase();
    const companyStr = (item.company || "").toLowerCase();

    return (
      nameStr.includes(q) ||
      emailStr.includes(q) ||
      phoneStr.includes(q) ||
      serviceStr.includes(q) ||
      positionStr.includes(q) ||
      companyStr.includes(q)
    );
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeTab]);

  const totalCount = submissions.length;
  const contactCount = submissions.filter((item) => !isJobApp(item)).length;
  const careersCount = submissions.filter((item) => isJobApp(item)).length;

  const totalPages = Math.max(1, Math.ceil(filteredSubmissions.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedSubmissions = filteredSubmissions.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <AdminGuard>
      <div suppressHydrationWarning className="min-h-screen bg-slate-100 flex font-['Roboto',sans-serif]">
        {/* Admin Sidebar */}
        <AdminSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-64 ml-0 flex flex-col min-w-0 transition-all duration-300">
          <AdminHeader
            title="Form Inquiries & Submissions"
            subtitle="Manage website contact form leads and career job applications saved in MongoDB."
            onMenuClick={() => setIsMobileSidebarOpen(true)}
          />

          <main className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 flex-1">
            {/* Toast Notification */}
            {statusMessage && (
              <div
                className={`p-4 rounded-2xl border flex items-center justify-between shadow-xs transition-all ${
                  statusMessage.type === "success"
                    ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                    : "bg-rose-50 border-rose-200 text-rose-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  {statusMessage.type === "success" ? <CheckCircle2 size={20} className="text-emerald-600" /> : <XCircle size={20} className="text-rose-600" />}
                  <span className="text-xs font-bold">{statusMessage.text}</span>
                </div>
                <button
                  onClick={() => setStatusMessage(null)}
                  className="text-xs font-bold hover:underline opacity-80 hover:opacity-100"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Submissions</div>
                  <div className="text-3xl font-black text-slate-900 mt-1">{totalCount}</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 font-black flex items-center justify-center shrink-0">
                  <Inbox size={24} />
                </div>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Contact Leads</div>
                  <div className="text-3xl font-black text-cyan-700 mt-1">{contactCount}</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 font-black flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Career Applicants</div>
                  <div className="text-3xl font-black text-purple-700 mt-1">{careersCount}</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 font-black flex items-center justify-center shrink-0">
                  <Briefcase size={24} />
                </div>
              </div>
            </div>

            {/* Controls: Filter Tabs, Search & Refresh */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Category Filter Tabs */}
              <div className="flex items-center bg-slate-100 p-1.5 rounded-xl border border-slate-200 w-full md:w-auto">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-black transition-all ${
                    activeTab === "all"
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  All ({totalCount})
                </button>
                <button
                  onClick={() => setActiveTab("contact")}
                  className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-black transition-all ${
                    activeTab === "contact"
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Contact Leads ({contactCount})
                </button>
                <button
                  onClick={() => setActiveTab("careers")}
                  className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-black transition-all ${
                    activeTab === "careers"
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Careers ({careersCount})
                </button>
              </div>

              {/* Search Bar & Refresh */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-72">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by name, email, service..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                  />
                </div>
                <button
                  onClick={fetchSubmissions}
                  disabled={isLoading}
                  className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl border border-slate-200 transition-all disabled:opacity-50 shrink-0"
                  title="Refresh Submissions"
                >
                  <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
                </button>
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              {isLoading ? (
                <div className="py-20 text-center space-y-3">
                  <RefreshCw size={32} className="animate-spin text-emerald-600 mx-auto" />
                  <p className="text-slate-500 text-xs font-bold">Loading submissions from database...</p>
                </div>
              ) : filteredSubmissions.length === 0 ? (
                <div className="py-20 text-center space-y-3">
                  <Inbox size={40} className="text-slate-300 mx-auto" />
                  <h3 className="text-slate-800 font-black text-base">No submissions found</h3>
                  <p className="text-slate-500 text-xs max-w-sm mx-auto font-medium">
                    {searchQuery
                      ? "No records matched your search term. Try adjusting your query."
                      : "No contact inquiries or job applications received yet."}
                  </p>
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-black border-b border-slate-200 text-[10px]">
                        <tr>
                          <th className="py-4 px-6">Type</th>
                          <th className="py-4 px-6">Name & Email</th>
                          <th className="py-4 px-6">Phone</th>
                          <th className="py-4 px-6">Service / Position</th>
                          <th className="py-4 px-6">Status</th>
                          <th className="py-4 px-6">Submitted Date</th>
                          <th className="py-4 px-6 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                        {paginatedSubmissions.map((item) => {
                          const isJob = isJobApp(item);
                          const name = item.fullName || item.name || "N/A";
                          const currentStatus = item.status || "Pending";
                          const formattedDate = item.createdAt
                            ? new Date(item.createdAt).toLocaleString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            : "N/A";

                          return (
                            <tr key={item._id} className="hover:bg-slate-50/80 transition-colors">
                              <td className="py-4 px-6 whitespace-nowrap">
                                {isJob ? (
                                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-purple-50 text-purple-700 border border-purple-200">
                                    <Briefcase size={12} />
                                    Job Applicant
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-cyan-50 text-cyan-700 border border-cyan-200">
                                    <Mail size={12} />
                                    Contact Lead
                                  </span>
                                )}
                              </td>
                              <td className="py-4 px-6">
                                <div className="font-black text-slate-900 text-xs">{name}</div>
                                <div className="text-slate-500 text-[11px] font-mono">{item.email}</div>
                              </td>
                              <td className="py-4 px-6 whitespace-nowrap font-mono text-slate-700">
                                {item.phone || "N/A"}
                              </td>
                              <td className="py-4 px-6">
                                <div className="font-bold text-slate-800">
                                  {isJob ? item.position || "Applicant" : item.service || "General Inquiry"}
                                </div>
                                {!isJob && item.company && item.company !== "N/A" && (
                                  <div className="text-[10px] text-slate-400 font-bold flex items-center gap-1 mt-0.5">
                                    <Building size={10} />
                                    {item.company}
                                  </div>
                                )}
                              </td>
                              <td className="py-4 px-6 whitespace-nowrap">
                                <select
                                  value={currentStatus}
                                  onChange={(e) => handleStatusChange(item._id, e.target.value)}
                                  className={`text-xs font-black px-2.5 py-1 rounded-xl border cursor-pointer focus:outline-none transition-all ${
                                    currentStatus === "Completed"
                                      ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                                      : currentStatus === "Contacted"
                                      ? "bg-blue-50 text-blue-700 border-blue-300"
                                      : currentStatus === "In Progress"
                                      ? "bg-purple-50 text-purple-700 border-purple-300"
                                      : currentStatus === "Rejected"
                                      ? "bg-rose-50 text-rose-700 border-rose-300"
                                      : "bg-amber-50 text-amber-700 border-amber-300"
                                  }`}
                                >
                                  <option value="Pending" className="bg-white text-slate-900 font-semibold">🟡 Pending</option>
                                  <option value="Contacted" className="bg-white text-slate-900 font-semibold">🔵 Contacted</option>
                                  <option value="In Progress" className="bg-white text-slate-900 font-semibold">🟣 In Progress</option>
                                  <option value="Completed" className="bg-white text-slate-900 font-semibold">🟢 Completed</option>
                                  <option value="Rejected" className="bg-white text-slate-900 font-semibold">🔴 Rejected</option>
                                </select>
                              </td>
                              <td className="py-4 px-6 whitespace-nowrap text-slate-500 text-[11px] font-medium">
                                {formattedDate}
                              </td>
                              <td className="py-4 px-6 whitespace-nowrap text-right space-x-2">
                                <button
                                  onClick={() => setSelectedItem(item)}
                                  className="p-2 bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 border border-slate-200 hover:border-emerald-200 rounded-xl transition-all"
                                  title="View Details"
                                >
                                  <Eye size={15} />
                                </button>
                                <button
                                  onClick={() => setDeleteTargetId(item._id)}
                                  className="p-2 bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 border border-slate-200 hover:border-rose-200 rounded-xl transition-all"
                                  title="Delete Submission"
                                >
                                  <Trash2 size={15} />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination Bar */}
                  {filteredSubmissions.length > 0 && (
                    <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-xs font-bold text-slate-500">
                        Showing <span className="text-slate-900 font-black">{startIndex + 1}</span> to{" "}
                        <span className="text-slate-900 font-black">
                          {Math.min(startIndex + ITEMS_PER_PAGE, filteredSubmissions.length)}
                        </span>{" "}
                        of <span className="text-slate-900 font-black">{filteredSubmissions.length}</span> entries
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                          disabled={currentPage === 1}
                          className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                          title="Previous Page"
                        >
                          <ChevronLeft size={16} />
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-8 h-8 rounded-xl text-xs font-black transition-all ${
                              currentPage === page
                                ? "bg-emerald-600 text-white shadow-md shadow-emerald-200"
                                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                            }`}
                          >
                            {page}
                          </button>
                        ))}

                        <button
                          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                          disabled={currentPage === totalPages}
                          className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                          title="Next Page"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </main>
        </div>

        {/* Modal: Submission Detail View */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors font-bold text-xs"
              >
                ✕
              </button>

              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
                  {isJobApp(selectedItem) ? <Briefcase size={24} /> : <Mail size={24} />}
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    {selectedItem.fullName || selectedItem.name || "Inquiry Detail"}
                  </h3>
                  <p className="text-xs font-bold text-slate-500">
                    {isJobApp(selectedItem) ? `Position: ${selectedItem.position || "Job Application"}` : `Service: ${selectedItem.service || "Contact Form"}`}
                  </p>
                </div>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1">
                  <span className="text-slate-400 font-black uppercase tracking-wider text-[10px]">Lead Status</span>
                  <div>
                    <select
                      value={selectedItem.status || "Pending"}
                      onChange={(e) => handleStatusChange(selectedItem._id, e.target.value)}
                      className={`text-xs font-black px-3 py-1 rounded-xl border cursor-pointer focus:outline-none transition-all ${
                        (selectedItem.status || "Pending") === "Completed"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                          : (selectedItem.status || "Pending") === "Contacted"
                          ? "bg-blue-50 text-blue-700 border-blue-300"
                          : (selectedItem.status || "Pending") === "In Progress"
                          ? "bg-purple-50 text-purple-700 border-purple-300"
                          : (selectedItem.status || "Pending") === "Rejected"
                          ? "bg-rose-50 text-rose-700 border-rose-300"
                          : "bg-amber-50 text-amber-700 border-amber-300"
                      }`}
                    >
                      <option value="Pending" className="bg-white text-slate-900 font-semibold">🟡 Pending</option>
                      <option value="Contacted" className="bg-white text-slate-900 font-semibold">🔵 Contacted</option>
                      <option value="In Progress" className="bg-white text-slate-900 font-semibold">🟣 In Progress</option>
                      <option value="Completed" className="bg-white text-slate-900 font-semibold">🟢 Completed</option>
                      <option value="Rejected" className="bg-white text-slate-900 font-semibold">🔴 Rejected</option>
                    </select>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1">
                  <span className="text-slate-400 font-black uppercase tracking-wider text-[10px]">Email Address</span>
                  <p className="text-slate-900 font-mono font-bold">{selectedItem.email}</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1">
                  <span className="text-slate-400 font-black uppercase tracking-wider text-[10px]">Phone Number</span>
                  <p className="text-slate-900 font-mono font-bold">{selectedItem.phone || "N/A"}</p>
                </div>

                {selectedItem.company && selectedItem.company !== "N/A" && (
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1">
                    <span className="text-slate-400 font-black uppercase tracking-wider text-[10px]">Company Name</span>
                    <p className="text-slate-900 font-bold">{selectedItem.company}</p>
                  </div>
                )}

                {selectedItem.portfolio && (
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1">
                    <span className="text-slate-400 font-black uppercase tracking-wider text-[10px]">Portfolio Link</span>
                    <p className="text-emerald-600 font-bold underline truncate">
                      <a href={selectedItem.portfolio} target="_blank" rel="noreferrer">
                        {selectedItem.portfolio}
                      </a>
                    </p>
                  </div>
                )}

                {selectedItem.resume && (
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1 md:col-span-2">
                    <span className="text-slate-400 font-black uppercase tracking-wider text-[10px]">Resume File</span>
                    <p className="text-emerald-700 font-bold flex items-center gap-2">
                      <FileText size={16} />
                      {selectedItem.resume}
                    </p>
                  </div>
                )}
              </div>

              {/* Message / Cover Letter */}
              {(selectedItem.message || selectedItem.coverLetter) && (
                <div className="space-y-2">
                  <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider">
                    {isJobApp(selectedItem) ? "Cover Letter" : "Message / Project Details"}
                  </h4>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-800 text-xs leading-relaxed whitespace-pre-wrap font-medium">
                    {selectedItem.coverLetter || selectedItem.message}
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-[11px] font-mono text-slate-400">
                  ID: {selectedItem._id}
                </span>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black rounded-xl transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Delete Confirmation */}
        {deleteTargetId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white border border-slate-200 rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0">
                  <AlertCircle size={22} />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">Delete Submission?</h3>
                  <p className="text-xs font-bold text-slate-400">This action cannot be undone.</p>
                </div>
              </div>

              <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                Are you sure you want to permanently delete this submission record from MongoDB?
              </p>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setDeleteTargetId(null)}
                  disabled={isDeleting}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-black rounded-xl transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-black rounded-xl transition-colors shadow-lg shadow-rose-200 flex items-center gap-2 disabled:opacity-50"
                >
                  {isDeleting && <RefreshCw size={14} className="animate-spin" />}
                  <span>Delete Permanently</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminGuard>
  );
}
