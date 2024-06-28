import { App } from "..";
import icon from "./app-icon.jpg";
import screenshot from "./app-screenshot.jpg";
import profile from "./profile.jpg";

export const roadsaudio: App = {
  slug: "roadsaudio",
  name: "Roads Audio",
  description:
    "Roads Audio brings you closer to your friends through deep, podcast-like conversations, letting you connect meaningfully on your time",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "June 2024",
  published_at: "June 2024",
  framework: ["flutter"],
  website: "https://roadsaudio.com/",
  stores: {
    google_play:
      "https://play.google.com/store/apps/details?id=com.onemanstartup.roads",
    app_store:
      "https://apps.apple.com/us/app/roads-listen-comment-record/id6443961864",
  },
  makers: [
    {
      name: "Dave Faliskie",
      twitter: "davefaliskie",
      profile_img: profile.src,
    },
  ],
  highlight: "My philosophy is simple: anyone can start anything.",
  interview: [
    {
      question: "What is Roads Audio?",
      answer: `Imagine hosting a podcast with your friends and deciding who gets to listen. With Roads Audio, you can do exactly that. Through deep, podcast-like conversations, you can connect meaningfully with your friends on your schedule. This app allows for private, asynchronous audio only chats with the key feature of commenting on audio with audio.`,
    },
    {
      question: "Who is behind Roads Audio? Tell us a bit about yourself.",
      answer: `I&apos;m Dave Faliskie, the creator of Roads Audio. With a background in software development, I enjoy learning new things through hands-on experience. I have a passion for podcasts, travel, and running. My philosophy is simple: anyone can start anything.`,
    },
    {
      question:
        "Why did you build Roads Audio? How did you come up with the idea?",
      answer: `The idea began when my friends and I wanted to start a podcast. At the time we lived in different parts of the world which made scheduling difficult, so we started by recording 10-15 minute audio clips and uploading them to a shared Google Drive.

This method allowed us to share updates and stay connected asynchronously. However, it also highlighted the challenges of maintaining context and continuity in our conversations, sparking the inspiration for Roads Audio.`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, users, MMR, whatever works for you!",
      answer: `The app has just under 1,000 downloads between the App Store and Google Play`,
    },
    {
      question: "Why Flutter? What made you choose it for this project?",
      answer: `The main reason for choosing flutter is that it's a cross platform framework, which is extremely valuable, especially for a one man startup. I also had experience developing in flutter from previous apps I built, which is beneficial compared to learning everything while building. I'm a huge fan of flutter and will continue to use in the future.`,
    },
    {
      question:
        "What do you dislike about Flutter? Would you choose a different framework if you had to start over?",
      answer: `There is nothing major I dislike about flutter, I have no regrets choosing it for this project and would choose it again if I were to start over. I do think it could be beneficial for some more standardization or "correct ways" within the framework which I think would help as the development team for Roads Audio grows.`,
    },
  ],
};
