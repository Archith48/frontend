import '@fontsource/roboto';
import AskQuestion from './AskQuestion';
import NavBar from './NavBar';

function App() {
  document.title = "Skill Enhancment Portal"
  return (
    <div>
      <NavBar />
      <AskQuestion />
    </div>
  );
}

export default App;
