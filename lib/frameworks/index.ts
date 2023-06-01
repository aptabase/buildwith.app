import { android } from "./android";
import { apple } from "./apple";
import { capacitor } from "./capacitor";
import { dotnetmaui } from "./dotnetmaui";
import { electron } from "./electron";
import { flutter } from "./flutter";
import { nativescript } from "./nativescript";
import { reactnative } from "./reactnative";
import { tauri } from "./tauri";

export type Framework = {
  slug: string;
  name: string;
  maintainer: string;
  short_description: string;
  long_description?: JSX.Element;
  best_for: string;
  releases: {
    first: string;
  };
  pros: Array<{
    title: string;
    description: string;
  }>;
  cons: Array<{
    title: string;
    description: string;
  }>;
  href: string;
  languages: string[];
  platforms: string[];
  reddit: {
    href: string;
    members: number;
  };
  github?: {
    href: string;
    stars: number;
  };
  twitter?: {
    slug: string;
    followers: number;
  };
  discord: {
    name: string;
    href: string;
    members: number;
  };
};

export const frameworks = [
  android,
  capacitor,
  apple,
  dotnetmaui,
  electron,
  nativescript,
  flutter,
  reactnative,
  tauri,
].sort((a, b) => a.slug.localeCompare(b.slug));

export const comparisons = frameworks.reduce((acc, curr) => {
  const others = frameworks.filter(
    (fw) => fw.slug.localeCompare(curr.slug) > 0
  );
  const rows = others.map((fw) => `${curr.slug}-vs-${fw.slug}`);
  return [...acc, ...rows];
}, [] as string[]);

export const platforms = Array.from(
  new Set(frameworks.flatMap((framework) => framework.platforms))
).sort((a, b) => a.localeCompare(b));

export function getFramework(slug: string): Framework | undefined {
  return frameworks.find((framework) => framework.slug === slug);
}

export function getFrameworks(slugs: string[]): Framework[] {
  return slugs.map((slug) => getFramework(slug)).filter(Boolean) as Framework[];
}
