import { Framework } from "./";

export const capacitor: Framework = {
  slug: "capacitor",
  name: "Capacitor",
  maintainer: "Ionic",
  short_description:
    "Build mobile applications using JavaScript, HTML and CSS.",
  pros: [
    {
      title: "Cross-platform",
      description:
        "Capacitor allows developers to build mobile apps for multiple platforms, including Android and iOS, using a single codebase.",
    },
    {
      title: "Native APIs",
      description:
        "Capacitor provides a bridge between the web technologies and the native APIs of the operating systems. This means that developers can access native functionality such as camera, contacts, and file storage.",
    },
    {
      title: "Web Technologies",
      description:
        "Developers can use web technologies like HTML, CSS, and JavaScript to build mobile apps with Capacitor, which they may already be familiar with. This can make development faster and more comfortable.",
    },
    {
      title: "Plugins",
      description:
        "Capacitor has a plugin system that allows developers to extend the functionality of their apps. There are many plugins available to help developers build apps faster.",
    },
  ],
  cons: [
    {
      title: "Performance",
      description:
        "Apps built with Capacitor may not perform as well as those built natively due to the overhead introduced by the webview.",
    },
    {
      title: "Emerging Community",
      description:
        "Capacitor is a relatively new framework, which means that there is not a lot of documentation, tutorials, and examples available to help developers apps.",
    },
  ],
  releases: {
    first: "May 22, 2019",
  },
  href: "https://capacitorjs.com",
  logoUrl: "https://aptabase.com/tools/capacitor-js.svg",
  languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
  platforms: ["iOS", "Android"],
  reddit: {
    href: "https://reddit.com/r/capacitor/",
    members: 498,
  },
  github: {
    href: "https://github.com/ionic-team/capacitor",
    stars: 9_200,
  },
  twitter: {
    slug: "capacitorjs",
    followers: 16_900,
  },
  discord: [
    {
      name: "Ionic",
      href: "https://discord.com/invite/UPYYRhtyzp",
      members: 6260,
    },
  ],
};
