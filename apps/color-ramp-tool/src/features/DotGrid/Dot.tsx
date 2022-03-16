import { IColor } from "../../util/generateColor";

import "./Dot.scss";

function Dot({ color }: { color: IColor }) {
  const tip = `
    ${color.hex}
    <br/>
    rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})
    <br/>
    lab(${color.lab.l}, ${color.lab.a}, ${color.lab.b}
  })
  `;
  return (
    <span
      className={color.rampFiltered ? "dot" : "dot hover-target"}
      style={{ backgroundColor: color.rampFiltered ? "#fff" : color.hex }}
      data-clipboard-text={color.hex}
      data-tip={color.rampFiltered ? "" : tip}
      data-multiline="true"
      data-for="grid-tooltip"
    />
  );
}

export default Dot;
