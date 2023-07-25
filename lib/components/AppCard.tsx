/* eslint-disable @next/next/no-img-element */
import { App } from "@lib/apps";
import Link from "next/link";

type Props = {
  app: App;
};

export function AppCard(props: Props) {
  const by =
    props.app.makers.length === 1
      ? `by @${props.app.makers[0].twitter}`
      : `by ${props.app.makers.length} indie makers`;

  return (
    <Link
      href={`/apps/${props.app.slug}`}
      className="rounded flex hover:bg-zinc-100 h-auto"
    >
      <img
        alt={props.app.name}
        loading="lazy"
        decoding="async"
        className="h-10 w-10 rounded"
        src={props.app.icon_url}
      />
      <p className="flex flex-col ml-2 overflow-hidden">
        <span className="font-title text-base">{props.app.name}</span>
        <span className="text-xs truncate">{by}</span>
      </p>
    </Link>
  );
}
