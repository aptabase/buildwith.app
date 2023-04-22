import { Framework } from "./";

export const reactnative: Framework = {
  slug: "reactnative",
  name: "React Native",
  description:
    "Build native mobile applications by compiling JavaScript code to native Android/iOS.",
  pros: [
    {
      title: "Cross-platform",
      description:
        "React Native allows developers to build mobile apps for multiple platforms, including Android and iOS, using a single codebase.",
    },
    {
      title: "Native APIs",
      description:
        "React Native provides a bridge between JavaScript and the native APIs of the operating systems. This means that developers can access native functionality such as camera, contacts, and file storage.",
    },
    {
      title: "Large Community",
      description:
        "React Native has a very large and active developer community, which means there is plenty of documentation, tutorials, and examples available to help developers build apps.",
    },
  ],
  cons: [
    {
      title: "Performance",
      description:
        "React Native's performance is not as good as that of native apps due to the overhead introduced by the bridge between JavaScript and native code.",
    },
  ],
  releases: {
    first: "March 26, 2015",
  },
  href: "https://reactnative.dev",
  logoUrl: "https://aptabase.com/tools/react-native.svg",
  languages: ["JavaScript", "TypeScript"],
  platforms: ["tvOS", "Android TV", "macOS", "Windows", "iOS", "Android"],
  reddit: {
    href: "https://reddit.com/r/reactnative/",
    members: 103_000,
  },
  github: {
    href: "https://github.com/facebook/react-native",
    stars: 109000,
  },
  twitter: {
    slug: "reactnative",
    followers: 174_900,
  },
  discord: [
    {
      name: "Callstack",
      href: "https://discord.com/invite/zwR2Cdh",
      members: 5_882,
    },
    {
      name: "Expo Developers",
      href: "https://discord.com/invite/TercuSpcC7",
      members: 15_843,
    },
  ],
};
