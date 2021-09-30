import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { Community } from "./Components/Community/Community";
import { User } from "./Components/User/User";
import { Switch, Route,useLocation } from "react-router-dom";
import { CommentsPage } from "./Components/Comments/CommentsPage";
import Navbar from "./Components/HomePage/Navbar/Navbar";
import RegistrationModal from "./Components/HomePage/Registration/RegistrationModal"

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/account" ? null : <Navbar />
      }
      <Switch>
        <Route path="/account">
          <RegistrationModal />
        </Route>
        <Route exact path="/">
          <HomePage />
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
