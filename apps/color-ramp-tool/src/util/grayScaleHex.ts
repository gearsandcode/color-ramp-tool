import { hsvColor, rgbColor } from "./generateColor";
import chroma from "chroma-js";
import { round } from "./formatNumbers";

export function grayScaleHex({ h, s, v }: hsvColor): string {
  const [r, g, b] = chroma.hsv(h, s, v).rgb();
  const gray = r * 0.3 + g * 0.59 + b * 0.11;
  return chroma.rgb(gray, gray, gray).hex();
}

export function grayScaleRgb({ r, g, b }: rgbColor): string {
  const gray = r * 0.3 + g * 0.59 + b * 0.11;
  return `${r}, ${g}, ${b}`;
}

export function grayScaleLab({ r, g, b }: rgbColor): string {
  const gray = r * 0.3 + g * 0.59 + b * 0.11;
  const [labL, labA, labB] = chroma.rgb(gray, gray, gray).lab();
  return `${round(labL)}, ${round(labA)}, ${round(labB)}`;
}
