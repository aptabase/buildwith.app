import { Framework } from "./";

export const android: Framework = {
  slug: "android",
  name: "Android Native",
  maintainer: "Google",
  short_description: "Build truly native apps for Android devices.",
  long_description: (
    <>
      <p>
        Using Android Studio and Kotlin is how Google wants you to build apps
        for their the Android ecosystem. You&apos;ll always get the best
        performance and compatibility when going all in on native development.
        There&apos;s a huge community building native apps with Kotlin and
        it&apos;s fairly easy to find courses and free content online.
      </p>
      <p>
        By building native apps, you&apos;ll have access to the latest features
        and functionality of the Android ecosystem. You&apos;ll also be able to
        build apps for all Android-based operating systems, including Android
        TV, Android Auto, Wear OS, and of course, Smartphones.
      </p>
    </>
  ),
  best_for: "developers who want to build apps for the Android ecosystem.",
  pros: [
    {
      title: "Official SDK",
      description:
        "Native Android apps are built using the official Android development tools, which provide access to the latest features and functionality of the Android platform.",
    },
    {
      title: "Performance",
      description:
        "Native Android apps perform better than hybrid apps as they have direct access to device hardware and the underlying operating system.",
    },
    {
      title: "User Interface",
      description:
        "Developers can use built-in UI elements to create a consistent interface that follows the Android design guidelines.",
    },
    {
      title: "User Experience",
      description:
        "Native Android apps offer a familiar user experience for Android users.",
    },
    {
      title: "Ecosystem",
      description:
        "Developers can build apps for other Android-based systems like Smartphones, Wear OS, Android TV and Android Auto.",
    },
    {
      title: "Large Community",
      description:
        "Android has a very large and active developer community, which means there is plenty of documentation, tutorials, and examples available to help developers build apps for Android.",
    },
  ],
  cons: [
    {
      title: "Cross-platform",
      description:
        "Developers have to build separate apps using a different framework to target other platforms like iOS, Windows and macOS.",
    },
  ],
  releases: {
    first: "September 23, 2008",
  },
  href: "https://developer.android.com/",
  languages: ["Java", "Kotlin"],
  platforms: ["Android", "Wear Os", "Android TV", "Android Auto"],
  reddit: {
    href: "https://reddit.com/r/androiddev",
    members: 270_000,
  },
  twitter: {
    slug: "AndroidDev",
    followers: 2_100_000,
  },
  discord: {
    name: "/r/AndroidDev",
    href: "https://discord.com/invite/D2cNrqX",
    members: 35_506,
  },
};
