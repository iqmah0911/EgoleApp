import Home from './pages/home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
