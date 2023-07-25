import { aptakube } from "./aptakube/aptakube";
import { auraai } from "./auraai/auraai";
import { avocation } from "./avocation/avocation";
import { habitkit } from "./habitkit/habitkit";
import { lifeprogress } from "./lifeprogress/lifeprogress";
import { screenstudio } from "./screenstudio/screenstudio";
import { session } from "./session/session";

export type App = {
  slug: string;
  name: string;
  description: string;
  initial_release: string;
  published_at: string;
  website: string;
  icon_url: string;
  screenshot_url: string;
  framework: string[];
  makers: Array<{ name: string; twitter: string; profile_img: string }>;
  stores?: {
    google_play?: string;
    app_store?: string;
    microsoft_store?: string;
    setapp?: string;
    website?: string;
  };
  highlight: string;
  interview: Array<{ question: string; answer: string }>;
};

export const apps = [
  aptakube,
  habitkit,
  session,
  screenstudio,
  auraai,
  lifeprogress,
  avocation,
];

export const getApp = (slug: string): App | undefined => {
  return apps.find((app) => app.slug === slug);
};
