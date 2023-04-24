/* eslint-disable @next/next/no-img-element */
import { GitHubTag, RedditTag, DiscordTag } from "@lib/components";
import {
  Framework,
  comparisons,
  getFramework,
  platforms,
} from "@lib/frameworks";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return comparisons.map((vs) => ({
    slugs: vs,
  }));
}

export async function generateMetadata(props: Props) {
  const [slug1, slug2] = props.params.slugs.split("-vs-");
  const fw1 = getFramework(slug1);
  const fw2 = getFramework(slug2);
  if (!fw1 || !fw2) return;

  return {
    title: `Compare ${fw1.name} vs ${fw2.name} - BuildWith.app`,
    description: `How does ${fw1.name} compare to ${fw2.name}? See the pros and cons of each framework, target platforms and more.`,
    openGraph: {
      title: `Compare ${fw1.name} vs ${fw2.name} - BuildWith.app`,
      description: `How does ${fw1.name} compare to ${fw2.name}? See the pros and cons of each framework, target platforms and more.`,
      url: `https://buildwith.app/compare/${props.params.slugs}`,
      images: ["https://buildwith.app/og.png"],
    },
    twitter: {
      title: `Compare ${fw1.name} vs ${fw1.name} - BuildWith.app`,
      description: `How does ${fw1.name} compare to ${fw2.name}? See the pros and cons of each framework, target platforms and more.`,
      card: "summary_large_image",
      url: `https://buildwith.app/compare/${props.params.slugs}`,
      images: ["https://buildwith.app/twitter.png"],
    },
  };
}

type Props = {
  params: { slugs: string };
};

const Title = ({ fw }: { fw: Framework }) => (
  <Link href={`/${fw.slug}`} className="flex items-center space-x-2">
    <img
      alt={fw.name}
      loading="lazy"
      decoding="async"
      className="h-8 w-8 lg:w-12 lg:h-12 rounded"
      src={`/frameworks/${fw.slug}.svg`}
    />
    <h2 className="text-xl font-bold tracking-tight text-zinc-800 lg:text-3xl">
      {fw.name}
    </h2>
  </Link>
);

const About = ({ fw }: { fw: Framework }) => (
  <ul className="mt-2 flex flex-col space-y-1 min-w-[14rem]">
    <li className="py-0.5 text-sm">
      <p className="text-xs text-zinc-600">Maintainer</p>
      {fw.maintainer}
    </li>
    <li className="py-0.5 text-sm">
      <p className="text-xs text-zinc-600">Initial Release</p>
      {fw.releases.first}
    </li>
  </ul>
);

const Community = ({ fw }: { fw: Framework }) => (
  <ul className="mt-2 flex flex-col space-y-1 min-w-[12rem]">
    {fw.github && (
      <li>
        <GitHubTag {...fw.github} />
      </li>
    )}
    <li>
      <RedditTag {...fw.reddit} />
    </li>
    {(fw.discord || []).map((d) => (
      <li key={d.href}>
        <DiscordTag {...d} />
      </li>
    ))}
  </ul>
);

const TargetPlatforms = ({ fw }: { fw: Framework }) => (
  <ul className="mt-2 flex flex-col">
    {platforms.map((p) => (
      <li key={p}>
        <div
          className={`px-0.5 py-0.5 inline-flex items-center text-sm space-x-1 ${
            fw.platforms.includes(p) ? "bg-green-50" : "bg-zinc-50 line-through"
          }`}
        >
          <span>{fw.platforms.includes(p) ? "✓" : ""}</span> <span>{p}</span>
        </div>
      </li>
    ))}
  </ul>
);

const Languages = ({ fw }: { fw: Framework }) => (
  <ul className="mt-2 flex flex-col">
    {fw.languages.map((l) => (
      <li key={l} className="py-0.5 text-sm">
        {l}
      </li>
    ))}
  </ul>
);

const ProsCons = ({
  items,
}: {
  items: Array<{ title: string; description: string }>;
}) => (
  <ul className="space-y-2">
    {items.map((p) => (
      <li key={p.title}>
        <span className="text-base font-semibold">{p.title}</span>
        <p className="text-sm text-zinc-600">{p.description}</p>
      </li>
    ))}
  </ul>
);

export default function Compare(props: Props) {
  const [slug1, slug2] = props.params.slugs.split("-vs-");
  const fw1 = getFramework(slug1);
  const fw2 = getFramework(slug2);
  if (!fw1 || !fw2) return notFound();

  return (
    <main>
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <Link
                href={`/${fw1.slug}`}
                className="text-sm mb-4 inline-block hover:bg-zinc-50 px-2 py-1 rounded"
              >
                ← Back
              </Link>
              <header className="space-y-4 mb-20">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                  {fw1.name} vs {fw2.name}
                </h1>
                <p>
                  How does {fw1.name} compare to {fw2.name}? <br /> See the pros
                  and cons of each framework, target platforms and more.
                </p>
              </header>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-12">
                <div className="col-span-2 md:col-span-1" />
                <Title fw={fw1} />
                <Title fw={fw2} />

                <h3 className="col-span-2 text-2xl md:col-span-1 md:text-base">
                  About
                </h3>
                <About fw={fw1} />
                <About fw={fw2} />

                <h3 className="col-span-2 text-2xl md:col-span-1 md:text-base">
                  Community
                </h3>
                <Community fw={fw1} />
                <Community fw={fw2} />

                <h3 className="col-span-2 text-2xl md:col-span-1 md:text-base">
                  Languages
                </h3>
                <Languages fw={fw1} />
                <Languages fw={fw2} />

                <h3 className="col-span-2 text-2xl md:col-span-1 md:text-base">
                  Target Platforms
                </h3>
                <TargetPlatforms fw={fw1} />
                <TargetPlatforms fw={fw2} />

                <h3 className="flex space-x-2 col-span-2 text-2xl md:col-span-1 md:text-base">
                  <span>✅</span>
                  <span>Strengths</span>
                </h3>
                <ProsCons items={fw1.pros} />
                <ProsCons items={fw2.pros} />

                <h3 className="flex space-x-2 col-span-2 text-2xl md:col-span-1 md:text-base">
                  <span>🛑</span>
                  <span>Weaknesses</span>
                </h3>
                <ProsCons items={fw1.cons} />
                <ProsCons items={fw2.cons} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
