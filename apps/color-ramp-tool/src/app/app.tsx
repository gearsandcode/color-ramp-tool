import "./App.scss";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { DotGrid } from "../features/DotGrid/DotGrid";
import { Controls } from "../features/Controls/Controls";

interface AppProps {
  hueValue?: string;
}

export default function App(props: AppProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" component="h1" sx={{ pl: 3, pt: 1 }}>
            Color Ramp Tool
          </Typography>
        </Grid>
        <Grid container item sx={{ pl: 2, pt: 2 }}>
          <Grid item sx={{ pl: 3 }}>
            <Controls></Controls>
          </Grid>
        </Grid>
        {/* 
        <Grid container item spacing={3} xs={12}></Grid> */}

        <Grid item xs="auto">
          {/* <Controls
            hueValue={hueValue}
            handleHueValueChange={this.handleHueValueChange}
            handleHueSubmit={this.handleHueSubmit}
            showColorRamps={showColorRamps}
            handleColorRampsChange={this.handleColorRampsChange}
            colorRampStyle={colorRampStyle}
            handleColorRampStyleChange={this.handleColorRampStyleChange}
          /> */}
          {/* <WcagControls
            fontSize={fontSize}
            handleFontSizeChange={this.handleFontSizeChange}
            showWcagContrast={showWcagContrast}
            handleWcagContrastChange={this.handleWcagContrastChange}
          /> */}
        </Grid>
        <Grid item xs>
          <DotGrid></DotGrid>
        </Grid>
      </Grid>
    </Box>
  );
}
