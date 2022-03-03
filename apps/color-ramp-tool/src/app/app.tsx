import styled from '@emotion/styled';
import ColorGrid from '../components/color-grid/color-grid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <Router>
      <StyledApp>
        <Switch>
          <Route path="/">
            <ColorGrid/>
          </Route>
        </Switch>
      </StyledApp>
    </Router>
  );
}

export default App;
