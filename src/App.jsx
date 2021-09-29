import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/HomePage/Navbar/Navbar";

function App() {
  return (
    <div className="App" style={{ background: "#dae0e6",}}>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
