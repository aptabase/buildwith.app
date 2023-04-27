import { App } from "..";
import icon from "./habitkit-icon.png";
import screenshot from "./habitkit-ss.png";
import SebastianRoehl from "./SebastianRoehl.jpg";

export const habitkit: App = {
  slug: "habitkit",
  name: "HabitKit",
  description: "Consistency Tracker",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "November 2022",
  published_at: "April 2023",
  framework: "flutter",
  website: "https://www.habitkit.app/",
  stores: {
    google_play:
      "https://play.google.com/store/apps/details?id=com.roehl.habitkit",
    app_store:
      "https://apps.apple.com/us/app/habit-tracker-habitkit/id6443918070",
  },
  author: {
    name: "Sebastian Röhl",
    twitter: "SebastianRoehl",
    profile_img: SebastianRoehl.src,
  },
  interview: [
    {
      question: "What is HabitKit?",
      answer: (
        <p>
          HabitKit is a habit tracking app designed to help users form new
          habits or break old ones. It allows users to track their progress
          using beautiful tile-based grid charts on a customizable dashboard.
          The app also offers features like habit creation, a calendar for
          managing past completions, an archive for temporarily removing habits
          from the dashboard, and import/export functionality for data backup.
          Additionally, HabitKit is privacy-focused, as it does not require
          sign-in and keeps all data on the user&apos;s phone without using any
          external servers or cloud services.
        </p>
      ),
    },
    {
      question: "Who is behind HabitKit? Tell us a little bit about yourself.",
      answer: (
        <p>
          I&apos;m Sebastian, 30 years old and from Germany. After finishing
          university, I spent three years working as a Software Engineer. But I
          always had this dream of starting a small company to create and
          release my very own apps. So, I took a leap of faith, quit my job for
          a year, and started building those apps. My first one, a workout
          tracking app called Liftbear, didn&apos;t quite take off, but I
          learned a ton in the process. Then came my second app, HabitKit, which
          turned out to be way more popular! I&apos;m super excited with how
          it&apos;s doing right now.
        </p>
      ),
    },
    {
      question:
        "Why did you build HabitKit? How did you come up with the idea?",
      answer: (
        <p>
          I came up with HabitKit because I wanted to improve my life and create
          some healthy habits. So, I got to work on the app and while building
          it I began tracking my progress in various aspects of my life, like
          weightlifting, running, reading, and a bunch of mental health-related
          activities. The cool grid-based visualization of my progress in the
          app totally made a difference for me, and I just knew I had to share
          this opportunity with others.
        </p>
      ),
    },
    {
      question:
        "Do you want to share some numbers? Downloads, Users, MMR, whatever works for you!",
      answer: (
        <p>
          So far, I&apos;ve managed to publish two apps which have brought in a
          total revenue of ~$6k. With a monthly recurring revenue of ~$500,
          I&apos;ve seen more than 12k app downloads, showing that things are
          moving in the right direction. Plus, I&apos;ve managed to build a
          community on Twitter, with 3.7k followers and counting!
        </p>
      ),
    },
    {
      question: "Why Flutter? What made you choose it for your project?",
      answer: (
        <p>
          Since my project ideas centered around mobile user experiences, I
          naturally gravitated towards Flutter. I had a blast with the developer
          experience, and it let me quickly build apps for both iOS and Android
          using just one codebase. Plus, the package ecosystem is super solid,
          and there are plenty of great learning resources out there. Without a
          doubt, I&apos;d pick Flutter again for any future mobile app projects.
        </p>
      ),
    },
    {
      question:
        "What do you dislike about Flutter? Would you choose a different framework if you had to start over?",
      answer: (
        <p>
          As I stated before, I would definitely choose Flutter over another
          framework again. I rarely encountered problems while developing with
          it. I experienced some kind of lag and animation jank on iOS devices,
          but there were some great resources available on how to counter this
          problems. I would wish that the Flutter team would focus their ongoing
          efforts on the mobile platforms and not spread out too much (like
          supporting web for example). But all in all, it&apos;s a great
          framework!
        </p>
      ),
    },
  ],
};
