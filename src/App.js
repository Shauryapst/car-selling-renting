import "./App.css";
import SearchBar  from './components/SearchBar/SearchBar';
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar/>
      <div className="w-screen">
        <SearchBar/>
        <h2>Pages</h2>
      </div>
    </div>
  );
}

export default App;
