import { Framework } from "./";

export const reactnative: Framework = {
  slug: "reactnative",
  name: "React Native",
  maintainer: "Facebook",
  short_description:
    "Build native mobile applications by compiling JavaScript code to native Android/iOS.",
  long_description: (
    <>
      <p>
        React Native enables developers to build natively compiled applications
        for mobile platforms, including iOS and Android, using a single codebase
        written in JavaScript. React Native uses the same design as React, a
        popular web development library, which allows developers to create
        reusable and modular code.
      </p>
      <p>
        One of the key benefits of React Native is its ability to provide a fast
        development cycle due to Hot Reload, which allows developers to see
        changes in their code immediately, without having to recompile the
        entire application. Additionally, React Native comes with a large
        library of pre-built components, making it easy for developers to create
        responsive and customizable user interfaces.
      </p>
      <p>
        React Native&apos;s performance is also noteworthy. It uses native
        components, which allows it to provide a high level of performance and
        speed, even on older devices. However, because it uses JavaScript, it
        may not be as performant as natively coded applications in some cases.
        Overall, React Native is a powerful and flexible tool that can help
        developers build high-quality, cross-platform applications for mobile
        platforms.
      </p>
    </>
  ),
  best_for:
    "developers who are familiar with JavaScript and want to cross-platform mobile apps.",
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
  languages: ["JavaScript", "TypeScript"],
  platforms: ["tvOS", "Android TV", "macOS", "Windows", "iOS", "Android"],
  reddit: {
    href: "https://reddit.com/r/reactnative",
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
  discord: {
    name: "Expo Developers",
    href: "https://discord.com/invite/TercuSpcC7",
    members: 15_843,
  },
};
