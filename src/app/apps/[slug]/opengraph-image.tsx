// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
import { getFramework } from "@lib/frameworks";
import { notFound } from "next/navigation";
import { fetchFrameworkLogo, fetchLocalImage, OpenGraphImage } from "@lib/og";
import { getApp } from "@lib/apps";

export const runtime = "edge";

type Props = {
  params: { slug: string };
};

export default async function handler(props: Props) {
  const app = getApp(props.params.slug);
  if (!app) return notFound();

  const fw = getFramework(app.framework);
  if (!fw) return notFound();

  const icon = await fetchLocalImage(app.icon_url);
  const maker = await fetchLocalImage(app.author.profile_img);
  const fwLogo = await fetchFrameworkLogo(fw.slug);

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
        <div tw="flex max-h-40 items-center">
          <img src={icon} tw="h-full" alt={app.name} />
        </div>
        <div tw="flex flex-col ml-8 mb-6">
          <span tw="text-[6rem]">{app.name}</span>
          <span tw="text-[3rem] text-zinc-600">{app.description}</span>
        </div>
      </div>

      <div tw="flex items-center justify-around w-[50%] mt-10">
        <div tw="flex flex-col">
          <span tw="text-2xl font-sans text-zinc-600 mb-1">Built with</span>
          <div tw="flex items-center">
            <div tw="flex max-h-12 items-center">
              <img src={fwLogo} tw="h-full" alt={fw.name} />
            </div>
            <span tw="text-4xl ml-2 mb-2">{fw.name}</span>
          </div>
        </div>

        <div tw="flex flex-col">
          <span tw="text-2xl font-sans text-zinc-600 mb-1">Maker</span>
          <div tw="flex items-center">
            <div tw="flex max-h-12 items-center">
              <img src={maker} tw="h-full rounded-full" alt={app.author.name} />
            </div>
            <span tw="text-4xl ml-2 mb-2">@{app.author.twitter}</span>
          </div>
        </div>
      </div>

      <div tw="flex flex-col w-[60%] mt-14 text-3xl items-center">
        <span>&quot;{app.highlight}&quot;</span>
        <span tw="text-zinc-600 text-2xl mt-4">— {app.author.name}</span>
      </div>
    </div>
  );
}
