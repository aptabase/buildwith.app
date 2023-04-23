import { GenerateOpenGraphImage } from "@lib/og/base";

export default async function handler() {
  return await GenerateOpenGraphImage(<>Hello World</>, 1200, 600);
}
