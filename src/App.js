import HomeScreen from './homeScreen.js';
import Quiz from './quiz';
import Timer from './timer';
import Result from "./result";
import './App.css';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
          <Switch>
              <Route exact path = "/" component = {HomeScreen} />
              <Route path = "/quiz" component = {Quiz} />
              <Route path = "/time" component = {Timer} />
              <Route path = "/result" component = {Result} />
          </Switch>
      </Router>
      </>
  );
}

export default App;
