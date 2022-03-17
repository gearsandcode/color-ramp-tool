import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import HueControls from "../Hue/HueControls";
import { RampControls } from "../Ramps/RampControls";
import { DotGridControls } from "../DotGrid/DotGridControls";
import WcagControls from "../Wcag/WcagControls";

export const Controls = () => {
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
        <WcagControls></WcagControls>
      </Grid>
      <Divider style={{ borderWidth: "1px" }} variant="middle" />
      <Grid item>
        <DotGridControls></DotGridControls>
      </Grid>
    </Grid>
  );
};
