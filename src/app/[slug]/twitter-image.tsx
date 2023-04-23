import { getFramework } from "@lib/frameworks";
import { GenerateImage } from "./og-image";

type Props = {
  params: { slug: string };
};

export default async function handler(props: Props) {
  const fw = getFramework(props.params.slug);
  return await GenerateImage(fw, 1200, 600);
}
