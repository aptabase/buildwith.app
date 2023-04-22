import { Framework } from "./";

export const flutter: Framework = {
  slug: "flutter",
  name: "Flutter",
  description:
    "Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
  pros: [
    {
      title: "Cross-platform",
      description:
        "Flutter allows developers to build apps for a wide range of platforms using a single codebase, reducing development time and costs.",
    },
    {
      title: "Performance",
      description:
        "Apps built with Flutter are fairly performant as Flutter's engine and framework are optimized to take advantage of each platform's hardware.",
    },
    {
      title: "User Interface",
      description:
        "Flutter has built-in UI elements for both iOS and Android, allowing developers to create a consistent interface that follows the Apple and Android design guidelines.",
    },
    {
      title: "Native APIs",
      description:
        "Flutter provides a bridge between the to native APIs. This means that developers can access native functionality like the camera, accelerometer and much more.",
    },
    {
      title: "Large Community",
      description:
        "Flutter has a large and active developer community, which means there is plenty of documentation, tutorials, and examples available to help developers build desktop apps.",
    },
  ],
  cons: [
    {
      title: "Learning Curve",
      description:
        "Dart is not a very popular language, so developers will have to learn a new language to build apps with Flutter.",
    },
    {
      title: "App Size",
      description:
        "Flutter apps tend to be larger than native apps due to Flutter engine being bundled with them.",
    },
  ],
  href: "https://flutter.dev/",
  logoUrl: "https://aptabase.com/tools/flutter.svg",
  languages: ["Dart"],
  platforms: ["Linux", "macOS", "Windows", "iOS", "Android"],
  reddit: {
    href: "https://reddit.com/r/FlutterDev/",
    members: 107_000,
  },
  github: {
    href: "https://github.com/flutter/flutter",
    stars: 152000,
  },
  twitter: {
    slug: "FlutterDev",
    followers: 229_600,
  },
  discord: [
    {
      name: "/r/FlutterDev",
      href: "https://discord.com/invite/N7Yshp4",
      members: 52_853,
    },
  ],
};
