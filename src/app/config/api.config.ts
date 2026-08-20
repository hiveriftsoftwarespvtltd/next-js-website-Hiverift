import axios from "axios";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://hiverift.com/hiverift_api";

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
