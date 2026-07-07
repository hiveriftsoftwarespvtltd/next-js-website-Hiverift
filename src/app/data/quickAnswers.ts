export interface QuickAnswer {
  slug: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  points: string[];
  cta: string;
  ctaLink: string;
}

export const quickAnswers: QuickAnswer[] = [
  {
    slug: "what-is-digital-marketing",
    question: "What is digital marketing?",
    shortAnswer: "Digital marketing is the process of promoting your business online using SEO, social media, and ads to generate leads and sales.",
    detailedAnswer: "Digital marketing is more than just social media posts; it's a comprehensive ecosystem designed to capture and convert attention. At HiveRift, we look at your business holistically identifying where your customers spend their time and how to reach them with precision.",
    points: [
      "Search Engine Optimization (SEO) for organic visibility",
      "Pay-Per-Click (PPC) for instant lead generation",
      "Social Media Marketing to build brand authority",
      "Content Strategy that educates and converts",
      "Email Marketing for long-term customer retention"
    ],
    cta: "Request a Marketing Strategy",
    ctaLink: "/contact"
  },
  {
    slug: "why-website-important",
    question: "Why is a website important?",
    shortAnswer: "A website builds trust, increases visibility, and helps convert visitors into paying customers for your business.",
    detailedAnswer: "In today's digital-first world, your website is your 24/7 salesperson. It's often the first touchpoint a customer has with your brand. A professionally designed website doesn't just look good it functions as a conversion engine that qualifies leads and builds immediate credibility.",
    points: [
      "Establishes 24/7 online presence and credibility",
      "Serves as a central hub for all marketing efforts",
      "Captures valuable customer data and analytics",
      "Improves customer service through automated info",
      "Scales your business beyond geographical limits"
    ],
    cta: "Build My Professional Website",
    ctaLink: "/services/web-development"
  },
  {
    slug: "how-can-we-help",
    question: "How can you help my business?",
    shortAnswer: "We create a website, drive targeted traffic, and generate quality leads using proven strategies that deliver results.",
    detailedAnswer: "HiveRift acts as your extended engineering and marketing arm. We don't just deliver projects; we solve business problems. Whether you need to automate manual processes with custom software or scale your revenue through digital channels, our team provides the technical expertise and strategic insight to make it happen.",
    points: [
      "Custom Software & Web App Development",
      "End-to-end Digital Growth Strategies",
      "AI & Automation to optimize operations",
      "UI/UX Design focused on user conversion",
      "Ongoing technical support and maintenance"
    ],
    cta: "Talk to a Growth Expert",
    ctaLink: "/contact"
  },
  {
    slug: "results-timeline",
    question: "How long does it take to see results?",
    shortAnswer: "SEO takes 3-6 months for strong results, while paid ads can start generating leads and sales within days.",
    detailedAnswer: "The timeline for success depends on the strategy chosen. Digital growth is a mix of sprints and marathons. We prioritize quick wins to sustain momentum while building the foundation for long-term, compounding growth.",
    points: [
      "Paid Search/Social: Results within 48-72 hours",
      "Website Launch: Typically 2-4 weeks",
      "SEO Ranking: Significant growth in 3-6 months",
      "Custom Software: Phased delivery every 2 weeks",
      "Conversion Optimization: Instant impact on ROI"
    ],
    cta: "Get a Custom Timeline",
    ctaLink: "/contact"
  }
];
