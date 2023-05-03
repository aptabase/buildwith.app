// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
import { getFramework } from "@lib/frameworks";
import { ImageResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function handler(props: Props) {
  const fw = getFramework(props.params.slug);
  if (!fw) return notFound();

  const calSansData = await readFile(
    path.join(
      fileURLToPath(import.meta.url),
      "../../../../node_modules/cal-sans/fonts/webfonts/CalSans-SemiBold.ttf"
    )
  );
  const bgData = await readFile(
    path.join(fileURLToPath(import.meta.url), "../../../../public/og-bg.jpg")
  );

  const fwLogoData = await readFile(
    path.join(
      fileURLToPath(import.meta.url),
      `../../../../public/frameworks/${props.params.slug}.png`
    )
  );

  return new ImageResponse(
    (
      <div tw="flex">
        <img
          width="1200"
          height="630"
          src={new Uint8Array(bgData).buffer}
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
            <img
              src={new Uint8Array(logoData).buffer}
              tw="h-full"
              alt={fw.name}
            />
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
          data: new Uint8Array(calSansData).buffer,
          style: "normal",
        },
      ],
    }
  );
}
