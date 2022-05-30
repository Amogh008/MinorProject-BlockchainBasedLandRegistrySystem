import "./App.css";
import Home from "./components/MainDash/Home";
import MyLands from "./components/MainDash/MyLands";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/user" element={<MyLands />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
