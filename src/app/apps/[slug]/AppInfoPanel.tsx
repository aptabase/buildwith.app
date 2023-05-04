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
      <li className="space-y-1">
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
      <li className="space-y-1">
        <p className="text-zinc-600">
          {props.app.makers.length === 1 ? "Maker" : "Makers"}
        </p>
        <ul className="space-y-2">
          {props.app.makers.map((maker) => (
            <li key={maker.twitter} className="flex space-x-2">
              <img
                alt={maker.name}
                loading="lazy"
                decoding="async"
                className="h-10 w-10 rounded-full"
                src={maker.profile_img}
              />
              <div>
                <p className="font-medium">{maker.name}</p>
                <ExternalLink href={`https://twitter.com/${maker.twitter}`}>
                  @{maker.twitter}
                </ExternalLink>
              </div>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <p className="text-zinc-600">First Release</p>
        <span>{props.app.initial_release}</span>
      </li>
      <li>
        <p className="text-zinc-600">Website</p>
        <ExternalLink href={`${props.app.website}?utm_source=buildwith.app`}>
          {props.app.website}
        </ExternalLink>
      </li>
      <li className="col-span-2 hidden md:block">
        <DownloadButtons app={props.app} />
      </li>
    </ul>
  );
}
