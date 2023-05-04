// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
import { getFramework } from "@lib/frameworks";
import { notFound } from "next/navigation";
import { fetchFrameworkLogo, OpenGraphImage } from "@lib/og";

export const runtime = "edge";

type Props = {
  params: { slug: string };
};

export default async function handler(props: Props) {
  const fw = getFramework(props.params.slug);
  if (!fw) return notFound();

  const logo = await fetchFrameworkLogo(fw.slug);

  return await OpenGraphImage(
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        fontSize: 100,
        fontFamily: '"cal-sans"',
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flexWrap: "nowrap",
      }}
    >
      <div style={{ display: "flex" }} tw="max-h-28">
        <img src={logo} tw="h-full" alt={fw.name} />
      </div>
      {fw.name}
    </div>
  );
}
