import { App } from "..";
import Bartozo from "./Bartozo_.png";
import icon from "./lifeprogress-icon.png";
import screenshot from "./lifeprogress-ss.jpeg";

export const lifeprogress: App = {
  slug: "lifeprogress",
  name: "Life Progress",
  description: "Life Goals Tracker",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  website: "https://twitter.com/LifeProgressApp",
  initial_release: "October 2022",
  published_at: "June 2023",
  framework: ["android", "apple"],
  stores: {
    google_play:
      "https://play.google.com/store/apps/details?id=com.bartozo.lifeprogress",
    app_store:
      "https://apps.apple.com/us/app/life-progress-calendar/id6447311106",
  },
  makers: [
    {
      name: "Bartosz",
      twitter: "Bartozo_",
      profile_img: Bartozo.src,
    },
  ],
  highlight:
    "The native approach allows me to leverage the unique UI/UX features of each platform, ensuring the best possible user experience.",
  interview: [
    {
      question: "What is Life Progress?",
      answer: `Life Progress is an app for your whole life! It is a powerful tool designed to help you track, plan, and achieve your most important life goals. With its comprehensive features and user-friendly interface, Life Progress enables you to maximize your life journey and start living your best life today.
      
One of the key features of Life Progress is the Life Calendar system, which allows you to track your life progress conveniently. The Life Calendar consists of rows representing 52 weeks each, forming a year. Each color on the calendar represents a different stage in your life, providing a visual representation of your journey.
      
By utilizing the life calendar and goal tracking system, you can set specific goals and monitor your progress over time. Whether it's personal, professional, or any other area of life, Life Progress provides a centralized platform to help you stay motivated and focused on achieving your aspirations.

With everything you need in one convenient app, Life Progress is your companion for planning, tracking, and maximizing your life journey.`,
    },
    {
      question: "Who is behind Life Progress? Tell us a bit about yourself.",
      answer: `Hey there! I'm Bartosz Król, the mastermind behind Life Progress. With over 5 years of industry experience, I'm a passionate mobile application developer who loves diving into coding and making side projects come to life. It's not just my job; it's my hobby 💯🚀
      
In addition to my industry experience, I also hold a master's degree, which has equipped me with a strong foundation in IT and innovative problem-solving techniques. 
      
When I'm not immersed in coding, I like to maintain an active lifestyle. You'll often find me at the gym, pushing my limits and striving for personal growth. I also dedicate my free time to learning new things, and currently, I'm fascinated by the Japanese language.`,
    },
    {
      question:
        "Why did you build Life Progress? How did you come up with the idea?",
      answer: `I built Life Progress with a strong motivation and a unique idea in mind. It all started back in the summer of 2022 when I was browsing the App Store, as I often do to discover apps created by different indie developers. During that time, I came across an incredibly interesting app called "Life Progress - Life Calendar" developed by Tien Pham. Intrigued by its concept, I downloaded it on my iPad and was absolutely stunned by its cool life calendar functionality.
      
Inspired by this app, I immediately wanted to have a similar experience on my Android phone as well. I reached out to Tien Pham and asked if I could build a similar app and make it open source. To my delight, he agreed, and that's how I initially started with the "basic version" of my app. Over time, I continuously improved it by adding numerous new features and enhancing the overall user experience.`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, users, MMR, whatever works for you!",
      answer: `
Android:

- Over 2K downloads
- Installed audience: 958 users
- User ratings: 33 with an average rating of 4.515
- Most of the downloads were from India followed by USA and France
- The app size is very small, only 12.5 MB
      
iOS:
- Impressions: 4.6K
- Downloads: 170
- Earnings: $5.25 (my very first as an indie developer)
- Top countries for downloads: USA, Poland, UK
- iPad downloads: 5.3% of users
- The app size is also super small: 6 MB`,
    },
    {
      question:
        "What made you choose the native stack Swift and Kotlin for this app?",
      answer: `When it came to building the app, I opted for native technologies. For the Android version, I utilized Kotlin and Android Studio, while the iOS version was created using Swift and SwiftUI with the TCA (The Composable Architecture) framework.
      
There were two primary reasons for choosing native solutions. Firstly, at that time, I had a contract that restricted the use of Flutter for any paid or non-paid projects. Secondly, I have always been a huge fan of native solutions due to their superior performance and the ability to deliver a platform-specific user experience. The native approach allows me to leverage the unique UI/UX features of each platform, ensuring the best possible user experience. Additionally, native development allowed me to implement cool features such as widgets, which wouldn't have been possible with a cross-platform framework like Flutter.`,
    },
    {
      question:
        "What do you dislike about building the app with the native stack? Would you choose a different framework if you had to start over?",
      answer: `When it comes to building an app with the native stack, there are a few aspects that I find less favorable. Here's my perspective on the matter:
      
**Maintaining two different codebases:** The biggest drawback of using the native stack is the need to maintain two separate codebases for each platform. While this approach provides more flexibility, it also requires additional time and effort during development to keep both codebases in sync.
      
**Perception of complexity:** Some people may consider using the native stack as harder because it involves learning two different languages and frameworks. However, personally, I find Kotlin and Swift, the languages for Android and iOS respectively, to be beautiful and relatively easy to learn. They also share similarities, making it easier to transfer knowledge between the two.`,
    },
  ],
};
