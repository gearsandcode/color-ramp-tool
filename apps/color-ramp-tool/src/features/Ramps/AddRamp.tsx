import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch } from "react-redux";
import { addRamp } from "./RampSlice";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const AddRamp = () => {
  const [name, setName] = useState("");
  const [lightness, setLightness] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName("");
    setLightness("");

    dispatch(
      addRamp({
        id: Date.now().toString(),
        lightness,
        name,
      })
    );
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography variant="h6" sx={{ p: 2 }}>
        Add ramp
      </Typography>
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
            onChange={(e) => setName(e.target.value)}
            value={name}
            required={true}
          />
        </Grid>
        <Grid item>
          <TextField
            margin="dense"
            size="small"
            id="lightness"
            label="L Value"
            variant="outlined"
            onChange={(e) => setLightness(e.target.value)}
            value={lightness}
            required={true}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: "number",
            }}
          />
        </Grid>
        <Grid item>
          <IconButton type="submit" color="success" aria-label="Add Ramp">
            <AddCircleIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};
