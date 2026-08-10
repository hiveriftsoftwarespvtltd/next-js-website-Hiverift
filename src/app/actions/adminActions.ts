import { apiClient, ENDPOINTS } from "@/app/config/api.config";
import { blogPosts, BlogPost } from "@/app/data/blogData";

export async function getBlogsFromApi(category?: string, search?: string): Promise<BlogPost[]> {
  try {
    const params: Record<string, string> = {};
    if (category && category !== "All") params.category = category;
    if (search) params.search = search;

    const response = await apiClient.get(ENDPOINTS.BLOGS, { params });
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
        image: item.image?.startsWith("http") ? item.image : item.image ? `http://localhost:4000/uploads/${item.image}` : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
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
    const response = await apiClient.get(`${ENDPOINTS.BLOGS}/${id}`);
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
        image: item.image?.startsWith("http") ? item.image : item.image ? `http://localhost:4000/uploads/${item.image}` : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
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
  const headers = isFormData ? { "Content-Type": "multipart/form-data" } : undefined;

  const response = await apiClient.post(ENDPOINTS.BLOGS, blogData, { headers });
  return response.data;
}

export async function updateBlogApi(id: string, blogData: any) {
  const isFormData = typeof FormData !== "undefined" && blogData instanceof FormData;
  const headers = isFormData ? { "Content-Type": "multipart/form-data" } : undefined;

  const response = await apiClient.patch(`${ENDPOINTS.BLOGS}/${id}`, blogData, { headers });
  return response.data;
}

export async function deleteBlogApi(id: string) {
  const response = await apiClient.delete(`${ENDPOINTS.BLOGS}/${id}`);
  return response.data;
}
