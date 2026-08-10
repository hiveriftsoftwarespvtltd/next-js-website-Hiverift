"use client";

import { Menu, Bell, Search, Sparkles } from "lucide-react";

interface AdminHeaderProps {
  title: string;
  subtitle?: string;
  onMenuClick?: () => void;
}

export function AdminHeader({ title, subtitle, onMenuClick }: AdminHeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 z-30 shadow-xs">
      <div className="flex items-center gap-3">
        {/* Mobile Menu Toggle Button */}
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors shrink-0"
            title="Toggle Menu"
          >
            <Menu size={20} />
          </button>
        )}

        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{title}</h1>
          {subtitle && <p className="text-xs font-bold text-slate-500 mt-0.5">{subtitle}</p>}
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-4">
        {/* Status Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-black text-emerald-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>NestJS Connected</span>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-xs flex items-center justify-center">
            A
          </div>
          <span className="text-xs font-black text-slate-800 hidden sm:inline">HiveRift Admin</span>
        </div>
      </div>
    </header>
  );
}
