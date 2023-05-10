import { App } from "..";
import icon from "./screenstudio-icon.png";
import screenshot from "./screenstudio-ss.png";
import pie6k from "./pie6k.jpg";
import AL8ATROS from "./AL8ATROS.jpg";
import GawinekMaciej from "./GawinekMaciej.jpg";

export const screenstudio: App = {
  slug: "screenstudio",
  name: "Screen Studio",
  description: "Beautiful screen recordings in minutes",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "December 2022",
  published_at: "May 2023",
  framework: "electron",
  website: "https://www.screen.studio",
  stores: {
    website: "https://www.screen.studio/download",
  },
  makers: [
    {
      name: "Adam Pietrasiak",
      twitter: "pie6k",
      profile_img: pie6k.src,
    },
    {
      name: "Dawid Wilewski",
      twitter: "AL8ATROS",
      profile_img: AL8ATROS.src,
    },
    {
      name: "Maciej Gawinek",
      twitter: "GawinekMaciej",
      profile_img: GawinekMaciej.src,
    },
  ],
  highlight:
    "Many people think apps made with Electron are ugly and slow. I'd say it's way easier in Electron to make slow and ugly apps than in, say, SwiftUI.",
  interview: [
    {
      question: "What is Screen Studio?",
      answer: `Screen Studio allows you to create beautiful screen recordings in minutes. It is also the first successful product I created in my life after multiple failed attempts`,
    },
    {
      question: "Who is behind Screen Studio? Tell us a bit about yourselves.",
      answer: `There are 3 of us. I'm Adam, founder of Screen Studio. I consider myself a coding artist. I also have a lot of design experience, which I consider quite a good mix. There's Maciej, who manages marketing, sales, and legal matters, and David, who takes care of our customer's success and keeps our roadmap and product direction under control. `,
    },
    {
      question:
        "Why did you build Screen Studio? How did you come up with the idea?",
      answer: `The story is probably too long to put into one point, but in general, after more failed attempts to create a "revolutionary product", I decided to go for something obvious and simple. I also wanted to be able to create MVP in months. Failing so many times allowed me to be quite realistic about it this time. It is just a screen recording for macOS with some funky features. We'll see if it'll be something different and bigger in the future. 

The idea sparked when I saw the Stripe profile on Twitter. It is full of beautiful, professionally made videos based on screen recordings. I had a simple thought, “How much of it can be automated without sacrificing quality,” then I started to look for the domain name as I always do, did write “screen,” and noticed “screen.studio” free to register, and I was all set.`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, users, MMR, whatever works for you!",
      answer: `As for May 2023, we have more than 5,000 licenses sold, with 80%+ of
the users who bought it still sticking to it one month later. Our
website has ~30k unique monthly visitors (stats are public - [https://plausible.io/screen.studio](https://plausible.io/screen.studio))
      `,
    },
    {
      question: "Why Electron? What made you choose it for this project?",
      answer: `I would prefer to code it in SwiftUI (PROBABLY!)

But

You pick the tool you have at hand. I have coded JavaScript (TypeScript) for 90% of my career, I know React well, I created several production Electron apps, and I had a lot of utilities and libraries created in my secret repos and folders.

On top of that, I had a few months of savings left.

I could either jump straight in and code with what I know or learn new frameworks and spend my savings to have some new knowledge.

I also believe that with proper layers of abstraction on top of the original Electron API, such as:
- declarative multi-window management
- type-safe main <> renderer communication with minimal boilerplate
- solid tooling and automated dev env

Electron is a really capable tool.

Many people think apps made with Electron are ugly and slow. I'd say it's way easier in Electron to make slow and ugly apps than in, say, SwiftUI. It doesn't mean you can't create an amazing app with great UX in Electron. It means nothing will hold your hand as much as e.g., XCode and UIKit.`,
    },
    {
      question:
        "What do you dislike about Electron? Would you choose a different framework if you had to start over?",
      answer: `Overall I like it, and I'd probably pick it again. I'd probably consider Tauri (again), but it doesn't seem to be 10x better to justify the cost and risk of migrating amazing internal libs I have and learning a new technology.

The main thing I don't like about Electron (though I bet it'd be the same with every framework) is that if something "deep" doesn't work, there's not much you can do. For example - macOS has system-level webcam portrait mode, but nope - it doesn't work with Electron, you get raw camera pictures. I did hit the wall with my head for too many hours about it and, in the end, was not able to solve it.

There are other minor things like the app size, but I don't think we had one user complaining about it.`,
    },
  ],
};
