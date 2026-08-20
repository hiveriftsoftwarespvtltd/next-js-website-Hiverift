import axios from "axios";

// Environment-aware API Base URL
// In local development (npm run dev), NODE_ENV is "development" -> defaults to local backend http://localhost:4000/api/v1
// In live production build, NODE_ENV is "production" -> defaults to live server https://hiverift.com/hiverift_api
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === "development" ? "http://localhost:4000/api/v1" : "https://hiverift.com/hiverift_api");

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
