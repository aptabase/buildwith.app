import { App } from "..";
import icon from "./dribble-icon.png";
import screenshot from "./dribble-ss.jpg";
import profileCasey from "./casey.jpg";
import profileTaylor from "./taylor.jpg";

export const dribble: App = {
  slug: "dribble",
  name: "Dribble Game",
  description: "Prove your basketball knowledge in a variety of fun and challenging trivia games",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "June 2024",
  published_at: "June 2024",
  framework: ["flutter"],
  website: "https://dribblegame.com/",
  stores: {
    google_play:
      "https://play.google.com/store/apps/details?id=com.dribble_game_mobile",
    app_store:
      "https://apps.apple.com/us/app/dribble-hoops-sports-trivia/id6446917146",
  },
  makers: [
    {
      name: "Casey Rogers",
      twitter: "caseycrogers",
      profile_img: profileCasey.src,
    },
    {
      name: "Taylor Stein",
      twitter: "taylor_stein",
      profile_img: profileTaylor.src,
    }
  ],
  highlight:
    "Trying Flutter was the first time I felt like I was trying a framework that made sense and wasn't full of historical baggage that made no sense to a newcomer.",
  interview: [
    {
      question: "What is Dribble Game?",
      answer: `Dribble Game is an NBA trivia app that test&apos;s fans player and team knowledge with 5 exciting games! Think "The NYT Games of Sports Trivia".
      `,
    },
    {
      question: "Who is behind Dribble Game? Tell us a bit about yourself.",
      answer: `Dribble Game is run by myself (mobile engineer/product manager) and Taylor Stein, a data scientist and NBA super fan. Taylor built the first web-based MVP of Dribble because he wanted to make an NBA centric Wordle inspired game.
      
I&apos;ve tried to get into frontend dev repeatedly over the past decade (from Android Native to React) and every time I found the learning curve and dev experience to be so poor that I decided not to go into frontend. Trying Flutter was the first time I felt like I was trying a framework that made sense and wasn&apos;t full of historical baggage that made no sense to a newcomer.`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, users, MMR, whatever works for you!",
      answer: `Dribble reached 10k daily active users and #23 on the App Store for trivia games!`,
    },
    {
      question: "Why Flutter? What made you choose it for this project?",
      answer: `Flutter provided the fastest dev velocity of all the options. I especially find it to have FAR better dev experience and code velocity (controlling for years of experience) than React Native. As someone new to frontend dev (before product management and then backend dev) I found React Native to have a far more painful learning curve.
Flutter also makes it extremely easy to highly customize and animate your UI elements which is especially valuable for games!
      `,
    },
    {
      question:
        "What do you dislike about Flutter? Would you choose a different framework if you had to start over?",
      answer: `The ecosystem is still very young and comparatively small. This comes with a lot of downsides from bad client SDKs (eg Firebase's Flutter clients are all sub par) to a limited and comparatively low quality package ecosystem.

Despite all of the above, I would use Flutter again because the dev experience and code velocity are just miles better than any other cross platform solution. I think other solutions are burdened with way too much historical baggage to be good choices anymore-React Native being the most dominant example. A Javascript/HTML/CSS/JSX frontend stack is far more painful to work with than one using a single modern language.

React native, or literal native, feels a lot more, well, "native", to users. This is especially relevant on iOS where native-feel is associated with quality. This turns a lot of founders away from Flutter, though I&apos;d be curious to see if this is something ordinary users respond negatively to as well, or if its just something developers notice.`,
    },
  ],
};
