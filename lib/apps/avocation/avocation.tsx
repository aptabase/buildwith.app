import { App } from "..";
import icon from "./avocation-icon.png";
import screenshot from "./avocation-ss.png";
import davidjoech from "./davidjoech.jpg";

export const avocation: App = {
  slug: "avocation",
  name: "Avocation",
  description: "Habit Tracker App",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "December 2019",
  published_at: "July 2023",
  framework: ["reactnative"],
  website: "https://avocation.app/",
  stores: {
    google_play:
      "https://play.google.com/store/apps/details?id=app.avocation.avocation",
    app_store: "https://apps.apple.com/app/avocation/id1479581895",
  },
  makers: [
    {
      name: "David Jöch",
      twitter: "davidjoech",
      profile_img: davidjoech.src,
    },
  ],
  highlight:
    "After I lost the streak, I quickly stopped the habit too. We thought there must be a better way to keep people motivated and thats why we started creating our own app.",
  interview: [
    {
      question: "What is Avocation?",
      answer:
        "With Avocation you can track your habits in a fun and motivating way. As you complete your habits day-by-day, a plant will grow with you. If you forget your habits the plant will not grow. The plant visualizes your personal growth and should be a gentle reminder to work on your habits everyday.",
    },
    {
      question: "Who is behind Avocation? Tell us a bit about yourself.",
      answer: `I created Avocation together with my girlfriend Daria. She is the creative genius behind the app. While I developed the app and helped with the UI/UX design, she was the one doing all the beautiful illustrations, animations and colors.
      
Together we make a pretty good team, so after Avocation started to grow we decided to found our company Mindvoll, where we develop different apps which assist people in their personal growth.`,
    },
    {
      question:
        "Why did you build Avocation? How did you come up with the idea?",
      answer: `We had the idea for Avocation after getting obsessed with the science behind habit formation. Books like "Atomic Habits" or "The Power of Habit" inspired us to fix our own routines, and we looked for a way to keep track of all the habits we wanted to develop.
      
However most apps were either super boring or they tried to motivate people using streaks. The streaks put a lot of pressure on me and I noticed that I kept doing the habits only for the streaks which I didn't want to lose, instead of the original reasons I wanted to start the habits for. After I lost the streak, I quickly stopped the habit too. We thought there must be a better way to keep people motivated and thats why we started creating our own app.`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, users, MMR, whatever works for you!",
      answer: `Avocation is close to 2 million downloads across iOS and Android, and generates enough revenue that we can live from it.
      
The growth was quite impressive in 2020 (since a lot of people had a lot of time during COVID), and has slowed down afterwards. Nowadays we have quite a constant number of downloads and revenue, which helps us work on updates as well as new app ideas we currently have.`,
    },
    {
      question: "What made you choose React Native for this app?",
      answer: `The initial reason for me to pick React Native was quite simple: I already knew React very well. I was working as a web-developer for several years already and specialized in developing SPA's with React. So I could use all my know-how that I collected over the last years which helped me to focus on the product instead of learning new programming languages.
      
Also being such a small team makes it very hard to support both iOS and Android, and we wanted to do (since Daria used and Android device and I used an iPhone). In hindsight this was a great decision, as both platforms equal to around 50% of our revenue nowadays.

With our second app "Moodmonk" I gave native iOS development with Swift and SwiftUI a try. While I really enjoyed the developer experience, I was much slower during development and had to refactor the app several times as I was just learning the tools. During our marketing campaigns on Reddit and Twitter, we lost a lot of potential users since we only offered the app on iOS, which was another reason I stopped doing native development.

Currently developing our third app, with React Native again, and I am very happy with the decision so far. React Native - especially Expo - has improved massively over the last 4 years, when I started with Avocation. It's much easier nowadays to develop great apps with React Native!`,
    },
    {
      question:
        "What do you dislike about React Native? Would you choose a different framework if you had to start over?",
      answer: `Upgrading to new versions of React Native was often very painful work. Over the last 4 years a lot has changed in React Native and that meant that upgrades required a lot of time. I am still not done with upgrading Avocation to the latest version of React Native.
      
Also I got very careful with choosing 3rd party packages in my apps, as I have seen a ton of them being abandoned over the last years. I am very happy with the work Expo is doing here, their packages are usually very well maintained. Upgrading to new React Native versions has become much easier with Expo as well, so in my opinion the whole platform is going in the right direction.

For this reason and the reasons I mentioned in the previous question, I would definitely pick React Native again for any future project I will be working on!`,
    },
  ],
};
