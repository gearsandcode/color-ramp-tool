import ReactTooltip from "react-tooltip";
import { RootState } from "../../store";

import Dot from "./Dot";
import "./DotGrid.css";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { selectGrid, TGrid } from "./DotGridSlice";
import React, { useEffect } from "react";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const DotGrid = () => {
  const dotGrid = useTypedSelector(selectGrid);

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  return (
    <React.Fragment>
      <section className={"dot-grid"}>
        {dotGrid.map((dot: TGrid, index) => (
          <Dot key={index} color={dot.color}></Dot>
        ))}
      </section>
      <ReactTooltip id="grid-tooltip" effect="solid" />
    </React.Fragment>
  );
};
