type Props = {
  href: string;
};

export function DownloadNow(props: Props) {
  return (
    <a
      href={props.href}
      target="_blank"
      className="flex items-center font-semibold text-slate-900 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="mr-2 h-6 w-6 stroke-current"
      >
        <circle cx="12" cy="12" r="9" stroke-width="1.5"></circle>
        <path
          d="M9 12.75L12 15.75M12 15.75L15 12.75M12 15.75L12 8.25"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <span>Download</span>
    </a>
  );
}
