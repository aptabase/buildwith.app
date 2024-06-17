import { App } from "..";
import icon from "./wayther-icon.png";
import screenshot from "./wayther-ss.jpg";
import profile from "./axel.jpg";

export const wayther: App = {
  slug: "wayther",
  name: "Wayther",
  description: "Wayther is a fast, powerful, and easy-to-use app designed to give you real-time road conditions and weather forecasts along your route.",
  icon_url: icon.src,
  screenshot_url: screenshot.src,
  initial_release: "June 2024",
  published_at: "June 2024",
  framework: ["apple"],
  website: "",
  stores: {
    app_store: "https://apps.apple.com/us/app/road-weather-forecast-wayther/id6449394257"
  },
  makers: [
    {
      name: "Axel Le Pennec",
      twitter: "alpennec",
      profile_img: profile.src,
    },
  ],
  highlight:
    "Wouldn't it be great if there was an app just for this?",
  interview: [
    {
      question: "What is Wayther?",
      answer: `Wayther is a weather forecast app specifically for road trips, giving accurate weather forecasts along any route up to 10 days in advance, anywhere in the world. Users can pick different routes and adjust the departure or arrival times to find the perfect window for a safe and enjoyable trip.
      
How it works:
      
1. Enter the starting point and destination
2. Pick a route from up to three options
3. Choose a departure or arrival date to fit a schedule and preferences 
      
Wayther gives detailed weather forecasts at various points along the route, showing info in an interactive map, trip overview, and detailed timeline. It&apos;s perfect for spotting bad weather spots, understanding how weather will change during your trip, and getting details on precipitation, wind, visibility, temperature, and official alerts.
       
Wayther wasn&apos;t just useful for car trips; it&apos;s great for motorcycles, RVs, trucks, buses, and bikes too. It can help you avoid high winds, bad weather, plan the best times to hit the road and reduce your travel costs too! 
      `,
    },
    {
      question: "Who is behind Wayther? Tell us a little bit about yourself.",
      answer: `I&apos;m Axel, a 35-year-old guy from France, currently living in Paris with my wife and 3-year-old son.

After graduating from an engineering school, I worked in startups as a project manager and later as a product leader in a startup studio. Working closely with developers on various products sparked my curiosity about app development. I started coding for personal projects and it became a beloved hobby.
      
Four years ago, I made a significant shift. I left product management to fully embrace indie app development. What I love is the whole product creation process - from generating ideas, designing user-friendly interfaces, and coding, to handling business, marketing, and user support.
      
Wayther is my fourth app after:
      
- **Skipper**, a boating log book app for iOS and iPadOS
- **Tizipizi**, a world clock app for iOS and iPadOS
- **Timersive**, a timer app for visionOS`,
    },
    {
      question: "Why did you build Wayther? How did you come up with the idea?",
      answer: `One of the apps in my portfolio is a digital boating log book (**Skipper**). Given the importance of weather when traveling by boat, I started working on integrating weather forecasts into trip planning.

Coincidentally, while developing this feature, I had to drive a few hundred miles and wanted to avoid bad weather, such as rain, high winds, poor visibility, extreme temperatures, blinding sun, and night driving. To prepare for this road trip, I found myself constantly switching between Apple Maps and Apple Weather, entering location after location to check the conditions along my route.
      
It quickly became apparent that these two problems were actually one: providing weather forecasts for a given route and its waypoints. I thought, "Wouldn&apos;t it be great if there was an app just for this?"
      
After evaluating the market potential, I decided to focus on creating a dedicated app for road and land trips first, offering comprehensive weather forecasts for the entire journey.

What motivated me even more to start this project is that I already knew the frameworks I would be using because I used almost the same for my boating log book app.
      
- **Core Location** to get the user current location (to be used as the trip starting points or destination)
- **MapKit** to add route overlays and annotations to an interactive map
- **WeatherKit** to fetch the weather at the different points along the route
- **SwiftCharts** to add graphs
- **RevenueCat** to simplify subscription management within the app and experiment with pricing (offers, paywalls, targeting, etc).`,
    },
    {
      question:
        "Do you want to share some numbers? Downloads, Users, MMR, whatever works for you!",
      answer: `The app has been available for few days only, so I don&apos;t have numbers to share as I&apos;m just starting to talk about it here and there. But I can&apos;t wait to see how it goes!`,
    },
    {
      question: "Why Swift? What made you choose it for your project?",
      answer: `I started to develop iOS mobile applications in 2013. At that time, the only language that could be used on iOS was Objective-C and we had to use UIKit for the user interface. When Swift came out in 2014, I waited a bit before converting my apps into this new language. I&apos;ve been writing Swift code since then. I&apos;m lucky I only work for my one apps, so I don&apos;t manipulate old, legacy code. More recently, I switched from UIKit with Storyboards to SwiftUI for the UI of the app, and don&apos;t use UIKit anymore nowadays. Even if SwiftUI is still young and some things are missing, it&apos;s the best way to quickly build and release an app. It&apos;s the perfect tool for indie developers that wants to get an app in people's hands and see what people like, what they want, and how it's used 🙂`,
    },
    {
      question:
        "What do you dislike about Swift? Would you choose a different framework if you had to start over?",
      answer: `As I mostly only learnt Swift, I can&apos;t compare it to other languages like Kotlin, Javascript or other platforms like Android or web. Personally, I think using Swift is the best way to develop fully native apps for Apple platforms so I would not choose any other language to develop apps at the moment. Also because I don&apos;t have plans to bring my apps to other platforms, so I&apos;ve not considered switching to a cross platform language (like React Native or Flutter). Finally, I have to say I really enjoy how the language is evolving. The new Swift Concurrency is a really nice improvement to what we had before, and allows us to build more robust apps.`,
    },
  ],
};
