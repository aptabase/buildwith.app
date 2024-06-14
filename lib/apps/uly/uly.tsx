import { App } from "..";
import icon from "./uly-icon.png";
import screenshot from "./uly-ss.png";
import profile from "./gautier.jpg";

export const uly: App = {
  slug: "uly",
  name: "ULY",
  description: "Your daily journal",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "June 2024",
  published_at: "June 2024",
  framework: ["flutter"],
  website: "https://uly.app/",
  stores: {
    google_play:
      "https://play.google.com/store/apps/details?id=uly.vlog.diary&pli=1",
    app_store:
      "https://apps.apple.com/us/app/diary-with-lock-uly/id6474308722",
  },
  makers: [
    {
      name: "Gautier",
      twitter: "mcflyDev",
      profile_img: profile.src,
    },
  ],
  highlight:
    "A simple and efficient personal journal app",
  interview: [
    {
      question: "What is ULY?",
      answer: `ULY is a modern journaling app. We believe that a journal is a powerful tool for personal growth throughout life&apos;s journey. It helps you reduce stress, track your personal development, achieve goals, preserve memories, and enhance creativity. A diary is an incredible tool that everyone should try. And like your phone, it should always be with you.
      `,
    },
    {
      question: "Who is behind ULY? Tell us a bit about yourself.",
      answer: `I&apos;m Gautier, a 36-year-old French developer. After running a Flutter agency for 6 years, I decided to restart and create my own apps.`,
    },
    {
      question:
        "Why did you build ULY? How did you come up with the idea?",
      answer: `The idea of ULY came to me the day I became a dad. I wanted to leave some videos and text for my son to discover later. ULY is inspired by Ulysses, who left his family for 20 years.`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, users, MMR, whatever works for you!",
      answer: `ULY has just been released and was awarded 2nd Product of the Day on Product Hunt. Nearly 200 people write in their journal every day, and this number keeps growing.`,
    },
    {
      question: "Why Flutter? What made you choose it for this project?",
      answer: `Flutter is amazing. It allows you to create web, Android, iOS, macOS, and other apps with one codebase and their own rendering engine. This alone should be enough to understand how great it is.`,
    },
    {
      question:
        "What do you dislike about Flutter? Would you choose a different framework if you had to start over?",
      answer: `I only miss a few widgets from iOS, like a better text editing widget. But the community works hard, and there are some great unofficial alternatives. I wouldn&apos;t choose anything else.`,
    },
  ],
};
