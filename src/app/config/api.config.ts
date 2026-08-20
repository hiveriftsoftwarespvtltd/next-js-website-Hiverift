import axios from "axios";

const isBrowser = typeof window !== "undefined";
const isLocalhost = isBrowser && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || (isLocalhost ? "http://localhost:4000/api/v1" : "https://hiverift.com/hiverift_api");

export const ENDPOINTS = {
  BLOGS: "/blogs",
  BLOG_SEED: "/blogs/seed",
  SUBMIT_FORM: "/submitfrom",
  LOGIN: "/auth/login",
};

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});
