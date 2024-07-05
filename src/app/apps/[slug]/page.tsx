/* eslint-disable @next/next/no-img-element */
import { apps, getApp } from "@lib/apps";
import ReactMarkdown from "react-markdown";
import { getFrameworks } from "@lib/frameworks";
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
  if (!app) return notFound();

  const fws = getFrameworks(app.framework);
  if (fws.length === 0) return notFound();

  const by =
    app.makers.length === 1
      ? `@${app.makers[0].twitter || app.makers[0].github}`
      : `${app.makers.length} indie makers`;

  const fwNames = fws.map((x) => x.name).join(" and ");

  return {
    title: `${app.name} by ${by} • Built with ${fwNames} • BuildWith.app`,
    description: `Interview with ${app.name} creator ${app.makers[0].name} about how they built their app with ${fwNames} and the reasons why.`,
    openGraph: {
      title: `${app.name} by ${by} • Built with ${fwNames} • BuildWith.app`,
      description: `Interview with ${app.name} creator ${app.makers[0].name} about how they built their app with ${fwNames} and the reasons why.`,
      url: `https://buildwith.app/apps/${app.slug}`,
    },
    twitter: {
      title: `${app.name} by ${by} • Built with ${fwNames} • BuildWith.app`,
      description: `Interview with ${app.name} creator ${app.makers[0].name} about how they built their app with ${fwNames} and the reasons why.`,
      card: "summary_large_image",
    },
  };
}

export default function App(props: Props) {
  const app = getApp(props.params.slug);
  if (!app) return notFound();

  const fws = getFrameworks(app.framework);
  if (fws.length === 0) return notFound();

  return (
    <main>
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <Link
                href={`/${fws[0].slug}`}
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
                <AppInfoPanel app={app} frameworks={fws} />
                <ul className="space-y-12 order-1">
                  <blockquote className="flex flex-col text-3xl bg-zinc-50 p-4 rounded">
                    <span className="italic">&quot;{app.highlight}&quot;</span>
                    <span className="text-zinc-600 text-2xl mt-4">
                      — {app.makers[0].name}
                    </span>
                  </blockquote>
                  {app.interview.map((qa) => (
                    <li key={qa.question}>
                      <span className="text-lg font-semibold text-zinc-800">
                        {qa.question}
                      </span>
                      <div className="text-zinc-600 leading-7 space-y-4 prose prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
                        <ReactMarkdown>{qa.answer}</ReactMarkdown>
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
