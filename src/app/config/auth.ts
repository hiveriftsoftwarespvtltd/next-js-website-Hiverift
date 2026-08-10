import { apiClient, ENDPOINTS } from "@/app/config/api.config";

const ADMIN_SESSION_KEY = "hiverift_admin_session";
const DEFAULT_EMAIL = "admin@hiverift.com";
const DEFAULT_PASS = "admin123";

export interface AdminUser {
  email: string;
  name: string;
  role: string;
  token?: string;
}

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  const session = localStorage.getItem(ADMIN_SESSION_KEY);
  return !!session;
}

export async function loginAdminApi(email: string, pass: string): Promise<{ success: boolean; message?: string }> {
  try {
    const response = await apiClient.post(ENDPOINTS.LOGIN, {
      email: email.trim(),
      password: pass,
    });

    const json = response.data;
    if (json.success && json.token) {
      const user: AdminUser = json.user || {
        email: email.trim(),
        name: "HiveRift Administrator",
        role: "Super Admin",
      };
      if (typeof window !== "undefined") {
        localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify({ ...user, token: json.token }));
      }
      return { success: true };
    }
  } catch (error: any) {
    const errorMsg = error?.response?.data?.message || error?.message;
    if (error?.response?.status === 401) {
      return { success: false, message: errorMsg || "Invalid credentials." };
    }
    console.warn("Backend Auth API unreachable, trying local fallback:", errorMsg);
  }

  // Local fallback if API server is not running
  if (email.trim().toLowerCase() === DEFAULT_EMAIL && pass === DEFAULT_PASS) {
    const user: AdminUser = {
      email: DEFAULT_EMAIL,
      name: "HiveRift Administrator",
      role: "Super Admin",
    };
    if (typeof window !== "undefined") {
      localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(user));
    }
    return { success: true };
  }

  return {
    success: false,
    message: "Invalid email or password.",
  };
}

export function logoutAdmin() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(ADMIN_SESSION_KEY);
  }
}

export function getAdminUser(): AdminUser | null {
  if (typeof window === "undefined") return null;
  const session = localStorage.getItem(ADMIN_SESSION_KEY);
  if (!session) return null;
  try {
    return JSON.parse(session);
  } catch {
    return null;
  }
}
