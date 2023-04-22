import { Framework } from "./";

export const electron: Framework = {
  slug: "electron",
  name: "Electron",
  description:
    "Electron is a framework for building desktop applications using JavaScript, HTML, and CSS.",
  href: "https://www.electronjs.org",
  logoUrl: "https://aptabase.com/tools/electron.svg",
  languages: ["javascript", "typscript", "html", "css"],
  platforms: ["linux", "macos", "windows"],
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
