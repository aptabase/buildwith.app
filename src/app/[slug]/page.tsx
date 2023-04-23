/* eslint-disable @next/next/no-img-element */
import { frameworks, getFramework } from "@lib/frameworks";
import Link from "next/link";
import { InfoPanel } from "./InfoPanel";
import { ProsCons } from "./ProsCons";
import { Metadata, MetadataRoute, ResolvedMetadata } from "next";

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
  return {
    title: `${fw.name} - BuildWith.app`,
    description: `${fw.name}: ${fw.short_description}`,
    openGraph: {
      title: `${fw.name} - BuildWith.app`,
      description: `${fw.name}: ${fw.short_description}`,
      url: `https://buildwith.app/${fw.slug}`,
      images: ["https://buildwith.app/og.png"],
    },
    twitter: {
      title: `${fw.name} - BuildWith.app`,
      description: `${fw.name}: ${fw.short_description}`,
      card: "summary_large_image",
      url: `https://buildwith.app/${fw.slug}`,
      images: ["https://buildwith.app/twitter.png"],
    },
  };
}

export default function Framework(props: Props) {
  const fw = getFramework(props.params.slug);
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
                    {fw.best_for.toLowerCase()}
                  </p>
                  <ProsCons framework={fw} />
                </div>
                <InfoPanel framework={fw} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
