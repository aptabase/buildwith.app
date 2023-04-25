import { aptakube } from "./aptakube/aptakube";

export type App = {
  slug: string;
  name: string;
  description: string;
  website: string;
  icon_url: string;
  framework: string;
  author: { name: string; twitter: string };
  questions: Array<{ question: string; answer: string }>;
};

export const apps = [aptakube];

export const getApp = (slug: string): App | undefined => {
  return apps.find((app) => app.slug === slug);
};
