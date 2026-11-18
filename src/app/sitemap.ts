import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { articles, scenarios } from "@/content/library";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/how-it-works", priority: 0.8 },
    { path: "/case-studies", priority: 0.8 },
    { path: "/resources", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/faq", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
    { path: "/content-status", priority: 0.2 },
  ];

  return [
    ...staticPaths.map((entry) => ({
      url: `${site.url}${entry.path === "/" ? "" : entry.path}`,
      changeFrequency: "monthly" as const,
      priority: entry.priority,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...scenarios.map((scenario) => ({
      url: `${site.url}/case-studies/${scenario.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...articles.map((article) => ({
      url: `${site.url}/resources/${article.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
