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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  selectRampList,
  resetRamps,
  updateRamps,
  removeRamp,
  TRamp,
  toggleRamps,
  selectRampActive,
} from "./RampSlice";

import { RampItem } from "./RampItem";
import { AddRamp } from "./AddRamp";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { applyRampFilter, removeRampFilter } from "../DotGrid/DotGridSlice";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const RampControls = () => {
  const SRamps = useTypedSelector(selectRampList);
  const SRampsActive = useTypedSelector(selectRampActive);
  let rampList = SRamps;

  const [open, setOpen] = React.useState(false);
  const [rampsActive, setRampsActive] = React.useState(false);

  const onUpdateRampItem = (ramp: TRamp): void => {
    const matchedIndex = SRamps.findIndex((match) => match.id === ramp.id);
    rampList[matchedIndex] = { ...ramp };
  };

  const updateRampControls = () => {
    handleClose();
    dispatch(updateRamps(rampList));
    dispatch(applyRampFilter({ list: rampList }));
  };

  const onRemoveRampItem = (ramp: TRamp): void => {
    dispatch(removeRamp(ramp.id));
  };

  const handleClickOpen = () => {
    handleMenuClose();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRampToggle = () => {
    handleMenuClose();
    setRampsActive(!rampsActive);
    dispatch(toggleRamps());
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (SRampsActive) {
      dispatch(applyRampFilter({ list: rampList }));
    } else {
      dispatch(removeRampFilter());
    }
  }, [dispatch, rampList, SRamps, SRampsActive]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [confirmOpen, setConfirmOpen] = React.useState(false);

  const handleConfirmClose = () => {
    setConfirmOpen(false);
  };

  const handleConfirmOpen = () => {
    handleMenuClose();
    setConfirmOpen(true);
  };

  const handleRampReset = () => {
    dispatch(resetRamps());
    handleConfirmClose();
  };

  return (
    <div>
      <div>
        <Button
          id="basic-button"
          variant="contained"
          aria-controls={openMenu ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={handleClick}
          startIcon={<SegmentIcon />}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Color Ramps
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch onChange={handleRampToggle} checked={rampsActive} />
                }
                label="Color ramp filter"
              />
            </FormGroup>
          </MenuItem>
          <MenuItem onClick={handleClickOpen}>
            View / modify filter values
          </MenuItem>
          <MenuItem onClick={handleConfirmOpen}>
            Reset filter values to defaults
          </MenuItem>
        </Menu>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
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
        <DialogContent>
          <AddRamp></AddRamp>
          <Typography variant="h6" sx={{ p: 2 }}>
            Edit Ramps
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            {rampList.map((ramp: TRamp) => (
              <RampItem
                key={ramp.id}
                ramp={ramp}
                updateRampItem={onUpdateRampItem}
                removeRampItem={onRemoveRampItem}
              ></RampItem>
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            type="button"
            onClick={updateRampControls}
          >
            Update Ramps
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={confirmOpen} onClose={handleConfirmClose}>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          This will reset the ramp values to the default values.
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            type="button"
            autoFocus
            onClick={handleConfirmClose}
          >
            Cancel
          </Button>
          <Button variant="contained" type="button" onClick={handleRampReset}>
            Yes, Reset Ramps
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
