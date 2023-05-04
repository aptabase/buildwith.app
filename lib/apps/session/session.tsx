import { App } from "..";
import icon from "./session-icon.png";
import screenshot from "./session-ss.png";
import philipyoungg from "./philipyoungg.jpg";

export const session: App = {
  slug: "session",
  name: "Session",
  description: "Pomodoro Focus Timer",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "August 2022",
  published_at: "May 2023",
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
  highlight:
    "Session is actually my first iOS & macOS app. It becoming a business is purely accident.",
  interview: [
    {
      question: "What is Session?",
      answer: (
        <>
          <p>
            Session, an app that helps you to stay focused by blocking
            distracting web, apps, and Slack, and be more reflective of what
            you&apos;ve worked on.
          </p>
          <p>
            Session is designed for creative workers that need deep focus (like
            software engineer, designer, writer, video editor, etc).
          </p>
        </>
      ),
    },
    {
      question: "Who is behind Session? Tell us a little bit about yourself.",
      answer: (
        <p>
          I&apos;m Philip, a designer, and developer based in Jakarta,
          Indonesia. I&apos;ve been working on websites since 2016 and recently
          worked on native apps. Session is actually my first iOS & macOS app.
          It becoming a business is purely accident.
        </p>
      ),
    },
    {
      question: "Why did you build Session? How did you come up with the idea?",
      answer: (
        <>
          <p>
            There are two reasons why I made Session: First, It&apos;s to solve
            my own problem:
          </p>
          <p>
            I don&apos;t have a boss (work as a contractor), so I have to
            motivate myself every day by eliminating distracting websites and I
            want to know how long I&apos;ve worked on today.
          </p>
          <p>
            Second, I used to work on making web applications, wanted to learn
            and make a native application (Mac and iOS), so initially, it was a
            side project for me.
          </p>
        </>
      ),
    },
    {
      question:
        "Do you want to share some numbers? Downloads, Users, MMR, whatever works for you!",
      answer: (
        <p>
          About 6K downloads per month now, about 3K people used it daily on
          weekdays (half of that in weekend). I stopped sharing MRR about a year
          ago (because it&apos;s not giving any value?). Last time it was
          probably $7K or $8K in monthly revenue?
        </p>
      ),
    },
    {
      question: "Why Swift? What made you choose it for your project?",
      answer: <p>Purely accident! I want to learn make native apps.</p>,
    },
    {
      question:
        "What do you dislike about Swift? Would you choose a different framework if you had to start over?",
      answer: (
        <>
          <p>
            Xcode is shit. Upgrading XCode can break the whole app on specific
            iOS versions. Also I was unfamiliar with type safe language at the
            time and really hated it.
          </p>
          <p>
            Now I have love-hate relationship with this language because
            it&apos;s not as flexible as javascript (many coding pattern I used
            in JS is impossible on Swift), but love it for the safety.
          </p>
        </>
      ),
    },
  ],
};
