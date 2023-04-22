import { Framework } from "./";

export const apple: Framework = {
  slug: "apple",
  name: "Apple (Native)",
  description: "Build truly native apps for Apple devices using Swift.",
  pros: [
    {
      title: "Official SDK",
      description:
        "Native apps are built using the official Apple development tools, which provide access to the latest features and functionality of the Apple ecosystem.",
    },
    {
      title: "Performance",
      description:
        "Native Apple apps perform better than hybrid apps as they have direct access to device hardware and the underlying operating system.",
    },
    {
      title: "User Experience",
      description:
        "Native Apple apps offer a consistent user experience that users are familiar with.",
    },
    {
      title: "Ecosystem",
      description:
        "Developers can build apps for other all Apple products like Apple Watch, Apple TV, Mac, iPad and iPhone.",
    },
    {
      title: "Large Community",
      description:
        "Apple has a very large and active developer community, which means there is plenty of documentation, tutorials, and examples available to help developers build apps for Apple.",
    },
  ],
  cons: [
    {
      title: "Cross-platform",
      description:
        "Developers have to build separate apps using a different framework to target other platforms like Android and Windows.",
    },
  ],
  releases: {
    first: "March 6, 2008",
  },
  href: "https://developer.apple.com/",
  logoUrl: "https://aptabase.com/tools/apple.svg",
  languages: ["Swift"],
  platforms: ["iOS", "tvOS", "watchOS", "macOS"],
  reddit: {
    href: "https://reddit.com/r/iOSdev/",
    members: 125_000,
  },
  twitter: {
    slug: "AndroidDev",
    followers: 2_200_000,
  },
  discord: [
    {
      name: "Swift",
      href: "https://discord.com/invite/0uZpB8GgRvoU12Ta",
      members: 6_632,
    },
    {
      name: "iOS Development",
      href: "https://discord.com/invite/vVNXQZT",
      members: 7_308,
    },
    {
      name: "The Swift Den",
      href: "https://discord.com/invite/hzDzBcP2Xv",
      members: 860,
    },
  ],
};
