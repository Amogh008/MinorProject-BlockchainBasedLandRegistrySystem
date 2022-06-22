import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { SocketContext } from "../../../context/SocketContext";
import { Land } from "../../../Contract/LandContract";
const Dashboard = () => {
  const { wadd } = useContext(SocketContext);
  const navigate = useNavigate();
  useEffect(() => {
    const checkInspector = async () => {
      const isRegisteredInspecotr = await Land.methods
        .isLandInspector(wadd)
        .call();
      if (!isRegisteredInspecotr) {
        alert("You are not registered Inspector");
        window.location.reload();
        navigate("/");
      }
    };
    checkInspector();
  }, []);
  return (
    <div className="co">
      This page which holds the transaction to the contract is under
      construction
    </div>
  );
};

export default Dashboard;
