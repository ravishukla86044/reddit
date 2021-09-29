import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/HomePage/Navbar/Navbar";
// import RegistrationModal from './Components/HomePage/Registration/RegistrationModal'
function App() {
  return (
    <div className="App" style={{ background: "#dae0e6",}}>
      <Navbar />
      <HomePage />
      {/* <RegistrationModal /> */}
    </div>
  );
}

export default App;
