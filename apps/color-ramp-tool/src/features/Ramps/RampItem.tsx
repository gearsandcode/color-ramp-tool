import { useState } from "react";
import { TRamp } from "./RampSlice";

import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

interface RampItemProps {
  ramp: TRamp;
  updateRampItem: (arg: TRamp) => void;
  removeRampItem: (arg: TRamp) => void;
}

export const RampItem = ({
  ramp,
  updateRampItem,
  removeRampItem,
}: RampItemProps) => {
  const [name, setName] = useState(ramp.name);
  const [lightness, setLightness] = useState(ramp.lightness);

  const updateRampName = ({ name = ramp.name, lightness = ramp.lightness }) => {
    setName(name);
    setLightness(lightness);

    // Todo: figure out React lifecycles so this can be removed.
    setTimeout(() => {
      updateRampItem({
        id: ramp.id,
        name: name,
        lightness: lightness,
      });
    }, 1);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <TextField
            margin="dense"
            size="small"
            id="name"
            label="Name"
            variant="outlined"
            onChange={(e) => updateRampName({ name: e.target.value })}
            value={name}
          />
        </Grid>
        <Grid item>
          <TextField
            margin="dense"
            size="small"
            id="lightness"
            label="L Value"
            variant="outlined"
            onChange={(e) => updateRampName({ lightness: e.target.value })}
            value={lightness}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: "number",
            }}
          />
        </Grid>
        <Grid item>
          <IconButton
            onClick={() => removeRampItem(ramp)}
            color="error"
            aria-label="Delete Ramp"
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};
