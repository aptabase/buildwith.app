type Props = {
  slug: string;
  followers: number;
};

export function TwitterTag(props: Props) {
  return (
    <a
      href={`https://twitter.com/${props.slug}`}
      className="inline-flex items-center space-x-2 bg-zinc-50 hover:bg-[rgba(29,161,242,0.1)] py-0.5 px-2 rounded"
    >
      <svg
        fill="#1DA1F2"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
      </svg>
      <span>
        {props.followers > 1_000_000
          ? `${Math.floor(props.followers) / 1_000_000}M `
          : props.followers > 1_000
          ? `${Math.floor(props.followers) / 1000}k `
          : `${props.followers}`}
        followers
      </span>
    </a>
  );
}
