import { frameworks } from "@lib/frameworks";

export default async function sitemap() {
  const lastModified = new Date().toISOString().split("T")[0];

  const blogs = frameworks.map((fw) => ({
    url: `https://buildwith.app/${fw.slug}`,
    lastModified,
  }));

  const routes = [""].map((route) => ({
    url: `https://buildwith.app${route}`,
    lastModified,
  }));

  return [...routes, ...blogs];
}
