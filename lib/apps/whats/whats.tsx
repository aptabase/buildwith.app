import { App } from "..";
import icon from "./whats-icon.png";
import screenshot from "./whats-ss.jpg";
import profile from "./fabian.jpg";

export const whats: App = {
  slug: "whats",
  name: "What's going on?",
  description: "A social diary for your friends' most precious moments - and yours",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "June 2024",
  published_at: "June 2024",
  framework: ["apple"],
  website: "https://goingon.app/",
  stores: {
    app_store: "https://apps.apple.com/us/app/whats-going-on-social-diary/id6471529194"
  },
  makers: [
    {
      name: "Fabian Gruß",
      twitter: "fabiangruss",
      profile_img: profile.src,
    },
  ],
  highlight:
    "That's when I set out to create an app that could help us all keep a tab on those we care about most.",
  interview: [
    {
      question: "What is What's going on?",
      answer: `It&apos;s a social diary for you and your closest friends, fully focused on privacy and getting you closer to your friends and family.
You can journal your own thoughts, your ideas and look back on a timeline of important events in your life. Include voice notes about that special person you just met, tag the place of that first kiss or add your snaps of that evening on the beach - all in a fun and meaningful way.`,
    },
    {
      question: "Who is behind What's going on? Tell us a little bit about yourself.",
      answer: `I&apos;m Fabian, 31 years old and I am from Germany. After studying computer science and working a bit in the automotive industry (BMW, VW), I founded my first startup, epap, in 2020.
After nearly selling the business last year, we had to sunset the company and therefore I dove into learning SwiftUI and, along the way, decided to share the journey of "What&apos;s going on?" online.`,
    },
    {
      question: "Why did you build What's going on? How did you come up with the idea?",
      answer: `The spark for “What&apos;s Going On?” came from a shift I noticed in my own life after university. The daily interactions with close friends gradually faded into occasional catch-ups.
I saw a need for something more personal than the sprawling networks of mainstream social media, where intimate life updates can easily get lost. That&apos;s when I set out to create an app that could help us all keep a tab on those we care about most.
`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, Users, MMR, whatever works for you!",
      answer: `Not really a lot to share, app is released since exactly two weeks now. Currently around 1k Downloads (many people were on the waitlist), and made around 250$.`,
    },
    {
      question: "Why Swift? What made you choose it for your project?",
      answer: `I had my fair share of developing apps with flutter and honestly really like it. But I always wanted to try out going native, and SwiftUI sounded like the best possible fit to do so. I've always felt being held a little bit back by Flutter because many of native and great APIs by Apple are not available by default. So far I really like it, it's easier to build really pretty apps.`,
    },
    {
      question:
        "What do you dislike about Swift? Would you choose a different framework if you had to start over?",
      answer: `I think most stuff I don&apos;t really like is about the syntax. Many things don&apos;t feel natural to me and it slows my coding down quite a bit. Feels a bit weird that async/await is quite new and not widely used but I think great changes have been made by the SwiftUI team that now find their way into most code examples.
So far quite happy with the framework.
I&apos;d go with Swift again I think. If I need the Android side of things, I&apos;d go Flutter.`,
    },
  ],
};
