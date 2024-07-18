import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Box, Divider, Typography } from "@mui/material";
// import { WcagItem } from "./WcagItem";

// const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function WcagControls() {
  // const dispatch = useDispatch();
  // const wcag = useTypedSelector(selectWcag);

  // useEffect(() => {
  //   dispatch(updateGrid(hue.hueValue));
  // }, [dispatch, hue]);

  const [open, setOpen] = React.useState(false);
  // const [hueFormValue, setHueFormValue] = useState(hue.hueValue);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(updateWcag());
    // handleClose();
  };

  const handleClickOpen = () => {
    handleMenuClose();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const WcagControlsStyles = {
    colorBlock: {
      backgroundColor: "#fff",
      height: "24px",
      width: "24px",
    },
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        variant="contained"
        startIcon={<AccessibilityNewIcon />}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Wcag Contrast
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
          <Typography variant="body1">Coming soon...</Typography>
        </MenuItem>
        <Divider></Divider>
        <MenuItem onClick={handleClickOpen}>
          <Typography variant="body1">AAA Large (4.5:1)</Typography>
          <span
            className="colorBlock"
            style={WcagControlsStyles.colorBlock}
          ></span>
        </MenuItem>
        <Divider></Divider>
        <MenuItem>
          <FormGroup>
            <FormControlLabel
              control={<Switch />}
              label="WCAG contrast filter"
            />
          </FormGroup>
        </MenuItem>
        <MenuItem onClick={handleClickOpen}>
          View / modify filter values
        </MenuItem>
      </Menu>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Update WCAG Contrast
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
            <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
              {/* <WcagItem></WcagItem> */}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" type="submit">
              Update Contrast
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
