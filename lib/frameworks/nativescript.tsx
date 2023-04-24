import { Framework } from "./";

export const nativescript: Framework = {
  slug: "nativescript",
  name: "Native Script",
  maintainer: "OpenJS Foundation",
  short_description: "Build truly native apps with JavaScript.",
  long_description: (
    <>
      <p>
        NativeScript allows developers to build native mobile applications for
        both iOS and Android platforms using a single codebase. With
        NativeScript, developers can use JavaScript or TypeScript to create
        mobile apps that have access to native APIs and are capable of
        delivering a high-performance user experience. The framework provides a
        set of pre-built UI components that are optimized for mobile devices,
        which allows developers to focus on building the logic of their
        applications rather than spending time on designing the UI from scratch.
      </p>
      <p></p>
      <p></p>
    </>
  ),
  best_for:
    "developers who are familiar with JavaScript and want to cross-platform mobile apps.",
  pros: [
    {
      title: "Cross-platform",
      description:
        "Native Script allows developers to build mobile apps for multiple platforms, including Android and iOS, using a single codebase.",
    },
    {
      title: "Native APIs",
      description:
        "Native Script provides a bridge to all native APIs via JavaScript, without having to write anything in Swift or Kotlin. This means that developers can access native functionality such as camera, contacts, and file storage.",
    },
  ],
  cons: [
    {
      title: "Performance",
      description:
        "Native Script uses JavaScript as a bridge to Native APIs, which is limited to a single-thread and may not perform as well as those built natively.",
    },
    {
      title: "Emerging Community",
      description:
        "Despite being around for a while, the Native Script is not as popular as other frameworks, which means that there is not a lot of tutorials, and examples available to help developers apps.",
    },
  ],
  releases: {
    first: "April 29, 2015",
  },
  href: "https://nativescript.org/",
  languages: ["JavaScript", "TypeScript"],
  platforms: ["iOS", "Android"],
  reddit: {
    href: "https://reddit.com/r/nativescript",
    members: 2_000,
  },
  github: {
    href: "https://github.com/NativeScript/NativeScript",
    stars: 22_400,
  },
  twitter: {
    slug: "nativescript",
    followers: 70_700,
  },
  discord: {
    name: "Native Script",
    href: "https://discord.com/invite/RgmpGky9GR",
    members: 4_246,
  },
};
