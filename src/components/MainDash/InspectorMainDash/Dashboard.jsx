import React, { useContext, useEffect, useState } from "react";

import { SocketContext } from "../../../context/SocketContext";
import { Land } from "../../../Contract/LandContract";
const Dashboard = () => {
  const { wadd, setLoading } = useContext(SocketContext);

  useEffect(() => {
    const checkInspector = async () => {
      setLoading(true);
      const ins = await Land.methods.InspectorMapping(wadd).call();
      setName(ins["name"]);
      setAge(ins["age"]);
      setCity(ins["designation"]);
      setDesignation(ins["city"]);
      setLoading(false);
    };
    checkInspector();
  }, []);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [designation, setDesignation] = useState("");

  return (
    <div className="co">
      <header>
        <form>
          <label>Name:</label>
          <br />
          <input type="text" value={name} disabled={true} />
          <br />
          <label>Age:</label>
          <br />
          <input type="text" value={age} disabled={true} />
          <br />
          <label>City:</label>
          <br />
          <input type="text" value={city} disabled={true} />
          <br />
          <label>Age:</label>
          <br />
          <input type="text" value={age} disabled={true} />
          <br />
          <label>Designation:</label>
          <br />
          <input type="text" value={designation} disabled={true} />
          <br />
        </form>
      </header>
    </div>
  );
};

export default Dashboard;
