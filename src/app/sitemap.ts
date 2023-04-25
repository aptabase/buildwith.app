import { apps } from "@lib/apps";
import { comparisons, frameworks } from "@lib/frameworks";

export default async function sitemap() {
  const lastModified = new Date().toISOString().split("T")[0];

  const fwPages = frameworks.map((fw) => ({
    url: `https://buildwith.app/${fw.slug}`,
    lastModified,
  }));

  const appPages = apps.map((app) => ({
    url: `https://buildwith.app/apps/${app.slug}`,
    lastModified,
  }));

  const comparisonPages = comparisons.map((path) => ({
    url: `https://buildwith.app/compare/${path}`,
    lastModified,
  }));

  const routes = [""].map((route) => ({
    url: `https://buildwith.app${route}`,
    lastModified,
  }));

  return [...routes, ...fwPages, ...comparisonPages];
}
