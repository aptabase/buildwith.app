import { App } from "..";
import icon from "./payload-icon.png";
import screenshot from "./payload-ss.png";
import profile from "./profile.jpg";

export const payload: App = {
  slug: "payload",
  name: "Payload",
  description: "Transfer video, pictures and documents blazingly fast between devices on your local network.",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "January 2024",
  published_at: "July 2024",
  framework: ["tauri"],
  website: "https://payload.app",
  makers: [
    {
      name: "Didrik Nordström",
      github: "betamos",
      profile_img: profile.src,
    },
  ],
  highlight:
    "The only downside is I can't blame my boss for my problems anymore!",
  interview: [
    {
      question: "What is Payload?",
      answer: `Payload is a desktop app for transferring files directly between devices on a local network, similar to AirDrop but cross-platform. People use it mostly for transferring media, like videos, pictures and documents, between e.g. a laptop and a desktop on their home Wifi. Another use case is if you're at a friend's place and you need to send them some vacation videos or something, without having to upload 15 GB to Dropbox or Drive or fetch a USB stick. There are lots of apps and tools for this already, but I'm trying to do it better, with a strong focus on UX.`,
    },
    {
      question: "Who is behind Payload? Tell us a bit about yourself.",
      answer: `I&apos;m Didrik Nordström, I am from Sweden but lived in the US for many years, and now I&apos;m in Spain. I discovered web development in my late teens, then decided to study Computer Science to learn everything I could. When I was done I managed to land a job at Google as a software engineer. After about 7 years I left to do my own things, and here we are. Being an indie-hacker is great for me, the only downside is I can't blame my boss for my problems anymore.`,
    },
    {
      question:
        "Why did you build Payload? How did you come up with the idea?",
      answer: `As a millennial, I grew up before smartphones and Cloud storage. We used to have desktop computers at home so transferring files was a huge pain. You had a lot of options, like USB sticks, shared folders, FTP, even email, but they were all annoying in their own ways, especially cross platform.

A decade or so later I realized file transfers were still quite painful, so that&apos;s when I got the idea. It felt like I had the opportunity to take something dreadful and turn it into something pleasant that “just works”, if I could get the details right. I lived in San Francisco at the time and everyone was talking about ML and blockchain, and racing to be first at the expense of pretty much everything else. File transfers were much more boring, which was perfect for me. I just wanted to solve a real problem at my own pace, away from all the hype.
      `,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, users, MMR, whatever works for you!",
      answer: `Payload currently has about 1000 MAU with zero marketing, most are on Windows. Growth has come in batches, usually when some blog or magazine has covered it. There are some regions where Payload is more popular, but it's on all continents except Antarctica.

As for revenue, Payload is free. I&apos;m launching online transfers soon, which lets you send files across the world efficiently. The idea is to keep the core product free, and offer paid plans for those who rely on it professionally. The dream is to have a lean, sustainable business.
`,
    },
    {
      question: "Why Tauri? What made you choose it for this app?",
      answer: `Cross platform was critical for me, so it was either Electron or Tauri. However, Electron is very heavyweight and Node wasn&apos;t fast enough for high-throughput networking, so I looked into Tauri and gave it a shot. At the time, Tauri was missing a few things that I needed, like macOS universal binaries. So I joined their Discord and they gave me pointers so I could contribute those changes myself, and I was just happy to give something back. The ability to engage new contributors is very difficult, but when it works it&apos;s a superpower. Not only do you get more contributors, but you also give them something to be proud of.

Tauri also takes documentation seriously, and there&apos;s usually a single blessed way to do things, which is a fresh breath of air from the JS ecosystem where there are ten projects doing the same thing. Another thing I love is that Tauri takes "end-to-end responsibility" if you will, for things like auto-updates, CI flows, and other goodies you need in serious projects. It's one of the greatest FOSS success stories in modern times, to be honest.`,
    },
    {
      question:
        "What do you dislike about Tauri? Would you choose a different framework if you had to start over?",
      answer: `I 100% made the right choice, and I don't dislike anything about Tauri. They're solving a very difficult problem, and they're best in class when it comes to cross platform on desktop.

That said, mobile support is absolutely critical these days, and Tauri is behind compared to e.g. Flutter. They're planning to release a 2.0 with Android and iOS support, which is extremely exciting but also scary, especially for me who has no background in mobile dev. Will the architectural choices made for desktop hold up and empower the mobile ecosystem? If they succeed, it could be the baddest true-cross-platform framework in town. If mobile is important for you, you should definitely pay close attention. I sure am.

Lastly, I have a love-hate relationship with Rust, especially async Rust, which Tauri uses. Yes, it's fast and safe, and some core language features are fantastic. But build times are slow, the ecosystem is too fragmented for my taste, and most importantly, the learning curve is steep. If you need some special custom behavior for your app, you can't really avoid Rust. It&apos;s not a deal breaker, but I guess I would have preferred Go, where I&apos;m much more productive.
      `,
    },
  ],
};
