import React, { useEffect } from "react";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import { RootState } from "../../store";

import {
  applyGrayscaleFilter,
  removeGrayscaleFilter,
  selectGrayscaleActive,
  toggleGrayscale,
} from "./DotGridSlice";

export const DotGridControls = () => {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

  const SGrayscaleActive = useTypedSelector(selectGrayscaleActive);
  const dispatch = useDispatch();
  const [grayscaleActive, setGrayscaleActive] = React.useState(false);

  useEffect(() => {
    if (SGrayscaleActive) {
      dispatch(applyGrayscaleFilter());
    } else {
      dispatch(removeGrayscaleFilter());
    }
  }, [dispatch, SGrayscaleActive]);

  const handleGrayToggle = () => {
    setGrayscaleActive(!grayscaleActive);
    dispatch(toggleGrayscale());
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch onChange={handleGrayToggle} checked={grayscaleActive} />
        }
        label="Grayscale filter"
      />
    </FormGroup>
  );
};
