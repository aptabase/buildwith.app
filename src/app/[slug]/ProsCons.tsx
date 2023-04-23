import { DiscordTag, GitHubTag, RedditTag } from "@lib/components";
import { Framework, platforms } from "@lib/frameworks";

type Props = {
  framework: Framework;
};

export function ProsCons(props: Props) {
  return (
    <div className="mt-8 grid md:grid-cols-2 justify-between gap-8">
      <ul className="space-y-2">
        <h3 className="flex items-center space-x-1">
          <span>✅</span>
          <span className="text-2xl">Strengths</span>
        </h3>
        {props.framework.pros.map((p) => (
          <li key={p.title}>
            <span className="text-base font-semibold">{p.title}</span>
            <p className="text-sm text-zinc-600">{p.description}</p>
          </li>
        ))}
      </ul>
      <ul className="space-y-2">
        <h3 className="flex items-center space-x-1">
          <span>🛑</span>
          <span className="text-2xl">Weaknesses</span>
        </h3>
        {props.framework.cons.map((p) => (
          <li key={p.title}>
            <span className="text-base font-semibold">{p.title}</span>
            <p className="text-sm text-zinc-600">{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
