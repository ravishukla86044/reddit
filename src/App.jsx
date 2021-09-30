import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { Community } from "./Components/Community/Community";
import { User } from "./Components/User/User";
import { Switch, Route } from "react-router-dom";
import { CommentsPage } from "./Components/Comments/CommentsPage";
import RegistrationModal from "./Components/HomePage/Registration/RegistrationModal";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {/* <HomePage /> */}
          <RegistrationModal />
        </Route>
        <Route exact path="/r/:community">
          <Community />
        </Route>
        <Route exact path="/r/:community/comments/:id">
          <CommentsPage />
        </Route>
        <Route path="/u/:user">
          <User />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
