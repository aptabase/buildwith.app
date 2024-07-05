/* eslint-disable @next/next/no-img-element */
import { frameworks, getFramework } from "@lib/frameworks";
import Link from "next/link";
import { InfoPanel } from "./InfoPanel";
import { ProsCons } from "./ProsCons";
import { notFound } from "next/navigation";
import { CompareWith } from "./CompareWith";
import { apps } from "@lib/apps";
import { AppCard } from "@lib/components";

export async function generateStaticParams() {
  return frameworks.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata(props: Props) {
  const fw = getFramework(props.params.slug);
  if (!fw) return notFound();

  return {
    title: `${fw.name} • BuildWith.app`,
    description: `${fw.name}: ${fw.short_description}`,
    openGraph: {
      title: `${fw.name} • BuildWith.app`,
      description: `${fw.name}: ${fw.short_description}`,
      url: `https://buildwith.app/${fw.slug}`,
    },
    twitter: {
      title: `${fw.name} • BuildWith.app`,
      description: `${fw.name}: ${fw.short_description}`,
      card: "summary_large_image",
    },
  };
}

export default function Framework(props: Props) {
  const fw = getFramework(props.params.slug);
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
                    alt={fw.name}
                    loading="lazy"
                    decoding="async"
                    className="h-12 w-12 rounded"
                    src={`/frameworks/${fw.slug}.svg`}
                  />
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                    {fw.name}
                  </h1>
                </div>
              </header>
              <div className="md:flex justify-between gap-8">
                <div>
                  <div className="mt-6 prose max-w-none">
                    {fw.long_description || fw.short_description}
                  </div>
                  <p className="mt-6">
                    <span className="font-semibold">
                      {fw.name} is best for{" "}
                    </span>
                    {fw.best_for}
                  </p>
                  <ProsCons framework={fw} />
                </div>
                <InfoPanel framework={fw} />
              </div>
              <div className="mt-10 max-w-xl">
                <h3>Compare {fw.name} with</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4">
                  {frameworks
                    .filter((f) => f != fw)
                    .map((fw2) => (
                      <CompareWith key={fw2.slug} fw1={fw} fw2={fw2} />
                    ))}
                </div>
              </div>
              <div className="mt-10">
                <h3>Apps built with {fw.name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                  {apps
                    .filter((app) => app.framework.includes(fw.slug))
                    .map((app) => (
                      <AppCard key={app.slug} app={app} />
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
