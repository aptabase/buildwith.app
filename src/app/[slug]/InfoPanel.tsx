import {
  TwitterTag,
  DiscordTag,
  GitHubTag,
  RedditTag,
  ExternalLink,
} from "@lib/components";
import { Framework, platforms } from "@lib/frameworks";

type Props = {
  framework: Framework;
};

export function InfoPanel(props: Props) {
  return (
    <div className="flex flex-col space-y-8 min-w-[14rem]">
      <ul className="mt-2 flex flex-col space-y-1">
        <h3>About</h3>
        <li className="py-0.5 text-sm">
          <p className="text-zinc-600">Maintainer</p>
          {props.framework.maintainer}
        </li>
        <li className="py-0.5 text-sm">
          <p className="text-zinc-600">Initial Release</p>
          {props.framework.releases.first}
        </li>
      </ul>

      <ul className="mt-2 flex flex-col space-y-1">
        <h3>Community</h3>
        {props.framework.github && (
          <li>
            <GitHubTag {...props.framework.github} />
          </li>
        )}
        {props.framework.twitter && (
          <li>
            <TwitterTag {...props.framework.twitter} />
          </li>
        )}
        <li>
          <RedditTag {...props.framework.reddit} />
        </li>
        <li>
          <DiscordTag {...props.framework.discord} />
        </li>
      </ul>

      <ul className="mt-2 flex flex-col">
        <h3>Languages</h3>
        {props.framework.languages.map((l) => (
          <li key={l} className="py-0.5 text-sm">
            {l}
          </li>
        ))}
      </ul>

      <ul className="mt-2 flex flex-col">
        <h3>Target Platforms</h3>
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
      <div className="text-xs">
        <span className="block text-gray-500">Found a mistake?</span>
        <ExternalLink href="https://github.com/aptabase/buildwith.app">
          Send us a PR
        </ExternalLink>
      </div>
    </div>
  );
}
