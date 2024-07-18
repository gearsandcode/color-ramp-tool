import Grid from "@mui/material/Grid";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { TwitterPicker } from "react-color";

export const WcagItem = () => {
  // const WcagItemStyles = {
  //   colorBlock: {
  //     backgroundColor: "#fff",
  //     margin: "0 8px 0 0",
  //     height: "24px",
  //     width: "24px",
  //   },
  // };

  return (
    <Grid container direction="row" alignItems="center">
      <Grid item>
        <FormControl sx={{ minWidth: 240 }}>
          <InputLabel id="contrast-constraint">
            Contrast Constraint
          </InputLabel>
          <Select
            labelId="contrast-constraint"
            id="contrast-constraint-select"
            value="AANormal"
            label="Contrast Constraint"
            sx={{ mb: 2 }}
            // onChange={handleChange}
          >
            <MenuItem value="AANormal">AA Normal (4.5:1)</MenuItem>
            <MenuItem value="AALarge">AA Large (3:1)</MenuItem>
            <MenuItem value="AAANormal">AAA Normal (7:1)</MenuItem>
            <MenuItem value="AAALarge">AAA Large (4.5:1)</MenuItem>
          </Select>
          <Typography variant="caption">Contrast Color</Typography>
          <TwitterPicker
            width="300"
            onChangeComplete={(e) => console.log(e)}
            triangle="hide"
            colors={["#FFFFFF", "#000000"]}
          ></TwitterPicker>
        </FormControl>
      </Grid>
    </Grid>
  );
};
