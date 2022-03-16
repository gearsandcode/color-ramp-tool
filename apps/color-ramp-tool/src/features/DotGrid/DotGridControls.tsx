import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../store";

import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import SegmentIcon from "@mui/icons-material/Segment";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
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
    console.log(SGrayscaleActive);
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
        label="Grayscale"
      />
    </FormGroup>
  );
};
function useTypedSelector(selectRampActive: any) {
  throw new Error("Function not implemented.");
}
