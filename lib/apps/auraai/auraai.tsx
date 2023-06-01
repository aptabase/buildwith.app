import { App } from "..";
import icon from "./auraai-icon.png";
import screenshot from "./auraai-ss.png";
import iyia92 from "./iyia92.jpg";

export const auraai: App = {
  slug: "auraai",
  name: "Aura AI",
  description: "AI-based Image Generator",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "March 2023",
  published_at: "May 2023",
  framework: ["dotnetmaui"],
  website: "https://auraai.app/",
  stores: {
    google_play:
      "https://play.google.com/store/apps/details?id=com.iyia.auraai",
    app_store: "https://apps.apple.com/app/apple-store/id1665182107",
    microsoft_store:
      "https://apps.microsoft.com/store/detail/aura-ai-shaping-your-ideas/9PPSXLCK5TV6",
  },
  makers: [
    {
      name: "Ivan",
      twitter: "iyia92",
      profile_img: iyia92.src,
    },
  ],
  highlight:
    "The idea struck me when I realized how powerful the combination of AI, art, and creativity could be.",
  interview: [
    {
      question: "What is Aura AI?",
      answer: `Aura AI is an innovative app that utilizes artificial intelligence to transform your textual prompts into stunning visual artworks. It offers an entirely new way to express your creativity, whether for fun, work, or education.`,
    },
    {
      question: "Who is behind Aura AI? Tell us a bit about yourself.",
      answer: `I'm a solo entrepreneur who's been officially in the game for about 3 years, but I believe I've been one for much longer. I've always had a passion for technology, spending my teenage Saturday nights installing Linux distributions and creating Chrome extensions that I would be the only one to use. I started attending local Microsoft offices where I learned to develop apps for Windows Phone, and I haven't stopped since.`,
    },
    {
      question: "Why did you build Aura AI? How did you come up with the idea?",
      answer: `I developed Aura AI because I wanted to create a way for people to interact with AI in a more creative and personal manner. The idea struck me when I realized how powerful the combination of AI, art, and creativity could be.`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, users, MMR, whatever works for you!",
      answer: `The app is still relatively new, so while I don't have specific numbers to share at the moment, I'm optimistic about the growth and potential of Aura AI and look forward to updating these data soon.`,
    },
    {
      question: "Why .NET MAUI? What made you choose it for this project?",
      answer: `.NET MAUI is a cross-platform framework that allows for the development of apps across various operating systems like Android, iOS, macOS, and Windows using a single codebase. I chose it for my project as it allowed me to reach a wide range of users without needing to write specific code for each platform. Moreover, having familiarity and experience with C# and .NET made it a logical choice for me.`,
    },
    {
      question:
        "What do you dislike about .NET MAUI? Would you choose a different framework if you had to start over?",
      answer: `I waited for over a year to start my first cross-platform project with MAUI, due to known bugs, but I still spend too much time dealing with various issues that are not my fault. So, the main issue is stability.`,
    },
  ],
};
