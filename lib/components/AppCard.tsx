/* eslint-disable @next/next/no-img-element */
import { App } from "@lib/apps";
import Link from "next/link";

type Props = {
  app: App;
};

export function AppCard(props: Props) {
  return (
    <Link
      href={`/apps/${props.app.slug}`}
      className="p-2 rounded flex hover:bg-zinc-100"
    >
      <img
        alt={props.app.name}
        loading="lazy"
        decoding="async"
        className="h-12 w-12 rounded"
        src={props.app.icon_url}
      />
      <p className="flex flex-col ml-2">
        <span className="font-title text-lg">{props.app.name}</span>
        <span className="text-xs">by {props.app.author.name}</span>
      </p>
    </Link>
  );
}
