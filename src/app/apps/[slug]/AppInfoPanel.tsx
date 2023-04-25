/* eslint-disable @next/next/no-img-element */
import { App } from "@lib/apps";
import { ExternalLink, AppStore, GooglePlay } from "@lib/components";
import { Framework } from "@lib/frameworks";
import Link from "next/link";
import { DownloadButtons } from "./DownloadButtons";

type Props = {
  app: App;
  framework: Framework;
};

export function AppInfoPanel(props: Props) {
  return (
    <ul className="grid grid-cols-2 gap-6 text-sm order-2 mb-12 md:mb-0 md:block md:space-y-6 min-w-[14rem]">
      <li>
        <p className="text-zinc-600">Built with</p>
        <Link
          href={`/${props.framework.slug}`}
          className="flex items-center space-x-1"
        >
          <img
            alt={props.framework.name}
            loading="lazy"
            decoding="async"
            className="h-6 w-6 rounded"
            src={`/frameworks/${props.framework.slug}.svg`}
          />
          <span className="text-lg font-title tracking-tight text-zinc-800">
            {props.framework.name}
          </span>
        </Link>
      </li>
      <li>
        <p className="text-zinc-600">Maker</p>
        <div className="flex space-x-2">
          <img
            alt={props.app.author.name}
            loading="lazy"
            decoding="async"
            className="h-10 w-10 rounded-full"
            src={props.app.author.profile_img}
          />
          <div>
            <p className="font-medium">{props.app.author.name}</p>
            <ExternalLink
              href={`https://twitter.com/${props.app.author.twitter}`}
            >
              @{props.app.author.twitter}
            </ExternalLink>
          </div>
        </div>
      </li>
      <li>
        <p className="text-zinc-600">First Release</p>
        {props.app.initial_release}
      </li>
      <li>
        <p className="text-zinc-600">Website</p>
        <ExternalLink href={props.app.website}>
          {props.app.website}
        </ExternalLink>
      </li>
      <li className="col-span-2 hidden md:block">
        <DownloadButtons app={props.app} />
      </li>
    </ul>
  );
}
