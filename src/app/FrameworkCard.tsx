import { Framework } from "@lib/frameworks";

/* eslint-disable @next/next/no-img-element */
type Props = {
  framework: Framework;
};

export function FrameworkCard(props: Props) {
  return (
    <a
      href={props.framework.href}
      className="group relative flex flex-col items-start rounded-lg hover:bg-zinc-50 p-2"
    >
      <div className="flex items-center space-x-2">
        <img
          alt={props.framework.name}
          loading="lazy"
          decoding="async"
          className="h-6 w-6 rounded"
          src={props.framework.logoUrl}
        />
        <h2 className="text-2xl font-semibold text-zinc-800">
          {props.framework.name}
        </h2>
      </div>
      <p className="relative z-10 mt-2 text-sm text-zinc-600">
        {props.framework.description}
      </p>
      <ul className="flex space-x-1 text-xs mt-2">
        {props.framework.languages.map((l) => (
          <li key={l} className="text-zinc-500 p-1">
            #{l}
          </li>
        ))}
      </ul>
    </a>
  );
}
