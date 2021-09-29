import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { Community } from "./Components/Community/Community";
import { User } from "./Components/User/User";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/r/:community">
          <Community />
        </Route>
        <Route path="/u/:user">
          <User />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
