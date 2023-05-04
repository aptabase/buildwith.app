import { App } from "..";
import icon from "./session-icon.webp";
import screenshot from "./session-ss.png";
import philipyoungg from "./philipyoungg.jpg";

export const session: App = {
  slug: "session",
  name: "Session",
  description: "Pomodoro Focus Timer",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "August 2022",
  published_at: "April 2023",
  framework: "apple",
  website: "https://stayinsession.com/",
  stores: {
    app_store: "https://apps.apple.com/us/app/session-focus-timer/id1521432881",
    setapp: "https://go.setapp.com/stp298",
  },
  author: {
    name: "Philip Young",
    twitter: "philipyoungg",
    profile_img: philipyoungg.src,
  },
  highlight: "",
  interview: [
    {
      question: "What is Session?",
      answer: <p>...</p>,
    },
    {
      question: "Who is behind Session? Tell us a little bit about yourself.",
      answer: <p>...</p>,
    },
    {
      question: "Why did you build Session? How did you come up with the idea?",
      answer: <p>...</p>,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, Users, MMR, whatever works for you!",
      answer: <p>...</p>,
    },
    {
      question: "Why Swift? What made you choose it for your project?",
      answer: <p>...</p>,
    },
    {
      question:
        "What do you dislike about Swift? Would you choose a different framework if you had to start over?",
      answer: <p>...</p>,
    },
  ],
};
