import chroma from "chroma-js";

interface hsvColor {
  h: number;
  s: number;
  v: number;
}

interface labColor {
  l: number;
  a: number;
  b: number;
}

interface rgbColor {
  r: number;
  g: number;
  b: number;
}

export interface IColor {
  hsv: hsvColor;
  hex: string;
  lab: labColor;
  rgb: rgbColor;
  rampFiltered?: boolean;
  wcagFiltered?: boolean;
}

export default function generateColor({ h, s, v }: hsvColor): IColor {
  const hex = chroma.hsv(h, s, v).hex();
  const [r, g, b] = chroma.hsv(h, s, v).rgb();
  const [labL, labA, labB] = chroma.hsv(h, s, v).lab();

  // Round to max of 2 decimals
  // Todo move to number util if needed elsewhere
  const round = (toRound: number): number => {
    return Math.round(toRound * 100) / 100;
  };

  return {
    hsv: { h, s, v },
    hex,
    lab: { l: round(labL), a: round(labA), b: round(labB) },
    rgb: { r, g, b },
  };
}
