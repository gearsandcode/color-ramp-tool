import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import ExposureIcon from "@mui/icons-material/Exposure";
import IconButton from "@mui/material/IconButton";
import { ColorResult, HuePicker } from "react-color";

import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

import { selectHue, updateHue } from "./HueSlice";
import { updateGrid } from "../DotGrid/DotGridSlice";
import { RootState } from "../../store";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function HueControls() {
  const dispatch = useDispatch();
  const hue = useTypedSelector(selectHue);

  useEffect(() => {
    dispatch(updateGrid(hue.hueValue));
  }, [dispatch, hue]);

  const [open, setOpen] = React.useState(false);
  const [hueFormValue, setHueFormValue] = useState(hue.hueValue);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateHue(hueFormValue));
    handleClose();
  };

  const handleChangeComplete = (color: ColorResult) => {
    setHueFormValue(Math.round(color.hsl?.h).toString());
  }

  const handleformChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHueFormValue(e.currentTarget.value);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const HueControlsStyles = {
    buttonContainer: {
      display: "flex",
      alignItems: "center",
    },
    colorBlock: {
      backgroundColor: hue.hueHexValue,
    },
  };

  return (
    <div style={HueControlsStyles.buttonContainer}>
      <Button
        variant="contained"
        startIcon={<ExposureIcon />}
        onClick={handleClickOpen}
      >
        Hue {hue.hueValue}
      </Button>
      <span className="colorBlock" style={HueControlsStyles.colorBlock}></span>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Update Hue
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <form onSubmit={(e) => onSubmit(e)}>
          <DialogContent>
            <TextField
              margin="dense"
              size="small"
              id="hue"
              fullWidth
              aria-label="Update hue"
              variant="outlined"
              onChange={(e) => handleformChange(e)}
              value={hueFormValue}
              inputProps={{
                step: 1,
                min: 0,
                max: 360,
                type: "number",
              }}
            />

            <HuePicker color={hueFormValue} onChangeComplete={ handleChangeComplete }></HuePicker>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" type="submit">
              Update Hue
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
