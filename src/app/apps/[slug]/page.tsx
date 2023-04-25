/* eslint-disable @next/next/no-img-element */
import { apps, getApp } from "@lib/apps";
import { AppStore, ExternalLink, GooglePlay } from "@lib/components";
import { getFramework } from "@lib/frameworks";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppInfoPanel } from "./AppInfoPanel";
import { DownloadButtons } from "./DownloadButtons";

export async function generateStaticParams() {
  return apps.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata(props: Props) {
  const app = getApp(props.params.slug);
  if (!app) return;

  const fw = getFramework(app.framework);
  if (!fw) return;

  return {
    title: `${app.name} by ${app.author.name} • Built with ${fw.name} • BuildWith.app`,
    description: `Interview with ${app.name} creator ${app.author.name} about how they built their app with ${fw.name} and why they chose to build with ${fw.name}.`,
    openGraph: {
      title: `${app.name} by ${app.author.name} • Built with ${fw.name} • BuildWith.app`,
      description: `Interview with ${app.name} creator ${app.author.name} about how they built their app with ${fw.name} and why they chose to build with ${fw.name}.`,
      url: `https://buildwith.app/apps/${app.slug}`,
      images: ["https://buildwith.app/og.png"],
    },
    twitter: {
      title: `${app.name} by ${app.author.name} • Built with ${fw.name} • BuildWith.app`,
      description: `Interview with ${app.name} creator ${app.author.name} about how they built their app with ${fw.name} and why they chose to build with ${fw.name}.`,
      card: "summary_large_image",
      url: `https://buildwith.app/apps/${app.slug}`,
      images: ["https://buildwith.app/twitter.png"],
    },
  };
}

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
                href={fw.slug}
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
              <img
                alt={app.name}
                loading="lazy"
                decoding="async"
                className="rounded-lg mt-10"
                src={app.screenshot_url}
              />
              <div className="md:flex justify-between gap-12 pt-12">
                <AppInfoPanel app={app} framework={fw} />
                <ul className="space-y-12 order-1">
                  {app.interview.map((qa) => (
                    <li key={qa.question}>
                      <span className="text-lg font-semibold text-zinc-800">
                        {qa.question}
                      </span>
                      <div className="text-zinc-600 leading-7 space-y-4">
                        {qa.answer}
                      </div>
                    </li>
                  ))}
                  <li className="md:hidden block">
                    <DownloadButtons app={app} />
                  </li>
                  <p className="text-zinc-600 text-xs">
                    This Q&A was published on {app.published_at}.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
