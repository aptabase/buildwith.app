// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";

import android from "./assets/android.png";
import apple from "./assets/apple.png";
import capacitor from "./assets/capacitor.png";
import dotnetmaui from "./assets/dotnetmaui.png";
import electron from "./assets/electron.png";
import flutter from "./assets/flutter.png";
import nativescript from "./assets/nativescript.png";
import reactnative from "./assets/reactnative.png";
import tauri from "./assets/tauri.png";

const frameworkLogos = {
  android,
  apple,
  capacitor,
  dotnetmaui,
  electron,
  flutter,
  nativescript,
  reactnative,
  tauri,
};

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const fetchCalSans = fetch(
  new URL(`./assets/CalSans-SemiBold.ttf`, import.meta.url)
).then((res) => res.arrayBuffer());

const fetchBackground = fetch(
  new URL(`./assets/og-bg.jpg`, import.meta.url)
).then((res) => res.arrayBuffer());

export const fetchLocalImage = (path: string) =>
  fetch(new URL(path, baseUrl)).then((x) => x.arrayBuffer());

export const fetchFrameworkLogo = (slug: string) => {
  return fetch(new URL(frameworkLogos[slug].src, baseUrl)).then((x) =>
    x.arrayBuffer()
  );
};

export async function OpenGraphImage(children: JSX.Element) {
  const calSans = await fetchCalSans;
  const bg = await fetchBackground;

  return new ImageResponse(
    (
      <div tw="flex text-zinc-800">
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
