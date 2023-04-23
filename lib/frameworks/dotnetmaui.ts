import { Framework } from "./";

export const dotnetmaui: Framework = {
  slug: "dotnetmaui",
  name: ".NET MAUI",
  maintainer: "Microsoft",
  short_description:
    "Cross-platform .NET framework for building native mobile and desktop applications.",
  best_for:
    "Developers who are familiar with C#/.NET and want to build cross-platform mobile and desktop apps.",
  pros: [
    {
      title: "Cross-platform",
      description:
        "Capacitor allows developers to build mobile apps for multiple platforms, including Android and iOS, using a single codebase.",
    },
    {
      title: "Native APIs",
      description:
        ".NET MAUI provides a bridge between .NET and the native APIs of the operating systems. This means that developers can access native functionality such as camera, contacts, and file storage.",
    },
  ],
  cons: [
    {
      title: "Emerging Community",
      description:
        ".NET MAUI is a relatively new framework, which means that there is not a lot of tutorials, and examples available to help developers apps.",
    },
    {
      title: "Learning Curve",
      description:
        ".NET MAUI apps are built with C#, which is easy to get started with. But MAUI itself is a complex framework with very little documentation.",
    },
  ],
  releases: {
    first: "May 23, 2022",
  },
  href: "https://dotnet.microsoft.com/en-us/apps/maui",
  platforms: ["iOS", "Android", "macOS", "Windows"],
  languages: ["C#"],
  reddit: {
    href: "https://reddit.com/r/dotnetMAUI/",
    members: 3_100,
  },
  github: {
    href: "https://github.com/dotnet/maui",
    stars: 18_800,
  },
  discord: [
    {
      name: "Xamarin & MAUI",
      href: "https://discord.com/invite/fB6yfFhrX9",
      members: 797,
    },
  ],
};
