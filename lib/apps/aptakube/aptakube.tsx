import { App } from "..";
import icon from "./aptakube.png";

export const aptakube: App = {
  slug: "aptakube",
  name: "Aptakube",
  description:
    "Modern, lightweight and multi-cluster Kubernetes desktop client",
  icon_url: icon.src,
  framework: "tauri",
  website: "https://aptakube.com",
  author: {
    name: "Guilherme Oenning",
    twitter: "goenning",
  },
};
