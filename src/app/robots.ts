import type { MetadataRoute } from "next";
import { siteMetadataBase } from "@/data/siteMeta";

export default function robots(): MetadataRoute.Robots {
  const base = siteMetadataBase().origin;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}sitemap.xml`,
  };
}
