// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
import { getFramework } from "@lib/frameworks";
import { ImageResponse } from "next/server";
import { notFound } from "next/navigation";

export const runtime = "edge";

type Props = {
  params: { slug: string };
};

const calSans = fetch(new URL("./CalSans-SemiBold.ttf", import.meta.url)).then(
  (res) => res.arrayBuffer()
);

const bg = fetch(new URL("./og-bg.jpg", import.meta.url)).then((res) =>
  res.arrayBuffer()
);

export default async function handler(props: Props) {
  const fw = getFramework(props.params.slug);
  if (!fw) return notFound();

  const calSansData = await calSans;
  const bgData = await bg;

  const logoData = await fetch(
    `https://buildwith.app/frameworks/${fw.slug}.png`
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="flex">
        <img
          width="1200"
          height="630"
          src={bgData}
          tw="absolute inset-0"
          alt="Background"
        />
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
            <img src={logoData} tw="h-full" alt={fw.name} />
          </div>
          {fw.name}
        </div>
        <div tw="absolute bottom-10 right-10 text-xl">buildwith.app</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "cal-sans",
          data: calSansData,
          style: "normal",
        },
      ],
    }
  );
}
