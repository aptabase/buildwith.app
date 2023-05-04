// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";

const fetchCalSans = fetch(
  `https://buildwith.app/og-assets/CalSans-SemiBold.ttf`
).then((res) => res.arrayBuffer());

const fetchBackground = fetch(`https://buildwith.app/og-assets/og-bg.jpg`).then(
  (res) => res.arrayBuffer()
);

export const fetchFrameworkLogo = (slug: string) =>
  fetch(`https://buildwith.app/og-assets/${slug}.png`).then((res) =>
    res.arrayBuffer()
  );

export async function OpenGraphImage(children: JSX.Element) {
  const calSans = await fetchCalSans;
  const bg = await fetchBackground;

  return new ImageResponse(
    (
      <div tw="flex text-gray-800">
        <img
          width="1200"
          height="630"
          src={bg}
          tw="absolute inset-0"
          alt="Background"
        />
        {children}
        <div tw="absolute bottom-10 right-10 text-xl">buildwith.app</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "cal-sans",
          data: calSans,
          style: "normal",
        },
      ],
    }
  );
}
