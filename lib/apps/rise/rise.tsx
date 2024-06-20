import { App } from "..";
import icon from "./rise-icon.png";
import screenshot from "./rise-ss.jpg";
import profile1 from "./desmond.jpg";
import profile2 from "./peter.jpg";

export const rise: App = {
  slug: "rise",
  name: "Rise",
  description: "Get your sh*t together",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "March 2024",
  published_at: "June 2024",
  framework: ["apple"],
  website: "https://www.riseapp.life/",
  stores: {
    app_store: "https://apps.apple.com/us/app/rise-life-reset-in-66-days/id6478942469"
  },
  makers: [
    {
      name: "Desmond",
      twitter: "desmondhth",
      profile_img: profile1.src,
    },
    {
      name: "Peter",
      twitter: "himtkw",
      profile_img: profile2.src,
    },
  ],
  highlight:
    "I have myself used this program before to help me get my shit together from rock bottom last year",
  interview: [
    {
      question: "What is Rise?",
      answer: `Rise is a habit app that gives you a 66 days life reset program.`,
    },
    {
      question: "Who is behind Rise? Tell us a little bit about yourself.",
      answer: `Desmond and Peter, we&apos;re indie hackers from Hong Kong who just love building cool products`,
    },
    {
      question: "Why did you build Rise? How did you come up with the idea?",
      answer: `Because we see a rising need of self-improvement solution, and I have myself used this program before to help me get my shit together from rock bottom last year, so I believe this can help more people.`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, Users, MMR, whatever works for you!",
      answer: `5k+ iOS download, $1k/mo now.`,
    },
    {
      question: "Why Swift? What made you choose it for your project?",
      answer: `For speedy development, SwiftUI have great UI and animation component. Also we heard that iPhone users are more willing to pay than Android, so we decided to not do Android in the beginning (which allows us to build even faster).`,
    },
    {
      question:
        "What do you dislike about Swift? Would you choose a different framework if you had to start over?",
      answer: `Not much, I think Swift have concise syntax, along with ChatGPT you can develop UI quickly. It would still be my go-to choice.`,
    },
  ],
};
