import { Framework } from "./";

export const apple: Framework = {
  slug: "apple",
  name: "Apple (Native)",
  description: "Build truly native apps for Apple devices using Swift.",
  href: "https://developer.apple.com/",
  logoUrl: "https://aptabase.com/tools/apple.svg",
  languages: ["swift"],
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
