/* eslint-disable @next/next/no-img-element */
import { Framework } from "@lib/frameworks";
import Link from "next/link";

type Props = {
  fw1: Framework;
  fw2: Framework;
};

export function CompareWith(props: Props) {
  const href =
    props.fw1.slug.localeCompare(props.fw2.slug) < 0
      ? `compare/${props.fw1.slug}-vs-${props.fw2.slug}`
      : `compare/${props.fw2.slug}-vs-${props.fw1.slug}`;

  return (
    <Link
      href={href}
      key={props.fw2.slug}
      className="p-2 rounded inline-flex items-center space-x-3 hover:bg-zinc-100"
    >
      <img
        alt={props.fw2.name}
        loading="lazy"
        decoding="async"
        className="h-6 w-6 rounded"
        src={`/frameworks/${props.fw2.slug}.svg`}
      />
      <span>{props.fw2.name}</span>
    </Link>
  );
}
