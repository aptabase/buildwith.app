import { App } from "..";
import icon from "./worldflags-icon.png";
import screenshot from "./worldflags-ss.png";
import profile from "./eren.jpg";

export const worldflags: App = {
  slug: "worldflags",
  name: "Guess World Flags",
  description: "Enhance your knowledge of world flags and countries with an interactive mobile app.",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "June 2024",
  published_at: "June 2024",
  framework: ["apple"],
  website: "https://guessworldflags.b4a.app/",
  stores: {
    app_store: "https://apps.apple.com/us/app/guess-world-flags-quiz-games/id6472716628"
  },
  makers: [
    {
      name: "Eren",
      twitter: "iosdeveren",
      profile_img: profile.src,
    },
  ],
  highlight:
    "I saw an opportunity to fill a gap in the market with a well-designed, intuitive app, focused on world flags, tailored specifically for iOS users.",
  interview: [
    {
      question: "What is Guess World Flags?",
      answer: `Guess World Flags is an interactive and educational mobile app designed to help users learn and recognize flags from countries around the world. It offers engaging gameplay where users can test their knowledge by identifying flags, exploring diverse game modes, and embark on a global journey of flag discovery. With support for over 15 languages, Guess World Flags ensures inclusivity, making it accessible to players worldwide. It combines entertainment with learning, allowing users to continuously improve their knowledge of global geography through regular updates and new features.`,
    },
    {
      question: "Who is behind Guess World Flags? Tell us a little bit about yourself.",
      answer: `I&apos;m Eren, a developer based in Warsaw, Poland, with over 3 years of experience in mobile app development. I specialize in both cross-platform Flutter development and native iOS development, although I have a preference for native iOS. I enjoy creating apps that provide intuitive user experiences and seamless functionality.`,
    },
    {
      question: "Why did you build Guess World Flags? How did you come up with the idea?",
      answer: `I chose to develop Guess World Flags exclusively for native iOS because of my extensive experience and appreciation for the platform's capabilities. The idea stemmed from my passion for geography and the realization that existing apps focused on world flags often had poor UI/UX design and outdated styles.
      I aimed to fill this gap by creating a polished and intuitive experience that entertains and educates users about global geography. By leveraging the strengths of native iOS development, I sought to deliver a minimalist app that enhances user engagement and learning.`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, Users, MMR, whatever works for you!",
      answer: `Guess World Flags averages about 1.5K downloads per month.`,
    },
    {
      question: "Why Swift? What made you choose it for your project?",
      answer: `I chose iOS native development for Guess World Flags because of my deep familiarity with the platform and its ability to deliver a polished user experience. I saw an opportunity to fill a gap in the market with a well-designed, intuitive app, focused on world flags, tailored specifically for iOS users.`,
    },
    {
      question:
        "What do you dislike about Swift? Would you choose a different framework if you had to start over?",
      answer: `I&apos;m not particularly fan of UIKit for a few reasons. If I were to start over, I might opt for Flutter. Its cross-platform nature and the ability to write code once for both iOS and Android appeal to me. Flutter also offers a modern UI toolkit with customizable widgets, which could streamline development and provide a more consistent user experience across platforms.`,
    },
  ],
};
