import { Metadata } from "next";
import { blogPosts } from "@/app/data/blogData";
import BlogDetailContent from "./BlogDetailContent";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === Number(id) || String(p.id) === String(id));

  return {
    title: post ? `${post.title} | HiveRift Blog` : "Article Details | HiveRift Blog",
    description: post ? post.desc : "Read latest articles and insights on HiveRift Blog.",
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === Number(id) || String(p.id) === String(id));

  const initialPost = post || {
    id: id,
    title: "Loading Article...",
    category: "Insights",
    date: "Recent",
    readTime: "5 min read",
    author: "HiveRift Team",
    authorRole: "Tech Insights",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    desc: "Fetching article content from HiveRift backend...",
    content: {
      intro: "Loading full article details...",
      keyTakeaways: ["HiveRift Engineering", "Scalable Digital Solutions"],
      sections: [{ heading: "Overview", text: "Loading article body..." }],
      quote: "Delivering innovative digital solutions worldwide.",
      conclusion: "Thank you for reading HiveRift insights."
    }
  };

  return <BlogDetailContent post={initialPost as any} />;
}
