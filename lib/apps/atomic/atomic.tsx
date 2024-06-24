import { App } from "..";
import icon from "./atomic-icon.png";
import screenshot from "./atomic-ss.png";
import profile from "./kenny.jpg";

export const atomic: App = {
  slug: "atomic",
  name: "Atomic - Habits Tracker",
  description: "Streaks and daily checklist",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "February 2024",
  published_at: "June 2024",
  framework: ["apple"],
  website: "https://indiegoodies.com/atomic",
  stores: {
    app_store:
      "https://apps.apple.com/us/app/atomic-habits-tracker/id6478046939",
  },
  makers: [
    {
      name: "Kenny",
      twitter: "khuong291",
      profile_img: profile.src,
    },
  ],
  highlight:
    "Let's transform our habits together, one day at a time.",
  interview: [
    {
      question: "What is Atomic - Habits Tracker?",
      answer: `Atomic - Habits Tracker is the ultimate app to help you build good habits, break bad ones, and stay on top of your daily routines. Atomic will give you everything you need to transform your habits into lasting, positive changes. Helps you to become a better version of yourself.
      `,
    },
    {
      question: "Who is behind Atomic - Habits Tracker? Tell us a bit about yourself.",
      answer: `I&apos;m Kenny, an iOS developer based in Ho Chi Minh City, Vietnam. I have been working on iOS development since 2015, and since 2022, I have taken the plunge into creating my own apps and this journey has been incredibly enjoyable.`,
    },
    {
      question:
        "Why did you build Atomic - Habits Tracker? How did you come up with the idea?",
      answer: `I&apos;ve always struggled with maintaining good habits like waking up early, going to bed on time, eating a healthy breakfast, and exercising regularly. Despite my daily promises to improve, I often fell back into old routines without a solid system in place.

Realizing I needed help, I created Atomic - Habits Tracker. This tool keeps me accountable and motivated, leading to a significant transformation in my life. Now, waking up early, going to bed on time, eating breakfast, and exercising regularly are part of my routine. These changes have made me more productive, healthier, and happier.

Atomic didn&apos;t just improve my habits; it made me a better version of myself. I&apos;m excited to share this tool with others facing similar challenges. If you want to build good habits, break bad ones, and maintain daily routines, Atomic - Habits Tracker is here to help. Let&apos;s transform our habits together, one day at a time.`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, users, MMR, whatever works for you!",
      answer: `Around 8k downloads since the initial release on 26th Feb 2024. 120 daily active users per day, $90 MRR`,
    },
    {
      question: "Why Swift? What made you choose it for this project?",
      answer: `I chose Swift for this project due to its modern syntax, safety features, and performance optimizations. Additionally, I'm using SwiftUI for its declarative syntax and efficient UI development, and Mac Catalyst to seamlessly extend our iOS app to macOS. This combination ensures a cohesive, high-performance application across Apple platforms.`,
    },
    {
      question:
        "What do you dislike about Swift? Would you choose a different framework if you had to start over?",
      answer: `I have nothing to dislike about Swift; it's the best programming language I've worked with. However, if I had to start a project for both iOS and Android, I would choose React Native for its cross-platform capabilities. The trade-off would be not leveraging Mac Catalyst for a macOS app.`,
    },
  ],
};
