import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { Community } from "./Components/Community/Community";
import { User } from "./Components/User/User";
import { Switch, Route } from "react-router-dom";
import { CommentsPage } from "./Components/Comments/CommentsPage";
import Navbar from "./Components/HomePage/Navbar/Navbar";
/* import { CommunitySidebar } from "./Components/CommunitySidebar/CommunitySidebar";
 */
import { ProfileSidebar } from "./Components/ProfileSidebar/ProfileSidebar";
function App() {
  return (
    <div className="App">
      <ProfileSidebar />
      {/* <Navbar />
      <Switch>
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
      </Switch>{" "} */}
    </div>
  );
}

export default App;
