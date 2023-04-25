import { aptakube } from "./aptakube/aptakube";
import { habitkit } from "./habitkit/habitkit";

export type App = {
  slug: string;
  name: string;
  description: string;
  initial_release: string;
  published_at: string;
  website: string;
  icon_url: string;
  screenshot_url: string;
  framework: string;
  author: { name: string; twitter: string; profile_img: string };
  stores?: {
    google_play?: string;
    app_store?: string;
  };
  interview: Array<{ question: string; answer: JSX.Element }>;
};

export const apps = [aptakube, habitkit];

export const getApp = (slug: string): App | undefined => {
  return apps.find((app) => app.slug === slug);
};
