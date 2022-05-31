import "./App.css";
import User from "./components/MainDash/User";
import { Routes, Route } from "react-router-dom";
import MainDash from "./components/MainDash/MainDash";
import LandInspector from "./components/MainDash/LandInspector";
import pngegg from "./images/pngegg.png";
import UserDashboard from "./components/MainDash/UserMainDash/Dashboard";
import MyLands from "./components/MainDash/UserMainDash/MyLands";
import AddLand from "./components/MainDash/UserMainDash/AddLands";
import ForSale from "./components/MainDash/UserMainDash/ForSale";
import ReceivedRequests from "./components/MainDash/UserMainDash/ReceivedRequests";
import SentRequests from "./components/MainDash/UserMainDash/SentRequests";
import InspectorDashboard from "./components/MainDash/InspectorMainDash/Dashboard";
import TransferOwnership from "./components/MainDash/InspectorMainDash/TransferOwnership";
import VerifyLand from "./components/MainDash/InspectorMainDash/VerifyLands";
import VerifyUser from "./components/MainDash/InspectorMainDash/VerifyUser";
function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <MainDash />
                <img src={pngegg} alt="logo" />
              </div>
            }
          />
          <Route path="user" element={<User />}>
            <Route path="Dashboard" element={<UserDashboard />} />
            <Route path="AddLand" element={<AddLand />} />
            <Route path="MyLands" element={<MyLands />} />
            <Route path="ForSale" element={<ForSale />} />
            <Route path="ReceivedRequests" element={<ReceivedRequests />} />
            <Route path="SentRequests" element={<SentRequests />} />
          </Route>
          <Route path="inspector" element={<LandInspector />}>
            <Route path="Dashboard" element={<InspectorDashboard />} />
            <Route path="verifyUser" element={<VerifyUser />} />
            <Route path="TransferOwnership" element={<TransferOwnership />} />
            <Route path="VerifyLand" element={<VerifyLand />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
