import { apiClient, ENDPOINTS, API_BASE_URL } from "@/app/config/api.config";
import { blogPosts, BlogPost } from "@/app/data/blogData";

export function getImageUrl(image?: string): string {
  if (!image) {
    return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
  }
  if (image.startsWith("http://") || image.startsWith("https://") || image.startsWith("data:")) {
    return image;
  }
  const cleanPath = image.replace(/^\/?(uploads\/)?/, "");

  if (process.env.NEXT_PUBLIC_UPLOADS_URL) {
    const base = process.env.NEXT_PUBLIC_UPLOADS_URL.replace(/\/$/, "");
    return `${base}/uploads/${cleanPath}`;
  }

  const isLocalEnv =
    process.env.NODE_ENV === "development" ||
    API_BASE_URL.includes("localhost") ||
    API_BASE_URL.includes("127.0.0.1") ||
    (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"));

  if (isLocalEnv) {
    return `http://localhost:4000/uploads/${cleanPath}`;
  }

  const uploadServer = API_BASE_URL.replace(/\/api\/v1\/?$/, "").replace(/\/hiverift_api\/?$/, "").replace(/\/$/, "");
  return `${uploadServer}/uploads/${cleanPath}`;
}

export async function getBlogsFromApi(category?: string, search?: string): Promise<BlogPost[]> {
  try {
    const params: Record<string, string> = { _t: Date.now().toString() };
    if (category && category !== "All") params.category = category;
    if (search) params.search = search;

    const response = await apiClient.get(ENDPOINTS.BLOGS, {
      params,
      headers: { "Cache-Control": "no-cache, no-store, must-revalidate", "Pragma": "no-cache" }
    });
    const json = response.data;

    if (json.success && Array.isArray(json.data) && json.data.length > 0) {
      return json.data.map((item: any) => ({
        id: item._id || item.id,
        category: item.category,
        title: item.title,
        desc: item.desc,
        readTime: item.readTime || "4 min read",
        author: item.author || "HiveRift Team",
        authorRole: item.authorRole || "Tech & Strategy",
        date: item.createdAt ? new Date(item.createdAt).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) : item.date || "Jan 2026",
        image: getImageUrl(item.image),
        content: item.content || {
          intro: item.desc,
          keyTakeaways: ["High quality content"],
          sections: [{ heading: "Overview", text: item.desc }],
          conclusion: "Contact HiveRift for custom solutions."
        }
      }));
    }
  } catch (error) {
    console.warn("Backend API unavailable, serving local blogData:", error);
  }

  // Fallback to static blogData if backend is offline or empty
  return blogPosts.filter(post => {
    const matchesCat = !category || category === "All" || post.category.toLowerCase() === category.toLowerCase();
    const matchesSearch = !search || post.title.toLowerCase().includes(search.toLowerCase()) || post.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });
}

export async function getBlogByIdFromApi(id: string): Promise<BlogPost | null> {
  try {
    const response = await apiClient.get(`${ENDPOINTS.BLOGS}/${id}`, {
      params: { _t: Date.now().toString() },
      headers: { "Cache-Control": "no-cache, no-store, must-revalidate", "Pragma": "no-cache" }
    });
    const json = response.data;

    if (json.success && json.data) {
      const item = json.data;
      return {
        id: item._id || item.id,
        category: item.category,
        title: item.title,
        desc: item.desc,
        readTime: item.readTime || "4 min read",
        author: item.author || "HiveRift Team",
        authorRole: item.authorRole || "Tech & Strategy",
        date: item.createdAt ? new Date(item.createdAt).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) : item.date || "Jan 2026",
        image: getImageUrl(item.image),
        content: item.content || {
          intro: item.desc,
          keyTakeaways: ["High quality content"],
          sections: [{ heading: "Overview", text: item.desc }],
          conclusion: "Contact HiveRift for custom solutions."
        }
      };
    }
  } catch (error) {
    console.warn("Backend API unavailable for ID, falling back to static blogData:", error);
  }

  return blogPosts.find(p => String(p.id) === String(id)) || null;
}

export async function seedBlogsApi() {
  const response = await apiClient.post(ENDPOINTS.BLOG_SEED);
  return response.data;
}

export async function createBlogApi(blogData: any) {
  const isFormData = typeof FormData !== "undefined" && blogData instanceof FormData;
  if (isFormData) {
    const baseUrl = API_BASE_URL.replace(/\/$/, "");
    const url = `${baseUrl}${ENDPOINTS.BLOGS}`;
    const res = await fetch(url, { method: "POST", body: blogData });
    return await res.json();
  }
  const response = await apiClient.post(ENDPOINTS.BLOGS, blogData);
  return response.data;
}

export async function updateBlogApi(id: string, blogData: any) {
  const isFormData = typeof FormData !== "undefined" && blogData instanceof FormData;
  if (isFormData) {
    const baseUrl = API_BASE_URL.replace(/\/$/, "");
    const url = `${baseUrl}${ENDPOINTS.BLOGS}/${id}`;
    const res = await fetch(url, { method: "PATCH", body: blogData });
    return await res.json();
  }
  const response = await apiClient.patch(`${ENDPOINTS.BLOGS}/${id}`, blogData);
  return response.data;
}

export async function deleteBlogApi(id: string) {
  const response = await apiClient.delete(`${ENDPOINTS.BLOGS}/${id}`);
  return response.data;
}
