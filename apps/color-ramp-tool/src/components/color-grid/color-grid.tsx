import { Route, Link } from 'react-router-dom';

import styled from '@emotion/styled';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

/* eslint-disable-next-line */
export interface ColorGridProps {}

const StyledColorGrid = styled.div`
  color: pink;
`;

export function ColorGrid(props: ColorGridProps) {
  return (
    <StyledColorGrid>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Color Ramp Tool
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <Route
        path="/"
        render={() => <div>This is the color-grid root route.</div>}
      /> */}
    </StyledColorGrid>
  );
}

export default ColorGrid;
