import { android } from "./android";
import { apple } from "./apple";
import { capacitor } from "./capacitor";
import { dotnetmaui } from "./dotnetmaui";
import { electron } from "./electron";
import { flutter } from "./flutter";
import { reactnative } from "./reactnative";
import { tauri } from "./tauri";

export type Framework = {
  slug: string;
  name: string;
  description: string;
  href: string;
  logoUrl: string;
  languages: string[];
  reddit: {
    href: string;
    members: string;
  };
};

export const frameworks = [
  android,
  capacitor,
  apple,
  dotnetmaui,
  electron,
  flutter,
  reactnative,
  tauri,
];

export function getFramework(slug: string): Framework {
  const fw = frameworks.find((framework) => framework.slug === slug);
  if (!fw) {
    throw new Error(`Framework ${slug} not found`);
  }
  return fw;
}
