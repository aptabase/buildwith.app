import { Framework } from "./";

export const dotnetmaui: Framework = {
  slug: "dotnetmaui",
  name: ".NET MAUI",
  description:
    "MAUI is a cross-platform .NET framework for building native device applications spanning mobile, tablet, and desktop.",
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
      title: "Small Community",
      description:
        ".NET MAUI is a relatively new framework, which means that there is not a lot of documentation, tutorials, and examples available to help developers apps.",
    },
    {
      title: "Learning Curve",
      description:
        ".NET MAUI apps are built with C#, which is easy to get started with. But MAUI itself is a complex framework with very little documentation.",
    },
  ],
  href: "https://dotnet.microsoft.com/en-us/apps/maui",
  logoUrl: "https://aptabase.com/tools/dotnet.png",
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
