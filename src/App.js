import '@fontsource/roboto';
import Grid from "@material-ui/core/Grid";

import AskQuestion from './AskQuestion';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Trending from './Trending';
import AllQuestions from './AllQuestions';
import Home from './Home';
import Question from './Question';
import SearchUser from './SearchUser';
import SearchPost from './SearchPost';
import SearchTag from './SearchTag';
import Users from './Users';
import Profile from './Profile';

// function App() {
//   document.title = "Skill Enhancment Portal"
//   return (
//     <div>
//       <Grid>
//       <NavBar />
//         <Router>
//           <Switch>
//             <Route path='/askquestion'>
//               <AskQuestion />
//             </Route>
//             <Route path='/questions'>
//               <AllQuestions />
//             </Route>
//             <Route path='/trending'>
//               <Trending />
//             </Route>
//             <Route path='/question'>
//               <Question />
//             </Route>
//             <Route path='/users'>
//               <Users />
//             </Route>
//             <Route path='/profile'>
//               <Profile />
//             </Route>
//             <Route path='/'>
//               <Home />
//             </Route>
//           </Switch>
//         </Router>
//       </Grid>
//     </div>
//   );
// }


function App() {
  document.title = "Skill Enhancment Portal"
  return (   
    <div>
      <Router>
      <Switch>     
        <Route exact path="/questions" component={AllQuestions}/>
        <Route exact path="/profile" component={Profile}/> 
        <Route exact path="/users" component={Users}/>
        <Route exact path="/askquestion" component={AskQuestion}/>
        <Route exact path="/searchuser" component={SearchUser}/>
        <Route exact path="/searchpost" component={SearchPost}/>
        <Route exact path="/searchTags" component={SearchTag}/>
        <Route exact path="/question" component={Question}/>
        <Route exact path="/trending" component={Trending}/>
        <Route path= "/" component={Home}/>
      </Switch>
      </Router>
    </div>
  );
}


export default App;