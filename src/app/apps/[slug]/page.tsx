/* eslint-disable @next/next/no-img-element */
import { getApp } from "@lib/apps";
import { getFramework } from "@lib/frameworks";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default function App(props: Props) {
  const app = getApp(props.params.slug);
  if (!app) return notFound();

  const fw = getFramework(app.framework);
  if (!fw) return notFound();

  return (
    <main>
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <Link
                href="/"
                className="text-sm mb-4 inline-block hover:bg-zinc-50 px-2 py-1 rounded"
              >
                ← Back
              </Link>
              <header className="max-w-2xl">
                <div className="flex items-center space-x-4">
                  <img
                    alt={app.name}
                    loading="lazy"
                    decoding="async"
                    className="h-14 w-14 rounded"
                    src={app.icon_url}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
                      {app.name}
                    </h1>
                    <p className="text-md sm:text-lg text-zinc-600">
                      {app.description}
                    </p>
                  </div>
                </div>
              </header>
              <div className="md:flex justify-between gap-8 mt-8">
                <div>
                  <img
                    alt={app.name}
                    loading="lazy"
                    decoding="async"
                    className="rounded-lg max-h-[24rem]"
                    src={app.screenshot_url}
                  />
                  <ul className="mt-8 prose">
                    {app.interview.map((qa) => (
                      <li key={qa.answer}>
                        <span className="text-base font-semibold">
                          {qa.question}
                        </span>
                        <p className="text-sm text-zinc-600">{qa.answer}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <ul className="mt-2 flex flex-col space-y-4 min-w-[14rem]">
                  <li className="py-0.5 text-sm">
                    <p className="text-zinc-600">Built with</p>
                    <div className="flex items-center space-x-1">
                      <img
                        alt={fw.name}
                        loading="lazy"
                        decoding="async"
                        className="h-6 w-6 rounded"
                        src={`/frameworks/${fw.slug}.svg`}
                      />
                      <span className="text-lg font-title tracking-tight text-zinc-800">
                        {fw.name}
                      </span>
                    </div>
                  </li>
                  <li className="py-0.5 text-sm">
                    <p className="text-zinc-600">Maker</p>
                    <p>{app.author.name}</p>
                    <a
                      className="text-blue-600 hover:underline"
                      href={`https://twitter.com/${app.author}`}
                    >
                      @{app.author.twitter}
                    </a>
                  </li>
                  <li className="py-0.5 text-sm">
                    <p className="text-zinc-600">Website</p>
                    <a
                      className="text-blue-600 hover:underline"
                      href={app.website}
                    >
                      {app.website}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
