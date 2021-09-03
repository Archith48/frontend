import '@fontsource/roboto';
import Grid from "@material-ui/core/Grid";

import AskQuestion from './AskQuestion';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Header1 from './Header1';
import Trending from './Trending';
import Question from './Question';
import AllQuestions from './AllQuestions';
import Home from './Home';

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
              <Header1 heading = "All Questions"/>
              <AllQuestions />
            </Route>
            <Route path='/trending'>
              <Header1 heading = "Trending Questions"/>
              <Trending />
            </Route>
            <Route path='/question'>
              <Header1 heading = "Question Title" />
              <Question />
            </Route>
          </Switch>
        </Router>
      </Grid>
    </div>
  );
}

export default App;
