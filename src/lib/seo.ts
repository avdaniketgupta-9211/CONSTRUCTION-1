import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMeta({
  title,
  description,
  path,
  image = "/images/hero.jpg",
  suffixBrand = true,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  suffixBrand?: boolean;
}): Metadata {
  const canonical = path === "/" ? "/" : path;
  const socialTitle = suffixBrand ? `${title} | ${site.shortName} Capital` : title;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: socialTitle,
      description,
      url: canonical,
      siteName: `${site.shortName} Capital`,
      images: [{ url: image, width: 1200, height: 630, alt: site.shortName }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: "Real estate construction and bridge financing",
    url: `${site.url}${path}`,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    areaServed: "Select U.S. metropolitan markets",
  };
}
