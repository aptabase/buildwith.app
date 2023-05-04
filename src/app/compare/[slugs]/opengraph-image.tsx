// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
import { getFramework } from "@lib/frameworks";
import { notFound } from "next/navigation";
import { fetchFrameworkLogo, OpenGraphImage } from "@lib/og";

export const runtime = "edge";

type Props = {
  params: { slugs: string };
};

export default async function handler(props: Props) {
  const [slug1, slug2] = props.params.slugs.split("-vs-");
  const fw1 = getFramework(slug1);
  const fw2 = getFramework(slug2);
  if (!fw1 || !fw2) return notFound();

  const logo1 = await fetchFrameworkLogo(fw1.slug);
  const logo2 = await fetchFrameworkLogo(fw2.slug);

  return await OpenGraphImage(
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        fontSize: 80,
        fontFamily: '"cal-sans"',
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flexWrap: "nowrap",
      }}
    >
      <div tw="flex items-center">
        <div tw="flex max-h-20">
          <img src={logo1} tw="h-full" alt={fw1.name} />
        </div>
        <span tw="ml-4">{fw1.name}</span>
      </div>
      <span tw="my-10 text-gray-600 text-[3rem]">vs</span>
      <div tw="flex items-center space-x-2">
        <div tw="flex max-h-20">
          <img src={logo2} tw="h-full" alt={fw2.name} />
        </div>
        <span tw="ml-4">{fw2.name}</span>
      </div>
    </div>
  );
}
