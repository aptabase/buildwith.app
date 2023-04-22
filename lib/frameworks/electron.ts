import { Framework } from "./";

export const electron: Framework = {
  slug: "electron",
  name: "Electron",
  description:
    "Electron is a framework for building desktop applications using JavaScript, HTML, and CSS.",
  pros: [
    {
      title: "Cross-platform",
      description:
        "Electron allows developers to write code once and deploy it across multiple platforms. This saves development time and effort.",
    },
    {
      title: "Web Technologies",
      description:
        "Developers can use web technologies like HTML, CSS, and JavaScript to build desktop apps with Electron, which they may already be familiar with. This can make development faster and more comfortable.",
    },
    {
      title: "Native APIs",
      description:
        "Electron provides a bridge between the web technologies and the native APIs of the operating systems. This means that developers can access native functionality like the menu bar, tray and much more.",
    },
    {
      title: "Large Community",
      description:
        "Electron has a large and active developer community, which means there is plenty of documentation, tutorials, and examples available to help developers build desktop apps.",
    },
  ],
  cons: [
    {
      title: "Performance",
      description:
        "Apps built with Electron may not perform as well as those built natively due to the overhead introduced by the webview.",
    },
    {
      title: "App Size",
      description:
        "Electron apps have Chromium and Node.js bundled with them which can make the resulting binary quite large.",
    },
    {
      title: "Limited Platforms",
      description:
        "Electron can only target desktop environments like Windows, macOS and Linux.",
    },
  ],
  href: "https://www.electronjs.org",
  logoUrl: "https://aptabase.com/tools/electron.svg",
  languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
  platforms: ["Linux", "macOS", "Windows"],
  reddit: {
    href: "https://reddit.com/r/electronjs/",
    members: 7_400,
  },
  github: {
    href: "https://github.com/electron/electron",
    stars: 107000,
  },
  twitter: {
    slug: "electronjs",
    followers: 36_300,
  },
  discord: [
    {
      name: "electronjs.org",
      href: "https://discord.com/invite/electronjs",
      members: 14_391,
    },
  ],
};
