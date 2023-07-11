import "./App.css";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App flex-1">
      <SideBar/>
      <div>
        <h2>Nav bar</h2>
        <h2>Pages</h2>
      </div>
    </div>
  );
}

export default App;
