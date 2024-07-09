import { App } from "..";
import icon from "./clipbud-icon.png";
import screenshot from "./clipbud-ss.jpg";
import profile from "./profile.jpg";

export const clipbud: App = {
  slug: "clipbud",
  name: "Clipbud",
  description: "Your useful snippets in one delightfully simple space.",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "June 2024",
  published_at: "July 2024",
  framework: ["apple"],
  website: "",
  stores: {
    app_store: "https://apps.apple.com/ca/app/clipbud-clipboard-manager/id6468892359"
  },
  makers: [
    {
      name: "Adam Whitcroft",
      twitter: "AdamWhitcroft",
      profile_img: profile.src,
    }
  ],
  highlight:
    "Like all of my apps, I built Clipbud to scratch my own itch",
  interview: [
    {
      question: "What is Clipbud?",
      answer: `Clipbud is a delightfully simple space for those text snippets you copy and paste a bunch.`,
    },
    {
      question: "Who is behind Clipbud? Tell us a little bit about yourself.",
      answer: `My name is Adam and I&apos;m a designer from South Africa living in Canada.

My first app, [Joey](https://apps.apple.com/ca/app/joey/id1640592100), was how I learned SwiftUI. I built it just after our second child was born, because I wanted a simple and private way to track feeds and diaper changes. It seemed like a simple use case for learning SwiftUI and some of the basic data entry and persistence methods.

My second app [Twodos](https://apps.apple.com/ca/app/twodos-simple-todos/id6463499163) went live a few months ago. It&apos;s a simple but opinionated todo list app that was featured on TechCrunch and The Verge, and was also casually mentioned on MKBHD&apos;s Waveform podcast.

My third and latest app is called [Clipbud](https://apps.apple.com/ca/app/clipbud-clipboard-manager/id6468892359).
`,
    },
    {
      question: "Why did you build Clipbud? How did you come up with the idea?",
      answer: `Like all of my apps, I built Clipbud to scratch my own itch.

I found there were text snippets I&apos;d often be copying out of Notes and pasting in to emails, DMs, chats, and so on. The most common example of this is I get a lot of icon design inquiries, so I have a bunch of templated responses and questions to help speed things along.

Whenever I updated my social media bios across various sites, it was a pain to write it in one app, select and copy it over to the others.

Hashtags are another thing I use a lot, so having a really quick way to grab a set of them, or even combine multiple sets with Clipbud&apos;s Combine feature has been such a time saver.`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, Users, MMR, whatever works for you!",
      answer: `At the time of writing (a little over a week after launch) Clipbud has a modest ~4,060 downloads. Twodos&apos; first week by contrast was ~8,010 downloads.
      
I don&apos;t do any sort of marketing for my apps outside of their launch announcements on Twitter and Mastodon and the odd follow-up post, so I&apos;m pretty happy with these numbers.

Truthfully, I&apos;m surprised Twodos popped off as much as it did. I&apos;m definitely thankful to anyone who takes the time to download and try my apps.`,
    },
    {
      question: "Why Swift? What made you choose it for your project?",
      answer: `I&apos;ve always wanted to develop iOS apps and even tried learning UIKit a couple of times, but SwiftUI ended up being the one that clicked for me.
      
It&apos;s such an approachable language and while you can hit the edges of the framework pretty quickly, you can still do so much as a beginner. Once you&apos;re more comfortable with it, some of those edges become a little easier to manage and overcome.

Clipbud itself is extremely simple. It&apos;s a basic CRUD app with a whole lot of interaction and visual polish on top.`,
    },
    {
      question:
        "What do you dislike about Swift? Would you choose a different framework if you had to start over?",
      answer: `I don&apos;t really think about it in those terms. All programming languages and frameworks have their downsides, it&apos;s just a matter of picking the set of tradeoffs that you&apos;re comfortable having.
      
I have limited free time (a full time job, 2 small kids and a host of hobbies keeps me pretty busy) so when I decided to start investigating SwiftUI I valued seeing results quickly, so I stuck with it.

That being said, there are times where I&apos;ve wanted something a little more than SwiftUI offers, so getting comfortable with UIKit basics is next on my list.

I doubt I&apos;d ever move away from SwiftUI entirely as it&apos;s only going to keep getting better and better, but I can imagine a world fairly soon where I&apos;m working in a mix of SwiftUI and UIKit.`,
    },
  ],
};
