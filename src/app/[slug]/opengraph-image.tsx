import { ImageResponse } from "next/server";

export default function OpenGraph() {
  return new ImageResponse(<div></div>, {
    width: 1200,
    height: 600,
  });
}
