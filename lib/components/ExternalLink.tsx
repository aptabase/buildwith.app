type Props = {
  href: string;
  rel?: string;
  children: React.ReactNode;
};

export function ExternalLink(props: Props) {
  return (
    <a
      href={props.href}
      className="text-blue-600 hover:underline"
      rel={props.rel}
      target="_blank"
    >
      {props.children}
    </a>
  );
}
