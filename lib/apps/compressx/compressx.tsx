import { App } from "..";
import icon from "./compressx-icon.png";
import screenshot from "./compressx-ss.png";
import profile from "./hieu.jpg";

export const compressx: App = {
  slug: "compressx",
  name: "CompressX",
  description: "Offline media compression",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "March 2024",
  published_at: "June 2024",
  framework: ["apple"],
  website: "https://compressx.app/",
  makers: [
    {
      name: "Hieu Dinh",
      twitter: "hieudinh_",
      profile_img: profile.src,
    }
  ],
  highlight:
    "I love Swift because it enables me to build my ideas quickly",
  interview: [
    {
      question: "What is CompressX?",
      answer: `CompressX is a powerful **offline media compression tool** that significantly reduces file sizes without compromising quality. It supports video, image, and GIF compression, offering up to 90% file size reduction. CompressX is especially useful for professionals working with large media files, as it allows for **batch compression** and supports multiple formats, including MP4, WebM, and WebP. The app&apos;s advanced features, such as **folder monitoring for automatic compression** and compatibility with transparent videos, make it a versatile and essential tool for boosting productivity in media management.`,
    },
    {
      question: "Who is behind CompressX? Tell us a little bit about yourself.",
      answer: `CompressX is developed by me, Hieu Dinh, a 28-year-old **software engineer** currently living in Singapore. I have a passion for building side projects and continually exploring new ideas, especially in the realm of **iOS and macOS app development**.`,
    },
    {
      question: "Why did you build CompressX? How did you come up with the idea?",
      answer: `In my team, we practice including a screen record demo with each pull/merge request, which helps code reviewers quickly grasp the changes being made. While this practice improves code quality, GitLab imposes a 10 MB upload limit for video files. My team typically uses FFmpeg for video compression, but the workflow, involving command adjustments for each video or running scripts, can be cumbersome. As someone not particularly inclined towards terminal-based tasks, I sought to streamline this process with CompressX, simplifying **video compression** significantly.`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, Users, MMR, whatever works for you!",
      answer: `CompressX currently boasts about **1,000 monthly active users**. The app has been downloaded over **6,000 times** and has generated approximately **$10,000 in revenue**. This growth is a testament to the app's utility and the demand for efficient media compression tools.`,
    },
    {
      question: "Why Swift? What made you choose it for your project?",
      answer: `As an iOS software engineer, I am well-versed in the Apple ecosystem, which allowed me to quickly adapt to **macOS app development**. Additionally, this is not my first macOS project; I have worked on several macOS apps before using Swift. These include:
      
- **Deeplink Buddy**: A personal deep-links manager.
- **Eyes Buddy**: An app to remind you to relax your eyes after a set period.
- **Dad Jokes**: A mobile app featuring a collection of dad jokes.
- **IconX**: Helps you change app icons to your preference.
- **ImageDiff**: Spots differences between two images.
      `,
    },
    {
      question:
        "What do you dislike about Swift? Would you choose a different framework if you had to start over?",
      answer: `I love Swift because it enables me to build my ideas quickly. However, Xcode, the integrated development environment (IDE) for Swift, is not as robust or user-friendly as Android Studio or VSCode. Many iOS developers, including myself, have a love-hate relationship with it. In the future, I hope we can use Swift to develop **cross-platform** applications effectively.`,
    },
  ],
};
