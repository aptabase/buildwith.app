import { Framework } from "./";

export const dotnetmaui: Framework = {
  slug: "dotnetmaui",
  name: ".NET MAUI",
  maintainer: "Microsoft",
  short_description:
    "Cross-platform .NET framework for building native mobile and desktop applications.",
  long_description: (
    <>
      <p>
        .NET Multi-platform App UI (MAUI) allows developers to build native
        mobile and desktop applications for Android, iOS, macOS, Windows, and
        Linux using a single codebase written in C# and XAML. .NET MAUI is a
        continuation of Xamarin.Forms and is designed to provide a consistent
        and modern development experience for building cross-platform
        applications.
      </p>
      <p>
        One of the key benefits of .NET MAUI is its native support for multiple
        platforms. It provides a set of pre-built UI components that are
        optimized for each platform, allowing developers to create applications
        that look and feel native on each platform. .NET MAUI also provides
        access to native device features and functionality through a unified
        API, making it easy for developers to create cross-platform applications
        without sacrificing performance or functionality.
      </p>
      <p>
        Another benefit of .NET MAUI is its use of modern development patterns
        and practices. It uses XAML for building user interfaces, which is a
        markup language that is easy to read and write, and supports data
        binding and styling. .NET MAUI also uses MVVM (Model-View-ViewModel)
        architecture, which helps to separate the UI logic from the application
        logic, making it easier to test and maintain.
      </p>
    </>
  ),
  best_for:
    "developers who are familiar with C#/.NET and want to build cross-platform mobile and desktop apps.",
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
