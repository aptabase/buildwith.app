import { App } from "..";
import icon from "./snapx-icon.png";
import screenshot from "./snapx-ss.png";
import brycen from "./brycen.png";

export const snapx: App = {
  slug: "snapx",
  name: "snapx",
  description: "Cross-platform screenshot tool",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "under development",
  published_at: "n/a",
  framework: ["dotnetmaui"],
  website: "https://github.com/SnapXL/SnapX",
  stores: {
    // google_play:
    //   "",
    // app_store: "",
    // microsoft_store:
    //   "",
  },
  makers: [
    {
      name: "Brycen Granville",
      twitter: "BrycensRanch",
      profile_img: brycen.src,
    },
  ],
  highlight:
    "I wanted to do the so called impossible..",
  interview: [
    {
      question: "What is SnapX?",
      answer: `Cross-platform screenshot tool that handles images, text, and video (fork of ShareX)`,
    },
    {
      question: "Who is behind SnapX? Tell us a bit about yourself.",
      answer: `My name is Brycen Granville and I am a young software developer from Florida with a passion for undertaking problems that most have deemed to be difficult.`,
    },
    {
      question: "Why did you build SnapX?",
      answer: `I enjoyed using ShareX on Windows. I've never liked building things like todo apps. My love comes from a real problem being solved.`,
    },
    {
      question: "How did you come up with the idea?",
      answer: `I was talking on the ShareX Discord and looking at all the previous requests all ending with saying that it is either impossible or you can try and do it yourself. I simply wanted to do the so called impossible.`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, users, MMR, whatever works for you!",
      answer: `My repository has 300+ stars since it's creation 1 year ago. As for users, I've advised them to not use it yet, so, all my active users are enthusiastic testers. Since adding Aptabase user telemetry 3 or 4 weeks ago, I've observed 368 events.`,
    },
    {
      question: "Why .NET MAUI? What made you choose it for this project?",
      answer: `For the learning experience. I had been using Xamarin.Forms for a while and wanted to try out the new hotness.`,
    },
    {
      question:
        "What do you dislike about .NET MAUI? Would you choose a different framework if you had to start over?",
      answer: `Nothing much. I would pick it again, was a pretty decent learning experience.`,
    },
  ],
};
