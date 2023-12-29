import "./App.css";
import MainComponent from "./components/Main";
import SideComponent from "./components/SideComponent";

function App() {
  return (
    <div className="flex">
      <SideComponent />
      <MainComponent />
    </div>
  );
}

export default App;
