import { App } from "..";
import icon from "./catlists-icon.png";
import screenshot from "./catlists-ss.png";
import ronan from "./ronan.png";

export const catlists: App = {
  slug: "catlists",
  name: "Catlists",
  description: "Word-based, multiplayer party game",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "May 2024",
  published_at: "October 2024",
  framework: ["dotnetmaui"],
  website: "https://burkus.co.uk/",
  stores: {
    google_play:
      "https://play.google.com/store/apps/details?id=uk.co.burkus.catlists",
    app_store: "https://apps.apple.com/us/app/catlists/id6471727698",
    microsoft_store:
      "https://www.microsoft.com/store/r/9N4HJRRL377B",
  },
  makers: [
    {
      name: "Ronan Burke",
      twitter: "burkusdev",
      profile_img: ronan.src,
    },
  ],
  highlight:
    "I had a lightbulb moment...",
  interview: [
    {
      question: "What is Catlists?",
      answer: `Catlists is a word-based, multiplayer party game that doesn't require an internet connection. You can jump into a game with your friends just by pressing the "Play" button (no need for room codes or lobbies!). Catlists has endlessly generating, live rounds that have different topics, modifiers, and letters.

It is free-to-play on mobile with removable ads, and a low-priced paid game on desktop.
`,
    },
    {
      question: "Who is behind Catlists? Tell us a bit about yourself.",
      answer: `My name is Ronan Burke and I'm from Northern Ireland. I work full-time as a professional software engineer. I've been lucky enough to work on some amazing projects that help make an impact to people's lives in the UK, such as some of the COVID apps for Northern Ireland and apps for the police.

In my spare time, I enjoy working on random projects like little games, apps, websites, or game mods.`,
    },
    {
      question: "Why did you build Catlists?",
      answer: `I originally developed Catlists as a small prototype for Windows Phone! I've made various app/game prototypes over the years but most of my projects are unreleased. I decided to revisit Catlists and make it a full-fledged, production-ready game for multiple platforms. Due to its small scope, I was confident I could complete it to a high standard within a reasonable timeframe.`,
    },
    {
      question: "How did you come up with the idea?",
      answer: `I really liked how the game Wordament features endless game rounds with short intermissions. It's a word game too, but it requires internet to function. I was playing a lot of games like MineCraft/Binding of Isaac and I started to learn about how they used "seeds" to generate their levels. I had a lightbulb moment to use an algorithm to generate seeds in such a way that it could mimic Wordament-style rounds without needing any game servers!`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, users, MMR, whatever works for you!",
      answer: `Catlists has generated modest revenue so far, so retirement isn't on the horizon yet! However, by releasing this small-scale project I've gained invaluable knowledge in: development (both mobile and desktop), marketing, business, testing, and processes. I've been able to make mistakes in a safe and low-budget project. I've learned a lot that I can apply to future, more ambitious projects.`,
    },
    {
      question: "Why .NET MAUI? What made you choose it for this project?",
      answer: `I've used .NET for many years and I've been developing Xamarin.Forms/MAUI apps in my professional career for 6 years. By reusing those skills, I was able to deliver Catlists faster and to a higher quality than if I had used another framework.

The game is heavily UI-based, so although MAUI's main purpose isn't for making games, it certainly can be used for games like this. Fun fact: I run the /r/dotnetMAUI subreddit and have seen a few other people posting there about the games they have released using .NET MAUI.
`,
    },
    {
      question:
        "What do you dislike about .NET MAUI? Would you choose a different framework if you had to start over?",
      answer: `For a while, I was encountering some bugs in .NET MAUI that I wasn't able to work around. However, the MAUI team's monthly service patches leading up to Catlists' release fixed many of these issues. These patches have continued post-release, making the framework increasingly stable.

For my next game project, I'm planning on trying Godot with C#. That said, I do have a couple of project ideas in mind that I'll be returning to .NET MAUI for at a later stage!
`,
    },
  ],
};
