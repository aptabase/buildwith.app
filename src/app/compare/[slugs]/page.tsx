/* eslint-disable @next/next/no-img-element */
import { GitHubTag, RedditTag, DiscordTag } from "@lib/components";
import {
  Framework,
  frameworks,
  getFramework,
  platforms,
} from "@lib/frameworks";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const all = frameworks.map((post) => ({
    slug: post.slug,
  }));

  return all.reduce((acc, curr) => {
    const others = all.filter((fw) => fw.slug.localeCompare(curr.slug) > 0);
    const rows = others.map((fw) => ({ slugs: `${curr.slug}-vs-${fw.slug}` }));
    return [...acc, ...rows];
  }, [] as Array<{ slugs: string }>);
}

type Props = {
  params: { slugs: string };
};

const Title = ({ fw }: { fw: Framework }) => (
  <div className="flex items-center space-x-4">
    <img
      alt={fw.name}
      loading="lazy"
      decoding="async"
      className="h-12 w-12 rounded"
      src={`/frameworks/${fw.slug}.svg`}
    />
    <h1 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl">
      {fw.name}
    </h1>
  </div>
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
    <h3>Languages</h3>
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
                href="/"
                className="text-sm mb-4 inline-block hover:bg-zinc-50 px-2 py-1 rounded"
              >
                ← Back
              </Link>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
                <div />
                <Title fw={fw1} />
                <Title fw={fw2} />

                <h3>About</h3>
                <About fw={fw1} />
                <About fw={fw2} />

                <h3>Community</h3>
                <Community fw={fw1} />
                <Community fw={fw2} />

                <h3>Languages</h3>
                <Languages fw={fw1} />
                <Languages fw={fw2} />

                <h3>Target Platforms</h3>
                <TargetPlatforms fw={fw1} />
                <TargetPlatforms fw={fw2} />

                <h3 className="flex space-x-1">
                  <span>✅</span>
                  <span>Strengths</span>
                </h3>
                <ProsCons items={fw1.pros} />
                <ProsCons items={fw2.pros} />

                <h3 className="flex space-x-1">
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
