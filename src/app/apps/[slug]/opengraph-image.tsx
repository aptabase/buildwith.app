// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
import { getFramework } from "@lib/frameworks";
import { notFound } from "next/navigation";
import { fetchFrameworkLogo, fetchLocalImage, OpenGraphImage } from "@lib/og";
import { getApp, App } from "@lib/apps";

export const runtime = "edge";

type Props = {
  params: { slug: string };
};

type MakerProfile = {
  twitter: string;
  avatar: ArrayBuffer;
};

const SingleMaker = ({ maker }: { maker: MakerProfile }) => {
  return (
    <div tw="flex flex-col">
      <span tw="text-2xl font-sans text-zinc-600 mb-1">Maker</span>
      <div tw="flex items-center">
        <div tw="flex max-h-12 items-center">
          <img
            src={maker.avatar}
            tw="h-full rounded-full"
            alt={maker.twitter}
          />
        </div>
        <span tw="text-4xl ml-2 mb-2">@{maker.twitter}</span>
      </div>
    </div>
  );
};

const MultipleMakers = ({ makers }: { makers: MakerProfile[] }) => {
  return (
    <div tw="flex flex-col">
      <span tw="text-2xl font-sans text-zinc-600 mb-1">Makers</span>
      <div tw="flex items-center">
        {makers.map((maker) => (
          <div tw="flex max-h-12 items-center mr-2" key={maker.twitter}>
            <img
              src={maker.avatar}
              tw="h-full rounded-full"
              alt={maker.twitter}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default async function handler(props: Props) {
  const app = getApp(props.params.slug);
  if (!app) return notFound();

  const fw = getFramework(app.framework);
  if (!fw) return notFound();

  const icon = await fetchLocalImage(app.icon_url);
  const fwLogo = await fetchFrameworkLogo(fw.slug);
  const makers: MakerProfile[] = await Promise.all(
    app.makers.map(async (m) => ({
      twitter: m.twitter,
      avatar: await fetchLocalImage(m.profile_img),
    }))
  );

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

        {makers.length === 1 ? (
          <SingleMaker maker={makers[0]} />
        ) : (
          <MultipleMakers makers={makers} />
        )}
      </div>

      <div tw="flex flex-col w-[60%] mt-14 text-3xl items-center">
        <span>&quot;{app.highlight}&quot;</span>
        <span tw="text-zinc-600 text-2xl mt-4">— {app.makers[0].name}</span>
      </div>
    </div>
  );
}
