import { Framework } from "@lib/frameworks";
import { GenerateOpenGraphImage } from "@lib/og/base";

export async function GenerateImage(
  framework: Framework,
  width: number,
  height: number
) {
  const logoData = await fetch(
    `https://buildwith.app/frameworks/${framework.slug}.png`
  ).then((res) => res.arrayBuffer());

  return await GenerateOpenGraphImage(
    <div tw="flex flex-col items-center">
      <div style={{ display: "flex" }} tw="max-h-20 max-w-20">
        <img src={logoData} tw="h-full" alt={framework.name} />
      </div>
      <span>{framework.name}</span>
    </div>,
    width,
    height
  );
}
