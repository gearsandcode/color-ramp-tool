import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import HueControls from "../Hue/HueControls";
import { RampControls } from "../Ramps/RampControls";
import { DotGridControls } from "../DotGrid/DotGridControls";

export const ColorControls = () => {
  return (
    <Grid container>
      <Grid item>
        <HueControls></HueControls>
      </Grid>
      <Divider style={{ borderWidth: "1px" }} variant="middle" />
      <Grid item>
        <RampControls></RampControls>
      </Grid>
      <Divider style={{ borderWidth: "1px" }} variant="middle" />
      <Grid item>
        <DotGridControls></DotGridControls>
      </Grid>
    </Grid>
  );
};
