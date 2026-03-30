import type { MetadataRoute } from "next";
import { siteMetadataBase } from "@/data/siteMeta";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteMetadataBase().origin.replace(/\/$/, "");
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/demo`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/rangeos-demo`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/light-demo`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
