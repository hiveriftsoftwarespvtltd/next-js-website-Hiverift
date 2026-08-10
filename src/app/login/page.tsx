"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Lock, Mail, Eye, EyeOff, LogIn, ArrowRight } from "lucide-react";
import { loginAdminApi, isAuthenticated } from "@/app/config/auth";
import Link from "next/link";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/admin/blogs");
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await loginAdminApi(email, password);
      if (result.success) {
        await Swal.fire({
          icon: "success",
          title: "Welcome Back!",
          text: "Login successful. Redirecting to Admin Dashboard...",
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
          background: "#0f172a",
          color: "#ffffff",
          iconColor: "#10b981",
        });
        router.push("/admin/blogs");
      } else {
        setError(result.message || "Invalid credentials.");
      }
    } catch (err: any) {
      setError(err?.message || "Failed to log in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-4 relative overflow-hidden font-['Roboto',sans-serif]">
      
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl relative z-10"
      >
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white font-black text-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-900/50">
            H
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">Admin Portal</h1>
          <p className="text-xs font-bold text-slate-400 mt-1">
            Sign in to manage HiveRift articles & platform data
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-rose-950/80 border border-rose-800/80 text-rose-200 rounded-2xl text-xs font-bold leading-relaxed text-center">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
              Email Address
            </label>
            <div className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-xs font-bold text-white outline-none focus:border-emerald-500 transition-all placeholder:text-slate-600"
                placeholder="Enter your mail"
              />
              <Mail size={18} className="absolute left-3.5 text-slate-500 pointer-events-none" />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-11 pr-11 text-xs font-bold text-white outline-none focus:border-emerald-500 transition-all placeholder:text-slate-600"
                placeholder="••••••••"
              />
              <Lock size={18} className="absolute left-3.5 text-slate-500 pointer-events-none" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Login Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-950 flex items-center justify-center gap-2 transition-all disabled:opacity-50 mt-2"
          >
            {loading ? (
              "Signing In..."
            ) : (
              <>
                Sign In to Dashboard <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Back to Home Link */}
        <div className="mt-8 text-center border-t border-slate-800/80 pt-4">
          <Link href="/" className="text-xs font-bold text-slate-500 hover:text-emerald-400 transition-colors">
            ← Back to Public Website
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
