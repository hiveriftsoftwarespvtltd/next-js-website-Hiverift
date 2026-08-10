import axios from "axios";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/v1";

export const ENDPOINTS = {
  BLOGS: "/blogs",
  BLOG_SEED: "/blogs/seed",
  SUBMIT_FORM: "/submitfrom",
  LOGIN: "/auth/login",
};

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
