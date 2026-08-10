"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logoutAdmin } from "@/app/config/auth";
import {
  FileText,
  Briefcase,
  ExternalLink,
  LogOut,
  X,
} from "lucide-react";

const navItems = [
  { name: "Blog Posts", href: "/admin/blogs", icon: FileText },
  { name: "Careers Applications", href: "/careers", icon: Briefcase },
  { name: "Live Website", href: "/blog", icon: ExternalLink, external: true },
];

interface AdminSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function AdminSidebar({ isOpen = false, onClose }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logoutAdmin();
    router.push("/login");
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`w-64 bg-slate-900 text-slate-300 min-h-screen flex flex-col justify-between p-4 fixed left-0 top-0 bottom-0 z-50 border-r border-slate-800 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="space-y-8">
          {/* Brand Header */}
          <div className="flex items-center justify-between px-2 py-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black flex items-center justify-center shadow-lg shadow-emerald-900/50">
                H
              </div>
              <div>
                <h1 className="font-black text-white text-lg tracking-tight">HiveRift</h1>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-full">
                  Admin Panel
                </span>
              </div>
            </div>

            {/* Mobile Close Button */}
            {onClose && (
              <button
                onClick={onClose}
                className="lg:hidden p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <div className="px-3 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
              Management
            </div>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  target={item.external ? "_blank" : undefined}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl font-bold text-xs transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/40"
                      : "hover:bg-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </div>
                  {item.external && <ExternalLink size={14} className="opacity-60" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Admin User Badge & Footer */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <div className="bg-slate-800/60 p-3 rounded-xl flex items-center gap-3 border border-slate-800">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-900 font-black text-xs flex items-center justify-center shrink-0">
              A
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-black text-white truncate">Administrator</div>
              <div className="text-[10px] text-slate-400 truncate">admin@hiverift.com</div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-rose-400 hover:bg-rose-950/40 rounded-xl transition-colors"
          >
            <LogOut size={16} />
            <span>Logout Admin</span>
          </button>
        </div>
      </aside>
    </>
  );
}
