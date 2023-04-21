import { frameworks } from "@lib/frameworks";
import { FrameworkCard } from "./FrameworkCard";

export const metadata = {
  title: "The framework for you next app - BuildWith.app",
  description:
    "Compare and find the best framework for your next mobile or desktop app",
};

export default function Home() {
  return (
    <main>
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                  Choose the best framework for you next app.
                </h1>
                <p className="mt-6 text-base text-zinc-600">
                  Thinking about building a new app and not sure which framework
                  to use? <br /> We&apos;ve got you covered.
                </p>
              </header>
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
