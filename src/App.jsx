import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { Community } from "./Components/Community/Community";
import { User } from "./Components/User/User";
import { Switch, Route } from "react-router-dom";
import { CommentsPage } from "./Components/Comments/CommentsPage";
import Navbar from "./Components/HomePage/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/r/:communityId">
          <Community />
        </Route>
        <Route exact path="/r/:community/comments/:commentId">
          <CommentsPage />
        </Route>
        <Route path="/user/:userId">
          <User />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
