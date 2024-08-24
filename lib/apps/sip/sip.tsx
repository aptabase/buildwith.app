import { App } from "..";
import icon from "./sip-icon.png";
import screenshot from "./sip-ss.jpg";
import profile1 from "./profile1.jpg";
import profile2 from "./profile2.jpg";

export const sip: App = {
  slug: "sip",
  name: "Sip",
  description: "The right color every time",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "August 2012",
  published_at: "August 2024",
  framework: ["apple"],
  website: "https://sipapp.io/",
  stores: {
    setapp: "https://go.setapp.com/stp14"
  },
  makers: [
    {
      name: "Rui Aureliano",
      twitter: "ruiaureliano",
      profile_img: profile1.src,
    },
    {
      name: "André Gonçalves",
      twitter: "andre_goncalves",
      profile_img: profile2.src,
    }
  ],
  highlight:
    "Brothers on a mission to create apps that make life easier",
  interview: [
    {
      question: "What is Sip?",
      answer: `Sip is a modern color picker that brings ease to color organization & team collaboration.`,
    },
    {
      question: "Who is behind Sip? Tell us a little bit about yourself.",
      answer: `We're André & Rui, brothers on a mission to create apps that make life easier.

Together, we built Sip, a better color picker tool for professionals everywhere.`,
    },
    {
      question: "Why did you build Sip? How did you come up with the idea?",
      answer: `The idea was to facilitate my work when I started working with Apple code.

I thought the color structure was complicated (since components are in a range of 0 to 1, instead of 0 to 255), so I decided to build Sip with the help of my brother.

I shared the app with some friends and after feedback and a few changes, we decided to release it on the Mac App Store on 2012. The app shifted a lot since then and it's quite different now.`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, Users, MMR, whatever works for you!",
      answer: `We have two distribution channels now:

- Setapp: ~6K Users 
- Paddle: ~4K Paying Users`,
    },
    {
      question:
        "Why not App Store?",
      answer: `We started with Mac App Store, it's a nice place to sell apps.
      
But since this is a developer app, we had some requests, like accessing other apps, and exchanging data between them (colors, etc), and at some point, it was no longer doable.

Apple takes privacy seriously, and it was painful to address all the issues. So we decided to distribute outside.`,
    },
    {
      question: "Why Swift? What made you choose it for your project?",
      answer: `The first version of Sip was released on the Mac AppStore in 2012, it started as a 100% Objective-C project.
      
After 12 years it changed a bit and we started moving pieces to Swift.

It's now a 100% Swift project with almost no 3rd party dependencies (only crash reports and analytics).`,
    },
    {
      question:
        "What do you dislike about Swift? Would you choose a different framework if you had to start over?",
      answer: `I like Swift, I moved from Objective-C, which was way more complicated to understand.`,
    },
  ],
};
