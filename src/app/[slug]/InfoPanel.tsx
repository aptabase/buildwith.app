import { DiscordTag, GitHubTag, RedditTag } from "@lib/components";
import { Framework, platforms } from "@lib/frameworks";

type Props = {
  framework: Framework;
};

export function InfoPanel(props: Props) {
  return (
    <div>
      <ul className="mt-2 flex flex-col space-y-1">
        <h3>Community</h3>
        {props.framework.github && (
          <li>
            <GitHubTag {...props.framework.github} />
          </li>
        )}
        <li>
          <RedditTag {...props.framework.reddit} />
        </li>
        {(props.framework.discord || []).map((d) => (
          <li key={d.href}>
            <DiscordTag {...d} />
          </li>
        ))}
      </ul>

      <ul className="mt-2 flex flex-col">
        <h3>Programming Languages</h3>
        {props.framework.languages.map((l) => (
          <li key={l} className="py-0.5 text-sm">
            {l}
          </li>
        ))}
      </ul>

      <ul className="mt-2 flex flex-col">
        <h3>Supported Platforms</h3>
        {platforms.map((p) => (
          <li key={p}>
            <div
              className={`px-0.5 py-0.5 inline-flex items-center text-sm space-x-1 ${
                props.framework.platforms.includes(p)
                  ? "bg-green-50"
                  : "bg-zinc-50 line-through"
              }`}
            >
              <span>{props.framework.platforms.includes(p) ? "✓" : ""}</span>{" "}
              <span>{p}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
