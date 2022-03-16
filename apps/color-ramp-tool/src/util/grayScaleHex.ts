import { hsvColor } from "./generateColor";
import chroma from "chroma-js";

export default function grayScaleHex({ h, s, v }: hsvColor): string {
  const [r, g, b] = chroma.hsv(h, s, v).rgb();
  const gray = r * 0.3 + g * 0.59 + b * 0.11;
  return chroma.rgb(gray, gray, gray).hex();
}
