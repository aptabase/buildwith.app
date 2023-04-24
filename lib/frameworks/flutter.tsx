import { Framework } from "./";

export const flutter: Framework = {
  slug: "flutter",
  name: "Flutter",
  maintainer: "Google",
  short_description:
    "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
  best_for:
    "developers who are confortable learning a new language and want to cross-platform desktop and mobile apps.",
  long_description: (
    <>
      <p>
        Flutter is designed to enable developers to build high-performance,
        natively compiled applications for mobile, web, and desktop platforms
        from a single codebase. Flutter uses the Dart programming language and
        allows for reactive and declarative programming styles.
      </p>
      <p>
        One of the main advantages of Flutter is its ability to provide a fast
        development cycle, allowing developers to iterate quickly and easily.
        This is due to the Hot Reload feature, which allows developers to see
        changes in the code immediately, without having to restart the entire
        application. Additionally, Flutter comes with a rich set of pre-built
        widgets, which makes it easy for developers to create beautiful and
        customizable user interfaces.
      </p>
      <p>
        Flutter is also known for its high performance, thanks to its use of a
        unique rendering engine called Skia. This engine is able to render
        graphics and text quickly and efficiently, even on lower-end devices.
        Flutter&apos;s architecture also allows it to use less memory than other
        similar frameworks, which is particularly important for mobile devices
        with limited resources. Overall, Flutter is a powerful and flexible
        development tool that can help developers create high-quality,
        cross-platform applications quickly and efficiently.
      </p>
    </>
  ),
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
  releases: {
    first: "May 12, 2017",
  },
  href: "https://flutter.dev/",
  languages: ["Dart"],
  platforms: ["Linux", "macOS", "Windows", "iOS", "Android"],
  reddit: {
    href: "https://reddit.com/r/FlutterDev",
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
