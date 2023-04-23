import { frameworks } from "@lib/frameworks";
import { FrameworkCard } from "./FrameworkCard";
import Image from "next/image";
import iphone from "./iphone.png";

export const metadata = {
  title: "Build your next app with...",
  description: "Find and compare the best framework for your next app",
  openGraph: {
    title: "Build your next app with...",
    description: "Find and compare the best framework for your next app",
    url: `https://buildwith.app`,
    images: ["https://buildwith.app/og.png"],
  },
  twitter: {
    title: "Build your next app with...",
    card: "summary_large_image",
    description: "Find and compare the best framework for your next app",
    url: `https://buildwith.app`,
    images: ["https://buildwith.app/twitter.png"],
  },
};

export default function Home() {
  return (
    <main>
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="flex gap-8">
                <header>
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl xl:text-6xl">
                    Find the best framework for you next app.
                  </h1>
                  <p className="mt-6 text-base text-zinc-600">
                    Thinking about building a new app and not sure which
                    framework to use? <br /> Learn more about each framework and
                    compare to find the best one for you.
                  </p>
                </header>
                <Image
                  src={iphone}
                  alt="iPhone"
                  className="hidden lg:block lg:w-[18rem] xl:w-[22rem] max-w-sm object-contain"
                />
              </div>
              <div className="mt-16 sm:mt-20">
                <div className="grid grid-cols-1 gap-x-12 gap-y-4 sm:gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                  {frameworks.map((framework) => (
                    <FrameworkCard key={framework.slug} framework={framework} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
