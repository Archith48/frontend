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
import QuestionN from './QuestionNew';
import SearchUser from './SearchUser';
import SearchPost from './SearchPost';
import SearchTag from './SearchTag';
import Users from './Users';
import Profile from './Profile';

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
              <QuestionN />
            </Route>
            <Route path='/users'>
              <Users />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </Grid>
    </div>
  );
}


// function App() {
//   document.title = "Skill Enhancment Portal"
//   return (   
//     <div>
//       <NavBar />
//       <Router>
//       <Switch>      
//         <Route exact path="/searchuser" component={SearchUser}/>
//         <Route exact path="/searchpost" component={SearchPost}/>
//         <Route exact path="/searchTags" component={SearchTag}/>
//         <Route exact path="/question" component={Question}/>
//         <Route eaxct path="/trending" component={Trending}/>
//       </Switch>
//       </Router>
//     </div>
   
//   );
// }


export default App;