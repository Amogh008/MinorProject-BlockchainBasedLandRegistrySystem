import "./App.css";
import User from "./components/MainDash/User";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import LandInspectorSidebar from "./components/Sidebar/LandInspectorSidebar";
import MainDash from "./components/MainDash/MainDash";
import Home from "./components/MainDash/Home";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Routes>
          <Route path="user" element={<User />}>
            <Route path="home" element={<Home />} />
            <Route path="mainDash" element={<MainDash />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
