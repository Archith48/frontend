import '@fontsource/roboto';
import Grid from "@material-ui/core/Grid";

import AskQuestion from './AskQuestion';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Header1 from './Header1';
import Trending from './Trending';

function App() {
  document.title = "Skill Enhancment Portal"
  return (
    <div>
      <Grid>
      <NavBar />
        <Router>
          <Switch>
            <Route path='/askquestion'>
              <AskQuestion />
            </Route>
            <Route path='/questions'>
              <Header1 />
            </Route>
            <Route path='/trending'>
              <Header1 />
              <Trending />
            </Route>
          </Switch>
        </Router>
      </Grid>
    </div>
  );
}

export default App;
