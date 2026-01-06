import { Framework } from "./";

export const electron: Framework = {
  slug: "electron",
  name: "Electron",
  maintainer: "OpenJS Foundation",
  short_description:
    "Build desktop applications using JavaScript, HTML, and CSS.",
  long_description: (
    <>
      <p>
        Electron is a popular open-source framework that allows developers to
        build desktop applications using web technologies such as HTML, CSS, and
        JavaScript. Electron was initially developed by GitHub and is based on
        Node.js and Chromium, which enables developers to create cross-platform
        desktop applications for Windows, macOS, and Linux using a single
        codebase.
      </p>
      <p>
        One of the benefits of Electron is that it provides a familiar
        development environment for web developers, who can use their existing
        skills to create desktop applications. Electron also provides access to
        many web technologies and libraries, which can be leveraged to create
        rich and interactive desktop user interfaces.
      </p>
      <p>
        Electron provides a range of tools and APIs that make it easy for
        developers to build powerful desktop applications, including system
        integrations, native dialog boxes, and file system access. However,
        performance may become an issue for some applications due to
        single-threaded Node.js and the use of a webview to render the
        interface.
      </p>
    </>
  ),
  best_for:
    "developers who are familiar with web technologies and want to cross-platform desktop apps.",
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
  releases: {
    first: "15 July 2013",
  },
  href: "https://www.electronjs.org",
  languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
  platforms: ["Linux", "macOS", "Windows"],
  reddit: {
    href: "https://reddit.com/r/electronjs",
    members: 13_000,
  },
  github: {
    href: "https://github.com/electron/electron",
    stars: 120_000,
  },
  twitter: {
    slug: "electronjs",
    followers: 36_600,
  },
  discord: {
    name: "electronjs.org",
    href: "https://discord.com/invite/electronjs",
    members: 22_087,
  },
};
