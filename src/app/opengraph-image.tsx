import { GenerateOpenGraphImage } from "@lib/og/base";

export default async function handler() {
  return await GenerateOpenGraphImage(
    <div tw="max-w-[80rem] ml-20 mr-20">
      The best framework for your next app.
    </div>,
    1200,
    630
  );
}
