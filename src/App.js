import "./App.css";
import User from "./components/MainDash/User";
import { Routes, Route, Navigate } from "react-router-dom";
import LandInspector from "./components/MainDash/LandInspector";
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
import SignIn from "./components/MainDash/SignIn/SignIn";
import { useContext } from "react";
import { SocketContext } from "./context/SocketContext";

function App() {
  const { loggedIn, isUser, isInspector, loading, detectChange } = useContext(
    SocketContext
  );

  return (
    <div className="App">
      <div className="AppGlass">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <SignIn />
              </div>
            }
          />
          <Route
            path="user"
            element={
              loggedIn && isUser ? <User /> : <Navigate replace to="/" />
            }
          >
            <Route path="Dashboard" element={<UserDashboard />} />
            <Route path="AddLand" element={<AddLand />} />
            <Route path="MyLands" element={<MyLands />} />
            <Route path="ForSale" element={<ForSale />} />
            <Route path="ReceivedRequests" element={<ReceivedRequests />} />
            <Route path="SentRequests" element={<SentRequests />} />
          </Route>
          <Route
            path="inspector"
            element={
              loggedIn && isInspector ? (
                <LandInspector />
              ) : (
                <Navigate replace to="/" />
              )
            }
          >
            <Route path="Dashboard" element={<InspectorDashboard />} />
            <Route path="verifyUser" element={<VerifyUser />} />
            <Route path="TransferOwnership" element={<TransferOwnership />} />
            <Route path="VerifyLand" element={<VerifyLand />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      {loading && (
        <div className="loading">
          {detectChange && (
            <div>
              <h4>Account Change detected</h4>
              <h5>Logging out. Relogin to continue</h5>
              <br />
            </div>
          )}
          <div className="balls">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
