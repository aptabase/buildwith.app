import { Framework } from "./";

export const tauri: Framework = {
  slug: "tauri",
  name: "Tauri",
  description:
    "Tauri is a framework for building optimized, secure, and frontend-independent application for multi-platform deployment.",
  pros: [
    {
      title: "Cross-platform",
      description:
        "Tauri allows developers to write code once and deploy it across multiple platforms, including Mobile and Desktop. This saves development time and effort.",
    },
    {
      title: "Web Technologies",
      description:
        "Developers can use web technologies like HTML, CSS, and JavaScript to build desktop apps with Tauri, which they may already be familiar with. This can make development faster and more comfortable.",
    },
    {
      title: "Native APIs",
      description:
        "Tauri provides a bridge between the web technologies and the native APIs by using Rust. This means that developers can access native functionality like the menu bar, tray and much more.",
    },
    {
      title: "App Size",
      description:
        "Tauri uses the webview component of the operating system during runtime, which means that apps built with Tauri are very small.",
    },
    {
      title: "Performance",
      description:
        "Apps built with Tauri can be very performant due to use of Rust on the backend. Developers must be careful to avoid performance pitfalls in the frontend, however.",
    },
    {
      title: "Plugins",
      description:
        "Tauri has a plugin system that allows developers to extend the functionality of their apps. There are many plugins available to help developers build apps faster.",
    },
  ],
  cons: [
    {
      title: "Emerging Community",
      description:
        "Tauri is a relatively new framework, which means that there is not a lot of documentation, tutorials, and examples available to help developers apps.",
    },
    {
      title: "Learning Curve",
      description:
        "Despite being popular, even for experienced developers can struggle to learn Rust. Developers can get away building Tauri apps without knowing Rust, but eventually they will need to learn Rust to build more complex features.",
    },
  ],
  releases: {
    first: "June 19, 2022",
  },
  href: "https://tauri.app",
  logoUrl: "https://aptabase.com/tools/tauri.svg",
  languages: ["Rust", "JavaScript", "TypeScript", "HTML", "CSS"],
  platforms: ["Linux", "macOS", "Windows", "iOS", "Android"],
  reddit: {
    href: "https://reddit.com/r/tauri/",
    members: 462,
  },
  github: {
    href: "https://github.com/tauri-apps/tauri",
    stars: 62500,
  },
  twitter: {
    slug: "TauriApps",
    followers: 9_600,
  },
  discord: [
    {
      name: "Tauri Apps",
      href: "https://discord.com/invite/tauri",
      members: 9_958,
    },
  ],
};
