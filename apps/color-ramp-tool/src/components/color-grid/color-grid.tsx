import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

/* eslint-disable-next-line */
export interface ColorGridProps {}

const StyledColorGrid = styled.div`
  // color: pink;
  h1: {
    padding: 10px 0;
  }
`;

export function ColorGrid(props: ColorGridProps) {
  return (
    <StyledColorGrid>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <Typography variant="h6" component="h1" sx={{ pt: 2 }}>
              Color Ramp Tool
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <Button variant="text">Text</Button>
          </Grid>
          <Grid item xs="auto">
            <Button variant="contained">Contained</Button>
          </Grid>
          <Grid item xs="auto">
            <Button variant="outlined">Outlined</Button>
          </Grid>
        </Grid>
      </Box>
      {/* <Route
        path="/"
        render={() => <div>This is the color-grid root route.</div>}
      /> */}
    </StyledColorGrid>
  );
}

export default ColorGrid;
