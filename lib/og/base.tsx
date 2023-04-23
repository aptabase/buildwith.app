/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";

const bg = fetch("https://buildwith.app/og-bg.jpg").then((res) =>
  res.arrayBuffer()
);

const calSans = fetch(
  "https://github.com/calcom/font/raw/c7f20266c2f903821238fc3fe744ded53302a3b1/fonts/webfonts/CalSans-SemiBold.ttf"
).then((res) => res.arrayBuffer());

export async function GenerateOpenGraphImage(
  content: JSX.Element,
  width: number,
  height: number
) {
  const calSansData = await calSans;
  const bgData = await bg;

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
          {content}
        </div>
      </div>
    ),
    {
      width,
      height,
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
