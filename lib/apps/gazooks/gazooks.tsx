import { App } from "..";
import icon from "./gazooks-logo.png";
import screenshot from "./gazooks-ss.png";
import profile from "./profile.jpg";

export const gazooks: App = {
  slug: "gazooks",
  name: "Gazooks",
  description: "Word-dueling party pandemonium",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "July 2024",
  published_at: "August 2024",
  framework: ["reactnative"],
  website: "https://gazooks.app",
  stores: {
    google_play: "https://play.google.com/store/apps/details?id=com.gazooks.app",
    app_store: "https://apps.apple.com/app/gazooks/id6478569474",
  },
  makers: [
    {
      name: "Freeman Jiang",
      twitter: "freemanjiangg",
      profile_img: profile.src,
    },
  ],
  highlight:
    "We really wanted to make a portable and versatile party game",
  interview: [
    {
      question: "What is Gazooks?",
      answer:
        "Gazooks! is an in-person, mobile party game built for quick thinking and chaos. It&apos;s a word association game inspired loosely by the card game Anomia, but now you can play it on your phone, anywhere. It's an intense game built for game nights, parties, family gatherings, or anywhere you can gather your crew and pull out your phones.",
    },
    {
      question: "Who is behind Gazooks? Tell us a bit about yourself.",
      answer: `I built Gazooks! with my roommate Jason from Waterloo. We are both students at Waterloo — he&apos;s studying software engineering, and I&apos;m studying computer science. 

We&apos;re both engineers and love hacking on the project together. It&apos;s especially fun to add backdoors to troll our friends. In the past we&apos;ve worked on hackathon projects and were colleagues in Japan on an internship together.`,
    },
    {
      question:
        "Why did you build Gazooks? How did you come up with the idea?",
      answer: `We built Gazooks! because we both enjoyed playing Anomia, but couldn't always play it because you had to bring a big box of decks around and we often found ourselves bored waiting in line or waiting for food. We also wanted to play with other topics and create custom decks.

We really wanted to make a portable and versatile party game and thought hey, phones are roughly card-shaped, programmable, and everyone has them on hand. We want Gazooks! to be the most accessible, easy to pick up party game.`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, users, MMR, whatever works for you!",
      answer: `Gazooks! is just getting started. Across iOS and Android, we crossed 1,200 downloads last week! We have around 100 weekly active users, spiking mainly on weekend nights. 

We're pleasantly surprised that most downloads come directly from word of mouth and from some guerrilla marketing efforts (including opening the app in Apple Stores + putting up stickers in SF).`,
    },
    {
      question: "What made you choose React Native for this app?",
      answer: `Working with React Native was a no-brainer because Jason and I both have backgrounds as web developers, so we know TypeScript and React pretty well. The infrastructure and tooling that the Expo team has built around React Native is truly impressive and props to them for making it so easy to launch an app. Plus, React Native makes it easy to integrate native APIs for things like camera access and native modal views.

Cross-platform is a huge plus, so that absolutely anyone can use their phone to play. So far, 90% of our users are using iOS, but this could change in the future. We love the speed we're able to ship with using React Native.`,
    },
    {
      question:
        "What do you dislike about React Native? Would you choose a different framework if you had to start over?",
      answer: `One slightly annoying thing is that in React Native, you have to apply text styles directly to the element itself. Applying them to the parent view doesn't do anything.

Still, I would recommend React Native for most developers trying to make a mobile app. Coming from the web, there is just such a huge time saving and the ecosystem has grown a lot in the past few years.`,
    },
  ],
};
