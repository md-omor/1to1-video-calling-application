import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CallEnd from "./app/screens/CallEnd";
import CallScreen from "./app/screens/CallScreen";
import Welcome from "./app/screens/Welcome";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <CallScreen />
          </Route>
          <Route exact path="/callend">
            <CallEnd />
          </Route>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
