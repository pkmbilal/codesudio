import { SITE_URL } from "@/lib/seo";
import { ORDER } from "@/data/services";
import { LOCATION_ORDER } from "@/data/locations";

export default function sitemap() {
  const staticRoutes = ["", "/about", "/contact", "/services", "/locations"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = ORDER.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const locationRoutes = LOCATION_ORDER.map((slug) => ({
    url: `${SITE_URL}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes];
}
