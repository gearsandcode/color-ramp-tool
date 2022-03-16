import React from "react";
import { IColor } from "../../util/generateColor";
import { grayScaleLab, grayScaleRgb } from "../../util/grayScaleHex";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./Dot.scss";

function Dot({ color }: { color: IColor }) {
  const [copyValue] = React.useState(color.hex);
  const [copyState, setCopyState] = React.useState(false); // Use later for a toast
  const [hoverState, setHoverState] = React.useState(false); // Use later for a toast

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

  var linkStyle;
  if (hoverState) {
    linkStyle = {
      backgroundColor: color.rampFiltered
        ? "#fff"
        : color.grayFiltered
        ? color.grayscale
        : color.hex,
      cursor: "pointer",
      boxShadow: `0px 0px 0px 4px ${color.hex}, 0 0 0 6px #000`,
      zIndex: 100,
    };
  } else {
    linkStyle = {
      backgroundColor: color.rampFiltered
        ? "#fff"
        : color.grayFiltered
        ? color.grayscale
        : color.hex,
    };
  }

  const toggleHover = () => {
    setHoverState(!hoverState);
  };

  return (
    <CopyToClipboard text={copyValue} onCopy={() => setCopyState(true)}>
      <div
        className={color.rampFiltered ? "dot" : "dot hover-target"}
        style={linkStyle}
        data-clipboard-text={color.hex}
        data-tip={color.rampFiltered ? "" : tip}
        data-multiline="true"
        data-for="grid-tooltip"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <span className="label"></span>
      </div>
    </CopyToClipboard>
  );
}

export default Dot;
