import styled from '@emotion/styled';
import ColorGrid from '../components/color-grid/color-grid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <Router>
      <StyledApp>
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
              Color Ramp Tools
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/">
            <ColorGrid/>
          </Route>
        </Switch>
      </Box>
      </StyledApp>
    </Router>
  );
}

export default App;
