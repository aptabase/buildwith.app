import { Framework } from "@lib/frameworks";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
type Props = {
  framework: Framework;
};

export function FrameworkCard(props: Props) {
  return (
    <Link
      href={props.framework.slug}
      className="group relative flex flex-col items-start rounded-lg hover:bg-zinc-50 p-2"
    >
      <div className="flex items-center space-x-2">
        <img
          alt={props.framework.name}
          loading="lazy"
          decoding="async"
          className="h-6 w-6 rounded"
          src={`/frameworks/${props.framework.slug}.svg`}
        />
        <h2 className="text-2xl font-semibold text-zinc-800">
          {props.framework.name}
        </h2>
      </div>
      <p className="relative z-10 mt-2 text-sm text-zinc-600">
        {props.framework.short_description}
      </p>
    </Link>
  );
}
