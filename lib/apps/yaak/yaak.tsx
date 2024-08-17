import { App } from "..";
import icon from "./yaak-logo.png";
import screenshot from "./yaak-ss.png";
import profile from "./profile.jpg";

export const yaak: App = {
  slug: "yaak",
  name: "Yaak",
  description: "Interact with REST, GraphQL and gRPC in a simple yet powerful desktop application.",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "January 2024",
  published_at: "August 2024",
  framework: ["tauri"],
  website: "https://yaak.app",
  makers: [
    {
      name: "Greg Schier",
      twitter: "GregorySchier",
      profile_img: profile.src,
    },
  ],
  highlight:
    "My favorite thing is having a need for something, looking at what exists in the market, then trying to make something better.",
  interview: [
    {
      question: "What is Yaak?",
      answer: `Yaak is an app for interacting with REST, GraphQL, and gRPC APIs. Create and organize requests, configure authentication, reuse values via variables, and see visual response previews for images, PDFs, and more!`,
    },
    {
      question: "Who is behind Yaak? Tell us a bit about yourself.",
      answer: `I'm Greg Schier, a Canadian software developer with an interest in developer tools. I love combining programming and design to make intuitive and fun products.
      `,
    },
    {
      question:
        "Why did you build Yaak? How did you come up with the idea?",
      answer: `My favorite thing is having a need for something, looking at what exists in the market, then trying to make something better. For Yaak, I needed a tool to interact with the APIs I was building at work. Postman (the defacto choice) was popular, but I found it confusingly cluttered with features I didn't need (the sign of a really old application).

Yaak's goal is to be a minimal API client that's fast to get in and out of. This means it launches quickly (thanks Tauri), remains usable at small sizes, and is navigable from the keyboard. I'm also just finishing up a plugin system to allow users to extend and customize the experience to their use case.`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, users, MMR, whatever works for you!",
      answer: `Since Yaak's launch in January, 2024, it's been installed 11,369 times and has around 350 daily active users. I quit my job in March to pursue Yaak full-time but haven't yet implemented a business model. The plan is to launch a paid sync system in the coming months to allow individuals and teams to collaborate.`,
    },
    {
      question: "Why Tauri? What made you choose it for this app?",
      answer: `I tried Tauri on a recommendation from a co-worker. Having used Electron in the past, I liked its focus on type safety and security. I was also curious what Rust might enable for Yaak, and it's been great to make use of some of the lower-level networking libraries (especially for gRPC).

Now that I've had over a year with Tauri, it simply feels like a better-designed Electron. Things like auto-updates, sidecar binaries, and plugins are so nice to work with.`,
    },
    {
      question:
        "What do you dislike about Tauri?",
      answer: `Tauri is only 2 years old so there are (understandably) bugs and missing features. It's going to take a while to mature into a stable runtime for desktop and mobile but its growth trajectory makes me think it will get there.

Here's a just a few examples of issues I've run into:

- No supported way to position macOS stoplight controls (have to hack it)
- The Linux build crashes on machines with Nvidia GPUs
- The auto-updater doesn't work on sandboxed macOS apps
- Mobile builds don't work at all on my machine

The other thing I dislike stems from its use of Rust. Despite the fact that it took over a year of coding to feel comfortable, the real problem is Rust's slow compilation. It takes 20 seconds to re-run the app after changing any Rust code, which will only increase over time. To mitigate this, I've extracted things into smaller packages and used test-driven development to iterate, when possible.
      `,
    },
    {
      question:
        "Would you choose a different framework if you had to start over?",
      answer: `Probably not. I'm confident that all of the problems I've faced will be addressed eventually. The slow Rust compile times will always be an issue but the bulk of the codebase is frontend JavaScript anyway, so it's not a showstopper.
      `,
    },
  ],
};
