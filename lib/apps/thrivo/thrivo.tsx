import { App } from "..";
import icon from "./thrivo-icon.jpg";
import screenshot from "./thrivo-ss.jpg";
import profile from "./jonas.jpg";

export const thrivo: App = {
  slug: "thrivo",
  name: "Thrivo",
  description: "Manage your schedule, tasks, and habits with ease, all in one intuitive platform.",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "March 2024",
  published_at: "June 2024",
  framework: ["apple"],
  website: "",
  stores: {
    app_store: "https://apps.apple.com/no/app/thrivo-daily-schedule/id6477538169"
  },
  makers: [
    {
      name: "Jonas Hendel",
      twitter: "jonashendel",
      profile_img: profile.src,
    },
  ],
  highlight:
    "It all started as a routine manager. I began building the day planner around this idea, and the other features naturally fell into place.",
  interview: [
    {
      question: "What is Thrivo?",
      answer: `Thrivo is a day planner designed for quick planning and easy editing. Instead of typing out your plans, you can create events using your pre-set activities, routines, or tasks. Editing your schedule is super easy with a drag-and-drop feature. Thrivo also provides analytics on how you planned and spent your time. It syncs with your calendar and reminders, and has a focus mode to help you stay distraction-free.`,
    },
    {
      question: "Who is behind Thrivo? Tell us a little bit about yourself.",
      answer: `I&apos;m Jonas, a 19-year-old student living in Norway and Germany. I'm currently studying Computer Science at the Technical University of Munich and I quit my part-time job as a software developer to create Thrivo.`,
    },
    {
      question: "Why did you build Thrivo? How did you come up with the idea?",
      answer: `I built Thrivo to improve my own productivity and get more organised. I couldn't find a day planner that I liked because they were often clunky and filled with unnecessary features. Plus, I wanted to learn SwiftUI.
It all started as a routine manager. I began building the day planner around this idea, and the other features naturally fell into place. I never wrote down any concept or plan for the app, I just used the app myself, figured out what was missing or what would be a nice addition and implemented it.`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, Users, MMR, whatever works for you!",
      answer: `Thrivo launched about three months ago and has had 1,510 downloads since then and so far, it has made $617. Day Planners are a highly competitive niche so I am ranking pretty low in the AppStore so I have to do all my user acquisition using other channels like TikTok and Reddit.`,
    },
    {
      question: "Why Swift? What made you choose it for your project?",
      answer: `I chose Swift because it makes it really easy to deliver a polished product. Especially now that SwiftUI is relatively good you can create new features and apps so quickly.`,
    },
    {
      question:
        "What do you dislike about Swift? Would you choose a different framework if you had to start over?",
      answer: `Sometimes in SwiftUI, you have to go back to UIKit for more advanced features, which can be annoying. Despite this, I would choose SwiftUI again unless there was a strong need to support Android users. In my experience, iPhone users tend to spend more money, and I find React and Flutter apps less attractive than native apps.`,
    },
  ],
};
