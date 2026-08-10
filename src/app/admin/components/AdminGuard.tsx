"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/app/config/auth";
import { RefreshCw, Lock } from "lucide-react";

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [checking, setChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    if (!isAuthenticated()) {
      router.replace("/login");
    } else {
      setAuthorized(true);
    }
    setChecking(false);
  }, [router]);

  if (!mounted || checking || !authorized) {
    return (
      <div suppressHydrationWarning className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white p-4">
        <div suppressHydrationWarning className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4 animate-bounce">
          <Lock size={24} />
        </div>
        <div suppressHydrationWarning className="flex items-center gap-2 font-black text-sm text-slate-300">
          <RefreshCw size={16} className="animate-spin text-emerald-500" />
          <span>Verifying Admin Session...</span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
