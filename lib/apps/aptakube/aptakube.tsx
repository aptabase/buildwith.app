import { ExternalLink } from "@lib/components";
import { App } from "..";
import icon from "./aptakube-icon.png";
import screenshot from "./aptakube-ss.webp";
import goenning from "./goenning.jpg";

export const aptakube: App = {
  slug: "aptakube",
  name: "Aptakube",
  description:
    "Modern, lightweight and multi-cluster Kubernetes desktop client",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "January 2023",
  published_at: "April 2023",
  framework: "tauri",
  website: "https://aptakube.com",
  author: {
    name: "Guilherme Oenning",
    twitter: "goenning",
    profile_img: goenning.src,
  },
  interview: [
    {
      question: "Who is behind Aptakube? Tell us a little bit about yourself.",
      answer: (
        <>
          <p>
            Hey there! My name is Guilherme and I&apos;m a full-time indie
            hacker. I was born in Brazil, but I&apos;m currently based in the
            beautiful island of Ireland 🍀
          </p>

          <p>
            I worked for 15+ years as a software engineer before quitting my job
            to start a business. Today I&apos; busy building and growing{" "}
            <ExternalLink href="https://aptakube.com">Aptakube</ExternalLink>,{" "}
            <ExternalLink href="https://aptabase.com">Aptabase</ExternalLink>,{" "}
            <ExternalLink href="https://fider.io">Fider</ExternalLink> and other
            side projects such as this website!
          </p>
        </>
      ),
    },
    {
      question: "What is Aptakube?",
      answer: (
        <>
          <p>
            Simply put, Aptakube is a desktop client for Kubernetes. It&apos;s
            an app to help teams operate their Kubernetes clusters. It&apos;s
            like having the AWS console running on your desktop, but instead of
            managing AWS resources the app is focused Kubernetes and its
            ecosystem.
          </p>
        </>
      ),
    },
    {
      question:
        "Why did you build Aptakube? How did you come up with the idea?",
      answer: (
        <>
          <p>
            I&apos;ve worked with Kubernetes for a few years and I&apos;ve
            always struggled to find a GUI client that I liked. I&apos;ve tried
            many different options and I often found them to be slow,
            inresponsive and inneficient to work with multiple clusters.
          </p>
          <p>
            So I did what most developers do when they can&apos;t find a tool
            that fits their needs: I built my own!
          </p>
        </>
      ),
    },
    {
      question:
        "Do you want to share some numbers? Downloads, Users, MMR, whatever you want!",
      answer: (
        <p>
          I&apos;m operating on a very small and competitive niche, with loads
          of free alternatives. But I&apos;m pretty happy with the results so
          far! There&apos;s been over 10.000 downloads of Aptakube since its
          first beta release. From a revenue perspective, its growing steadily!
          I&apos;m able to pay for all my personal bills in just after 3 months
          after the official launch! I never expected to happen so soon!
        </p>
      ),
    },
    {
      question: "Why Tauri? What made you choose it for your project?",
      answer: (
        <>
          <p>
            As I&apos;ve worked with web development for so many years, I felt
            like Electron would be the best choice for me as I wouldn&apos;t
            have to learn a new language.
          </p>
          <p>
            I started coding with Electron, but I struggled a lot with the
            initial setup. There was just so many different scaffolder/templates
            to get stated, but they were all outdated, had too many unecessarity
            dependencies and overall just too complicated for me.
          </p>
          <p>
            It was around that time as well that Rust was trending and I read a
            tweet about Tauri 1.0 being released. To my surprise, it was an
            alternative to Electron built with Rust and Web Technologies.
          </p>
          <p>
            I decided to give it go and I was hooked from the very first moment.
            The Tauri team really nailed the Developer Experience. The CLI
            generated a fully working app with Vite + the UI framework of my
            choice. No templates to copy from GitHub. No extra dependencies. No
            garbage. Just a minimal web app packaged into this tiny macOS
            executable.
          </p>
        </>
      ),
    },
    {
      question:
        "What do you dislike about Tauri? Would you choose a different framework if you had to start over?",
      answer: (
        <>
          <p>
            Tauri is still very young and there are very few tutorials and
            guides out there. Besides that, Rust is not the easiest language to
            learn, even for experienced developers. The learning curve was steep
            at the beginning, but I&apos;m glad I stuck with it. I think
            choosing Tauri was the best decision I&apos;ve made for Aptakube.
            The second best was using Solid.js 😉
          </p>
          <p>
            There are still a few features missing compared to Electron, so
            depending on what you want to do with your Desktop app, it might not
            yet be possible or at least not as easy as with Electron. On the
            other hand, Tauri 2.0 is just around the corner and it&apos;s going
            to support iOS and Android too! Which means I might be able to port
            Aptakube to mobile in the future, something that probably wound
            never be possible with Electron.
          </p>
          <p>So answering the question — No, I wouldn&apos;t change a thing!</p>
        </>
      ),
    },
  ],
};
