import { IColor } from "../../util/generateColor";
import { grayScaleLab, grayScaleRgb } from "../../util/grayScaleHex";

import "./Dot.scss";

function Dot({ color }: { color: IColor }) {
  const tipColor = color.grayFiltered ? color.grayscale : color.hex;
  const tipRgb = color.grayFiltered
    ? grayScaleRgb({ r: color.rgb.r, g: color.rgb.g, b: color.rgb.b })
    : `${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}`;
  const tipLab = color.grayFiltered
    ? grayScaleLab({ r: color.rgb.r, g: color.rgb.g, b: color.rgb.b })
    : `${color.lab.l}, ${color.lab.a}, ${color.lab.b}`;
  const tip = `
    ${tipColor}
    <br/>
    rgb(${tipRgb})
    <br/>
    lab(${tipLab}})
  `;
  return (
    <span
      className={color.rampFiltered ? "dot" : "dot hover-target"}
      style={{
        backgroundColor: color.rampFiltered
          ? "#fff"
          : color.grayFiltered
          ? color.grayscale
          : color.hex,
      }}
      data-clipboard-text={color.hex}
      data-tip={color.rampFiltered ? "" : tip}
      data-multiline="true"
      data-for="grid-tooltip"
    />
  );
}

export default Dot;
